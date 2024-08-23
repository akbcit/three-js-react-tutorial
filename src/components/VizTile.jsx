/* eslint-disable react/prop-types */
import useThreeScene from "../hooks/useThreeScene";
import useAddLight from "../hooks/useAddLight";

const VizTile = ({ height, width }) => {
  // Set up the scene and get the canvas ref and scene object
  const { canvasRef, scene } = useThreeScene(width, height);

  //  Use the useAddLight hook to add a light to the scene
  useAddLight(scene, { color: 0xffffff, intensity: 1, position: [0, 0, 10] });

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default VizTile;
