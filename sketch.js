// Basile Pesin
// http://vertmo.github.io

// MetaBalls : p5.js implementation

let testField;
let thresh = 0.2;

function setup() {
  createCanvas(600, 600);

  colorMode(HSB);
  
  testField1 = new Field();
  testField2 = new Field();
  testField3 = new Field();
  testField4 = new Field();
  testField5 = new Field();
  testField6 = new Field();
  testField7 = new Field();
  testField8 = new Field();
  
  
  
  frameRate(8);
  
}

function draw() {
  background(51);
  testField1.render(100,100);
  testField2.render(200,100);
  testField3.render(300,100);
  testField4.render(400,100);

  

  // thresh = thresh < 1 ? thresh + 0.005 : 0;
  // filter(GRAY);
  // filter(THRESHOLD, thresh)
}

function mouseClicked() {
  testField1.reset();
  testField2.reset();
  testField3.reset();
  testField4.reset();

}




