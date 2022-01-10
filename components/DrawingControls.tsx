import React from "react";
import Styles from "../styles/controls.module.css";
import Image from "next/image";
import penIcon from "../public/assets/penIcon.svg";
import squareIcon from "../public/assets/squareIcon.svg";
import circleIcon from "../public/assets/circleIcon.svg";
import triangleIcon from "../public/assets/triangleIcon.svg";
import polygonIcon from "../public/assets/polygonIcon.svg";
import downloadIcon from "../public/assets/downloadIcon.svg";
import deleteIcon from "../public/assets/deleteIcon.svg";

import {
  drawRectangleShape,
  drawCircleShape,
  drawTriangleShape,
} from "../tools/shapes.tool";
import DrawingPad, { canvas } from "./DrawingPad";
import { setCanvasBrush } from "../tools/pen.tool";
import { clearCanvas } from "../tools/history.tool";

const DrawingControls = () => {
  return (
    <div className={Styles.main_side_wrap}>
      <div className={Styles.main_sidebar_wrapper}>
        <div
          className={Styles.main_button_wrapper}
          onClick={() => setCanvasBrush(canvas)}
        >
          <Image src={penIcon} layout="responsive" />
        </div>
        <div
          className={Styles.main_button_wrapper}
          onClick={() => drawRectangleShape(canvas)}
        >
          <Image src={squareIcon} />
        </div>
        <div
          className={Styles.main_button_wrapper}
          onClick={() => drawCircleShape(canvas)}
        >
          <Image src={circleIcon} layout="responsive" />
        </div>
        <div
          className={Styles.main_button_wrapper}
          onClick={() => drawTriangleShape(canvas)}
        >
          <Image src={triangleIcon} layout="responsive" />
        </div>
        <div className={Styles.main_button_wrapper}>
          <Image src={polygonIcon} layout="responsive" />
        </div>
        <div className={Styles.main_button_wrapper}>
          <Image src={downloadIcon} layout="responsive" />
        </div>
        <div
          className={Styles.main_button_wrapper}
          onClick={() => clearCanvas(canvas)}
        >
          <Image src={deleteIcon} layout="responsive" />
        </div>
      </div>
      <DrawingPad />
    </div>
  );
};

export default DrawingControls;
