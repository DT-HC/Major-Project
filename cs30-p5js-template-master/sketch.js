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
  worker = new Worker(100,100);
  dworker = new Worker(100, 200);

  }

function draw() {
  translate(W/2, W/2)
  for (let i = 0; i < grid.length; i++){
    grid[i].display()
  }
  dworker.move()
  dworker.display()
  worker.move()
  worker.display()
  
  
  

}


class Cells {
  constructor(Cellx, Celly,Cellw,){
    this.x = Cellx;
    this.y = Celly;
    this.width = Cellw;
    this.fill = 220;
    this.state = "!occupied"
}
  display() {
    if (this.state === "occupied"){
      this.fill = 0
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
    this.xLoc = floor(this.x/W);
    this.yLoc = floor(this.y/W);
    this.stepSize = 2;
    this.a = 90;
    this.choice = 1;
  }

  display() {
    fill(0)
    // push()
    // translate(this.x , this.y);
    // this.a = atan2(mouseY - this.y, mouseX - this.x );
    // rotate(this.a - 90);
    // rectMode(CENTER);
    rect(0,0, this.width, this.length);
    pop()
  }
  move() {
    push()
    translate(this.x , this.y);
    this.choice = random(1,4)
    for (let i = 0; i < grid.length; i++) {
      if (this.xLoc === grid[i].x && this.yLoc === grid[i].y){
        // let choice = random(1,4);
        grid[i].state = "occupied";
        
        
        
        // if (this.choice = 1) {
        //   this.a = atan2((grid[i].y + W) - this.y, (grid[i].x) - this.x)
        // }
        // else if (this.choice = 2) {
        //   this.a = atan2((grid[i].y - W) - this.y, (grid[i].x) - this.x)
        // }
        // else if (this.choice = 3) {
        //   this.a = atan2((grid[i].y) - this.y, (grid[i].x + W) - this.x)
        // }
        // else if (this.choice = 4) {
        //   this.a = atan2((grid[i].y) - this.y, (grid[i].x - W) - this.x)
        // }

      }
    }
    // this.a = atan2(mouseY - this.y, mouseX - this.x );
    rotate(this.a - 90);
    rectMode(CENTER);

 }
}







