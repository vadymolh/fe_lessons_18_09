let canvas = document.getElementById("myCanvas");

let ctx = canvas.getContext("2d");

if (ctx) {
  console.log("Canvas created successfuly");
}

// .strokeRect(x, y, width, height)
ctx.strokeRect(50, 50, 100, 100);
ctx.fillRect(150, 50, 100, 110);

// .clearRect(x, y, width, height)
ctx.clearRect(150, 50, 50, 50);

// clear all canva
ctx.clearRect(0, 0, 500, 300);

ctx.strokeStyle = "rgb(200, 100, 200)";
ctx.lineWidth = 6;

//line join
//ctx.lineJoin = "round";
//ctx.lineJoin = "bevel";
ctx.lineJoin = "miter";

// Пунктирні лінії
//ctx.setLineDash([10, 15]);

ctx.strokeRect(50, 50, 100, 100);

// clear all canva
ctx.clearRect(0, 0, 500, 300);

// Filter
// ctx.globalAlpha = 0.3;
// ctx.fillStyle = "yellow";

// ctx.fillRect(50, 50, 200, 200);

// let img = new Image();
// img.src = "photo.jpg";
// img.onload = () => {
//   let pattern = ctx.createPattern(img, "repeat");
//   ctx.fillStyle = pattern;
//   ctx.fillRect(10, 10, 400, 250);

//   ctx.globalAlpha = 0.3;
//   ctx.fillStyle = "green";
//   ctx.fillRect(10, 10, 400, 250);
// };

// clear all canva
ctx.clearRect(0, 0, 500, 300);

ctx.beginPath();
ctx.moveTo(60, 60);
ctx.lineTo(150, 100);
ctx.lineTo(250, 80);
ctx.lineTo(60, 60);
ctx.closePath();

ctx.stroke();

ctx.font = "48px Verdana";
ctx.fillText("Canvas is awesome!", 200, 200);

ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.strokeText("Canvas is awesome!", 200, 250);
