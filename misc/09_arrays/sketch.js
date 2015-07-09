var spacing = 50; // number of cells
var bd = 50; // base line length
var sp = 0.004; // rotation speed step
var sl = .97; // slow down rate
 
var all = [];
 
function det(x1, y1, x2, y2, x3, y3) {
  return ((x2-x1)*(y3-y1) - (x3-x1)*(y2-y1));
}
 
function Cell(x, y) {
  this.x=x;
  this.y=y;
  this.s = 0; // spin velocity
  this.c = 0; // current angle
  
  this.sense = function() {
    if(pmouseX != 0 || pmouseY != 0)
      this.s += sp * det(this.x, this.y, pmouseX, pmouseY, mouseX, mouseY) / (dist(this.x, this.y, mouseX, mouseY) + 1);
    this.s *= sl;
    this.c += this.s;
    var d = bd * this.s + .001;
    line(this.x, this.y, this.x + d * cos(this.c), this.y + d * sin(this.c));
  };
}
 
function setup(){
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  for(var x = 0; x < width; x+= spacing)
    for(var y = 0; y < height; y+= spacing)
      all.push(new Cell(x, y));
}
 
function draw() {
  background(255);
  translate(spacing / 2, spacing / 2);
  for(var i=0; i<all.length; i++) {
    all[i].sense();
  }
}
 
function mousePressed() {
  for(var i=0; i<all.length; i++) {
    all[i].c = 0;
  }
}