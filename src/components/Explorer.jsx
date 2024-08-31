/* eslint-disable react/prop-types */
import { useEffect } from "react";
import useThreeScene from "../hooks/useThreeScene";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { createCuboidGeometry } from "../utils/geometryUtils";
import { createMaterial } from "../utils/materialUtils";
import { createLight } from "../utils/createLight";
import * as THREE from "three";
import { GUI } from 'dat.gui'; // Import dat.GUI

const Explorer = ({ width, height }) => {
  const { canvasRef, scene, camera, renderer } = useThreeScene(width, height);

  useEffect(() => {
    if (!scene || !camera || !renderer) return;

    scene.background = new THREE.Color("#000000");

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = true;

    // Position the camera
    camera.position.set(3, 3, 2);
    camera.lookAt(0, 0, 0);

    // Create the main beam
    const beamGeometry = createCuboidGeometry(0.4, 0.4, 2);
    const beamMaterial = createMaterial({
      type: "MeshPhysicalMaterial",
      options: {
        color: 0x777777,
        metalness: 1,
        roughness: 0.4,
        clearcoat: 0.1,
        clearcoatRoughness: 0.1,
        opacity: 0.5,
        transparent: true,
      },
    });

    const beam = new THREE.Mesh(beamGeometry, beamMaterial);
    beam.position.set(0, 0, 0);

    // Set the beam upright
    beam.rotation.set(Math.PI / 2, 0, -Math.PI / 3.2);  // 90 degrees on X-axis to stand upright

    // Position at the origin
    scene.add(beam);

    // Create and add lights to the scene
    const lightOne = createLight("DirectionalLight", {
      color: 0xffffff,
      intensity: 1,
      position: [2, 0, 2],
      target: [0, 0, 0],
    });
    scene.add(lightOne);

    const lightTwo = createLight("DirectionalLight", {
      color: 0xffffff,
      intensity: 1,
      position: [-2, 2, -2],
      target: [0, 0, 0],
    });
    scene.add(lightTwo);

    // Initialize dat.GUI
    const gui = new GUI();

    // Add controls for the beam rotation
    const beamFolder = gui.addFolder('Beam Rotation');
    beamFolder.add(beam.rotation, 'x', 0, Math.PI * 2).name('Rotate X');
    beamFolder.add(beam.rotation, 'y', 0, Math.PI * 2).name('Rotate Y');
    beamFolder.add(beam.rotation, 'z', 0, Math.PI * 2).name('Rotate Z');
    beamFolder.open();

    // Add controls for the light intensity
    const lightFolder = gui.addFolder('Light Intensity');
    lightFolder.add(lightOne, 'intensity', 0, 2).name('Light One');
    lightFolder.add(lightTwo, 'intensity', 0, 2).name('Light Two');
    lightFolder.open();

    // Ensure rendering loop is active
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update the controls
      renderer.render(scene, camera); // Render the scene
    };
    animate();

    // Cleanup when the component unmounts
    return () => {
      controls.dispose();
      gui.destroy(); // Clean up dat.GUI

      // Dispose of all objects added to the scene
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
        scene.remove(object);
      });

      // Dispose of the renderer
      renderer.dispose();
    };
  }, [scene, camera, renderer]);

  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Explorer;
