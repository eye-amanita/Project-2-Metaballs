// Basile Pesin
// http://vertmo.github.io

// MetaBalls : p5.js implementation

let testField;
let thresh = 0.2;
var fieldArray = [];
var countArray = [1,2,3,4];

var gridColumnCount;
var gridRowCount;

var gridOffsetX;
var gridOffsetY;



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
  testField10 = new Field();
  testField11 = new Field();
  testField12 = new Field();
  testField13 = new Field();
  testField14 = new Field();
  testField15 = new Field();
  testField16 = new Field();
  
  fieldArray = [
    testField1, 
    testField2, 
    testField3, 
    testField4, 
    testField5, 
    testField6, 
    testField7, 
    testField8, 
    testField9,
    testField10,
    testField11,
    testField12,
    testField13,
    testField14,
    testField16,
    testField15,
  ];
  
  gridColumnCount = random(countArray);
  gridRowCount = random(countArray);
  
  
  frameRate(12);
  
}

function draw() {
  let arrayNumber = 0;
  gridOffsetX = ((600-(gridColumnCount*100))/2);
  gridOffsetY = ((600-(gridRowCount*100))/2);

  background(93);
  

  
for (var gridX = 0; gridX < gridColumnCount; ++gridX) {
  for (var gridY = 0; gridY < gridRowCount; ++gridY) {
    fieldArray[arrayNumber].render (gridOffsetX+(100*gridX),gridOffsetY+(100*gridY));
    arrayNumber = arrayNumber + 1;
  }
}

  // thresh = thresh < 1 ? thresh + 0.005 : 0;
  // filter(GRAY);
  // filter(THRESHOLD, thresh);


  // fill(255);
  // strokeWeight(0);
  // square(0,0,150);
  // square(450,0,150);
}

function mouseClicked() {
  fieldArray.map((field) => field.reset());
  {/* old way
    testField1.reset();
    testField2.reset();
    testField3.reset();
    testField4.reset();
    testField5.reset();
    testField6.reset();
    testField7.reset();
    testField8.reset();
    testField9.reset();
    testField10.reset();
    testField11.reset();
    testField12.reset();
    testField13.reset();
    testField14.reset();
    testField15.reset();
    testField16.reset(); 
  */}
  

  gridVariablesReset();

}

function gridVariablesReset() {

  gridColumnCount = random(countArray);
  gridRowCount = random(countArray);

}




