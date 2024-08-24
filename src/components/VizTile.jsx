/* eslint-disable react/prop-types */
import { useEffect } from "react";
import * as THREE from "three";
import useThreeScene from "../hooks/useThreeScene";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const VizTile = ({ height, width }) => {
  const { canvasRef, scene, camera, renderer } = useThreeScene(width, height);

  useEffect(() => {
    if (scene && camera && renderer) {
      // Set scene background to black
      scene.background = new THREE.Color(0xCCCCCC);

      // Add a yellowish light like a bulb
      const light = new THREE.PointLight(0xffd700, 1, 100);
      light.position.set(0, 0, 1);
      scene.add(light);

      // Create a green cube
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // Add OrbitControls for zoom and pan
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = true; // Enable zooming
      controls.enablePan = true;  // Enable panning

      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        geometry.dispose();
        material.dispose();
        controls.dispose();
        scene.remove(cube);
        scene.remove(light);
      };
    }
  }, [scene, camera, renderer]);

  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default VizTile;
