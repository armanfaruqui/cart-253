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

//ball variables
let balls = [];
let numballs = 1;

let state = 'game'
let bg

//function preload() {
  //bg = loadImage("assets/images/home.jpg");
//}


//
// Description of setup() goes here.
function setup() {
createCanvas(windowWidth, windowHeight);


paddle = new Paddle(300, 20);
carpet = new Carpet();
food = new Food();
//food = new Food();

for (let i=0; i< numballs; i++){
  let x = random(0, width);
  let y = random(-400, -100);
  let ball = new Ball(x,y);
  balls.push(ball);
  }

}

// Description of draw() goes here.
function draw() {
  background(0);

  push()
  //tint(255, 126); // Apply transparency without changing color
//  image(bg,0,0, width, height)
  pop()

  paddle.move();
  paddle.display();

  for (let i=0; i<balls.length; i++) {
    let ball = balls[i];
    ball.gravity(ball.gravityForce);
    ball.move();
    ball.bounce(paddle);
    ball.display();
  }

  carpet.display()
  //food.display()
}


function mousePressed() {
  carpet.mousePressed()
  //food.mousePressed()
  }
