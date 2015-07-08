var sw = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(sw);
}

function draw() {
  background(204);

  for (var i=0; i<width; i+=150) {
    for (var j=0; j<height; j+=150) {
      
      push();
      translate(i, j);  
      strokeWeight(sw);

      if (keyIsPressed) {
        stroke(255);
      } else {
        stroke(0);
      }
      line(60, 0, mouseX, mouseY+ random(-2, 2)); // White line

      if (keyIsPressed) {
        stroke(0);
      } else {
        stroke(255);
      }
      var mx = map(mouseX, 0, width, 0, width/2);
      line(60, 0, mx + random(-2, 2), mouseY); // Black line
      pop();
    }
  }
}

function mousePressed() {
  sw+=5;
}
