let player;

let scene = "bedroom";

//Variables which positions text within textboxes
let textShown = false;
let x = 80;
let y = 50;
let y2 = 122;
let width = 380;
let height = 80;

let selector = 0; // Used for multiple choice text boxes

//Phone variables
let phone;
let phoneScreen;

let bed_sprite; //Object variables

function preload() {
  //load Animation creates an animation from a sequence of numbered images. Automatically detects frames inbetween the first and the last.

  //Player images
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

  //Friend images
  friend_stand = loadAnimation("assets/images/chars/friend-walk001.png");
  friend_walkDown = loadAnimation(
    "assets/images/chars/friend-walk001.png",
    "assets/images/chars/friend-walk004.png"
  );
  friend_standLeft = loadAnimation(
    "assets/images/chars/friend-walkleft001.png"
  );
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

  //Font file
  myFont = loadFont("assets/fonts/press_start.ttf");

  // Sound Effects
  woodstep = loadSound("assets/sounds/step_wood.mp3");
  ting = loadSound("assets/sounds/ting.wav");
  growl = loadSound("assets/sounds/growl.mp3");
  stoneStep = loadSound("assets/sounds/stone_step.mp3");
  grassStep = loadSound("assets/sounds/grass_step.mp3");

  // Music
  townTheme = loadSound("assets/sounds/OutsideTheme.mp3");

  //Phone pictures
  phoneScreen = loadImage("assets/images/phone/screen.png");
  selfieIndoor = loadImage("assets/images/phone/selfieIndoor.png");

  //Bedroom pictures
  bg_bedroom = loadImage("assets/images/interior/demo bg.png");
  bed = loadAnimation("assets/images/interior/bed.png");
  desk = loadAnimation("assets/images/interior/desk.png");
  door = loadAnimation("assets/images/interior/door.png");
  mainDoor = loadAnimation("assets/images/interior/maindoor.png");

  //Hall pictures
  bg_hall = loadImage("assets/images/interior/hall.png");

  //Town Pictures
  town = loadImage("assets/images/exterior/outside1.png");
  house1 = loadAnimation("assets/images/exterior/house1.png");
  house2 = loadAnimation("assets/images/exterior/house2.png");
  house3 = loadAnimation("assets/images/exterior/house3.png");
  house4 = loadAnimation("assets/images/exterior/house2.png");
  butchery = loadAnimation("assets/images/exterior/butchery.png");
  dog = loadAnimation(
    "assets/images/exterior/dog_sprite1.png",
    "assets/images/exterior/dog_sprite2.png"
  );
  evildog = loadImage("assets/images/exterior/evildog_sprite1.png");
  tree = loadAnimation("assets/images/exterior/tree.png");
  sheriff = loadImage("assets/images/chars/sheriff.png");

  // Inside butchery pictures
  bg_butcher1 = loadImage("assets/images/interior/butchery_inside1.png");
  bg_butcher2 = loadImage("assets/images/interior/butchery_inside2.png");

  // Forest path pictures
  bg_forestPath = loadImage("assets/images/exterior/forest1.png");
  gif_squirrels = loadImage("assets/images/exterior/squirrels.gif");
  blank = loadImage("assets/images/chars/blank.png");
}

