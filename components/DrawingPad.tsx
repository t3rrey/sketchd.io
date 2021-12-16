import React, { useRef, useEffect, useState } from "react";
import { fabric } from "fabric";
import Styles from "../styles/canvas.module.css";

export let canvas: any;

const getCanvas = () => {
  console.log("getCanvas called!");
  return new fabric.Canvas("react-canvas", getDimensions());
};

const getDimensions = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
});

const DrawingPad = () => {
  const [canvasController, setCanvasController] = useState();
  const canvasEl = useRef();

  useEffect(() => {
    if (!canvasEl.current) return;
    canvas = getCanvas();
  }, []);
  return (
    <div className={Styles.main_canvas_wrapper}>
      <canvas ref={canvasEl} id="react-canvas"></canvas>
    </div>
  );
};

export default DrawingPad;
