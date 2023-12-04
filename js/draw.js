let canvas = document.getElementById("myCanvas");

let ctx = canvas.getContext("2d");

let flag = false;
mouseCoords = { x: 0, y: 0 };

ctx.strokeStyle = "red";
ctx.lineWidth = 4;

canvas.addEventListener("mousedown", function (e) {
  console.log(e);
  mouseCoords.x = e.pageX - this.offsetLeft;
  mouseCoords.y = e.pageY - this.offsetTop;
  flag = true;
  ctx.beginPath();
  ctx.moveTo(mouseCoords.x, mouseCoords.y);
});

canvas.addEventListener("mousemove", function (e) {
  if (flag) {
    mouseCoords.x = e.pageX - this.offsetLeft;
    mouseCoords.y = e.pageY - this.offsetTop;
    ctx.lineTo(mouseCoords.x, mouseCoords.y);
    ctx.stroke();
  }
});

canvas.addEventListener("mouseup", function (e) {
  mouseCoords.x = e.pageX - this.offsetLeft;
  mouseCoords.y = e.pageY - this.offsetTop;
  flag = false;
  ctx.lineTo(mouseCoords.x, mouseCoords.y);
  ctx.stroke();
  ctx.closePath();
});
