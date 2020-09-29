/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let col = {
  r: (255),
  g: (255),
  b: (255),
}

let maskprop = {
  x: 0,
  y: 250,
  size: 80,
  vx: 0,
  vy: 0,
  speed: 5,

}

let mask;
let virus;
function preload(){
  virus = loadImage('assets/images/virus.png')
  mask = loadImage('assets/images/mask.png')
}


let user = {
  x: 0,
  y: 0,
  size: 70,
  fill: (0, col.g, 0)
}

let d = 0;
// Description of setup() goes here.
function setup() {
createCanvas(windowWidth,windowHeight);
maskprop.y = random(0, height)
maskprop.vx = maskprop.speed
}

// draw()
//
// Description of draw() goes here.
function draw() {
    //Sets background
  background(0);
  //Moves the covid threats
  maskprop.x += maskprop.vx;
  maskprop.y += maskprop.vy;

  //Static
  for (let i = 0; i < 100 ; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(0, col.g, 0);
    strokeWeight(10);
    point(x,y); }

  // Mask properties

  imageMode(CENTER);
  image(mask, maskprop.x, maskprop.y, 100, 60);

  // Resets masks
  if (maskprop.x > width) {
    maskprop.x = 0;
    maskprop.y = random(0, height);
  }
  // Sets up user circle

  user.x = mouseX;
  user.y = mouseY;
  imageMode(CENTER);
  image(virus, user.x, user.y, 80, 80);


  // Ends program if circles touch
  //d = dist(maskprop.x, maskprop.y, user.x, user.y);
//  if (d < 100) {
  //  noLoop() }
  }
