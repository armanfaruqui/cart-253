/**************************************************
Fishing
Arman Faruqui
Song: https://seventhsage.bandcamp.com/track/lofi-dire-dire-docks-to-study-play-mario-64-to
Code for fireflies excavated from: https://github.com/anushreedas/fireflies
Art inspired by Made in Abyss, Houseki no Kuni, and Mob Psycho 100
**************************************************/
p5.disableFriendlyErrors = true; // disables FES

let fish1 = {
  x: undefined,
  y: undefined,
  size: undefined,
  vx: 0,
  vy: 0,
  speed: 2.5,
  reeled: 0,
  caught: 0,
};

let fish2 = {
  x: undefined,
  y: undefined,
  size: undefined,
  vx: 0,
  vy: 0,
  speed: 2.5,
  reeled: 0,
  caught: 0,
};

let hook = {
  x: 0,
  y: 0,
  size: 10,
};

let droppedhook = {
  x: undefined,
  y: undefined,
};

let brx = 800; //General Dimensions of lake
let blx = 60;
let tlx = 60;
let trx = 800;
let bry = 500;
let bly = 500;
let tly = 50;
let trry = 60;
let padding = 150;

let hookDown = 0;
let splash = undefined

let grass; // Image variables
let pool;
let rod;

let fireflies = []; //Fireflies variables
var pathTime = 0;
var glowTimer = 0;
var direction = 3;
var angle = 0;
var z = 0;
var expandContract = 0;
var direction2 = 3;
var pathTime2 = 0;
var pos;
var maxFlies = 40;

let pinkeen = 0; // Variables for the different fish
let acanphurus = 0;
let hamashirama = 0;
let ventricocus = 0;
let whatisthat = 0;

function preload() {
  pool = loadImage("assets/images/purplewater.gif");
  grass = loadImage("assets/images/grass.png");
  rod = loadImage("assets/images/rod.png");
  acan = loadImage("assets/images/acanphurus.png");
  hama = loadImage("assets/images/hamashirama.png");
  shark = loadImage("assets/images/shark.png");
  vent = loadImage("assets/images/ventricocus.png");
  pink = loadImage("assets/images/pinkeen.png");
  ssplash = loadSound("assets/sounds/smallsplash.mp3");
  bsplash = loadSound("assets/sounds/bigsplash.mp3");
  reelsound = loadSound("assets/sounds/reel.mp3");
  diresong = loadSound("assets/sounds/diresong.mp3");
  pinksound = loadSound("assets/sounds/pinksound.mp3");
  acansound = loadSound("assets/sounds/acansound.mp3");
  hamasound = loadSound("assets/sounds/hamasound.mp3");
  ventsound = loadSound("assets/sounds/ventsound.mp3");
  sharksound = loadSound("assets/sounds/sharksound.mp3");
}

// Description of setup() goes here============================================
function setup() {
  createCanvas(windowWidth, windowHeight);

  setFish1(); //Sets position of fish
  setFish2();

  diresong.loop(); //Background song

  dim = 15;
  push();
  ellipseMode(RADIUS); // Sets up positions of fireflies
  frameRate(100);
  for (var j = 0; j < maxFlies; j++)
    fireflies[j] = new firefly(random(0, windowWidth), random(0, windowHeight));
  pop();
}

