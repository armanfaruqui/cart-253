/**************************************************
Fishing
Arman Faruqui
This file is not part of the simulation but it is embedded within script.js
**************************************************/
let fish1;
let fish2;

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
let lake = {
 bottomRightX: 800,
 bottomLeftX: 60,
 topLeftx: 60,
 topRightX: 800,
 bottomRightY: 500,
 bottomLeftY: 500,
 topLeftY: 50,
 topRightY: 60,
 padding: 150,
}

let hookDown = 0; // Checks if hook is in water

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
  // Background images
  pool = loadImage("assets/images/pixelwater.gif");
  grass = loadImage("assets/images/pixelgrass.png");
  rod = loadImage("assets/images/fishing_rod.png");
  // Fish images
  king = loadImage("assets/images/pixelfish1.png");
  nPike = loadImage("assets/images/pixelfish4.png");
  betta = loadImage("assets/images/pixelfish3.png");
  gold = loadImage("assets/images/pixelfish2.png");
  // Fish sounds
  goldsound = loadSound("assets/sounds/pinksound.mp3");
  kingsound = loadSound("assets/sounds/acansound.mp3");
  nPikesound = loadSound("assets/sounds/hamasound.mp3");
  bettasound = loadSound("assets/sounds/ventsound.mp3");
  // Fishing sound effects
  smallSplash = loadSound("assets/sounds/smallsplash.mp3");
  bigSplash = loadSound("assets/sounds/bigsplash.mp3");
  reelsound = loadSound("assets/sounds/reel.mp3");
  song = loadSound("assets/sounds/diredocks.mp3");

  myFont = loadFont("assets/font/press_start.ttf");
}

//=============================================================================================================
function setup() {
  createCanvas(windowWidth, windowHeight);

  fish1 = createFish()
  fish2 = createFish()
  //Sets position of fish
  setFish(fish1);
  setFish(fish2);

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

  moveFish(fish1);
  moveFish(fish2); //Controls movement of fish

  checkDist(fish1); // Checks if fish gets within catching range
  checkDist(fish2);
  checkOffScreen(); // Repositions fish if they go too far

  baitFish(fish1); // Moves fish towards hook with user input if within range
  baitFish(fish2);

  scareFish(fish1)
  scareFish(fish2)

  checkAndCatchFish()

  displayLake()
  displayBackground()

  setHook(); // Sets position of hook on rod
  dropHook(); // Drops hook into water

  displayRod()

  displaySign()
  displayInstructions()

  //  Displays last caught fish and plays their cry
  displayFishOnSign()

  // Controls fireflies movement and appearance
  displayFireflies()

  textBox(); // Displays the black text box
  displayText(); //Displays the correct text onto the text box
} //===========================================================================

function displayLake(){
  push();
  imageMode(CENTER);
  tint(255, 188);
  image(pool, 400, 280, 750, 700);
  pop();
}

function displayBackground(){
  push();
  imageMode(CORNER);
  image(grass, 0, 0, windowWidth, windowHeight);
  pop();
}

function displayRod(){
  push();
  imageMode(CENTER);
  image(rod, mouseX, mouseY, 138, 138); //  Displays rod
  pop();
}

function displaySign(){
  push();
  fill(145, 126, 97);
  stroke(74, 63, 47);
  strokeWeight(10);
  rect(900, 300, 300, 400);
  textSize(17);
  textFont(myFont);
  text("Last Caught Fish", 915, 340);
  pop();
}

function displayInstructions(){
  push();
  fill(10, 150);
  rect(780, -10, 600, 90);
  fill(255, 150);
  textSize(12);
  textFont(myFont);
  text("Click to drop and reel back your hook", 800, 18); //Displays instructions
  text("Hold W or A or S or D to bait the fish ", 800, 50);
  text("towards you if it comes close enough", 800, 68);
  pop();
}

function displayFishOnSign(){
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
}

function displayFireflies(){
  push();
  noStroke();
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
}

