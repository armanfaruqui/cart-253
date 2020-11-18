let player;

let scene = 'bedroom'

//TEXT VARIABLES
let textShown = false
let x = 80
let y = 50
let y2 = 122
let width = 380
let height = 80


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
  myFont = loadFont("assets/fonts/press_start.ttf")
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

  bg_outside = loadImage("assets/images/exterior/outside1.png");
  house1 = loadAnimation("assets/images/exterior/house1.png");
  house2 = loadAnimation("assets/images/exterior/house2.png");
  house3 = loadAnimation("assets/images/exterior/house3.png");
  house4 = loadAnimation("assets/images/exterior/house2.png");
  butchery = loadAnimation("assets/images/exterior/butchery.png");
  dog = loadAnimation("assets/images/exterior/dog_sprite1.png", "assets/images/exterior/dog_sprite2.png" );
  evildog = loadImage("assets/images/exterior/evildog_sprite1.png")
  tree = loadAnimation("assets/images/exterior/tree.png")
  growl = loadSound("assets/sounds/growl.mp3")
  stoneStep = loadSound("assets/sounds/stone_step.mp3")
  outsideTheme = loadSound("assets/sounds/outsideTheme.mp3")
}

function setup() {
  //==========================================================================================
  createCanvas(507, 507);


  player = new Player(player_stand, player_walkDown, player_standLeft, player_walkLeft, player_standRight, player_walkRight, player_standUp, player_walkUp, woodstep, stoneStep);

  bedroom = new Bedroom(bed, bg_bedroom, ting);
  hall = new Hall(bg_hall, mainDoor);
  outside = new Outside(bg_outside, house1, house2, house3, house4, butchery, dog, evildog, growl, tree, outsideTheme);

  phone = new Phone(phoneScreen, selfieIndoor);
}

function draw() {
  //===========================================================================================
  clear();
  background(100);

  if (scene === 'bedroom'){
  bedroom.display()
  bedroom.bedText() // Displays text box from interacting with bed
  bedroom.deskText()
  bedroom.deskText2()
  bedroom.deskText3()
  bedroom.boundaries() // Sets walls/boundaries for player in the bedroom
  bedroom.exit()
  }

  if (scene === 'hall'){
    hall.display()
    hall.boundaries()
    hall.DoorText1()
    hall.DoorText2()
    hall.DoorText3()
    hall.exit()
    hall.anxiety()
  }

  if (scene === 'outside'){
    outside.display()
    outside.camera()
    outside.boundaries()
  }

  player.update() // Moves the player

  if (scene == 'outside'){
    phone.dynamicDisplay()
  }
  else {
  phone.display();
  }

  phone.camera();


//  console.log(textState)
  //console.log(phone.selected);
  //console.log(bed_sprite.overlap(player_sprite));


  //drawSprites();
} //============================================================================================================

 function keyPressed(){
   if (scene === 'bedroom'){
   bedroom.keyPressed()//Interacts with bed
  }
  if (scene === 'hall'){
  hall.keyPressed()//Interacts with bed
 }
  outside.doggo()
 }


 function mousePressed() {
   phone.selectApp();
   phone.exit()
   bedroom.launchGame();
   hall.changeTextState();
   hall.exit2()
}

function textBox(){
  fill(255)
  rect(42, 22, 421, 116, 10)
  fill(0)
  rect(50, 30, 405, 100)
  textFont(myFont)
}

function choice(){
  if (mouseX < width / 2){
    deskSelector = 1
    doorSelector = 1
  }
  else {
    deskSelector = 2
    doorSelector = 2
  }
}
