// Basile Pesin
// http://vertmo.github.io

// MetaBalls : p5.js implementation

let testField;
let thresh = 0.2;
var fieldArray = [];


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
  testField9 = new Field();
  
  fieldArray = [testField1, testField2, testField3, testField4, testField5, testField6, testField7, testField8, testField9]
  
  frameRate(7);
  
}

function draw() {
  let arrayNumber = 0;
  background(51);
  // testField1.render(100,100);
  // testField2.render(200,100);
  // testField3.render(300,100);
  // testField4.render(400,100);

  
for (var gridY = 0; gridY < 3; ++gridY) {
  for (var gridX = 0; gridX < 3; ++gridX) {
    fieldArray[arrayNumber].render (150+100*gridY,150+100*gridX);
    arrayNumber = arrayNumber + 1;
  }
}

  // thresh = thresh < 1 ? thresh + 0.005 : 0;
  // filter(GRAY);
  // filter(THRESHOLD, thresh)


  // fill(255);
  // strokeWeight(0);
  // square(0,0,150);
  // square(450,0,150);
}

function mouseClicked() {
  testField1.reset();
  testField2.reset();
  testField3.reset();
  testField4.reset();
  testField6.reset();
  testField7.reset();
  testField8.reset();
  testField9.reset();

}