// Defines fish objects/variable
function createFish() {
  let fish = {
    x: undefined,
    y: undefined,
    size: undefined,
    vx: 0,
    vy: 0,
    speed: 2.5,
    reeled: 0,
    caught: 0,
    d: undefined,
  };
  return fish;
}

//Sets spawn position of fish
function setFish(fish) {
  fish.x = random(lake.topLeftx - (1 / 3) * lake.padding, lake.topRightX + (1 / 3) * lake.padding);
  fish.y = random(lake.topRightY - (1 / 3) * lake.padding, lake.bottomRightY + (1 / 3) * lake.padding);
  fish.size = random(40, 80);
}

// Controls fish's movement
function moveFish(fish) {
  let change = random();
  if (change < 0.05 && hookDown === 0) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }
  if (hookDown === 1) {
    if (fish.x > hookDown.x) {
      fish.vx = fish.speed;
    }
    if (fish.x < hookDown.x) {
      fish.vx = -fish.speed;
    }
    if (fish.y > hookDown.y) {
      fish.vy = fish.speed;
    }
    if (fish.y < hookDown.y) {
      fish.vy = -fish.speed;
    }
  }
  fish.x += fish.vx;
  fish.y += fish.vy;

  fill(0);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
}

// Checks if fish gets within catching range
function checkDist(fish) {
  fish.d = dist(droppedhook.x, droppedhook.y, fish.x, fish.y);
  if (fish.d < 15) {
    fish.reeled = 1;
  }
}

// Repositions fish if they go too far
function checkOffScreen(fish) {
  if (
    fish1.x > lake.topRightX + (3 / 4) * lake.padding ||
    fish1.x < lake.bottomLeftX - (3 / 4) * lake.padding ||
    fish1.y > lake.bottomLeftY + (3 / 4) * lake.padding ||
    fish1.y < lake.topLeftY - (3 / 4) * lake.padding
  ) {
    setFish(fish1);
  }
  if (
    fish2.x > lake.topRightX + (3 / 4) * lake.padding ||
    fish2.x < lake.bottomLeftX - (3 / 4) * lake.padding ||
    fish2.y > lake.bottomLeftY + (3 / 4) * lake.padding ||
    fish2.y < lake.topLeftY - (3 / 4) * lake.padding
  ) {
    setFish(fish2);
  }
}

// Moves fish towards hook with user input if within range
function baitFish(fish) {
  if (fish.d < 125 && hookDown === 1 && !smallSplash.isPlaying()) {
    if (keyIsDown(68)) {
      fish.x += fish.speed - 0.2;
    }
    if (keyIsDown(65)) {
      fish.x -= fish.speed - 0.2;
    }
    if (keyIsDown(87)) {
      fish.y -= fish.speed - 0.2;
    }
    if (keyIsDown(83)) {
      fish.y += fish.speed - 0.2;
    }
  }
}

// Attatches fish to hook
function reelFish(fish) {
  fish.x = droppedhook.x;
  fish.y = droppedhook.y;
  hook.size = 0;
}

// Catches the fish
function catchFish(fish) {
  fish.x = width + 100;
  fish.y = height + 100;
  fish.reeled = 0;
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
    droppedhook.x = hook.x;
    droppedhook.y = hook.y;
    fill(255, 0, 0);
    ellipse(droppedhook.x, droppedhook.y, hook.size);
    stroke(150);
    line(droppedhook.x, droppedhook.y, mouseX + 70, mouseY - 70);
  }
}

function scareFish(fish) {
  if (fish.d < 40 && smallSplash.isPlaying()) {
    setFish(fish);
  }
}

//Checks which fish is caught,catches it, and spawns a new fish
function checkAndCatchFish(){
  if (fish1.reeled === 1) {
    reelFish(fish1); //Attatches fish to hook
  }
  if (fish1.caught === 1) {
    checkFish(fish1); // Checks which fish you caught
    catchFish(fish1); // Catches the fish
    fish1.caught = 0;
  }
  if (fish2.reeled === 1) {
    reelFish(fish2);
  }
  if (fish2.caught === 1) {
    checkFish(fish2);
    catchFish(fish2);
    fish2.caught = 0;
  }
}

