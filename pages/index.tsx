import type { NextPage } from "next";
import DrawingControls from "../components/DrawingControls";
import DrawingPad from "../components/DrawingPad";

const Home: NextPage = () => {
  return (
    <div>
      <DrawingControls />
      <DrawingPad />
    </div>
  );
};

export default Home;