//======================================================================================================================
function setup() {

  createCanvas(507, 507);

  //Initializes objects
  player = new Player(player_stand, player_walkDown, player_standLeft, player_walkLeft, player_standRight, player_walkRight, player_standUp, player_walkUp, woodstep, stoneStep, blank);

  friend = new Friend(friend_stand, friend_walkDown, friend_standLeft, friend_walkLeft, friend_standRight, friend_walkRight, friend_standUp, friend_walkUp, friend_new, blank);

  phone = new Phone(phoneScreen, selfieIndoor);

  bedroom = new Bedroom(bed, bg_bedroom, ting, door);

  hall = new Hall(bg_hall, mainDoor);
  town = new Town(town, house1, house2, house3, house4, butchery, dog, evildog, growl, tree, townTheme, door, sheriff);

  butcherScene = new Butcher(bg_butcher1, bg_butcher2, ting);

  forestPath = new ForestPath(bg_forestPath);
}
//======================================================================================================================
function draw() {

  background(100);

  if (scene === "bedroom") {
    bedroom.display();
    bedroom.bedText(); // Displays text box from interacting with bed
    bedroom.deskText();
    bedroom.boundaries(); // Sets walls/boundaries for the player
    bedroom.exit(); // Switches scene from bedroom to hall
  }

  if (scene === "hall") {
    hall.display();
    hall.boundaries();
    hall.DoorText1();
    hall.DoorText2();
    hall.DoorText3();
    hall.exit(); // Switches scene from hall to bedroom
    hall.anxiety(); //Plays oscillator with frequency which changes depending on players distance from door
  }

  if (scene === "town") {
    town.display();
    town.camera(); // Assigns a virtual camera which keeps the player at the center of the canvas
    town.boundaries();
    town.enterButchery(); // Switches scene from town to butchery
    town.talkToSheriff1(); // Interaction with sheriff before player talks to butcher
    town.sheriffText1(); // Interaction with sheriff after player talks to butcher
    town.sheriffText2();
    town.sheriffText3();
    town.sheriffText4();
    town.sheriffText5();
    town.sheriffText6();
    town.sheriffText7();
    town.exitToForest(); //Switches scene from town to forest path
  }

  if (scene === "butchery") {
    butcherScene.display();
    butcherScene.boundaries();
    butcherScene.butcherText1();
    butcherScene.butcherText2();
    butcherScene.butcherText3();
    butcherScene.butcherText4();
    butcherScene.butcherText5();
    butcherScene.butcherText6();
    butcherScene.butcherText7();
    butcherScene.butcherText8();
    butcherScene.butcherText9();
    butcherScene.butcherText10();
    butcherScene.butcherText11();
    butcherScene.butcherText12();
    butcherScene.exit(); //Switches scene from butcher to town
  }

  if (scene === "forestPath") {
    forestPath.display();
    forestPath.camera(); // Y position of camera depends on the y position of the player. X remains fixed
    forestPath.boundaries();
    friend.standingThere(); // Draws the friend sprite
    forestPath.anxiety(); // //Plays oscillator with frequency which changes depending on players distance from friend
    forestPath.introduction1(); // If player talks to friend
    forestPath.introduction2(); // If player tries to walk past friend
    forestPath.squirrels(); // Displays gif of squirrels on tree
    forestPath.friendText2();
    forestPath.friendText3();
    forestPath.friendText4();
    forestPath.friendText5();
    forestPath.friendText6();
    forestPath.friendText7();
    forestPath.friendText8();
    forestPath.friendText9();
  }

  player.update(); // Moves the player

  phone.display();
  phone.camera(); // Contains code for the camera app

  //console.log(mouseScenePosition.x)
  // console.log(player.sprite.position.x)
  // console.log(player.sprite.position.y)
  // console.log(mouseX)
  // console.log(mouseY)
} //============================================================================================================

function keyPressed() {
  if (scene === "bedroom") {
    bedroom.keyPressed(); // Interacts with bed
  }
  if (scene === "hall") {
    hall.keyPressed(); // Interacts with main door
  }
  if (scene === "town") {
    town.changeTextStateSheriff(); // Changes text box content
    town.doggo();  // Interacts with dog
  }
  if (scene === "butchery") {
    butcherScene.talkToButcher(); // Starts interaction with butcher and changes the background
  }
  if (scene === "forestPath") {
    forestPath.changeTextState();
  }
}

function mousePressed() {
  phone.selectApp(); // Select an app on the phone
  phone.exit(); // Returns to phone homepage from an app
  bedroom.launchGame(); // Launces 'Plent of Alien Fish in the Sea' from the player interacting with the desk
  hall.changeTextState(); // Changes text state for text boxes with options
  hall.exit2(); // Switches scene from hall to town
}

// Draws the text box and assigns font
function textBox() {
  fill(255);
  rect(42, 22, 421, 116, 10);
  fill(0);
  rect(50, 30, 405, 100);
  textFont(myFont);
}

// Draws the text box on scenes which utilize the virtual camera
function dynamicTextBox() {
  fill(255);
  rect(
    player.sprite.position.x - 212,
    player.sprite.position.y - 230,
    421,
    116,
    10
  );
  fill(0);
  rect(
    player.sprite.position.x - 204,
    player.sprite.position.y - 222,
    405,
    100
  );
  textFont(myFont);
}

// Draws text box for scenes which use the virtual camera where the camera's x position is fixed
function dynamicTextBox2() {
  fill(255);
  rect(42, player.sprite.position.y - 230, 421, 116, 10);
  fill(0);
  rect(50, player.sprite.position.y - 222, 405, 100);
  textFont(myFont);
}

// Allows the user to choose between text options
function choice() {
  if (mouseX < width / 2) {
    selector = 1;
  } else {
    selector = 2;
  }
}
