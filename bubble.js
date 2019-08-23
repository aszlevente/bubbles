class Bubble {

  constructor() {
    this.x = 300;
    this.y = 200;
  }

  move() {
    this.x += random(5, -5);
    this.y += random(5, -5);
  }

  display() {
    noFill();
    stroke(255);
    strokeWeight(4);
    ellipse(this.x, this.y, 24, 24);
  }

}