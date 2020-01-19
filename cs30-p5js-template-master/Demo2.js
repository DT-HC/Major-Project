// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid = [];
// // let gridLoc = [];
// // let W = 50;
// // let workers;
// // let seed = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  
  for (let i = 0; i < windowWidth; i += W){
    gridLoc.push([]);
    for (let j = 0; j < windowHeight; j += W){
      // gridLoc[i].push(j);
      grid.push(new Cells(i,j,W));
    } 
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
    
    
}
  display() {
    if (dist(this.x, this.y, mouseX, mouseY) < W/2) {
      this.fill = 0;
    }
    else{
      this.fill = 220;
    }
    fill(this.fill)
    rect(this.x, this.y, this.width, this.width)
  }


}









