//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle

let player;
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
}

function setup() {
  createCanvas(498, 498);
  player = new Player(player_stand, player_walkDown, player_standLeft, player_walkLeft, player_standRight, player_walkRight, player_standUp, player_walkUp)
}

function draw() {
  clear();
  background(100);
  player.display()



  drawSprites();
}
