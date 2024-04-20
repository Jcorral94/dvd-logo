let canvas;
let ctx;
let img = new Image();
let x = 0;
let y = 0;
let dx = 1;
let dy = 1;

init();

function init() {
  canvas = document.getElementById("screen");
  img.src = "./assets/dvd_logo.png";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  cleanup();
  img.onload = () => {
    requestAnimationFrame(update);
  }
}

function update(ms) {
  x += dx;
  y += dy;
  if (x + 295 > canvas.width || x < -5) {
    dx *= -1;
  }
  if (y + 145 > canvas.height || y < -5) {
    dy *= -1;
  }
  cleanup();
  draw();
  requestAnimationFrame(update);
}

function cleanup() {
  ctx.fillStyle = "grey";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  ctx.drawImage(img, x, y, 300, 150);
}