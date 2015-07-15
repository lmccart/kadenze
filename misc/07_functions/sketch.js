var dotSize = 9;
var angleOffsetA;
var angleOffsetB;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  noStroke();
  fill(0);
  //frameRate(1);  // Redraw the tree once a second
  noLoop();
  
  angleOffsetA = radians(1.5); // Convert 1.5 degrees to radians
  angleOffsetB = radians(50);  // Convert 50 degrees to radians
}

function draw() {
  background(255);                     // White background
  seed1(dotSize, radians(270), width/2, height);  // Start the tree
}

function mousePressed() {
  background(255, 45);
  seed1(dotSize, radians(270), mouseX, height);  // Start the tree
}

function seed1(dotSize, angle, x, y) {
  
  if (dotSize > 1.0) {
    
    // Create a random numbers between 0 and 1
    var r = random(0, 1.0);  
    
    // 98% chance this will happen
    if (r > 0.02) {  
      ellipse(x, y, dotSize, dotSize);
      var newx = x + cos(angle) * dotSize;
      var newy = y + sin(angle) * dotSize;
      seed1(dotSize * 0.99, angle - angleOffsetA, newx, newy);   
    }
    // 02% chance this will happen
    else {  
      ellipse(x, y, dotSize, dotSize);
      var newx = x + cos(angle);
      var newy = y + sin(angle);
      seed2(dotSize * 0.99, angle + angleOffsetA, newx, newy);
      seed1(dotSize * 0.60, angle + angleOffsetB, newx, newy);
      seed2(dotSize * 0.50, angle - angleOffsetB, newx, newy);
    } 
  }
}


function seed2(dotSize, angle, x, y) {
  
  if (dotSize > 1.0) {
    
    // Create a random numbers between 0 and 1
    var r = random(0, 1.0);
    
    // 95% chance this will happen
    if (r > 0.05) {
      ellipse(x, y, dotSize, dotSize);
      var newx = x + cos(angle) * dotSize;
      var newy = y + sin(angle) * dotSize;
      seed2(dotSize * 0.99, angle + angleOffsetA, newx, newy);
    } 
    // 05% chance this will happen
    else {
      ellipse(x, y, dotSize, dotSize);
      var newx = x + cos(angle);
      var newy = y + sin(angle);
      seed1(dotSize * 0.99, angle + angleOffsetA, newx, newy);  
      seed2(dotSize * 0.60, angle + angleOffsetB, newx, newy);
      seed1(dotSize * 0.50, angle - angleOffsetB, newx, newy);
    }
  }
}

