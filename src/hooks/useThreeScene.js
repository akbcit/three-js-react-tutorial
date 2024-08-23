import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const useThreeScene = (width, height) => {

  // Initialize the camera and scene here
  const canvasRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene()); 

  useEffect(() => {
    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer and attach it to the canvas
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(width, height);

    // Render the scene
    renderer.render(sceneRef.current, camera);

    // Cleanup function to dispose of resources
    return () => {
      renderer.dispose();
    };
  }, [width, height]);

  return { canvasRef, scene: sceneRef.current };
};

export default useThreeScene;
