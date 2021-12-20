import type { NextPage } from "next";
import DrawingControls from "../components/DrawingControls";
import DrawingPad from "../components/DrawingPad";

const Home: NextPage = () => {
  return (
    <div>
      <DrawingControls />
    </div>
  );
};

export default Home;
