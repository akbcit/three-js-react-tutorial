
import * as THREE from 'three';

export const createLight = (type, options = {}) => {
  const {
    color = 0xffffff,
    intensity = 1,
    distance = 0,
    decay = 1,
    position = [0, 0, 0],
    target = null,
    angle = Math.PI / 3,
    penumbra = 0,
    width = 10,
    height = 10,
    groundColor = 0xffffff,
  } = options;

  let light;

  switch (type) {
    case 'PointLight':
      light = new THREE.PointLight(color, intensity, distance, decay);
      break;
    case 'AmbientLight':
      light = new THREE.AmbientLight(color, intensity);
      break;
    case 'DirectionalLight':
      light = new THREE.DirectionalLight(color, intensity);
      break;
    case 'SpotLight':
      light = new THREE.SpotLight(color, intensity, distance, angle, penumbra, decay);
      break;
    case 'HemisphereLight':
      light = new THREE.HemisphereLight(color, groundColor, intensity);
      break;
    case 'RectAreaLight':
      light = new THREE.RectAreaLight(color, intensity, width, height);
      break;
    default:
      console.warn(`Unknown light type: ${type}`);
      return null;
  }

  light.position.set(...position);

  if (type === 'DirectionalLight' || type === 'SpotLight') {
    if (target) {
      light.target.position.set(...target);
    }
  }

  return light;
};
