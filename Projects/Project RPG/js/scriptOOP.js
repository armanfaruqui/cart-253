let player;

let map = 'outside'

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
  desk = loadAnimation("assets/images/interior/desk.png")
  door = loadAnimation("assets/images/interior/door.png")
  mainDoor = loadAnimation("assets/images/interior/maindoor.png")
  //Hall sprites
  bg_hall = loadImage("assets/images/interior/hall.png");
  //Phone pictures
  phoneScreen = loadImage("assets/images/phone/screen.png");
  selfieIndoor = loadImage("assets/images/phone/selfieIndoor.png");

  bg_outside = loadImage("assets/images/exterior/virtualTest.png");
}

function setup() {
  //==========================================================================================
  createCanvas(507, 507);


  player = new Player(player_stand, player_walkDown, player_standLeft, player_walkLeft, player_standRight, player_walkRight, player_standUp, player_walkUp, woodstep);

  bedroom = new Bedroom(bed, bg_bedroom, ting);
  hall = new Hall(bg_hall, mainDoor);
  outside = new Outside(bg_outside);

  phone = new Phone(phoneScreen, selfieIndoor);
}

function draw() {
  //===========================================================================================
  clear();
  background(100);

  if (map === 'bedroom'){
  bedroom.display()
  bedroom.bedText() // Displays text box from interacting with bed
  bedroom.deskText()
  bedroom.boundaries() // Sets walls/boundaries for player in the bedroom
  bedroom.exit()
  }

  if (map === 'hall'){
    hall.display()
    hall.boundaries()
    hall.exit()
  }

  if (map === 'outside'){
    outside.display()
    outside.camera()
    outside.boundaries()
  }
  player.update() // Moves the player

  phone.display();
  phone.camera();


  console.log(map)
  //console.log(phone.selected);
  //console.log(bed_sprite.overlap(player_sprite));


  //drawSprites();
} //============================================================================================================

 function keyPressed(){
   if (map === 'bedroom'){
   bedroom.keyPressed()//Interacts with bed
  }
 }


 function mousePressed() {
   phone.selectApp();
   phone.exit()
}
