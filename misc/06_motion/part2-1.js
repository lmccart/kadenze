var angle = 0.0;
var speed = 0.005;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {

  var l0 = map(mouseX, 0, width, 10, 300);

  background(255);

  translate(width/2, height/2);
  rotate(angle);
  for (var i=0; i<5; i++) {
    push();
    rotate(i*TWO_PI/5);
    translate(0, l0);
    ellipse(0, 0, 20, 20);
    pop();
  }

  angle += speed;

}
