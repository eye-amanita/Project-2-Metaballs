// Basile Pesin
// http://vertmo.github.io

// MetaBalls : p5.js implementation

class Blob {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    let angle = random(0, 2 * PI);
    this.xspeed = random(5, 10) * Math.cos(angle);
    this.yspeed = random(5, 10) * Math.sin(angle);
    this.r = random(120, 240);
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    if (this.x > 100 || this.x < 0) this.xspeed *= -1;
    if (this.y > 100 || this.y < 0) this.yspeed *= -1;
  }

  // show() {
  //   noFill();
  //   stroke();
  //   strokeWeight(1);
  //   ellipse(this.x, this.y, this.r * 5, this.r * 2);
  // }
}