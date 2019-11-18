// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let seed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(BOTTOM, LEFT);
  }

function draw() {
  background(220);
  createOcean();

}

function createOcean() {
  for (let i = 0; i < width; i + 5) {
    createRect(i)
  }
}

function createRect(xPos) {
  length = noise(seed)*(-height);
  fill(0)
  rect(xPos,height,5,length);
  seed += 0.5;

}