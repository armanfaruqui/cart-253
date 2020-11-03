let player_stand; //Player variables
let player_walkDown;
let player_sprite;
let player_standLeft;
let player_walkLeft;
let player_standRight;
let player_walkRight;
let player_standup;
let player_walkup;
let direction = "down";

let phone; //Phone variables
let phoneScreen;

let bed_sprite; //Object variables
let showB1 = false

function preload() {
  //creates an animation from a sequence of numbered images
  player_stand = loadAnimation("assets/images/main/main-walk001.png");
  player_walkDown = loadAnimation(
    "assets/images/main/main-walk001.png",
    "assets/images/main/main-walk004.png"
  );
  player_standLeft = loadAnimation("assets/images/main/main-walk-left001.png");
  player_walkLeft = loadAnimation(
    "assets/images/main/main-walk-left001.png",
    "assets/images/main/main-walk-left003.png"
  );
  player_standRight = loadAnimation(
    "assets/images/main/main-walk-right001.png"
  );
  player_walkRight = loadAnimation(
    "assets/images/main/main-walk-right001.png",
    "assets/images/main/main-walk-right003.png"
  );
  player_standUp = loadAnimation("assets/images/main/main-walk-up001.png");
  player_walkUp = loadAnimation(
    "assets/images/main/main-walk-up001.png",
    "assets/images/main/main-walk-up004.png"
  );
  woodstep = loadSound("assets/sounds/step_wood.mp3");
  ting = loadSound("assets/sounds/ting.wav")
  //Bed sprite
  bg_bedroom = loadImage("assets/images/interior/demo bg.png");
  bed = loadAnimation("assets/images/interior/bed.png");

  phoneScreen = loadImage("assets/images/phone/screen.png");
}

function setup() {
  //==========================================================================================
  createCanvas(507, 507);
  player_sprite = createSprite(200, 200, 42, 42);
  player_sprite.addAnimation("stand", player_stand);
  player_sprite.addAnimation("walkDown", player_walkDown);
  player_sprite.addAnimation("standLeft", player_standLeft);
  player_sprite.addAnimation("walkLeft", player_walkLeft);
  player_sprite.addAnimation("standRight", player_standRight);
  player_sprite.addAnimation("walkRight", player_walkRight);
  player_sprite.addAnimation("standUp", player_standUp);
  player_sprite.addAnimation("walkUp", player_walkUp);
  player_sprite.setCollider("rectangle", 0, 20, 22, 35);
  player_sprite.depth = 5; //Visualize depth as photoshop layers

  bed_sprite = createSprite(370, 350, 12, 10);
  bed_sprite.addAnimation("bed", bed);
  bed_sprite.depth = 1;

  phone = new Phone();
}

function draw() {
  //===========================================================================================
  clear();
  background(100);
  displayBG();
  displayBed();

  movePlayer();

  phone.display();

  function keyPressed() {
    if (keyCode === 32) {
      phone.access();
    }
  }
  //console.log(phone.selected);
  //console.log(bed_sprite.overlap(player_sprite));
  if (showB1 === true) {
    bedText()
  }

  drawSprites();
} //============================================================================================================

function movePlayer() {
  if (keyIsDown(65) && !keyIsDown(83) && !keyIsDown(68) && !keyIsDown(87)) {
    player_sprite.changeAnimation("walkLeft");
    player_sprite.velocity.x = -2.4;
    direction = "left";
    if (!woodstep.isPlaying()) {
      woodstep.play();
    }
  } else if (
    keyIsDown(83) &&
    !keyIsDown(65) &&
    !keyIsDown(68) &&
    !keyIsDown(87)
  ) {
    player_sprite.changeAnimation("walkDown");
    player_sprite.velocity.y = 2;
    direction = "down";
    if (!woodstep.isPlaying()) {
      woodstep.play();
    }
  } else if (
    keyIsDown(68) &&
    !keyIsDown(83) &&
    !keyIsDown(65) &&
    !keyIsDown(87)
  ) {
    player_sprite.changeAnimation("walkRight");
    player_sprite.velocity.x = 2.4;
    direction = "right";
    if (!woodstep.isPlaying()) {
      woodstep.play();
    }
  } else if (
    keyIsDown(87) &&
    !keyIsDown(83) &&
    !keyIsDown(68) &&
    !keyIsDown(65)
  ) {
    player_sprite.changeAnimation("walkUp");
    player_sprite.velocity.y = -2;
    direction = "up";
    if (!woodstep.isPlaying()) {
      woodstep.play();
    }
  } else {
    player_sprite.velocity.x = 0;
    player_sprite.velocity.y = 0;
    if (direction === "down") {
      player_sprite.changeAnimation("stand");
    } else if (direction === "up") {
      player_sprite.changeAnimation("standUp");
    } else if (direction === "right") {
      player_sprite.changeAnimation("standRight");
    } else if (direction === "left") {
      player_sprite.changeAnimation("standLeft");
    }
    woodstep.stop()
  }
  player_sprite.collide(bed_sprite);
  //player_sprite.debug = mouseIsPressed

  //Sets walls/boundaries for player
  if (player_sprite.position.x < 120) player_sprite.position.x = 120;
  if (player_sprite.position.y < 150) player_sprite.position.y = 150;
  if (player_sprite.position.x > 380) player_sprite.position.x = 380;
  if (player_sprite.position.y > 450) player_sprite.position.y = 450;
}

function displayBG() {
  push();
  imageMode(CORNER);
  image(bg_bedroom, 0, 0);
  pop();
}

function displayBed() {
  push();
  bed_sprite.changeAnimation("bed");
  pop();
}

function mousePressed() {
  phone.selectApp();
}

function keyPressed() {
  if (bed_sprite.overlap(player_sprite) && keyCode === SHIFT){
    showB1 = true
    ting.play()
  }
  else {
    showB1 = false
  }
}

function bedText() {
  push()
  fill(255)
  rect(42, 22, 421, 116, 10)
  fill(0)
  rect(50, 30, 405, 100)
  fill(255)
  let b1 = "You slept for 9 hours and 30 minutes last night"
  textSize(16)
  textFont('Press Start 2P')
  text(b1, 80, 50, 427, 80)
  pop()
}
