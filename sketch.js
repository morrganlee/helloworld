
var x = 500;
var y = 500;
var xJump = 15;
var yJump = 15;
var shade = '#FFFFF'

// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);

  textSize(50);
  textAlign(CENTER);

 }


// Draw code goes here
function draw() {
  background('#9D5C63');

  fill('#584b53');
  text("Hello, World.", width/2, height/4);

  fill(shade);
  noStroke();
  circle(x, y, 100);
  x += xJump;
  if(x > 1000 || x < 100){
    xJump *= -1;
  }

  if(mouseX == width/2 || mouseY == height/2){
    xJump = 0;
  }
}