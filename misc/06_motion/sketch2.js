var angle = 0.0;
var speed = 0.01;

var d = 20;

var n0 = 5;
var n1 = 10;
var n2 = 3;

var r0 = 100;
var r1 = 50;
var r2 = 30;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {

  r0 = floor(map(mouseX, 0, width, 10, 300));
  r1 = floor(map(mouseY, 0, height, 10, 300));

  background(255);

  translate(width/2, height/2);
  rotate(angle);

  for (var i=0; i<n0; i++) {
    push();
    rotate(i*TWO_PI/n0);
    translate(0, r0);
    ellipse(0, 0, d, d);


    for (var j=0; j<n1; j++) {
      push();
      rotate(j*TWO_PI/n1);
      translate(r1, 0);
      ellipse(0, 0, d, d);

      translate(0, 50);
      rotate(angle);

      for (var k=0; k<n2; k++) {
        push();
        rotate(k*TWO_PI/n2);
        translate(r2, 0);
        ellipse(0, 0, d, d);
        pop();
      }
      pop();
    }
    pop();
  }

  angle += speed;

}

function keyPressed() {
  if (key === ' ') {
    n0 = floor(random(3, 10));
    n1 = floor(random(3, 10));
    n2 = floor(random(3, 10));
  }
}