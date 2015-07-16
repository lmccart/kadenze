var s = 266;
var center;
var img;

function preload() {
  img = loadImage('horse.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background(0);
  stroke(255, 255, 0);
  center = width/2;
}


function draw() {
  background(0);
  var mx = constrain(mouseX, center-s/2, center+s/2);

  // show thumbnail
  image(img, mx, height-s/2);
  line(width/2, height-s, width/2, height);
}

  