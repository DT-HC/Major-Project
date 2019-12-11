// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid = [];
let W = 6;
let worker; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  
  for (let i = 0; i < windowWidth; i += W){
    for (let j = 0; j < windowHeight; j += W)
      grid.push(new Cells(i,j,W)); 
  }
}

function draw() {
  translate(W/2, W/2)
  for (let i = 0; i < grid.length; i++){
    grid[i].display()
  }
  
  

}

class Cells {
  constructor(Cellx, Celly,Cellw){
    this.x = Cellx;
    this.y = Celly;
    this.width = Cellw;
    this.fill = 220;
    this.state = "!occupied"
}
  display() {
    fill(this. fill)
    rect(this.x, this.y, this.width, this.width)
  }


}

class Worker {}






