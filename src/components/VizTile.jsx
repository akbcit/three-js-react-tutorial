/* eslint-disable react/prop-types */
import { useEffect } from "react";
import * as THREE from "three";
import useThreeScene from "../hooks/useThreeScene";
import useAddLight from "../hooks/useAddLight";

const VizTile = ({ height, width }) => {
  const { canvasRef, scene, camera, renderer } = useThreeScene(width, height);

  useAddLight(scene, { color: 0xffffff, intensity: 1, position: [0, 0, 5] });

  useEffect(() => {
    if (!renderer || !scene || !camera || !canvasRef.current) {
      console.error("Initialization error: Renderer, scene, or camera not set up properly.");
      return;
    }

    // Set scene background
    scene.background = new THREE.Color(0xcccccc);

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
    };
  }, [scene, camera, renderer, canvasRef]);

  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default VizTile;
