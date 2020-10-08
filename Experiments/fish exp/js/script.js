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
  reeled: 0,
  caught: 0
};

let fish2 = {
  x: undefined,
  y: undefined,
  size: undefined,
  vx: 0,
  vy: 0,
  speed: 1.5,
  reeled: 0,
  caught: 0
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



// Description of setup() goes here.==========================================
function setup() {
  createCanvas(500, 500);


setFish1()
setFish2()

let offscreenx = [-100, width + 100]
let offscreeny = [-100, height + 100]
}
// Description of draw() goes here.==========================================
function draw() {
  background(0);
  console.log(`hookDown: ${hookDown}`);

  imageMode(CENTER);
  image(rod, mouseX, mouseY, 200, 200);
  setHook();
  dropHook();

  spawnFish1();
  spawnFish2();

  checkOffScreen();

  if (fish1.reeled = 1) {
    reelFish1()
    catchFish1()
  }
  else if (fish2.reeled = 1) {
    reelFish2()
    catchFish2()
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

  function checkOffScreen() {
    if (
      fish1.x > width + 200 ||
      fish1.x < -200 ||
      fish1.y > height + 200 ||
      fish1.y < -200
    ) {
      setFish1();
    }
    if (
      fish2.x > width + 200 ||
      fish2.x < -200 ||
      fish2.y > height + 200 ||
      fish2.y < -200
    ) {
      setFish2();
    }
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
      let droppedhook = {
        x: hook.x,
        y: hook.y,
      };
      fill(255, 0, 0);
      ellipse(droppedhook.x, droppedhook.y, hook.size);
      stroke(150)
      line(droppedhook.x, droppedhook.y, mouseX + 70, mouseY - 70)
    dropx = droppedhook.x
    dropy = droppedhook.y
    }
  }

  function checkDist() {
    d1 = dist(droppedhook.x, droppedhook.y, fish1.x, fish1.y)
    d2 = dist(droppedhook.x, droppedhook.y, fish2.x, fish2.y)
    if (d1 < 20) {
      fish1.reeled = 1
    }
    else if (d2 < 20) {
      fish2.reeled = 1
    }
  }

  function reelFish1() {
    fish1.x = dropx
    fish1.y = dropy
}

  function reelFish2() {
    fish2.x = dropx
    fish2.y = dropy
}

  function catchFish1() {
    fish1.x = random(offscreenx)
    fish1.y = random(offscreeny)
  }

  function catchFish2() {
    fish2.x = random(offscreenx)
    fish2.y = random(offscreeny)
  }


  //Checks if hook is dropped or on rod
  function mousePressed() {
    if (hookDown === 0) {
      hookDown = 1;
    } else if (hookDown === 1) {
      hookDown = 0;
    }
    if (fish1.reeled = 1) {
      fish1.caught = 1
    }
    if (fish2.reeled = 1) {
      fish2.caught = 1
    }
  }
