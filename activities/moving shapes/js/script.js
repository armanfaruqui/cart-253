/**************************************************
Moving Shapes
Arman Faruqui

**************************************************/

// setup()
let circle1 = {
  x:0,
  y:250,
  size: 100,
  speed: 1,
  alpha: 200,
  fill: 0
};

  let circle2 = {
    x:500,
    y:250,
    size: 60,
    speed: 0.85,
    alpha: 200,
    fill: 0
  };

  let bg = {
    r: 0,
    g: 0,
    b: 0,
  };
//
// Description of setup() goes here.
function setup() {
createCanvas(500,500);
noStroke();


}


// draw()
//
// Description of draw() goes here.
function draw() {
background(bg.r, bg.g, bg.b)
bg.r += 1;

circle1.x = constrain(circle1.x, 0, 250);
circle1.x += circle1.speed
circle1.size = constrain(circle1.size, 0, 400)
circle1.size += 1
fill(circle1.fill,circle1.alpha);
ellipseMode(CENTER);
ellipse(circle1.x, circle1.y, circle1.size);

circle2.x = constrain(circle2.x, 250, 500);
circle2.x -= circle2.speed
circle2.size = constrain(circle2.size, 0, 250)
circle2.size += 0.7
fill(circle2.fill,circle2.alpha);
ellipseMode(CENTER);
ellipse(circle2.x, circle2.y, circle2.size);
}