function mousePressed() {
  if (
    hookDown === 0 &&
    mouseX > 0 &&
    mouseX < lake.topRightX - (2 / 3) * lake.padding && //  Checks if user is hovering over the water
    mouseY > lake.topLeftY &&
    mouseY < lake.bottomLeftY + lake.padding
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

function checkFish(fish) {
  if (fish.size > 39 && fish.size < 54) {
    goldsound.play();
    goldFish = 1;
    kingFish = 0;
    pike = 0;
    bettaFish = 0;
    textGoldfish();
  }

  if (fish.size > 53 && fish.size < 65) {
    kingsound.play();
    goldFish = 0;
    kingFish = 1;
    pike = 0;
    bettaFish = 0;
  }
  if (fish.size > 64 && fish.size < 72) {
    bettasound.play();
    goldFish = 0;
    kingFish = 0;
    pike = 0;
    bettaFish = 1;
  }
  if (fish.size > 71 && fish.size < 83) {
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
  textFont(myFont);
  fill(74, 63, 47);
  let golddesc1 = "Name: Fantail Goldfish";
  text(golddesc1, 930, 600, 250, 200);
}

function displayKingFish() {
  image(king, 930, 400, 240, 120);
  textStyle(ITALIC);
  textFont(myFont);
  fill(74, 63, 47);
  let kingdesc1 = "Name: King Mackerel";
  text(kingdesc1, 930, 600, 250, 200);
}

function displayBettaFish() {
  image(betta, 920, 380, 250, 190);
  textStyle(ITALIC);
  textFont(myFont);
  fill(74, 63, 47);
  let bettaName = "Name: Betta Fish";
  text(bettaName, 930, 600, 250, 200);
}

function displayPike() {
  image(nPike, 910, 350, 275, 200);
  textStyle(ITALIC);
  textFont(myFont);
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

function warningText(){
  fill(65, 243, 252);
  textSize(12);
  textFont(myFont);
  comment = "Don't drop your hook too close to a fish or they'll get scared and swim away. Good luck you got this!";
  text(comment, 840, 150, 395, 80);
}

function textGoldfish() {
  fill(65, 243, 252);
  textSize(12);
  textFont(myFont);
  comment = "It's a goldfish. I think my pet Goldie could do with a friend";
  text(comment, 840, 150, 405, 80);
}

function textKingfish() {
  fill(65, 243, 252);
  textSize(12);
  textFont(myFont);
  comment =
    "That one's a King Fish. They are among the most sought-after gamefish in the country!";
  text(comment, 840, 150, 405, 80);
}

function textPike() {
  fill(65, 243, 252);
  textSize(12);
  textFont(myFont);
  comment =
    "Wow you caught a Pike! Be careful of its sharp teeth. They're the predators of these waters";
  text(comment, 840, 150, 405, 80);
}

function textBetta() {
  fill(65, 243, 252);
  textSize(12);
  textFont(myFont);
  comment =
    "Look how beautiful that Betta Fish is. I'm seeing a lot fewer of them in these waters so lets put it back ";
  text(comment, 840, 150, 405, 80);
}

function displayText() {
  if (goldFish === 1) {
    textGoldfish();
  } else if (kingFish === 1) {
    textKingfish();
  } else if (pike === 1) {
    textPike();
  } else if (bettaFish === 1) {
    textBetta();
  }
   else {
    warningText()
   }
}

// firefly object kept within this script for the sake of convenience when switching between the main game and this minigame
class firefly {
  constructor(X, Y) {
    this.x = X;
    this.y = Y;
    this.dir = parseInt(random(0, 5)); //The parseInt() function parses a string argument and returns an integer of the specified radix
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
  // Moveis fireflies
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
// Displays fireflies
function drawFlies(X, Y) {
  push();
  var radius = dim / 2;
  var from = color(255, 255, 0, 0.2 * 255);
  var to = color(0, 255, 255, 0.2 * 255);
  col = lerpColor(from, to, 0.33);
  for (var r = radius; r > 0; r -= 1) {
    fill(255, 250, 110);
    ellipse(X, Y, r, r);
    pop();
  }
}
