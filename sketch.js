// Basile Pesin
// http://vertmo.github.io

// MetaBalls : p5.js implementation

let testField;
let thresh = 0.2;

function setup() {
  createCanvas(600, 600);

  colorMode(HSB);
  
  testField = new Field();
  
  frameRate(10);
  
}

function draw() {
  background(51);
  testField.render(200,100);

  //thresh = thresh < 1 ? thresh + 0.005 : 0;
  //filter(GRAY);
  //filter(THRESHOLD, thresh)
}




