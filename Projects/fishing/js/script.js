/**************************************************
Fishing
Arman Faruqui

**************************************************/
let comment = "You got this!"

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

//General Dimensions of lake
let brx = 800;
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

// Image variables
let grass;
let pool;
let rod;

//Fireflies variables
let fireflies = [];
var pathTime = 0;
var glowTimer = 0;
var direction = 3;
var angle = 0;
var z = 0;
var expandContract = 0;
var direction2 = 3;
var pathTime2 = 0;
var pos;
var maxFlies = 10;

// Variables for the different fish
let goldFish = 0;
let kingFish = 0;
let pike = 0;
let bettaFish = 0;

function preload() {
  pool = loadImage("assets/images/pixelwater.gif");
  grass = loadImage("assets/images/pixelgrass.png");
  rod = loadImage("assets/images/fishing_rod.png");
  king = loadImage("assets/images/pixelfish1.png");
  nPike = loadImage("assets/images/pixelfish4.png");
  betta = loadImage("assets/images/pixelfish3.png");
  gold = loadImage("assets/images/pixelfish2.png");
  smallSplash = loadSound("assets/sounds/smallsplash.mp3");
  bigSplash = loadSound("assets/sounds/bigsplash.mp3");
  reelsound = loadSound("assets/sounds/reel.mp3");
  song = loadSound("assets/sounds/diredocks.mp3");
  goldsound = loadSound("assets/sounds/pinksound.mp3");
  kingsound = loadSound("assets/sounds/acansound.mp3");
  nPikesound = loadSound("assets/sounds/hamasound.mp3");
  bettasound = loadSound("assets/sounds/ventsound.mp3");
  myFont = loadFont("assets/font/press_start.ttf");
}

// Description of setup() goes here============================================
function setup() {
  createCanvas(windowWidth, windowHeight);

  //Sets position of fish
  setFish1();
  setFish2();

  //Background song
  song.loop();

  // Sets up positions of fireflies
  dim = 15;
  push();
  ellipseMode(RADIUS);
  frameRate(100);
  for (var j = 0; j < maxFlies; j++)
    fireflies[j] = new firefly(random(0, windowWidth), random(0, windowHeight));
  pop();
}

// Description of draw() goes here=============================================
function draw() {
  background(150);

  console.log(`hookDown: ${hookDown}`);

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
  image(pool, 400, 280, 750, 700);
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
  image(rod, mouseX, mouseY, 138, 138); //  Displays rod
  pop();

  push();
  fill(145, 126, 97);
  stroke(74, 63, 47);
  strokeWeight(10);
  rect(900, 300, 300, 400);
  textSize(17);
  textFont(myFont)
  text("Last Caught Fish", 915, 340);  // Displays sign
  pop();

  push()
  fill(10, 150)
  rect(780, -10, 600, 90);
  fill(255, 150)
  textSize(12);
  textFont(myFont)
  text("Click to drop and reel back your hook", 800, 18); //Displays instructions
  text("Hold WASD to bait the fish towards you", 800, 50)
  text("if it comes close enough", 800, 68);
  pop()

  //  Displays last caught fish and plays their cry
  push();
  if (goldFish === 1) {
    displayGoldFish();
  }
  if (kingFish === 1) {
    displayKingFish();
  }
  if (bettaFish === 1) {
    displayBettaFish();
  }
  if (pike === 1) {
    displayPike();
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

    textBox()
    displayText()
} //===========================================================================

//Sets spawn position of fish 1
function setFish1() {
  fish1.x = random(tlx - (1 / 3) * padding, trx + (1 / 3) * padding);
  fish1.y = random(trry - (1 / 3) * padding, bry + (1 / 3) * padding);
  fish1.size = random(40, 80);
}
// Sets spawn point for fish 2
function setFish2() {
  fish2.x = random(tlx - (1 / 3) * padding, trx + (1 / 3) * padding);
  fish2.y = random(trry - (1 / 3) * padding, bry + (1 / 3) * padding);
  fish2.size = random(40, 80);
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
    smallSplash.play();
  } else if (hookDown === 1) {
    hookDown = 0;
    reelsound.play();
  }
  if (fish1.reeled === 1) {
    //Catches reeled fish
    fish1.caught = 1;
    bigSplash.play();
  }
  if (fish2.reeled === 1) {
    fish2.caught = 1;
    bigSplash.play();
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
    fill(255, 250, 110);
    ellipse(X, Y, r, r); //console.log(r);
    pop();
  }
}

