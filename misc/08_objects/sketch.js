
// var m = 2;
// var n1 = 18;
// var n2 = 1;
// var n3 = 1;

var scaler = 100;

var c0;
var c1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(255, 120);

  c0 = new Creature(150, 100);
  c1 = new Creature(500, 500);
}

function draw() {
  background(0);
  //drawShape(width/2, height/2);
  c0.detect();
  c0.display();
  c1.detect();
  c1.display();
}

function Creature(x, y) {
  this.x = x;
  this.y = y;
  this.m = random(1, 10);
  this.n1 = random(1, 50);
  this.n2 = random(1, 50);
  this.n3 = random(1, 50);
  this.hr = random(0.1, 0.2);
  this.sw = 1;

  this.display = function() {
    //ellipse(this.x, this.y, 30, 30);
    strokeWeight(this.sw);
    stroke(255, 127+127*sin(frameCount*this.hr));
    drawShape(this.x, this.y, this.m, this.n1, this.n2, this.n3);
  };

  this.detect = function() {
    if (dist(this.x, this.y, mouseX, mouseY) < scaler) {
      this.sw = 2;
    } else {
      this.sw = 1;
    }
  };
}

function drawShape(x, y, m, n1, n2, n3) { 
  push();
  translate(x, y);

  var newscaler = scaler;
  for (var s = 32; s > 0; s--) {  
    beginShape();
  
    var mm = m + s;
    var nn1 = n1 + s;
    var nn2 = n2 + s;
    var nn3 = n3 + s;
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
