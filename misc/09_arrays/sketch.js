
var particles = [];
var n = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  // create particles
  for (var i = 0; i < n; i++) {
    particles[i] = new Particle(new p5.Vector(100, height-100));
  }
  strokeWeight(1)
}

function draw() {
  background(0, 7);
  // draw the particles
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
}



// ---------------
// Particle.pde
// Based on the Particle class from: http://www.shiffman.net/teaching/nature/particles/
// ---------------
function Particle(l) {
  this.counter = 0;
  this.randmin = -HALF_PI;
  this.randmax = 0;

    
  this.r = random(0, TWO_PI);
  this.x = cos(this.r);
  this.y = sin(this.r);
  this.acc = new p5.Vector(this.x / 250, this.y / 250);

  this.q = random(0, 1);
  this.r = random(this.randmin, this.randmax);
  this.x = cos(this.r) * this.q;
  this.y = sin(this.r) * this.q;
  this.vel = new p5.Vector(this.x, this.y);
  this.loc = l.copy();    
  this.hist = [];



  // update location
  this.update = function() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    // save location every 10 frames
    if (frameCount % 10 == 0 && this.counter < n) { // pend
        this.hist.push(this.loc.copy());
      if (this.counter < 10) {
        this.counter++;
      }
    }
  }

  // draw particle
  this.draw = function() {
    fill(255,50);
    noFill();
    // draw history path
    stroke(255, 100);
    beginShape();
    for (var i=this.hist.length-this.counter; i < this.hist.length; i++) {
      vertex(this.hist[i].x,this.hist[i].y);
    }
    if (this.counter > 0) vertex(this.loc.x, this.loc.y);
    endShape();
  }
  
  
}