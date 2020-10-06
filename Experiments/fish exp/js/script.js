/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let fish1 = {
  x: undefined,
  y: undefined,
  size: undefined,
  vx: 0,
  vy: 0,
  speed: 1.5,
};

let fish2 = {
  x: undefined,
  y: undefined,
  size: undefined,
  vx: 0,
  vy: 0,
  speed: 1.5,
};

let hook = {
  x: 0,
  y: 0,
  size: 10,
};

let hookDown = 0;

let rod;
function preload() {
  rod = loadImage("assets/images/rod.png");
}

// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);

  setFish1();
  setFish2();
}
// Description of draw() goes here.
function draw() {
  background(0);

  imageMode(CENTER);
  image(rod, mouseX, mouseY, 200, 200);
  setHook();

  spawnFish1();
  spawnFish2();
  checkOffScreen();
}

//function mousePressed() {
//  spawnFish2()
//}
function checkOffScreen() {
  if (fish1.x > width || fish1.x < 0 || fish1.y > height || fish1.y < 0) {
    spawnFish1();
  }
  if (fish2.x > width || fish2.x < 0 || fish2.y > height || fish2.y < 0) {
    spawnFish2();
  }
}
//Sets spawn position of fish 1
function setFish1() {
  fish1.x = random(100, 400);
  fish1.y = random(100, 400);
  fish1.size = random(40, 60);
}
// Controls fish 1 movement
function spawnFish1() {
  let change = random();
  if (change < 0.05) {
    fish1.vx = random(-fish1.speed, fish1.speed);
    fish1.vy = random(-fish1.speed, fish1.speed);
  }
  fish1.x += fish1.vx;
  fish1.y += fish1.vy;
  fill(255);
  noStroke();
  ellipse(fish1.x, fish1.y, fish1.size);
}
// Sets spawn point for fish 2
function setFish2() {
  fish2.x = random(100, 400);
  fish2.y = random(100, 400);
  fish2.size = random(40, 60);
}
// Controls fish 2 movement
function spawnFish2() {
  let change = random();
  if (change < 0.05) {
    fish2.vx = random(-fish2.speed, fish2.speed);
    fish2.vy = random(-fish2.speed, fish2.speed);
  }
  fish2.x += fish2.vx;
  fish2.y += fish2.vy;
  fill(255);
  noStroke();
  ellipse(fish2.x, fish2.y, fish2.size);
}
// Sets position of hook on rod
function setHook() {
  push();
  if (hookDown === 0) {
    hook.x = mouseX + 70;
    hook.y = mouseY - 70;
    fill(255, 0, 0);
    ellipse(hook.x, hook.y, hook.size);
    pop();
  }
}
// Drops hook into water
function dropHook() {
  if (hookDown === 1) {
    fill(255, 0, 0);
    ellipse(hook.x, hook.y, hook.size);
  }

  //Checks if hook is dropped or on rod
  function mousePressed() {
    if (hookDown === 0) {
      hookDown = 1;
    } else if (hookDown === 1) {
      hookDown = 0;
    }
  }
}