// Description of draw() goes here=============================================
function draw() {
  background(150);

  console.log(`hookDown: ${hookDown}`);
  //console.log(`pink: ${pinkeen}`);
  //console.log(`vent: ${ventricocus}`);
  //console.log(`shark: ${whatisthat}`);

  moveFish1();
  moveFish2(); //Controls movement of fish

  checkDist(); // Checks if fish gets within catching range
  checkOffScreen(); // Repositions fish if they go too far

  baitFish1();  // Moves fish towards hook with user input if within range
  baitFish2();

  scareFish1()
  scareFish2()

  if (fish1.reeled === 1) {
    reelFish1(); //Attatches fish to hook
  }
  if (fish1.caught === 1) {
    checkFish1(); // Checks which fish you caught
    catchFish1(); // Catches the fish
    fish1.caught = 0;
  }
  if (fish2.reeled === 1) {
    reelFish2();
  }
  if (fish2.caught === 1) {
    checkFish2();
    catchFish2();
    fish2.caught = 0;
  }
  // Lake
  push();
  imageMode(CENTER);
  tint(255, 188);
  image(pool, 400, 280, 750, 750);
  pop();
  // Background
  push();
  imageMode(CORNER);
  image(grass, 0, 0, windowWidth, windowHeight);
  pop();

  setHook(); // Sets position of hook on rod
  dropHook(); // Drops hook into water

  push();
  imageMode(CENTER);
  image(rod, mouseX, mouseY, 200, 200); //  Displays rod
  pop();

  push();
  fill(145, 126, 97);
  stroke(74, 63, 47);
  strokeWeight(10);
  rect(900, 300, 300, 400);
  textSize(32);
  text("Last Caught Fish", 930, 340);  // Displays sign
  pop();

  push()
  fill(10, 150)
  rect(980, -10, 300, 60);
  fill(255, 150)
  textSize(12);
  text("Click to drop and reel back your hook", 988, 12); //Displays instructions
  text("Hold WASD to bait the fish towards you", 988, 30)
  text("if it comes close enough", 988, 42);
  pop()

  //  Displays last caught fish and plays their cry
  push();
  if (pinkeen === 1) {
    displayPinkeen();
  }
  if (acanphurus === 1) {
    displayAcanphurus();
  }
  if (ventricocus === 1) {
    displayVentricocus();
  }
  if (hamashirama === 1) {
    displayHamashirama();
  }
  if (whatisthat === 1) {
    displaywhatisthat();
  }
  pop();

  // Controls fireflies movement and appearance
  push();
  noStroke();
  //var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = floor(random(windowWidth));
  var y = floor(random(windowHeight));
  pop();

  for (var j = 0; j < maxFlies; j++) drawFlies(fireflies[j].x, fireflies[j].y);

  glowTimer++;
  if (parseInt(glowTimer) % 2 == 0) {
    if (expandContract == 0) {
      dim -= 0.5;
      z++;
      if (z == 3) expandContract = 1;
    } else if (expandContract == 1) {
      dim += 0.5;
      z--;
      if (z == 0) expandContract = 0;
    }
  }

  for (var j = 0; j < maxFlies; j++) fireflies[j].changeDir();
  for (var j = 0; j < maxFlies; j++) fireflies[j].Move(fireflies[j].dir);
} //===========================================================================

//Sets spawn position of fish 1
function setFish1() {
  fish1.x = random(tlx - (1 / 3) * padding, trx + (1 / 3) * padding);
  fish1.y = random(trry - (1 / 3) * padding, bry + (1 / 3) * padding);
  fish1.size = random(40, 85);
}
// Sets spawn point for fish 2
function setFish2() {
  fish2.x = random(tlx - (1 / 3) * padding, trx + (1 / 3) * padding);
  fish2.y = random(trry - (1 / 3) * padding, bry + (1 / 3) * padding);
  fish2.size = random(40, 85);
}

// Controls fish 1 movement
function moveFish1() {
  let change = random();
  if (change < 0.05 && hookDown === 0) {
    fish1.vx = random(-fish1.speed, fish1.speed);
    fish1.vy = random(-fish1.speed, fish1.speed);
  }
  if (hookDown === 1) {
    if (fish1.x > hookDown.x) {
      fish1.vx = fish1.speed;
    }
    if (fish1.x < hookDown.x) {
      fish1.vx = -fish1.speed;
    }
    if (fish1.y > hookDown.y) {
      fish1.vy = fish1.speed;
    }
    if (fish1.y < hookDown.y) {
      fish1.vy = -fish1.speed;
    }
  }
  fish1.x += fish1.vx;
  fish1.y += fish1.vy;

  fill(0);
  noStroke();
  ellipse(fish1.x, fish1.y, fish1.size);
}
// Controls fish 2 movement
function moveFish2() {
  let change = random();
  if (change < 0.05) {
    fish2.vx = random(-fish2.speed, fish2.speed);
    fish2.vy = random(-fish2.speed, fish2.speed);
  }
  fish2.x += fish2.vx;
  fish2.y += fish2.vy;
  fill(0);
  noStroke();
  ellipse(fish2.x, fish2.y, fish2.size);
}


// Checks if fish gets within catching range
function checkDist() {
  d1 = dist(droppedhook.x, droppedhook.y, fish1.x, fish1.y);
  d2 = dist(droppedhook.x, droppedhook.y, fish2.x, fish2.y);
  if (d1 < 15) {
    fish1.reeled = 1;
  }
  if (d2 < 15) {
    fish2.reeled = 1;
  }
}

// Repositions fish if they go too far
function checkOffScreen() {
  if (
    fish1.x > trx + (3 / 4) * padding ||
    fish1.x < blx - (3 / 4) * padding ||
    fish1.y > bly + (3 / 4) * padding ||
    fish1.y < tly - (3 / 4) * padding
  ) {
    setFish1();
  }
  if (
    fish2.x > trx + (3 / 4) * padding ||
    fish2.x < blx - (3 / 4) * padding ||
    fish2.y > bly + (3 / 4) * padding ||
    fish2.y < tly - (3 / 4) * padding
  ) {
    setFish2();
  }
}
// Moves fish towards hook with user input if within range
function baitFish1() {
  if (d1 < 125 && hookDown === 1) {
    if (keyIsDown(68)) {
      fish1.x += 2;
    }
    if (keyIsDown(65)) {
      fish1.x -= 2;
    }
    if (keyIsDown(87)) {
      fish1.y -= 2;
    }
    if (keyIsDown(83)) {
      fish1.y += 2;
    }
  }
}

