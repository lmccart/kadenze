function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(255);

  for (var x = 50; x <= width-50; x += 100) {
    for (var y = 50; y <= height-50; y+= 100) {
      ellipse(x, y, 60, 60);
    }
  }
}

