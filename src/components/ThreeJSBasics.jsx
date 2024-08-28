/* eslint-disable react/prop-types */
import { useEffect } from "react";
import * as THREE from "three";
import useThreeScene from "../hooks/useThreeScene";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { createLight } from "../utils/createLight";
import { createCuboidGeometry } from "../utils/geometryUtils";
import { createMaterial } from "../utils/materialUtils";
import { createRandomSphericalPoints } from "../utils/createRandomSphericalPoints";
import { createSphereGeometry } from "../utils/geometryUtils";

const ThreeJSBasics = ({ height, width }) => {
  const { canvasRef, scene, camera, renderer } = useThreeScene(width, height);

  useEffect(() => {
    if (scene && camera && renderer) {
      // Set scene background to black
      scene.background = new THREE.Color("#000000");

      // Array of light configurations with added movement factors
      const lightsConfig = [
        {
          type: "PointLight",
          options: {
            color: "#6EACDA", // Blue light
            intensity: 0.5,
            distance: 10,
            position: [0, 0, 2],
          },
          xFactor: 2,
          yFactor: 12,
        },
        {
          type: "PointLight",
          options: {
            color: "#FFFF00", // Yellow light
            intensity: 0.5,
            distance: 10,
            position: [2, 2, 2],
          },
          xFactor: 12,
          yFactor: 2,
        },
        {
          type: "PointLight",
          options: {
            color: "#FF0000", // Red light
            intensity: 0.7,
            distance: 12,
            position: [-2, 0, 2],
          },
          xFactor: 3,
          yFactor: 10,
        },
        {
          type: "PointLight",
          options: {
            color: "#00FF00", // Green light
            intensity: 0.6,
            distance: 15,
            position: [0, -2, 2],
          },
          xFactor: 8,
          yFactor: 4,
        },
        {
          type: "PointLight",
          options: {
            color: "#FF00FF", // Magenta light
            intensity: 0.8,
            distance: 8,
            position: [1, 1, 3],
          },
          xFactor: 6,
          yFactor: 6,
        },
      ];

      // Create lights, add them to the scene, and store references
      lightsConfig.forEach((lightConfig) => {
        lightConfig.light = createLight(lightConfig.type, lightConfig.options);
        scene.add(lightConfig.light);
      });

      // Create an ambient light for general illumination
      const ambientLight = createLight("AmbientLight", {
        color: "#c0c0c0",
        intensity: 1,
      });
      scene.add(ambientLight);

      // Create the geometry for the cuboid with rounded edges
      const geometry = createCuboidGeometry(0.5, 1, 0.01, {
        borderRadius: 0.05,
      });

      // Create the steel material using createMaterial utility function
      const material = createMaterial({
        type: "MeshPhysicalMaterial",
        options: {
          color: 0x777777, // Steel grey color
          metalness: 1,
          roughness: 0.4,
          clearcoat: 0.1,
          clearcoatRoughness: 0.1,
        },
      });

      // Create the mesh by combining geometry and material
      const steelCuboid = new THREE.Mesh(geometry, material);
      scene.add(steelCuboid);

      // Generate random spherical points using createRandomSphericalPoints utility
      const randomSphericalPoints = createRandomSphericalPoints(700, {
        radius: 2,
      });

      // For each spherical point, create a small steel sphere and add it to the scene
      randomSphericalPoints.forEach((point) => {
        const sphereGeometry = createSphereGeometry(Math.random() * 0.02, {
          widthSegments: 32,
          heightSegments: 32,
        });

        const sphereMaterial = new THREE.MeshPhysicalMaterial({
          color: "#c0c0c0",
          metalness: 1,
          roughness: 0.4,
          clearcoat: 0.1,
          clearcoatRoughness: 0.1,
        });

        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(point.x, point.y, point.z);
        scene.add(sphere);
      });

      // Add OrbitControls for zoom and pan
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = true;
      controls.enablePan = true;

      // Animation loop for moving the lights and rendering the scene
      const animate = () => {
        requestAnimationFrame(animate);

        const time = Date.now() * 0.001; // Get the time in seconds

        lightsConfig.forEach(({ light, xFactor, yFactor }) => {
          light.position.x = Math.sin(time / xFactor) * 1;
          light.position.y = Math.cos(time / yFactor) * 1;
        });

        renderer.render(scene, camera);
      };

      animate();

      // Cleanup function to dispose of resources when the component unmounts
      return () => {
        steelCuboid.geometry.dispose();
        steelCuboid.material.dispose();
        controls.dispose();
        lightsConfig.forEach(({ light }) => scene.remove(light));
        scene.remove(steelCuboid);
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

export default ThreeJSBasics;