function checkFish1() {
  if (fish1.size > 39 && fish1.size < 54) {
    goldsound.play();
    goldFish = 1;
    kingFish = 0;
    pike = 0;
    bettaFish = 0;
    GoldFishText()
  }

  if (fish1.size > 53 && fish1.size < 65) {
    kingsound.play();
    goldFish = 0;
    kingFish = 1;
    pike = 0;
    bettaFish = 0;
  }
  if (fish1.size > 64 && fish1.size < 72) {
    bettasound.play();
    goldFish = 0;
    kingFish = 0;
    pike = 0;
    bettaFish = 1;
  }
  if (fish1.size > 71 && fish1.size < 83) {
    nPikesound.play();
    goldFish = 0;
    kingFish = 0;
    pike = 1;
    bettaFish = 0;
  }

}

function checkFish2() {
  if (fish2.size > 39 && fish2.size < 54) {
    goldsound.play();
    goldFish = 1;
    kingFish = 0;
    pike = 0;
    bettaFish = 0;
  }
  if (fish2.size > 53 && fish2.size < 65) {
    kingsound.play();
    goldFish = 0;
    kingFish = 1;
    pike = 0;
    bettaFish = 0;
  }
  if (fish2.size > 64 && fish2.size < 72) {
    bettasound.play();
    goldFish = 0;
    kingFish = 0;
    pike = 0;
    bettaFish = 1;
  }
  if (fish2.size > 71 && fish2.size < 83) {
    nPikesound.play();
    goldFish = 0;
    kingFish = 0;
    pike = 1;
    bettaFish = 0;
  }
}

function displayGoldFish() {
  image(gold, 940, 380, 200, 170);
  textStyle(ITALIC);
  textFont(myFont)
  fill(74, 63, 47);
  let golddesc1 = "Name: Fantail Goldfish";
  text(golddesc1, 930, 600, 250, 200);
}

function displayKingFish() {
  image(king, 930, 400, 240, 120);
  textStyle(ITALIC);
  textFont(myFont)
  fill(74, 63, 47);
  let kingdesc1 = "Name: King Mackerel";
  text(kingdesc1, 930, 600, 250, 200);
}

function displayBettaFish() {
  image(betta, 920, 380, 250, 190);
  textStyle(ITALIC);
  textFont(myFont)
  fill(74, 63, 47);
  let bettaName = "Name: Betta Fish";
  text(bettaName, 930, 600, 250, 200);

}

function displayPike() {
  image(nPike, 910, 350, 275, 200);
  textStyle(ITALIC);
  textFont(myFont)
  fill(74, 63, 47);
  let nPikeName = "Name: Northern Pike";
  text(nPikeName, 930, 600, 250, 200);
}

function textBox() {
  fill(255);
  rect(812, 122, 421, 116, 10);
  fill(0);
  rect(820, 130, 405, 100);
  textFont(myFont);
}

function GoldFishText() {
  fill(65, 243, 252);
  textSize(12);
  textFont(myFont)
  comment = "It's a goldfish. I think my pet Goldie could do with a friend";
  text(comment, 840, 150, 405, 80);
  }

function KingFishText() {
  fill(65, 243, 252);
  textSize(12);
  textFont(myFont)
  comment = "That one's a King Fish. They are among the most sought-after gamefish in the country!";
  text(comment, 840, 150, 405, 80);
  }

function PikeText() {
  fill(65, 243, 252);
  textSize(12);
  textFont(myFont)
  comment = "Wow you caught a Pike! Be careful of its sharp teeth. They're the predators of these waters";
  text(comment, 840, 150, 405, 80);
  }

function BettaText() {
  fill(65, 243, 252);
  textSize(12);
  textFont(myFont)
  comment = "Look how beautiful that Betta Fish is. I'm seeing a lot fewer of them in these waters so lets put it back ";
  text(comment, 840, 150, 405, 80);
  }

  function displayText(){
    if (goldFish === 1){
      GoldFishText()
    }
    else if(kingFish === 1){
      KingFishText()
    }
    else if(pike === 1){
      PikeText()
    }
    else if(bettaFish === 1){
      BettaText()
    }
  }
