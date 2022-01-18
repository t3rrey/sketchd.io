import React from "react";
import Styles from "../styles/controls.module.css";
const PenControls = () => {
  return (
    <div className={Styles.main_pen_controls_container}>
      <h1>Options:</h1>
      <div className={Styles.pen_width_container}>
        <h1>Width:</h1>
        <input type="range" />
      </div>
      <div className={Styles.pen_type_container}>
        <h1>Pen Type:</h1>
        <select>
          <option value="pen">pen</option>
          <option value="brush">brush</option>
          <option value="vertical">vertical</option>
          <option value="spray">spray</option>
        </select>
      </div>
      <div className={Styles.pen_color_container}>
        <h1>Color</h1>
        <input type="color" />
      </div>
    </div>
  );
};

export default PenControls;
