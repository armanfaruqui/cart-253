"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
//objects
let paddle;
let carpet;
let food;
let ball;

let carpetClean;
let carpetDirty;
let cleaner;
let bg;
let ketchup;
let bowl;
let bowlfull;

//ball variables
let balls = [];
let numballs = 1;

let state = "start";

function preload() {
  carpetClean = loadImage("assets/images/carpet.png");
  carpetDirty = loadImage("assets/images/carpet dirty.png");
  cleaner = loadImage("assets/images/cleaner.png");
  bg = loadImage("assets/images/home.jpg");
  ketchup = loadImage("assets/images/ketchup.png");
  bowl = loadImage("assets/images/bowl.png");
  bowlfull = loadImage("assets/images/bowlfull.png");
}

//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle = new Paddle(300, 20);
  carpet = new Carpet(carpetClean, carpetDirty, cleaner);
  food = new Food(bowl, bowlfull, ketchup);
  ball = new Ball()

  for (let i = 0; i < numballs; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let ball = new Ball(x, y);
    balls.push(ball);
  }
}

// Description of draw() goes here.
function draw() {
  background(0);
  console.log(state)

  if (state === "start") {
    instructions();
  }

  if (state === "game") {
    push();
    tint(255, 126); // Apply transparency without changing color
    image(bg, 0, 0, width, height);
    pop();

    paddle.move();
    paddle.display();

    for (let i = 0; i < balls.length; i++) {
      let ball = balls[i];
      ball.gravity(ball.gravityForce);
      ball.move();
      ball.bounce(paddle);
      ball.display();
    }

    carpet.display();
    food.display();

    ball.checkIfMissed()
  }
 else if (state === "neglect"){
   neglectedChild();
 }
}

function mousePressed() {
  carpet.mousePressed();
  food.mousePressed();
  if (state === "start") {
    state = "game";
  }
}

function instructions() {
  push();
  fill(255);
  textSize(20);
  text(
    " 27th May 2023, Monday, 13:48 PM It's exam season season in this household Make sure there is food available and a clean environment each time there is a study session",
    910,
    windowHeight / 2 + 150,
    350,
    500
  );

  pop();
}

function checkIfMissed() {
  if (ball.y > 500 && state === 'game'){
    state = "neglect"
  }
}

function neglectedChild(){
  push();
  fill(255);
  textSize(20);
  text(
    "You neglected your childs basic needs. You definetly don't have what it takes to be a parent",
    windowWidth / 2,
    windowHeight / 2,
    350,
    350
  );

  pop();
}
