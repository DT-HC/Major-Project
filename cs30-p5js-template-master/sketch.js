// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid = [];
let W = 5

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < windowWidth; i += W){
    for (let j = 0; j < windowHeight; j += W)
      grid.push(new Cell(i,j,W));
  }
  }

function draw() {
  background(220);
  
  

}

class Worker {

}

class Queen {

}

class Cells {
  constructor(Cellx, Celly,Cellw){
    this.x = Cellx;
    this.y = Celly;
    this.width = Cellw;
}
  display() {
    fill(220)
    rect(this.x, this.y, this.width, this.width)
  }


}






