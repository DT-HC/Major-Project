// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let rWidth;
let rY;
let rHeight;
let seed = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(BOTTOM);
  rWidth = 5;
  rY = 5;
}

function draw() {
  background(220);
  fill(0);
  createOcean()
}

function createOcean() {
  for (let i = 0; i < rWidth; i+rWidth)
  console.log(i)
}