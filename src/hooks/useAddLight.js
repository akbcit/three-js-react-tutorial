import { useEffect } from "react";
import * as THREE from "three";

const useAddLight = (scene, lightOptions = {}) => {
  useEffect(() => {
    if (!scene) return;

    const {
      color = 0xffffff,
      intensity = 1,
      distance = 100,
      position = [0, 0, 5],
    } = lightOptions;

    const light = new THREE.PointLight(color, intensity, distance);
    light.position.set(...position);
    scene.add(light);

    // Add ambient light to ensure the scene is not too dark
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    return () => {
      scene.remove(light);
      scene.remove(ambientLight);
    };
  }, [lightOptions, scene]);
};

export default useAddLight;
