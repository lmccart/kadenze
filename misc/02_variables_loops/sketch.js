var brickWidth = 40;
var brickHeight = 15;
var cols = 30;
var rows = 50;
var columnOffset = 60;
var rowOffset = 30;
var rotationIncrement = 0.15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  smooth();
  fill(255);
  noLoop();
}

function draw() {
  translate(30, 30);
  for (var i=0; i<cols; i++) {
    push();
    translate(i * columnOffset, 0);
    var r = random(-QUARTER_PI, QUARTER_PI);
    var dir = 1;
    for (var j=0; j<rows; j++) {
      push();
      translate(0, rowOffset * j);
      rotate(r);
      rect(-brickWidth/2, -brickHeight/2, brickWidth, brickHeight);
      pop();
      r += dir * rotationIncrement;
      if (r > QUARTER_PI || r < -QUARTER_PI) dir *= -1;
    }
    pop();
  }
}
