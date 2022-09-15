let x;
let y;
let d = 50;
let speed = 5;
let a = speed;
let b;
let imgSize = 50;

function preload() {
  img = loadImage('mus.png')
}

function setup() {
  createCanvas(400, 400);
  x = random(d/2, width);
  y = random(d/2, height);
  b = 0;
}

function draw() {
  background(220);
  if(y > height - d/2 || y < d/2){
    a *= -1;
  }

  if(x > width - d/2 || x < d/2) {
    b *= -1;
  }

  y += a;
  x += b;
  circle(x, y, d);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === DOWN_ARROW) {
    b = 0;
    a = speed;
  }
 }