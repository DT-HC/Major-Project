// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid = [];
let W = 50;
let worker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  
  for (let i = 0; i < windowWidth; i += W){
    for (let j = 0; j < windowHeight; j += W)
      grid.push(new Cells(i,j,W));
  }
  
   worker = new Worker
  }

function draw() {
  translate(W/2, W/2)
  for (let i = 0; i < grid.length; i++){
    grid[i].display()
  }
  worker.display()
  worker.move()
  
  

}


class Cells {
  constructor(Cellx, Celly,Cellw){
    this.x = Cellx;
    this.y = Celly;
    this.width = Cellw;
}
  display() {
    if ((dist(worker.x, worker.y, this.x, this.y) < W/2) && mouseIsPressed){
      fill(0)
  }
    else {
    fill(220)
  }
    rect(this.x, this.y, this.width, this.width)
  }


}

class Worker {
  constructor() {
    this.width = 4;
    this.length = 8;
    this.x = 110;
    this.y = 50;
    this.xLoc = floor(this.x/W)
    this.yLoc = floor(this.y/W)
    this.stepSize = 2;
  }

  display() {
    fill(0)
    rect(this.x,this.y, this.width, this.length)
  }
  move() {
    let choice = random(100);
    if (choice < 25) {
      //up
      this.y -= this.stepSize;
    }
    else if (choice < 50) {
      //down
      this.y += this.stepSize;
    }
    else if (choice < 75) {
      //left
      this.x -= this.stepSize;
    }
    else {
      //right
      this.x += this.stepSize;
    
  }

}
}







