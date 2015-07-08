
function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  stroke(0);
  noLoop();
}

function draw() {
  drawThing(random(width), random(height));

}

function drawThing(x, y) {
  var s = random(10, 100);

  stroke(0, 75);
  for (var i=0; i<7; i++) {
    strokeWeight(random(5, 10))
    line(x, y, x+random(-s, s), y+random(-s, s));
  }

  stroke(0, 150);
  for (var i=0; i<30; i++) {
    strokeWeight(random(1, 3))
    line(x, y, x+random(-s, s), y+random(-s, s));
  }

  stroke(255, 150);
  for (var i=0; i<10; i++) {
    strokeWeight(random(1, 3))
    line(x, y, x+random(-s, s), y+random(-s, s));
  }
}


function mousePressed() {
  drawThing(mouseX, mouseY);
}