function baitFish2() {
  if (d2 < 125 && hookDown === 1) {
    if (keyIsDown(68)) {
      fish2.x += 2;
    }
    if (keyIsDown(65)) {
      fish2.x -= 2;
    }
    if (keyIsDown(87)) {
      fish2.y -= 2;
    }
    if (keyIsDown(83)) {
      fish2.y += 2;
    }
  }
}
// Attatches fish to hook
function reelFish1() {
  fish1.x = droppedhook.x;
  fish1.y = droppedhook.y;
  hook.size = 0;
}
// Attatches fish to hook
function reelFish2() {
  fish2.x = droppedhook.x;
  fish2.y = droppedhook.y;
  hook.size = 0;
}

// Catches the fish
function catchFish1() {
  fish1.x = width + 100;
  fish1.y = height + 100;
  fish1.reeled = 0;
  hook.size = 10;
}
// Catches the fish
function catchFish2() {
  fish2.x = -100;
  fish2.y = height + 100;
  fish2.reeled = 0;
  hook.size = 10;
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
      splash = 1

    droppedhook.x = hook.x;
    droppedhook.y = hook.y;
    fill(255, 0, 0);
    ellipse(droppedhook.x, droppedhook.y, hook.size);
    stroke(150);
    line(droppedhook.x, droppedhook.y, mouseX + 70, mouseY - 70);
    for (let o = 0; o < 5; o++ ){
    splash = 0
  }
}
}

function scareFish1() {
  if (d1 < 40 && splash === 1) {
    setFish1()
  }
}

function scareFish2() {
  if (d1 < 40 && splash === 1) {
    setFish2()
  }
}

function mousePressed() {
  if (
    hookDown === 0 &&
    mouseX > 0 &&
    mouseX < trx - 2/3*padding && //  Checks if user is hovering over the water
    mouseY > tly &&
    mouseY < bly + padding

  ) {
    // Toggles hookDown
    hookDown = 1;
    reelsound.play();
    ssplash.play();
  } else if (hookDown === 1) {
    hookDown = 0;
    reelsound.play();
  }
  if (fish1.reeled === 1) {
    //Catches reeled fish
    fish1.caught = 1;
    bsplash.play();
  }
  if (fish2.reeled === 1) {
    fish2.caught = 1;
    bsplash.play();
  }
}

class firefly {
  constructor(X, Y) {
    this.x = X;
    this.y = Y;
    this.dir = parseInt(random(0, 5));
    this.pathTime = 0;
    this.up = random(100, 1000);
  }
  changeDir() {
    this.pathTime++;

    if (this.pathTime > this.up) {
      this.dir = parseInt(random(0, 5));
      this.up = random(100, 1000);
      this.pathTime = 0;
    }
  }

  Move(i) {
    angle = random(-0.5, 0.5);
    if (
      this.x < 0 &&
      this.x > windowWidth &&
      this.y < 0 &&
      this.y > windowHeight
    )
      this.pathTime = 10000;
    else {
      if (i == 1) {
        this.x += 0.5;
        this.y += angle;
      } else if (i == 2) {
        this.x -= 0.5;
        this.y += angle;
      } else if (i == 3) {
        this.y += 0.5;
        this.x += angle;
      } else if (i == 4) {
        this.y -= 0.5;
        this.x += angle;
      }
    }
  }
}

function drawFlies(X, Y) {
  push();
  var radius = dim / 2;
  var from = color(255, 255, 0, 0.2 * 255);
  var to = color(0, 255, 255, 0.2 * 255);
  col = lerpColor(from, to, 0.33);
  for (var r = radius; r > 0; r -= 1) {
    fill(col, 90, 90);
    ellipse(X, Y, r, r); //console.log(r);
    pop();
  }
}

function checkFish1() {
  if (fish1.size > 39 && fish1.size < 54) {
    pinksound.play();
    pinkeen = 1;
    acanphurus = 0;
    hamashirama = 0;
    ventricocus = 0;
    whatisthat = 0;
  }
  if (fish1.size > 53 && fish1.size < 65) {
    acansound.play();
    pinkeen = 0;
    acanphurus = 1;
    hamashirama = 0;
    ventricocus = 0;
    whatisthat = 0;
  }
  if (fish1.size > 64 && fish1.size < 72) {
    ventsound.play();
    pinkeen = 0;
    acanphurus = 0;
    hamashirama = 0;
    ventricocus = 1;
    whatisthat = 0;
  }
  if (fish1.size > 71 && fish1.size < 83) {
    hamasound.play();
    pinkeen = 0;
    acanphurus = 0;
    hamashirama = 1;
    ventricocus = 0;
    whatisthat = 0;
  }
  if (fish1.size > 82) {
    sharksound.play();
    pinkeen = 0;
    acanphurus = 0;
    hamashirama = 0;
    ventricocus = 0;
    whatisthat = 1;
  }
}

