let player;

let scene = 'bedroom'

//TEXT VARIABLES
let textShown = false
let x = 80
let y = 50
let y2 = 122
let width = 380
let height = 80

let selector = 0




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
  friend_stand = loadAnimation("assets/images/chars/friend-walk001.png");
  friend_walkDown = loadAnimation(
    "assets/images/chars/friend-walk001.png",
    "assets/images/chars/friend-walk004.png"
  );
  friend_standLeft = loadAnimation("assets/images/chars/friend-walkleft001.png");
  friend_new = loadImage("assets/images/chars/friend-walkleft001.png");
  friend_walkLeft = loadAnimation(
    "assets/images/chars/friend-walkleft001.png",
    "assets/images/chars/friend-walkleft003.png"
  );
  friend_standRight = loadAnimation(
    "assets/images/chars/friend-walkright001.png"
  );
  friend_walkRight = loadAnimation(
    "assets/images/chars/friend-walkright001.png",
    "assets/images/chars/friend-walkright003.png"
  );
  friend_standUp = loadAnimation("assets/images/chars/friend-walkup001.png");
  friend_walkUp = loadAnimation(
    "assets/images/chars/friend-walkup001.png",
    "assets/images/chars/friend-walkup004.png"
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
  sheriff = loadImage("assets/images/chars/sheriff.png")

  bg_forestPath = loadImage("assets/images/exterior/forest1.png")

  bg_butcher1 = loadImage("assets/images/interior/butchery_inside1.png");
  bg_butcher2 = loadImage("assets/images/interior/butchery_inside2.png");
  grassStep = loadSound("assets/sounds/grass_step.mp3")
  gif_squirrels = loadImage("assets/images/exterior/squirrels.gif")
  blank = loadImage("assets/images/chars/blank.png")
}

function setup() {
  //==========================================================================================
  createCanvas(507, 507);


  player = new Player(player_stand, player_walkDown, player_standLeft, player_walkLeft, player_standRight, player_walkRight, player_standUp, player_walkUp, woodstep, stoneStep, blank);

  bedroom = new Bedroom(bed, bg_bedroom, ting, door);
  hall = new Hall(bg_hall, mainDoor);
  outside = new Outside(bg_outside, house1, house2, house3, house4, butchery, dog, evildog, growl, tree, outsideTheme, door, sheriff);
  butcherScene = new Butcher(bg_butcher1, bg_butcher2, ting)
  forestPath = new ForestPath(bg_forestPath)
  friend = new Friend(friend_stand, friend_walkDown, friend_standLeft, friend_walkLeft, friend_standRight, friend_walkRight, friend_standUp, friend_walkUp, friend_new, blank)
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
    outside.enterButchery()
    outside.talkToSheriff1()
    outside.sheriffText1()
    outside.sheriffText2()
    outside.sheriffText3()
    outside.sheriffText4()
    outside.sheriffText5()
    outside.sheriffText6()
    outside.sheriffText7()
    outside.exitToForest()
  }

 if (scene === 'butchery'){
   butcherScene.display()
   butcherScene.boundaries()
   butcherScene.butcherText1()
   butcherScene.butcherText2()
   butcherScene.butcherText3()
   butcherScene.butcherText4()
   butcherScene.butcherText5()
   butcherScene.butcherText6()
   butcherScene.butcherText7()
   butcherScene.butcherText8()
   butcherScene.butcherText9()
   butcherScene.butcherText10()
   butcherScene.butcherText11()
   butcherScene.butcherText12()
   butcherScene.exit()
  }

  if (scene === 'forestPath'){
    forestPath.display()
    forestPath.camera()
    forestPath.boundaries()
    friend.standingThere()
    forestPath.anxiety()
    forestPath.introduction1()
    forestPath.introduction2()
    forestPath.squirrels()
    forestPath.friendText2()
    forestPath.friendText3()
    forestPath.friendText4()
    forestPath.friendText5()
    forestPath.friendText6()
    forestPath.friendText7()
    forestPath.friendText8()
    forestPath.friendText9()
  }

  player.update() // Moves the player

  if (scene === 'outside' || scene === 'forestPath'){
    phone.dynamicDisplay()
  }
  else {
  phone.display();
  }

  phone.camera();
  // console.log(player.sprite.position.x)
  // console.log(player.sprite.position.y)
  console.log(mouseX)
  console.log(mouseY)



} //============================================================================================================

 function keyPressed(){
   if (scene === 'bedroom'){
   bedroom.keyPressed()//Interacts with bed
  }
  if (scene === 'hall'){
  hall.keyPressed()//Interacts with bed
 }
  outside.doggo()
  if (scene === 'butchery'){
    butcherScene.talkToButcher()
  }
  if (scene === 'outside'){
  outside.changeTextStateSheriff()
    }
  if (scene === 'forestPath'){
    forestPath.changeTextState()
  }
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

function dynamicTextBox(){
  fill(255)
  rect(player.sprite.position.x - 212, player.sprite.position.y - 230, 421, 116, 10)
  fill(0)
  rect(player.sprite.position.x - 204, player.sprite.position.y - 222, 405, 100)
  textFont(myFont)
}

function dynamicTextBox2(){
  fill(255)
  rect(42, player.sprite.position.y - 230, 421, 116, 10)
  fill(0)
  rect(50, player.sprite.position.y - 222, 405, 100)
  textFont(myFont)
}

function choice(){
  if (mouseX < width / 2){
    selector = 1
  }
  else {
    selector = 2
  }
}
