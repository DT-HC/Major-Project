// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid = [];
let W = 50

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < windowWidth; i += W){
    for (let j = 0; j < windowHeight; j += W)
      grid.push(new Cells(i,j,W));
  }
  }

function draw() {
  for (let i = 0; i < grid.length; i++){
    grid[i].display()
  }
  
  

}


class Cells {
  constructor(Cellx, Celly,Cellw){
    this.x = Cellx;
    this.y = Celly;
    this.width = Cellw;
}
  display() {
    if (((mouseX < this.x + this.width && mouseX > this.x) && (mouseY > this.y && mouseY < this.width + this.y)) && mouseIsPressed){
      fill(0)
  }
  else {
    fill(220)
  }
    rect(this.x, this.y, this.width, this.width)
  }


}

class Worker {

}

class Queen {

}