function checkFish2() {
  if (fish2.size > 39 && fish2.size < 54) {
    pinksound.play();
    pinkeen = 1;
    acanphurus = 0;
    hamashirama = 0;
    ventricocus = 0;
    whatisthat = 0;
  }
  if (fish2.size > 53 && fish2.size < 65) {
    acansound.play();
    pinkeen = 0;
    acanphurus = 1;
    hamashirama = 0;
    ventricocus = 0;
    whatisthat = 0;
  }
  if (fish2.size > 64 && fish2.size < 72) {
    ventsound.play();
    pinkeen = 0;
    acanphurus = 0;
    hamashirama = 0;
    ventricocus = 1;
    whatisthat = 0;
  }
  if (fish2.size > 71 && fish2.size < 83) {
    hamasound.play();
    pinkeen = 0;
    acanphurus = 0;
    hamashirama = 1;
    ventricocus = 0;
    whatisthat = 0;
  }
  if (fish2.size > 82) {
    sharksound.play();
    pinkeen = 0;
    acanphurus = 0;
    hamashirama = 0;
    ventricocus = 0;
    whatisthat = 1;
  }
}

function displayPinkeen() {
  image(pink, 940, 340, 220, 180);
  textStyle(ITALIC);
  textFont("Helvetica");
  fill(74, 63, 47);
  let pinkdesc1 = "Name: Pinkeen";
  let pinkdesc2 = "Avg Length: 10 inches	Avg Weight 2.7kg";
  let pinkdesc3 =
    "The most common fish found in these waters. Their eggs grow externally and hang from their body. Quite the delicacy in these areas.";
  text(pinkdesc1, 930, 500, 250, 200);
  text(pinkdesc2, 930, 520, 250, 200);
  text(pinkdesc3, 930, 540, 250, 200);
}

function displayAcanphurus() {
  image(acan, 950, 350, 180, 180);
  textStyle(ITALIC);
  textFont("Helvetica");
  fill(74, 63, 47);
  let acandesc1 = "Name: Acanphurus";
  let acandesc2 = "Avg Length: 15 inches	Avg Weight: 6.4kg";
  let acandesc3 =
    "These fish are renowned for their round shape, furry hair, and their large bug like eye. Often found in aquariums to attract visitors with their charmingly cute appearance.";
  text(acandesc1, 930, 520, 250, 200);
  text(acandesc2, 930, 540, 250, 200);
  text(acandesc3, 930, 560, 250, 200);
}

function displayVentricocus() {
  image(vent, 920, 340, 270, 200);
  textStyle(ITALIC);
  textFont("Helvetica");
  fill(74, 63, 47);
  let ventdesc1 = "Name: Ventricocus";
  let ventdesc2 = "Avg Length: 22 inches	Avg Weight: 1kg";
  let ventdesc3 =
    "Identified as ‘sea snails’, Ventricoci can sometimes be found roaming the land around their waters. They are as smart as they are slimy, known for their spatial awareness and their bodily kinesthetic intelligence";
  text(ventdesc1, 930, 530, 250, 200);
  text(ventdesc2, 930, 550, 250, 200);
  text(ventdesc3, 930, 570, 250, 200);
}

function displayHamashirama() {
  image(hama, 910, 330, 275, 200);
  textStyle(ITALIC);
  textFont("Helvetica");
  fill(74, 63, 47);
  let hamadesc1 = "Name: Hamashirama";
  let hamadesc2 = "Avg Length: 31 inches	Avg Weight: 14kg";
  let hamadesc3 =
    "These violent creatures use their powerful tongues to pierce their prey to enable sucking of blood and internal organs. However, they are harmless when out of the water, so happy fishing!";
  text(hamadesc1, 930, 520, 250, 200);
  text(hamadesc2, 930, 540, 250, 200);
  text(hamadesc3, 930, 560, 250, 200);
}

function displaywhatisthat() {
  image(shark, 900, 360, 300, 220);
  textStyle(ITALIC);
  textFont("Helvetica");
  fill(74, 63, 47);
  let sharkdesc1 = "Name: Unknown";
  let sharkdesc2 = "Avg Length: ??? Avg Weight: ???";
  let sharkdesc3 = "Only talked about in myths. ";
  text(sharkdesc1, 930, 590, 250, 200);
  text(sharkdesc2, 930, 610, 250, 200);
  text(sharkdesc3, 930, 630, 250, 200);
}
