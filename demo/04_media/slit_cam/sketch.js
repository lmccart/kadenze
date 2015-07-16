var draw_position_x = 0; 
var cam;

function setup() {
  devicePixelScaling(false)
  createCanvas(windowWidth, windowHeight);
  background(0);
  cam = createCapture(VIDEO);
  loadPixels();
  stroke(255, 255, 0);
}

function draw() {

  if (cam) {
    cam.loadPixels();

    for (var y=0; y<height; y++){
      var r = cam.pixels[4*(y*cam.width+cam.width/2)];
      var g = cam.pixels[4*(y*cam.width+cam.width/2)+1];
      var b = cam.pixels[4*(y*cam.width+cam.width/2)+2];
      var a = cam.pixels[4*(y*cam.width+cam.width/2)+3];
      set(draw_position_x, y, [r, g, b, a]);
    }
    updatePixels();

    // loop back around
    draw_position_x++;
    if (draw_position_x >= width) {
      draw_position_x = 0;
    }
  }
}

  