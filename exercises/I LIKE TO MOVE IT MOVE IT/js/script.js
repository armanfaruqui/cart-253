/**************************************************
Moving Shapes
Arman Faruqui
RUB THE SHAKING CIRCLE
**************************************************/

// objects and variables
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
    a: 0,
  };

  let rc = {
    r: 0,
    g: 0,
    b: 0,
    a: 0,
  };

  let corner = {
    tlx: 0,
    tly: 0,
    trx: 500,
    try: 0,
    blx: 0,
    bly: 500,
    brx: 500,
    bry: 500

  };

  let shake = {
    x: 250,
    y: 250,
    size: 20,
    fill: 0,
    speed: 1

  }
//
// Setup: Canvas and nostroke
function setup() {
createCanvas(500,500);
noStroke();




}


// draw()
//
// Description of draw() goes here.
function draw() {
//background
background(bg.r, bg.g, bg.b)
bg.r += 1;

//circle 1
circle1.x = constrain(circle1.x, 0, 250);
circle1.x += circle1.speed
circle1.size = constrain(circle1.size, 0, 400)
circle1.size += 1
fill(circle1.fill,circle1.alpha);
ellipseMode(CENTER);
ellipse(circle1.x, circle1.y, circle1.size);

//circle 2
circle2.x = constrain(circle2.x, 250, 500);
circle2.x -= circle2.speed
circle2.size = constrain(circle2.size, 0, 250)
circle2.size += 0.7
fill(circle2.fill,circle2.alpha);
ellipseMode(CENTER);
ellipse(circle2.x, circle2.y, circle2.size);

//Corner borders *random color code used from p5 library website
rc.r = random(255);
rc.g = random(100, 200);
rc.b = random(255);
rc.a = random(200, 255);
fill(rc.a, rc.g, rc.b, rc.a);
triangle(corner.blx, corner.bly, corner.blx + 180, corner.bly, corner.blx, corner.bly - 180);
triangle(corner.brx, corner.bry, corner.brx - 180, corner.bry, corner.brx, corner.bry - 180);
triangle(corner.tlx, corner.tly, corner.tlx + 180, corner.tly, corner.tlx, corner.tly + 180);
triangle(corner.trx, corner.try, corner.trx - 180, corner.try, corner.trx, corner.try + 180);

//shaking circle in middle
if (circle2.size > 249 ) {
  shake.x = constrain(shake.x, 220, 280)
  shake.speed = random(-5,5);
  shake.x += shake.speed
  fill(rc.a, rc.g, rc.b, rc.a);
  ellipse(shake.x, shake.y, shake.size);
}
//interactive circle rubbing
if (circle2.size > 249 && mouseY > 230 && mouseY < 270) {
  circle2.fill = map(mouseX, 220, 280, 0, 255);
}



}
