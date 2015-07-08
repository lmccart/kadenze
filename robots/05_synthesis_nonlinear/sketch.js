var bot1;
var bot2;
var bot3;
var landscape;

var easing = 0.05;
var x = 0;

var stage = 0;

// Preload the images
function preload() {
  bot1 = loadImage("../assets/robot1.svg");
  bot2 = loadImage("../assets/robot2.svg");
  bot3 = loadImage("../assets/robot3.svg");
  landscape = loadImage("../assets/alpine.png");
}

function setup() {
  createCanvas(720, 480);
  noStroke();
  textAlign(CENTER);
  textSize(20);
  x = width/2;
}

function draw() {
  background(204);
  fill(40);
  rect(width/2, 0, width/2, height);

  // Set the left/right offset and apply easing to make
  // the transition smooth
  x += (mouseX - x) * easing;

  image(bot1, x, 65);

  push();
  fill(255);
  if (stage == 0) {
    text("hi there!", x+170, 60);
  }
  pop();
}

function mousePressed() {

}