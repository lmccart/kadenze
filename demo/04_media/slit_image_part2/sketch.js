var s = 266;
var draw_position_x = 0; 
var center;
var img;

function preload() {
  img = loadImage('horse.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  img.loadPixels();
  background(0);
  stroke(255, 255, 0);
  center = width/2;
}


function draw() {
  var mx = constrain(mouseX, center-s/2, center+s/2);
  var x = map(mx, center-s/2, center+s/2, s, 0);
  x = floor(x);

  for (var y=0; y<height; y++){
    var c = img.get(x, y);
    set(draw_position_x, y, c);
  }
  updatePixels();

  // show thumbnail
  image(img, mx, height-s/2);
  line(width/2, height-s, width/2, height);

  
  // loop back around
  draw_position_x++;
  if (draw_position_x >= width) {
    draw_position_x = 0;
  }
}

  