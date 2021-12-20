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

import { addRect } from "../services/shapes.service";
import DrawingPad, { canvas } from "./DrawingPad";

const DrawingControls = () => {
  return (
    <div className={Styles.main_header_wrapper}>
      <div className={Styles.main_side_wrap}>
        <div className={Styles.main_sidebar_wrapper}>
          <div className={Styles.main_button_wrapper}>
            <Image src={penIcon} layout="responsive" />
          </div>
          <div
            className={Styles.main_button_wrapper}
            onClick={() => addRect(canvas)}
          >
            <Image src={squareIcon} />
          </div>
          <div className={Styles.main_button_wrapper}>
            <Image src={circleIcon} layout="responsive" />
          </div>
          <div className={Styles.main_button_wrapper}>
            <Image src={triangleIcon} layout="responsive" />
          </div>
          <div className={Styles.main_button_wrapper}>
            <Image src={polygonIcon} layout="responsive" />
          </div>
          <div className={Styles.main_button_wrapper}>
            <Image src={downloadIcon} layout="responsive" />
          </div>
          <div className={Styles.main_button_wrapper}>
            <Image src={deleteIcon} layout="responsive" />
          </div>
        </div>
        <DrawingPad />
      </div>
      <div className={Styles.main_top_wrapper}></div>
    </div>
  );
};

export default DrawingControls;
