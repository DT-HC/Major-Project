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
  angleMode(DEGREES);
  
  for (let i = 0; i < windowWidth; i += W){
    for (let j = 0; j < windowHeight; j += W)
      grid.push(new Cells(i,j,W));
  }
  
   worker = new Worker(10,10);
   dworker = new Worker(500,110);
   
  }

function draw() {
  translate(W/2, W/2)
  for (let i = 0; i < grid.length; i++){
    grid[i].display()
  }
  dworker.display()
  worker.display()
  
  
  

}


class Cells {
  constructor(Cellx, Celly,Cellw){
    this.x = Cellx;
    this.y = Celly;
    this.width = Cellw;
    this.fill = 220
}
  display() {
    if ((dist(worker.x, worker.y, this.x, this.y) < W/2)){
      this.fill = 220
      fill(this.fill)
  }
    else {
      this.fill = 220
      fill(this. fill)
  }
    
    rect(this.x, this.y, this.width, this.width)
  }


}

class Worker {
  constructor(workerX, workerY) {
    this.width = 4;
    this.length = 8;
    this.x = workerX
    this.y = workerY
    this.xLoc = floor(this.x/W)
    this.yLoc = floor(this.y/W)
    this.stepSize = 2;
    this.a = 90
  }

  display() {
    fill(0)
    push()
    translate(this.x , this.y);
    this.a = atan2(mouseY - this.y, mouseX - this.x );
    rotate(this.a - 90);
    rectMode(CENTER);
    rect(0,0, this.width, this.length);
    pop()
  }
  move() {
    // if (choice < 25) {
    //   //up
    //   this.y -= this.stepSize;
    // }
    // else if (choice < 50) {
    //   //down
    //   this.y += this.stepSize;
    // }
    // else if (choice < 75) {
    //   //left
    //   this.x -= this.stepSize;
    // }
    // else {
    //   //right
    //   this.x += this.stepSize;
    // this.a = atan2(choice - this.x, choice-this.y)
    // rotate(this.a)

 }
}







