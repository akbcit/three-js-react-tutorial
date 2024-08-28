/* eslint-disable react/prop-types */
import { useEffect } from "react";
import useThreeScene from "../hooks/useThreeScene";
import * as THREE from "three";
import { createPlaneGeometry } from "../utils/geometryUtils";
import { createMaterial } from "../utils/materialUtils";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeJSPlane = ({ height, width }) => {
  const { canvasRef, scene, camera, renderer } = useThreeScene(width, height);

  useEffect(() => {
    if (scene && camera && renderer) {
      // Add OrbitControls for zoom and pan
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = true;
      controls.enablePan = true;

      // add axes (-100 to 100 in all directions)
      const axesHelper = new THREE.AxesHelper(100);
      scene.add(axesHelper);

      // create plane geometry
      const planeGeometry = createPlaneGeometry(60, 20);
      // plane material
      const planeMaterial = createMaterial({
        type: "MeshPhysicalMaterial",
        options: {
          color: 0x777777,
          metalness: 1,
          roughness: 0.4,
          clearcoat: 0.1,
          clearcoatRoughness: 0.1,
        },
      });
      // create plane and add x,y,z positions
      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.rotation.x = -0.5 * Math.PI;
      plane.position.set(0, 0, 0);
      // add scene to plane
      console.log(plane);
      scene.add(plane);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      animate();
      // Cleanup function to dispose of resources when the component unmounts
      return () => {
        plane.geometry.dispose();
        plane.material.dispose();
        controls.dispose();
        scene.remove(plane);
      };
    }
  }, [scene, camera, renderer]);

  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default ThreeJSPlane;
