
var img;
var values = [];
var angle;

function preload() {
  img = loadImage("../assets/nasa-iceberg.jpg");
}

function setup() {
  createCanvas(1024, 768);
  noFill();

  for (var i=0; i<img.height; i++) {
    values[i] = [];
  }
  
  // Extract the brightness of each pixel in the image
  // and store in the "values" array
  img.loadPixels();
  for (var i = 0; i < img.height; i++) {
    for (var j = 0; j < img.width; j++) {
      var pix = img.get(i, j);
      values[j][i] = int(brightness(pix));
    }
  }
}

function draw() {
  
  background(0);                     // Set black background
  translate(width/2, height/2, 0);   // Move to the center
  //scale(4.0);                        // Scale to 400%
  
  // Update the angle
  angle += 0.005;
  rotateY(angle);  
  
  // Display the image mass
  for (var i = 0; i < img.height; i += 2) {
    for (var j = 0; j < img.width; j += 2) {
      stroke(values[j][i], 153);
      var x1 = j-img.width/2;
      var y1 = i-img.height/2;
      var z1 = -values[j][i]/2;
      var x2 = j-img.width/2;
      var y2 = i-img.height/2;
      var z2 = -values[j][i]/2-4;
      line(x1, y1, z1, x2, y2, z2);
    }
  }
}
  