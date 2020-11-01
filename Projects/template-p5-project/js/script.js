//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
let player_stand;
let player_walkDown;
let player_sprite;
let player_standLeft;
let player_walkLeft;
let player_standRight;
let player_walkRight;
let player_standup;
let player_walkup;
let direction = 'down'

let bed_sprite

//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {
  //create an animation from a sequence of numbered images
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
  player_standRight = loadAnimation("assets/images/main/main-walk-right001.png");
  player_walkRight = loadAnimation(
    "assets/images/main/main-walk-right001.png",
    "assets/images/main/main-walk-right003.png"
  );
    player_standUp = loadAnimation("assets/images/main/main-walk-up001.png");
    player_walkUp = loadAnimation(
      "assets/images/main/main-walk-up001.png",
      "assets/images/main/main-walk-up004.png"
  );

  bg_bedroom = loadImage("assets/images/interior/demo bg.png")
  bed = loadAnimation("assets/images/interior/bed.png")
}

function setup() {
  createCanvas(507, 507);
  player_sprite = createSprite(200, 200, 42, 78);
  player_sprite.addAnimation("stand", player_stand);
  player_sprite.addAnimation("walkDown", player_walkDown);
  player_sprite.addAnimation("standLeft", player_standLeft);
  player_sprite.addAnimation("walkLeft", player_walkLeft);
  player_sprite.addAnimation("standRight", player_standRight);
  player_sprite.addAnimation("walkRight", player_walkRight);
  player_sprite.addAnimation("standUp", player_standUp);
  player_sprite.addAnimation("walkUp", player_walkUp);

  bed_sprite = createSprite(370, 350, 42, 10);
  bed_sprite.addAnimation("bed", bed);
}

function draw() {
  clear();
  background(100);
  displayBG()
  displayBed()
  movePlayer();

  drawSprites();
}

function movePlayer() {
  if (keyIsDown(LEFT_ARROW) && !keyIsDown(DOWN_ARROW) && !keyIsDown(RIGHT_ARROW) && !keyIsDown(UP_ARROW)) {
    player_sprite.changeAnimation("walkLeft");
    player_sprite.velocity.x = -2.4;
    direction = 'left'
  }
  else if (keyIsDown(DOWN_ARROW) && !keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW) && !keyIsDown(UP_ARROW)) {
   player_sprite.changeAnimation("walkDown");
   player_sprite.velocity.y = 2;
   direction = 'down'
  }
  else if (keyIsDown(RIGHT_ARROW) && !keyIsDown(DOWN_ARROW) && !keyIsDown(LEFT_ARROW) && !keyIsDown(UP_ARROW)) {
    player_sprite.changeAnimation("walkRight");
    player_sprite.velocity.x = 2.4;
    direction = 'right'
  }
  else if (keyIsDown(UP_ARROW) && !keyIsDown(DOWN_ARROW) && !keyIsDown(RIGHT_ARROW) && !keyIsDown(LEFT_ARROW)) {
    player_sprite.changeAnimation("walkUp");
    player_sprite.velocity.y = -2;
    direction = 'up'
  }
  else {
    player_sprite.velocity.x = 0;
    player_sprite.velocity.y = 0;
    if (direction === 'down'){
      player_sprite.changeAnimation("stand");
      }
    else if (direction === 'up'){
      player_sprite.changeAnimation("standUp");
      }
    else if (direction === 'right'){
      player_sprite.changeAnimation("standRight");
      }
    else if (direction === 'left') {
      player_sprite.changeAnimation("standLeft");
      }
    }
    player_sprite.collide(bed_sprite)
  }

function displayBG() {
  push()
  imageMode(CORNER)
  image(bg_bedroom, 0, 0)
  pop()
}

function displayBed() {
  push()
  bed_sprite.changeAnimation("bed")
  pop()
}
