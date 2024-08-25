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
      // Set scene background to the expected color
      scene.background = new THREE.Color("#000000");

      // Create lights using the utility function
      const pointLight = createLight("PointLight", {
        color: "#6EACDA",
        intensity: 0.5,
        distance: 10,
        position: [0, 0, 2],
      });
      scene.add(pointLight);

      const ambientLight = createLight("AmbientLight", {
        color: "#c0c0c0",
        intensity: 1,
      });

      scene.add(ambientLight);

      // Create the geometry for the cuboid with rounded edges
      const geometry = createCuboidGeometry(0.5, 0.5, 0.5, {
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

      // Generate random spherical points using createRandomSphericalPoints utility
      const randomSphericalPoints = createRandomSphericalPoints(1000, { radius: 2 });

      // For each spherical point, create a small steel sphere and add it to the scene
      randomSphericalPoints.forEach((point) => {

        const sphereGeometry = createSphereGeometry(Math.random()*0.02, {
          widthSegments: 32,
          heightSegments: 32,
        });

        const sphereMaterial = new THREE.MeshPhysicalMaterial({
          color: "#c0c0c0" ,  
          metalness: 1,
          roughness: 0.4,
          clearcoat: 0.1,
          clearcoatRoughness: 0.1,
        });

        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(point.x, point.y, point.z);
        scene.add(sphere);
      });

      // Create the mesh by combining geometry and material
      const steelCuboid = new THREE.Mesh(geometry, material);
      scene.add(steelCuboid);

      // Add OrbitControls for zoom and pan
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = true;
      controls.enablePan = true;

      const animate = () => {
        requestAnimationFrame(animate);
      
        // Create a time-based variable for smooth movement
        const time = Date.now() * 0.001; // Get the time in seconds
      
        // Adjust the light's position with a sine function for smooth movement
        pointLight.position.x = Math.sin(time/2) * 1; // Range [-1, 1]
        pointLight.position.y = Math.cos(time/12) * 1; // Range [-1, 1]\


      
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        steelCuboid.geometry.dispose();
        steelCuboid.material.dispose();
        controls.dispose();
        scene.remove(steelCuboid);
        scene.remove(pointLight);
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
