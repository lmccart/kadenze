var t0;
var t1;
var max_dist;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  max_dist = dist(0, 0, windowWidth, windowHeight);
  t0 = new Thing(random(width), random(height));
  t1 = new Thing(random(width), random(height));
}


function draw() {
  background(0, 50);
  t0.move();
  t1.blink();
  t1.move();
  t0.display();
  t1.display();
}

function Thing(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    for(var i = 0; i <= windowWidth; i += 50) {
      for(var j = 0; j <= windowHeight; j += 50) {
        var size = max_dist/dist(this.x, this.y, i, j);
        ellipse(i, j, size, size);
      }
    }
  };

  this.move = function() {
    this.y += 1;
    if (this.y > windowHeight + 200) {
      this.y = -200;
      this.x = random(width);
    }
  }

  this.blink = function() {
    this.max_size = cos(frameCount*0.01)*1;
  }
}
