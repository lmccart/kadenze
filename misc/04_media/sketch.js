var thumb_h = 200;
var thumb_w;
var draw_position_x = 0; 
var center;

var files = ['../assets/horse.jpg', '../assets/monkey.jpg', '../assets/ballerina.jpg', '../assets/camel.jpg'];
var imgs = [];
var cur = 0;

function preload() {
  for (var i=0; i<files.length; i++) {
    imgs.push(loadImage(files[i]));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background(0);
  center = width/2;
  for (var i=0; i<imgs.length; i++) {
    imgs[i].loadPixels();
  }
  loadPixels();
  nextImg();
  stroke(255, 255, 0);
}

function nextImg() {
  cur++;
  if (cur >= imgs.length) {
    cur = 0;
  }
  thumb_w = thumb_h*imgs[cur].width/imgs[cur].height;
  draw_position_x = 0;
}

function keyPressed() {
  nextImg();
}

function draw() {

  var mx = constrain(mouseX, center - thumb_w/2, center + thumb_w/2);
  var x = map(mx, center - thumb_w/2, center + thumb_w/2, imgs[cur].width, 0);

  for (var y=0; y<height; y++){
    var c = imgs[cur].get(x, y);
    set(draw_position_x, y, c);
  }
  updatePixels();
  
  // loop back around
  draw_position_x++;
  if (draw_position_x >= width) {
    draw_position_x = 0;
  }

  // show thumbnail
  image(imgs[cur], mx, height-thumb_h/2, thumb_w, thumb_h);
  line(width/2, height-thumb_h, width/2, height);
}

  