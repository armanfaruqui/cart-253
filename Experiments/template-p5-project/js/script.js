/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let circle2 = {
  x: undefined,
  y: 250,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 4,
  xdirection: 1, // Left or Right
  ydirection: 1, // Top to Bottom
};

let i;
// Description of setup() goes here.
function setup() {
createCanvas(500, 500),
circle2.x = (2 / 3) * width;
circle2.y = (1 / 2) * height;
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0)
  circle2.x = circle2.x + circle2.speed * circle2.xdirection;
    circle2.y = circle2.y + circle2.speed * circle2.ydirection;
    if (circle2.x > width - circle2.size || circle2.x < circle2.size) {
    circle2.xdirection *= -1;
    i += 1
  }
  if (circle2.y > height - circle2.size || circle2.y < circle2.size) {
    circle2.ydirection *= -1;
    i += 1
  }

    ellipse(circle2.x, circle2.y, circle2.size);

  }
