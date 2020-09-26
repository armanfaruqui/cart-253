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

let covidCircle = {
  x: 0,
  y: 250,
  size: 80,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: col.r

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
covidCircle.y = random(0, height)
covidCircle.vx = covidCircle.speed
}

// draw()
//
// Description of draw() goes here.
function draw() {
  //Sets background
  background(0);
  //Moves the covid circles
  covidCircle.x += covidCircle.vx
  covidCircle.y += covidCircle.vy

  //Static
    push()
  for (let i = 0; i < 100 ; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(0, col.g, 0);
    strokeWeight(10);
    point(x,y);
    pop()
  }

  // Covid circle properties
  push()
  fill(col.r, 0, 0)
  noStroke()
  ellipse(covidCircle.x, covidCircle.y, covidCircle.size);
  pop()
  // Resets covid circles
  if (covidCircle.x > width + 40) {
    covidCircle.x = 0
    covidCircle.y = random(0, height);
  }
  // Sets up user circle
  push()
  user.x = mouseX;
  user.y = mouseY;
  fill(0, 0, col.b);
  ellipse(user.x, user.y, user.size)
  pop()
  // Ends program if circles touch
  d = dist(covidCircle.x, covidCircle.y, user.x, user.y);
  if (d < covidCircle.size/2 + user.size/2) {
    noLoop()
  }


}
