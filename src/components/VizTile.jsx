/* eslint-disable react/prop-types */
import { useEffect } from "react";
import * as THREE from "three";
import useThreeScene from "../hooks/useThreeScene";

const VizTile = ({ height, width }) => {
  const { canvasRef, scene, camera, renderer } = useThreeScene(width, height);

  useEffect(() => {
    if (scene && camera && renderer) {
      // Set scene background to black
      scene.background = new THREE.Color(0x000000);

      // Add a yellowish light like a bulb
      const light = new THREE.PointLight(0xffd700, 1, 100);
      light.position.set(0, 0, 5);
      scene.add(light);

      // Optionally add ambient light
      const ambientLight = new THREE.AmbientLight(0x202020); // Dim ambient light
      scene.add(ambientLight);

      // Create a green cube
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

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
        scene.remove(cube);
        scene.remove(light);
        scene.remove(ambientLight);
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
