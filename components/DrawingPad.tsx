import React, { useRef, useEffect, useState } from "react";
import { fabric } from "fabric";
import Styles from "../styles/canvas.module.css";

export let canvas: any;

const getCanvas = () => {
  return new fabric.Canvas("react-canvas", getDimensions());
};

const getDimensions = () => ({
  height: window.innerHeight,
  width: window.innerWidth - window.innerWidth / 20,
});

const DrawingPad = () => {
  const [canvasController, setCanvasController] = useState();
  const canvasEl = useRef();

  useEffect(() => {
    if (!canvasEl.current) return;
    canvas = getCanvas();
  }, []);

  useEffect(() => {
    const onResize = () => {
      // console.log("Resize happened");
      canvas.setDimensions(getDimensions());
    };

    const onDelete = (event: any) => {
      if (event.key !== "Delete") return;
      const objects = canvas.getActiveObjects();
      console.log({ objects });
      objects.forEach((object: any) => canvas.remove(object));
    };

    // On resize
    window.addEventListener("resize", onResize);
    // On keyup
    document.addEventListener("keyup", onDelete);

    // On unmount, remove resize event
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keyup", onDelete);
    };
  }, []);

  return (
    <div className={Styles.main_canvas_wrapper}>
      <canvas ref={canvasEl} id="react-canvas"></canvas>
    </div>
  );
};

export default DrawingPad;
