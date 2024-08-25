import * as THREE from 'three';

/**
 * Creates an array of random points within a sphere.
 * @param {number} n - The number of random points to generate.
 * @param {Object} options - Options to define the radius of the sphere.
 * @param {number} [options.radius=1] - The radius of the sphere.
 * @returns {THREE.Vector3[]} - An array of THREE.Vector3 objects representing the random points within the sphere.
 */
export const createRandomSphericalPoints = (n, options = {}) => {
  const { radius = 1 } = options;
  const points = [];

  for (let i = 0; i < n; i++) {
    // Generate random spherical coordinates
    const r = Math.random() * radius; // Radial distance [0, radius]
    const theta = Math.acos(2 * Math.random() - 1); // Polar angle [0, π]
    const phi = Math.random() * Math.PI * 2; // Azimuthal angle [0, 2π]

    // Convert to Cartesian coordinates
    const x = r * Math.sin(theta) * Math.cos(phi);
    const y = r * Math.sin(theta) * Math.sin(phi);
    const z = r * Math.cos(theta);

    points.push(new THREE.Vector3(x, y, z));
  }

  return points;
};
