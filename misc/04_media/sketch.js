var img;
var smallPoint, largePoint;

function preload() {
  img = loadImage("../assets/moonwalk.jpg");
}

function setup() {
  createCanvas(720, 400);
  smallPoint = 4;
  largePoint = 40;
  noStroke();
  image(img, 0, 0);
}

function draw() {
  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
}
