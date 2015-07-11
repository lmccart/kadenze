
var m = 2;
var n1 = 18;
var n2 = 1;
var n3 = 1;

var t0;
var t1;
var t2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
  noFill();
  stroke(255, 120);
  t0 = new Thing(random(width), random(height), random(10, 200), floor(random(3, 32)));
  t1 = new Thing(random(width), random(height), random(10, 200), floor(random(3, 32)));
  t2 = new Thing(random(width), random(height), random(10, 200), floor(random(3, 32)));
}

function draw() {
  background(0);
  t0.update();
  t1.update();
  t2.update();
  t0.display();
  t1.display();
  t2.display();
}

function mousePressed() {
  background(0, 10);
  
}

function Thing(x, y, scaler, n) {
  this.x = x;
  this.y = y;
  this.r = 0;
  this.scaler = scaler;
  this.n = n;

  this.display = function() {
    push();
    translate(this.x, this.y);
    rotate(this.r)
    var nscaler = this.scaler;
    for (var s = this.n; s > 0; s--) {  
      beginShape();

      var mm = m + s;
      var nn1 = n1 + s;
      var nn2 = n2 + s;
      var nn3 = n3 + s;
      nscaler = nscaler * 0.98;
      var sscaler = nscaler;

      var points = superformula(mm, nn1, nn2, nn3);
      curveVertex(points[points.length-1].x * sscaler, points[points.length-1].y * sscaler);
      for (var i = 0;i < points.length; i++) {
        curveVertex(points[i].x * sscaler, points[i].y * sscaler);
      }
      curveVertex(points[0].x * sscaler, points[0].y * sscaler);
      endShape();
    }
    pop();
  }

  this.update = function() {
    this.r += 0.1;
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
