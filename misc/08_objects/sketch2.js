
var n1 = 18;
var n2 = 10;
var n3 = 100;

var t0;
var t1;
var t2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
  noFill();
  stroke(255, 120);

  t0 = new Thing(random(width), random(height));
  t1 = new Thing(random(width), random(height));
  t2 = new Thing(random(width), random(height));
}

function draw() {
  background(0, 100);
  t0.detect();
  t0.display();
  t1.detect();
  t1.display();
  t2.detect();
  t2.display();
}

function Thing(x, y) { 
  this.x = x;
  this.y = y;
  this.m = floor(random(2, 15));
  this.n1 = floor(random(1, 100));
  this.n2 = floor(random(1, 100));
  this.n3 = floor(random(1, 100));
  this.xspeed = random(-3, 3);
  this.yspeed = random(-3, 3);
  this.scaler = random(50, 200);
  this.thickness = 1;

  this.display = function() {
    push();
    stroke(255, 127+127*sin(10*frameCount/this.scaler));
    strokeWeight(this.thickness);
    translate(this.x, this.y);
    
    var newscaler = this.scaler;
    for (var s = 16; s > 0; s--) {  
      beginShape();
    
      var mm = this.m + s;
      var nn1 = this.n1 + s;
      var nn2 = this.n2 + s;
      var nn3 = this.n3 + s;
      newscaler = newscaler * 0.98;
      var sscaler = newscaler;

      var points = superformula(mm, nn1, nn2, nn3);
      curveVertex(points[points.length-1].x * sscaler, points[points.length-1].y * sscaler);
      for (var i = 0;i < points.length; i++) {
        curveVertex(points[i].x * sscaler, points[i].y * sscaler);
      }
      curveVertex(points[0].x * sscaler, points[0].y * sscaler);
      endShape();
    }
    pop();
  };

  this.detect = function() {
    if (dist(this.x, this.y, mouseX, mouseY) < this.scaler) {
      this.thickness = 2.5;
    } else {
      this.thickness = 1;
    }
  }
}

function superformula(m, n1, n2, n3) {
  var numPoints = 360;
  var phi = TWO_PI / numPoints;
  var points = []
  for (var i = 0;i <= numPoints;i++) {
    points[i] = superformulaPoint(m,n1,n2,n3,phi * i);
  }
  return points;
}

function superformulaPoint(m, n1, n2, n3, phi) {
  var r;
  var t1,t2;
  var a=1,b=1;
  var x = 0;
  var y = 0;

  t1 = cos(m * phi / 4) / a;
  t1 = abs(t1);
  t1 = pow(t1,n2);

  t2 = sin(m * phi / 4) / b;
  t2 = abs(t2);
  t2 = pow(t2,n3);

  r = pow(t1+t2,1/n1);
  if (abs(r) == 0) {
    x = 0;
    y = 0;
  }  
  else {
    r = 1 / r;
    x = r * cos(phi);
    y = r * sin(phi);
  }

  return new p5.Vector(x, y);
}
