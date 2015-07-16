
var angle = 0.0;
var scalar = 50;
var speed = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  strokeWeight(20);
}

function draw() {

  var l0 = map(mouseX, 0, width, 10, 300);

  background(255);

  translate(width/2, height/2);
  rotate(angle);
  line(0, 0, 0, l0);


  angle += speed;

}