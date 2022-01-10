import type { NextPage } from "next";
import DrawingControls from "../components/DrawingControls";
import DrawingPad from "../components/DrawingPad";
import PenControls from "../components/PenControls";

const Home: NextPage = () => {
  return (
    <>
      <DrawingControls />
      <PenControls />
    </>
  );
};

export default Home;
