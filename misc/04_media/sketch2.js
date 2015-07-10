
var img;
var smallPoint, largePoint;

function preload() {
  img = loadImage("../assets/moonwalk.jpg");
}

function setup() {
  createCanvas(720, 400);
  smallPoint = 10;
  largePoint = 40;
  noStroke();
  image(img, 0, 0);
  //background(255, 100);
}

function draw() {
  var diff = abs(pmouseX - mouseX);
  var pointillize = constrain(map(diff, 0, 50, smallPoint, largePoint), smallPoint, largePoint);
  var x = floor(mouseX + random(-30, 30));
  var y = floor(mouseY + random(-30, 30));
  var pix = img.get(x, y);
  fill(pix);
  ellipse(x, y, pointillize, pointillize);
}
