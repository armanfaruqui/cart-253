let player;

let phone; //Phone variables
let phoneScreen;

let bed_sprite; //Object variables


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

  bedroom = new Bedroom();
  player = new Player();
  phone = new Phone();
}

function draw() {
  //===========================================================================================
  clear();
  background(100);

  bedroom.display()
  bedroom.bedText()
  bedroom.boundaries()

  player.display()

  phone.display();

  //console.log(phone.selected);
  //console.log(bed_sprite.overlap(player_sprite));


  drawSprites();
} //============================================================================================================

function keyPressed(){
  bedroom.keyPressed()
}


function mousePressed() {
  phone.selectApp();
}
