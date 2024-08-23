import { useEffect } from "react";
import * as THREE from "three";

const useAddLight = (scene, lightOptions = {}) => {
  useEffect(() => {
    
    if (!scene) return;

    // destructure lightOptions with default options
    const {
      color = 0xfffff,
      intensity = 1,
      distance = 100,
      position = [0, 0, 0],
    } = lightOptions;

    // create a point light
    const light = new THREE.PointLight(color, intensity, distance);
    // spread position array to set x, y, z
    light.position.set(...position);
    // Add light to the scene
    scene.add(light);

    // Cleanup function to remove light when component unmounts or updates
    return () => {
      scene.remove(light);
    };
  }, [lightOptions, scene]);
};

export default useAddLight;
