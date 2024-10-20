// Basile Pesin
// http://vertmo.github.io

// MetaBalls : p5.js implementation

var blobs = []
var blobs2 = []
var blobs3 = []
var blobs4 = []
var blobs5 = []
var blobs6 = []
var blobs7 = []
var blobs8 = []
var blobs9 = []


function setup() {
  createCanvas(600, 600);

  colorMode(HSB);
  
   for (i = 0; i < random(2,5); i++) blobs.push(new Blob(random(0, 100), random(0, 100)));
  for (i = 0; i < random(2,5); i++) blobs2.push(new Blob(random(0, 100), random(0, 100)));
  for (i = 0; i < random(2,5); i++) blobs3.push(new Blob(random(0, 100), random(0, 100)));
  for (i = 0; i < random(2,5); i++) blobs4.push(new Blob(random(0, 100), random(0, 100)));
  
  frameRate(10);
  
}

function reset() {
  background(51);
  for (i = 0; i < random(2,5); i++) blobs.push(new Blob(random(0, 100), random(0, 100)));
  for (i = 0; i < random(2,5); i++) blobs2.push(new Blob(random(0, 100), random(0, 100)));
  for (i = 0; i < random(2,5); i++) blobs3.push(new Blob(random(0, 100), random(0, 100)));
  for (i = 0; i < random(2,5); i++) blobs4.push(new Blob(random(0, 100), random(0, 100)));
}

function mouseClicked() {
  reset();
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
  
  let img2 = createImage(100,100);
  
  img2.loadPixels();

  for (x = 0; x < 100; x++) {
    for (y = 0; y < 100; y++) {
      let sum = 4;
      for (i = 0; i < blobs2.length; i++) {
        let xdif = x - blobs2[i].x;
        let ydif = y - blobs2[i].y;
        let d = sqrt((xdif * xdif) + (ydif * ydif));
        sum += 15 * blobs2[i].r / d;
      }
      img2.set(x, y, color(sum, 255, 255));
    }
  }
  

  for (i = 0; i < blobs2.length; i++) {
    blobs2[i].update();
  }

  
  img2.updatePixels();
  
  
  let img3 = createImage(100,100);
  
  img3.loadPixels();

  for (x = 0; x < 100; x++) {
    for (y = 0; y < 100; y++) {
      let sum = 4;
      for (i = 0; i < blobs3.length; i++) {
        let xdif = x - blobs3[i].x;
        let ydif = y - blobs3[i].y;
        let d = sqrt((xdif * xdif) + (ydif * ydif));
        sum += 15 * blobs3[i].r / d;
      }
      img3.set(x, y, color(sum, 255, 255));
    }
  }
  

  for (i = 0; i < blobs3.length; i++) {
    blobs3[i].update();
  }

  
  img3.updatePixels();
  
    let img4 = createImage(100,100);
  
  img3.loadPixels();

  for (x = 0; x < 100; x++) {
    for (y = 0; y < 100; y++) {
      let sum = 4;
      for (i = 0; i < blobs4.length; i++) {
        let xdif = x - blobs4[i].x;
        let ydif = y - blobs4[i].y;
        let d = sqrt((xdif * xdif) + (ydif * ydif));
        sum += 15 * blobs4[i].r / d;
      }
      img4.set(x, y, color(sum, 255, 255));
    }
  }
  

  for (i = 0; i < blobs4.length; i++) {
    blobs4[i].update();
  }

  
  img4.updatePixels();
  
  
  
  
  // makeDithered(img, 1);
  image(img,100,100);
  image(img2,200,100);
  image(img3,300,100);
  image(img4,400,100);
  filter(GRAY);
  // image(img1,200,100);
  
  

  
  
  
  // filter(THRESHOLD,.25);
  

}




