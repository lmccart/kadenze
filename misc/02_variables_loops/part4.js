function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(255);

  var count = 0;
  for (var x = 50; x <= width-50; x += 50) {
    for (var y = 50; y <= height-50; y+= 50) {
      var s = count * TWO_PI * 0.02;
      arc(x, y, 14, 14, s, s + PI);
      count++;
    }
  }
}

