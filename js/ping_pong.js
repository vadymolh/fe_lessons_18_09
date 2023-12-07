const canvas = document.querySelector("#canvas"),
  ctx = canvas.getContext("2d");

ctx.canvas.width = window.innerWidth - 1;
ctx.canvas.height = window.innerHeight - 1;

addEventListener("resize", (event) => {
  ctx.canvas.width = window.innerWidth - 1;
  ctx.canvas.height = window.innerHeight - 1;
});

let fps, startTime, now, then, elapsed, fpsInterval;

console.log(window);

ctx.fillStyle = "green";

// .arc(x,y, radius, startAngle, endAngle, )
// ctx.beginPath();
// ctx.arc(200, 200, 90, 0, Math.PI);
// ctx.fill();

const circle = {
  x: 100,
  y: 100,
  size: 20,
  color: "green",
  dx: 5,
  dy: 6,
  drawCircle: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  },
  moveCircle: function () {
    this.x += this.dx;
    this.y += this.dy;
  },
};

const pad = {
  x: window.innerWidth - 11,
  y: 0,
  length: 80,
  width: 10,
  color: "brown",
  drawPad: function (controlY) {
    ctx.fillStyle = "f3a9a9";
    ctx.fillRect(this.x, this.y, this.width, this.length);
    ctx.fillStyle = pad.color;
    ctx.fillRect(this.x, controlY - this.length / 2, this.width, this.length);
    this.y = controlY - this.length / 2;
  },
};

addEventListener("mousemove", movePad);

function movePad(e) {
  let y = e.clientY;
  if (y < pad.length / 2 || y > canvas.height - pad.length / 2) {
    return;
  }
  pad.drawPad(y);
}

function update(newtime) {
  requestAnimationFrame(update);
  now = newtime;
  elapsed = now - then;
  pad.drawPad(pad.y + pad.length / 2);
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    circle.drawCircle();
    circle.moveCircle();
    pad.drawPad(pad.y + pad.length / 2);

    if (circle.x + circle.size > canvas.width) {
      if (circle.y < pad.y || circle.y > pad.y + pad.length) {
        alert("GAME OVER!!!");
      }
    }
    if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
      circle.dx *= -1;
    }

    if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
      circle.dy *= -1;
    }
  }
}

function startAnimation(fps) {
  fpsInterval = 1000 / fps;
  then = window.performance.now();
  startTime = then;
  console.log(startTime);
  update();
}

startAnimation(30);
