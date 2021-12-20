import { fabric } from "fabric";

const setCanvasBrush = (canvas: any, brushName: any) => {
  const brush: any = {
    hline() {},
    vline() {},
    square() {},
    diamond() {},
  };
  return brush;
};

export default setCanvasBrush;
