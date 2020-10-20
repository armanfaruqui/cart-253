/**************************************************
Exercise: Age of Aquariums

Joyride
**************************************************/

"use strict";

let user = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  accelaration: 0.5,
  maxspeed: 1,
};
// Lights
let redschool = [];
let greenschool = [];
let greenschoolSize = 8;
let redschoolSize = 6;

// Arrays for distance between user and lights
let redDistance = [];
let greenDistance = [];

// Variables for lights
let minspeed = 0.5;
let maxspeed = 16.9;
let d = 30;
let changespeed = 2;
let velocity = 0;

let state = "game";
let car;
let song;

function preload() {
  car = loadImage("assets/images/car.png");
  map = loadImage("assets/images/map.jpg");
  song = loadSound("assets/sounds/tokyo.mp3")
}

//=============================================================================
function setup() {
  createCanvas(windowWidth, windowHeight);

  song.loop()

  for (let i = 0; i < redschoolSize; i++) {
    redschool[i] = createLight(random(0, width), random(0, height));
  }

  for (let i = 0; i < greenschoolSize; i++) {
    greenschool[i] = createLight(random(0, width), random(0, height));
  }
}

function createLight(x, y) {
  let light = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2,
  };
  return light;
}

// draw()
//=============================================================================
function draw() {
  background(0);

  push(); //bakcground
  imageMode(CORNER);
  tint(0, 153, 204, 126);
  image(map, 0, 0, windowWidth, windowHeight);
  pop();

  if (state === "game") {
    controlUser();
    displayUser();

    console.log(user.maxspeed);

    greenDist();
    redDist();
    checkWin();

    push();
    fill(10, 150);
    rectMode(CENTER);
    rect(windowWidth / 2 + 50, 30, 400, 60);

    textSize(32);  //records max speed
    fill(255);
    text(user.maxspeed + " " + "km/h", 500, 30);
    pop();

    for (let i = 0; i < redschool.length; i++) {
      moveLight(redschool[i]);
      displayRedLight(redschool[i]);
    }
    for (let i = 0; i < greenschool.length; i++) {
      moveLight(greenschool[i]);
      displayGreenLight(greenschool[i]);
    }
  }

  if (state === "lose") {
    push();
    textSize(70);
    textAlign(CENTER);
    fill(255);
    text("You got a speeding ticket", windowWidth / 2, windowHeight / 2);
    pop();
  }

  if (state === "win") {
    push();
    textSize(70);
    textAlign(CENTER);
    fill(255);
    text("Adrenaline Rush = Reached", windowWidth / 2, windowHeight / 2);
    pop();
  }
}

// Chooses whether the provided light changes direction and moves it
function moveLight(light) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.1) {
    light.vx = random(-light.speed, light.speed);
    light.vy = random(-light.speed, light.speed);
  }

  // Move the light
  light.x = light.x + light.vx;
  light.y = light.y + light.vy;

  // Constrain the light to the canvas
  light.x = constrain(light.x, 0, width);
  light.y = constrain(light.y, 0, height);
}

// Displays the provided light on the canvas
function displayRedLight(light) {
  push();
  fill(255, 0, 0);
  noStroke();
  ellipse(light.x, light.y, light.size);
  pop();
}

function displayGreenLight(light) {
  push();
  fill(0, 255, 0);
  noStroke();
  ellipse(light.x, light.y, light.size);
  pop();
}

function controlUser() {
  if (mouseX < user.x) {
    user.ax = -user.accelaration;
  } else {
    user.ax = user.accelaration;
  }
  if (mouseY < user.y) {
    user.ay = -user.accelaration;
  } else {
    user.ay = user.accelaration;
  }
  //Movement properties of user
  user.vx = user.vx + user.ax;
  user.vx = constrain(user.vx, -user.maxspeed, user.maxspeed);
  user.vy = user.vy + user.ay;
  user.vy = constrain(user.vy, -user.maxspeed, user.maxspeed);

  user.x = user.x + user.vx;
  user.y = user.y + user.vy;
}

function displayUser() {
  imageMode(CENTER);
  image(car, user.x, user.y, 80, 80);
}

function greenDist() {
  for (let i = 0; i < greenschool.length; i++) {
    greenDistance[i] = dist(greenschool[i].x, greenschool[i].y, user.x, user.y);
    if (greenDistance[i] < d) {
      greenschool[i].x = -1000;
      greenschool[i].y = -1000;
      greenschool[i].vx = 0
      greenschool[i].vy = 0
      greenschool[i].size = 0

      user.maxspeed = constrain(user.maxspeed, minspeed, maxspeed);
      user.maxspeed += changespeed;
    }
  }
}

function redDist() {
  for (let i = 0; i < redschool.length; i++) {
    redDistance[i] = dist(redschool[i].x, redschool[i].y, user.x, user.y);
    if (redDistance[i] < d && user.maxspeed > 1) {
      state = "lose";
    }
  }
}

function checkWin() {
  if (user.maxspeed > maxspeed) {
    state = "win";
  }
}
