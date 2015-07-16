var thumb_h = 200;
var thumb_w;
var draw_position_x = 0; 
var center;

var files = ['../assets/horse.jpg'];
var imgs = [];
var cur = 0;

function preload() {
  for (var i=0; i<files.length; i++) {
    imgs.push(loadImage(files[i]));
  }
}

function setup() {
  //devicePixelScaling(false);
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
  if (key === ' ') {
    nextImg();
  }
}

function draw() {

  var mx = constrain(mouseX, center - thumb_w/2+1, center + thumb_w/2);
  var x = floor(map(mx, center - thumb_w/2, center + thumb_w/2, imgs[cur].width, 0));

  for (var y=0; y<height; y++){
    var c = imgs[cur].get(x, y);
      // var r = imgs[cur].pixels[4*(y*imgs[cur].width+x)];
      // var g = imgs[cur].pixels[4*(y*imgs[cur].width+x)+1];
      // var b = imgs[cur].pixels[4*(y*imgs[cur].width+x)+2];
      // var a = imgs[cur].pixels[4*(y*imgs[cur].width+x)+3];

    set(draw_position_x, y, c);//[r, g, b, a]);
  }
  updatePixels();

  // show thumbnail
  image(imgs[cur], mx, height-thumb_h/2, thumb_w, thumb_h);
  line(width/2, height-thumb_h, width/2, height);

  
  // loop back around
  draw_position_x++;
  if (draw_position_x >= width) {
    draw_position_x = 0;
  }
}

  