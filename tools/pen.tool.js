import { fabric } from "fabric";

export const setCanvasBrush = (canvas, brushName) => {
    canvas.isDrawingMode = !canvas.isDrawingMode;
    switch (brushName) {
        default: return;
    }
};

const penBrush = () => {};

const verticalLineBrush = (canvas) => {
    let vLinePatternBrush = new fabric.PatternBrush(canvas);

    vLinePatternBrush.getPatternSrc = function() {
        let patternCanvas = fabric.document.createElement("canvas");
        patternCanvas.width = patternCanvas.height = 10;
        let ctx = patternCanvas.getContext("2d");

        ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(0, 5);
        ctx.lineTo(10, 5);
        ctx.closePath();
        ctx.stroke();

        return patternCanvas;
    };

    return vLinePatternBrush;
};

const squareBrush = (canvas) => {
    let squarePatternBrush = new fabric.PatternBrush(canvas);
    squarePatternBrush.getPatternSrc = function() {
        let squareWidth = 10,
            squareDistance = 2;

        let patternCanvas = fabric.document.createElement("canvas");
        patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
        let ctx = patternCanvas.getContext("2d");

        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, squareWidth, squareWidth);

        return patternCanvas;
    };

    return squarePatternBrush;
};

const diamondBrush = (canvas) => {
    let diamondPatternBrush = new fabric.PatternBrush(canvas);
    diamondPatternBrush.getPatternSrc = function() {
        let squareWidth = 10,
            squareDistance = 5;
        let patternCanvas = fabric.document.createElement("canvas");
        let rect = new fabric.Rect({
            width: squareWidth,
            height: squareWidth,
            angle: 45,
            fill: this.color,
        });

        let canvasWidth = rect.getBoundingRect().width;

        patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
        rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 });

        let ctx = patternCanvas.getContext("2d");
        rect.render(ctx);

        return patternCanvas;
    };
    return diamondPatternBrush;
};

const horizontalLineBrush = () => {
    var hLinePatternBrush = new fabric.PatternBrush(canvas);
    hLinePatternBrush.getPatternSrc = function() {
        var patternCanvas = fabric.document.createElement("canvas");
        patternCanvas.width = patternCanvas.height = 10;
        var ctx = patternCanvas.getContext("2d");

        ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(5, 0);
        ctx.lineTo(5, 10);
        ctx.closePath();
        ctx.stroke();

        return patternCanvas;
    };
    return hLinePatternBrush;
};
const drawStraightLines = (canvas) => {
    let line, isDown;
    canvas.on("mouse:down", function(o) {
        isDown = true;
        var pointer = canvas.getPointer(o.e);
        var points = [pointer.x, pointer.y, pointer.x, pointer.y];
        if (document.getElementById("linetype").value == "dashed") {
            line = new fabric.Line(points, {
                strokeWidth: 5,
                strokeDashArray: [15, 5],
                fill: "gray",
                stroke: "gray",
                originX: "center",
                originY: "center",
            });
        } else {
            line = new fabric.Line(points, {
                strokeWidth: 5,
                fill: "black",
                stroke: "black",
                originX: "center",
                originY: "center",
            });
        }

        canvas.add(line);
    });

    canvas.on("mouse:move", function(o) {
        if (!isDown) return;
        var pointer = canvas.getPointer(o.e);
        line.set({ x2: pointer.x, y2: pointer.y });
        canvas.renderAll();
    });

    canvas.on("mouse:up", function(o) {
        isDown = false;
    });
};

export default setCanvasBrush;