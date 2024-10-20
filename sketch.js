// Basile Pesin
// http://vertmo.github.io

// MetaBalls : p5.js implementation

var blobs = []
let testField;

function setup() {
  createCanvas(600, 600);

  colorMode(HSB);
  
  for (i = 0; i < random(2,5); i++) blobs.push(new Blob(random(0, 100), random(0, 100)));
  testField = new Field();
  
  frameRate(10);
  
}

function reset() {
  background(51);
  for (i = 0; i < random(2,5); i++) blobs.push(new Blob(random(0, 100), random(0, 100)));

}

function mouseClicked() {
  // reset();
}

function draw() {
  background(51);
  
  let img = createImage(100,100);
  
  img.loadPixels();

  for (x = 0; x < 100; x++) {
    for (y = 0; y < 100; y++) {
      let sum = 4;
      for (i = 0; i < blobs.length; i++) {
        let xdif = x - blobs[i].x;
        let ydif = y - blobs[i].y;
        let d = sqrt((xdif * xdif) + (ydif * ydif));
        sum += 15 * blobs[i].r / d;
      }
      img.set(x, y, color(sum, 255, 255));
    }
  }
  

  for (i = 0; i < blobs.length; i++) {
    blobs[i].update();
  }

  
  img.updatePixels();
  
  testField.render(200,100);
  
  
  

  image(img,100,100);
  filter(GRAY);
  // image(img1,200,100);
  
  

  
  
  
  // filter(THRESHOLD,.25);
  

}




