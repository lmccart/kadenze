var angle = 0.0;
var scalar = 2;
var speed = 0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
}

function draw() {
  var x = mouseX + cos(angle) * scalar;
  var y = mouseY + sin(angle) * scalar;
  if (speed > 0) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse( x, y, 10, 10);

  angle += speed;
  scalar += speed;
  if (scalar > 101 || scalar < 1) {
    speed *= -1;
  }
}