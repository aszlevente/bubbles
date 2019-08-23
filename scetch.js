let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.display();
  bubble2.move();
  bubble2.display();
}