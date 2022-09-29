let x, y;
let d = 35;
let speed = 5;
let a = speed;
let b = 0;

let x_2, y_2;
let s = 70;
var e = 2;
var f = 2;

let x_3, y_3;
var g = 2;
var h = 2;

let mus;
let kat;

let m = "Fanget"

function preload () {
mus = loadImage ('mus.png');
kat = loadImage ('kat.png');
}

function setup() {
  createCanvas(400, 400);
  x = random (width - d);
  y = random (height - d);

  x_2 = random (width - s);
  y_2 = random (height - s);
 
  x_3 = random (width - s);
  y_3 = random (height - s);
}

function draw() {
  background(0, 169, 62);
  if (y > height - d || y < 0){
    a *= -1;
  }

  if (x > width - d || x < 0) {
    b *= -1;
  }

  if (y_2 > height -s || y_2 < 0){
    e *= -1;
  }

  if (x_2 > width - s || x_2 < 0) {
    f *= -1;
  }

  if (y_3 > height -s || y_3 < 0){
    g *= -1;
  }

  if (x_3 > width - s || x_3 < 0) {
    h *= -1;
  }

  y += a
  x += b;
  image (mus, x, y, d, d);
  
  y_2 += e;
  x_2 += f;
  image (kat, x_2, y_2, s, s);

  y_3 += g;
  x_3 += h;
  image (kat, x_3, y_3, s, s);

  if(x + d > x_2 && x < x_2 + s && y + d > y_2 && y < y_2 + s) {
    console.log (m);
  }
  else if (x + d > x_3 && x < x_3 + s && y + d > y_3 && y < y_3 + s) {
    console.log (m);
  }
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
