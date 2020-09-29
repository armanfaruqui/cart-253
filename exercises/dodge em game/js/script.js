/**************************************************
Dodging Immunity - Arman Faruqui

Play as COVID-19 and avoid the precautionary measures!

Click on the screen once the game has started to play the music

  Music: "8 Bit Epic Gameboy" By HeatleyBros
  youtu.be/C-ImO_e62-w
  News Article: Montreal Gazette
  https://montrealgazette.com/news/local-news/montreal-and-quebec-city-will-enter-red-zone-soon-dube
  Virus Picture from: https://canadiem.org/
  Mask Picture from: https://www.licenseglobal.com/
  Santizer Picture from: https://www.cloroxpro.com/

Hope this code is clearer than the last [:^)
**************************************************/
let col = {
  r: 255,
  g: 255,
  b: 255,
};
// Enemy 1
let maskprop = {
  x: 0,
  y: 250,
  size: 80,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  speed: 10,
};
// Enemy 2
let sanitizer = {
  x: 250,
  y: 0,
  size: 80,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  speed: 10,
};
let mask;
let virus;
let song;
let dead;
let sani;
let news;
function preload() {
  virus = loadImage("assets/images/virus.png");
  mask = loadImage("assets/images/mask.png");
  song = loadSound("assets/sounds/song.mp3");
  dead = loadSound("assets/sounds/nope.mp3");
  sani = loadImage("assets/images/sanitizer.png");
  news = loadImage("assets/images/news.PNG");
}
// User/virus
let user = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  accelaration: 0.5,
  maxspeed: 5,
};

let dm = 0; // Distance from mask
let ds = 0; // Distance from santizer
let k = 0; // Score counter

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Assigns starting position and speed to enemies
  maskprop.y = random(0, height);
  maskprop.vx = maskprop.speed;
  sanitizer.x = random(0, width);
  sanitizer.vy = sanitizer.speed;
}
// Starts song when mouse is clicked
function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}

function draw() {
  // Keeps tab of how many masks have passed the screem
  if (maskprop.x === 0) {
    k = k + 1;
  }
  // Makes enemies jitter
  maskprop.vy = random(-20, 20);
  sanitizer.vx = random(-10, 10);
  //Sets background
  background(235, 225, 204);
  //Moves the enemies
  maskprop.x += maskprop.vx;
  maskprop.y += maskprop.vy;

  //Static
  for (let i = 0; i < 30; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(0, col.g, 0);
    strokeWeight(10);
    point(x, y);
  }

  // Mask properties
  imageMode(CENTER);
  image(mask, maskprop.x, maskprop.y, 150, 90);

  console.log(sanitizer.y);

  // Resets masks
  if (maskprop.x > width) {
    maskprop.x = 0;
    maskprop.y = random(0, height);
  }
  console.log("maskprop.x: ${maskprop.x}``");
 // Waits to introduce sanitizers
  if (k > 4) {
    sanitizer.y += sanitizer.vy;
    sanitizer.x += sanitizer.vx;

    //Sanitizer properties
    imageMode(CENTER);
    image(sani, sanitizer.x, sanitizer.y, 60, 100);

    // Resets sanitizer
    if (sanitizer.y > height) {
      sanitizer.y = 0;
      sanitizer.x = random(0, width);
    }
  }
  // Sets up user virus
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
  // Displays user
  imageMode(CENTER);
  image(virus, user.x, user.y, 80, 80);

  // Ends program if user touches mask
  dm = dist(maskprop.x, maskprop.y, user.x, user.y);
  if (dm < 60) {
    dead.play();
    imageMode(CORNER);
    image(news, 0, 0, width, height);
    noLoop();
  }
  // Ends program if user touches sanitizer
  ds = dist(sanitizer.x, sanitizer.y, user.x, user.y);
  if (ds < 60) {
    dead.play();
    imageMode(CORNER);
    image(news, 0, 0, width, height);
    noLoop();
  }
}
