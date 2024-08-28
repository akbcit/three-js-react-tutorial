/* eslint-disable react/prop-types */
import { useEffect } from "react";
import useThreeScene from "../hooks/useThreeScene";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { createCuboidGeometry } from "../utils/geometryUtils";
import { createMaterial } from "../utils/materialUtils";
import { createLight } from "../utils/createLight";
import * as THREE from "three";

const Explorer = ({ width, height }) => {
  const { canvasRef, scene, camera, renderer } = useThreeScene(width, height);

  useEffect(() => {
    if (!scene || !camera || !renderer) return;

    scene.background = new THREE.Color("#000000");

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = true;

    // Position the camera
    camera.position.set(3, 3, 5);
    camera.lookAt(0, 0, 0);

    // Create the main beam
    const beamGeometry = createCuboidGeometry(2, 0.4, 0.4);
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
    beam.position.set(0, 0, 0);  // Position at the origin
    scene.add(beam);

    // Create and add lights to the scene
    const lightOne = createLight('DirectionalLight', {
      color: 0xffffff,
      intensity: 1,
      position: [5, 10, 7.5],
      target: [0, 0, 0],
    });
    scene.add(lightOne);

    const lightTwo = createLight('DirectionalLight', {
      color: 0xffffff,
      intensity: 1,
      position: [-5, 10, 7.5],
      target: [1, 0, 0],
    });
    scene.add(lightTwo);

    // Ensure rendering loop is active
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();  // Update the controls
      renderer.render(scene, camera);  // Render the scene
    };
    animate();

    // Cleanup when the component unmounts
    return () => {
      controls.dispose();

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
