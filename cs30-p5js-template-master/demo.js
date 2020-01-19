// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let workerNum;
let food;
let state = "start";
let queen;


function setup() {
  createCanvas(windowWidth, windowHeight);
  queen = new Queen(40,40);
}

function draw() {
  background(255);
  if (state === "nGame"){
    playGame()
  }
  else if (state === "start"){
    showMenu();
  }
  
}

function playGame(){
  queen.display()
  let mouseState = "qControl";

  
  

}
function showMenu(){
  
  
  textSize(50)
  fill(0);
  text('START', width/2, height/2, 100, 100);
  
  textSize(26);
  text('INSTRUCTIONS', width/2, height/2 + 100, 100, 100);
  
}


function mouseClicked() {
  if (state == "start") {
    if (mouseX > width/2 && mouseX < width/2 + 100 && mouseY > height/2 && mouseY < height/2 + 100){
      state = "nGame"  
    }
  }
}



class Queen {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.rate;
    this.saturation = 0;
    this.hunger = 0;
    this.health = 40;
    this.objectiveX;
    this.objectiveY;
    this.angle;
    this.speed = 8;
  }
  display(){
    fill(0);
    ellipse(this.x,this.y, 30, 30)
  }
  move(){
    this.angle = atan2(this.objectiveY - mouseY, this.objectiveX - mouseX);
    this.x += this.speed*cos(this.angle);
    this.y += this.speed*sin(this.angle)
  }
}

function mousePressed(){
  if (state = "nGame") {
    if (mouseState = "qControl")
      queen.objectiveX = mouseX;
      queen.objectiveY = mouseY;
  }

}

function keyPressed(){
  if (key = "M"){
    queen.move();
    
  }
}







