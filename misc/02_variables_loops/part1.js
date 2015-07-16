function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(255);

  for (var x = 50; x <= width-50; x += 50) {
    for (var y = 50; y <= height-50; y+= 50) {
      line(x-5, y-5, x+5, y+5);
      line(x+5, y-5, x-5, y+5);
    }
  }
}

