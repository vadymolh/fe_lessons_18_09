const sun = new Image(),
  earth = new Image(),
  moon = new Image();

const ctx = document.querySelector("#canvas").getContext("2d");

function init() {
  sun.src = "img/sun.webp";
  earth.src = "img/earth-png.png";
  moon.src = "img/moon_.jpg";

  draw();
}

function draw() {
  ctx.clearRect(0, 0, 300, 300);
  ctx.globalConpositeOperation = "destination-over";
  ctx.fillStyle = "rbga(0,0,0, .4)";
  ctx.strokeStyle = "rbga(0,150,250, .4)";
  ctx.save();
  ctx.translate(150, 150);

  const time = new Date();

  ctx.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds()
  );
  ctx.translate(130, 0);
  ctx.drawImage(earth, -10, -10, 30, 30);
  ctx.save();

  // Moon
  ctx.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds()
  );
  ctx.translate(0, 20);
  ctx.drawImage(moon, -3, -3, 10, 10);
  ctx.restore();

  //SUN
  ctx.restore();
  ctx.beginPath();
  ctx.arc(150, 150, 135, 2 * Math.PI, false);
  ctx.stroke();
  ctx.drawImage(sun, 50, 50, 200, 200);
  window.requestAnimationFrame(draw);
}

init();
