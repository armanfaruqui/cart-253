/**************************************************
Looking for Love
Arman Faruqui

Here is a description of this template p5 project.
**************************************************/
let circle1 = {
  x: undefined,
  y: 250,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 5,
};

let circle2 = {
  x: undefined,
  y: 250,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 5,
};

let state = 'action';
let d;
// Description of setup() goes here.
function setup() {
  createCanvas(640, 360);

  circle1.x = (1 / 3) * width;
  circle2.x = (2 / 3) * width;
  circle1.y = (1 / 2) * height;
  circle2.y = (1 / 2) * height;

  circle1.vx = random(-circle1.speed, circle1.speed);
  circle1.vy = random(-circle1.speed, circle1.speed);
  circle2.vx = random(-circle2.speed, circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);
}

function draw() {
  background(0);

  if (state === 'title') {
    titleText();
  } else if (state === 'action') {
    moveCircles();
    checkOff();
    checkDist();
  } else if (state === 'end') {
    endText()
  } else if (state === 'love') {
    loveText()
  }

  function titleText() {
    textSize(32);
    stroke(255, 196, 252);
    strokeWeight(4);
    textAlign(CENTER)
    text("Is it meant to be?", width / 2, height / 2);
  }


  function moveCircles() {
    circle1.x += circle1.vx;
    circle1.y += circle1.vy;
    circle2.x += circle2.vx;
    circle2.y += circle2.vy;
    ellipse(circle1.x, circle1.y, circle1.size);
    ellipse(circle2.x, circle2.y, circle2.size); }

  function checkDist() {
    d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if (d < 50) {
        state = 'love';
    }
  }

  function endText() {
    textSize(32);
    stroke(255, 196, 252);
    strokeWeight(4);
    text("Nope", width / 2, height / 2);
  }

  function checkOff() {
    if (circle1.x > width || circle1.x < 0 || circle1.y > height || circle1.y < 0 ||
      circle2.x > width || circle2.x < 0 || circle2.y > height || circle2.y < 0) {
      state = 'end'
    }
  }

  function loveText() {
    textSize(32);
    stroke(255, 196, 252);
    strokeWeight(4);
    text("<3", width / 2, height / 2);
  }

  function keyPressed() {
    if (state === 'title') {
      state = 'action'
    }
  }
}
