function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(255);

  for (var x = 50; x <= width-50; x += 50) {
    for (var y = 50; y <= height-50; y+= 50) {
      line(x, y, width/2, height/2);
    }
  }
}


