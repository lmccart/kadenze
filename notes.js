///////////////////////////////////////////////////////
//// 01_hello

// 1. Explain beginShape(), endShape(), vertex().
// 2. Show graph paper diagram.
// 3. Code it up.

///////////////////////////////////////////////////////
//// 02_variables_loops

// 1. Map out grid, logic of laying bricks on whiteboard.

// 2. Create variables.
var brickWidth = 40;
var brickHeight = 15;
var columnOffset = 60;
var rowOffset = 30;
var cols;
var rows;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(width / columnOffset);
  rows = floor(height / rowOffset);
  background(0);
  smooth();
  fill(255);
  noLoop();
}

// 3. Draw a brick in every spot.
function draw() {
  translate(30, 30);
  for (var i=0; i<cols; i++) {
    push();
    translate(i * columnOffset, 0);
    for (var j=0; j<rows; j++) {
      push();
      translate(0, rowOffset * j);
      rect(-brickWidth/2, -brickHeight/2, brickWidth, brickHeight);
      pop();
    }
    pop();
  }
}

// 4. Add random rotation to column.
var r = random(-QUARTER_PI, QUARTER_PI); // first loop
rotate(r); // after translate second loop

// 5. Increment rotation down rows.
var rotationIncrement = 0.15; // top
var dir = 1; // in first loop
r += dir * rotationIncrement; // in second loop

// 6. Check for reverse.
if (r > QUARTER_PI || r < -QUARTER_PI) dir *= -1; // end of second loop


///////////////////////////////////////////////////////
//// 03_flow_response


// 1. Iterate over grid, draw a line.
for (var x = 50; x <= width-50; x += 50) {
  for (var y = 50; y <= height-50; y+= 50) {
    line(x-5, y-5, x+5, y+5);
  }
}

// 2. Option 1 - Add second line to make cross.
line(x+5, y-5, x-5, y+5);

// 3. Try different values than 50.

// 4. Add density variable based on mouse map.
var density = map(mouseX, 0, width, 20, 50);

// 5. Option 2 - Swap lines for perspective.
line(x, y, width/2, height/2);

// 6. Add mousePressed and option var to toggle.

// 7. Option 3 - Swap lines for overlapping circles.
ellipse(x, y, 40, 40);

// 8. Option 4 - Rotating arcs.
var count = 120;
// inside the loop
var s = map(count, 120, 0, 0, TWO_PI*2);
arc(x, y, 14, 14, s, s + PI);
count--;

// 9. Option 5 - Groups of 5.
for (var i = 0; i < 16; i+=4) {
  line(x + i, y, x + i, y + 12);
}
line(x, y, x + 12, y + 12);


///////////////////////////////////////////////////////
//// 04_media

/*
1. Load image.
2. Draw thumbnail using constrain and line.
3. Load pixels.
4. Figure out x position in image to sample, using map.
5. Draw slice, using for loop get and set.
6. Loop back around eventually.
7. Try out different images!
*/

///////////////////////////////////////////////////////
//// 06_motion

// @TODO

///////////////////////////////////////////////////////
//// 07_functions
