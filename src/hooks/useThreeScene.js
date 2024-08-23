import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

const useThreeScene = (width, height) => {
  const canvasRef = useRef(null);
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);
  const [renderer, setRenderer] = useState(null);

  useEffect(() => {
    if (!canvasRef.current) {
      console.error("Canvas reference is not available.");
      return;
    }

    const initScene = new THREE.Scene();
    const initCamera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    initCamera.position.z = 3;

    const initRenderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
    initRenderer.setSize(width, height);
    initRenderer.setPixelRatio(window.devicePixelRatio);

    setScene(initScene);
    setCamera(initCamera);
    setRenderer(initRenderer);

    initRenderer.render(initScene, initCamera);

    const handleResize = () => {
      if (!initCamera || !initRenderer) {
        console.error("Camera or renderer not initialized during resize.");
        return;
      }
      initCamera.aspect = width / height;
      initCamera.updateProjectionMatrix();
      initRenderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (initRenderer) {
        initRenderer.dispose();
      }
    };
  }, [width, height]);

  return { canvasRef, scene, camera, renderer };
};

export default useThreeScene;
