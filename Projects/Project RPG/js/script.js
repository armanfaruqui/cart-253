let game = "mainGame"

// MAIN GAME VARIABLES===================================================================================================
let player; // The user controlled sprite

let scene = "bedroom"; // The scene/map that the player is currently in. Assigned bedroom here since that is the first scene

let i = 0 //For loops

//Variables which positions text within textboxes
let textShown = false;
let x = 80; // General X position for where text should be displayed
let y = 50; // General Y position for where text should be displayed
let y2 = 122; // General Y position for where the second or third line of text should be displayed
let width = 380; // Used for horizontal text box wrapping
let height = 80; // Used for vertical text box wrapping

// Variables for text displayed within textboxes
let question = "" // Used for text which prompts the user to make a choice
let comment = "" //  A general variable for text to be displayed
let choice1 = "" // Used as a variable for the first selectable text option
let choice2 = "" // Used as a variable for the second selectable text option

let selector = 0; // Used for multiple choice text boxes

//Phone variables
let phone;
let phoneScreen;

let bed_sprite; //Object variables

// FISHING GAME VARIABLES================================================================================================
let fish1;
let fish2;

let fishCaught = 0;

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

// MAIN GAME ASSETS======================================================================================================

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

  // Font File
  myFont = loadFont("assets/fonts/press_start.ttf");
  // Sound Effects
  woodstep = loadSound("assets/sounds/step_wood.mp3");
  ting = loadSound("assets/sounds/ting.wav");
  growl = loadSound("assets/sounds/growl.mp3");
  stoneStep = loadSound("assets/sounds/stone_step.mp3");
  grassStep = loadSound("assets/sounds/grass_step.mp3");

  // Dialogue sound
  friendDialogue1 = loadSound("assets/sounds/friend_dialogue1.mp3")
  friendDialogue2 = loadSound("assets/sounds/friend_dialogue2.mp3")
  friendDialogue3 = loadSound("assets/sounds/friend_dialogue3.mp3")
  friendDialogue4 = loadSound("assets/sounds/friend_dialogue4.mp3")
  friendDialogue5 = loadSound("assets/sounds/friend_dialogue5.mp3")
  friendDialogue6 = loadSound("assets/sounds/friend_dialogue6.mp3")

  // Music
  townTheme = loadSound("assets/sounds/OutsideTheme.mp3");

  //Phone assets
  phoneScreen = loadImage("assets/images/phone/screen.png");
  selfieIndoor = loadImage("assets/images/phone/selfieIndoor.png");

  //Bedroom assets
  bg_bedroom = loadImage("assets/images/interior/demo bg.png");
  bed = loadAnimation("assets/images/interior/bed.png");
  desk = loadAnimation("assets/images/interior/desk.png");
  door = loadAnimation("assets/images/interior/door.png");
  mainDoor = loadAnimation("assets/images/interior/maindoor.png");

  //Hall assets
  bg_hall = loadImage("assets/images/interior/hall.png");

  //Town assets
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

  // Inside butchery assets
  bg_butcher1 = loadImage("assets/images/interior/butchery_inside1.png");
  bg_butcher2 = loadImage("assets/images/interior/butchery_inside2.png");

  // Forest path assets
  bg_forestPath = loadImage("assets/images/exterior/forest1.png");
  gif_squirrels = loadImage("assets/images/exterior/squirrels.gif");
  blank = loadImage("assets/images/chars/blank.png");
  blank2 = loadImage("assets/images/chars/blank2.png");
  bg_forestPath2 = loadImage("assets/images/exterior/forest2.png")
  bg_forestPath3 = loadImage("assets/images/exterior/forest3.png")

  // Forest Lake assets
  bg_forestLake = loadImage("assets/images/exterior/forest-lake.gif");
  flowerPurple = loadAnimation("assets/images/flowers/flowerPurple1.png","assets/images/flowers/flowerPurple12.png")
  flowerPink = loadAnimation("assets/images/flowers/flowerPink1.png","assets/images/flowers/flowerPink12.png")
  flowerYellow = loadAnimation("assets/images/flowers/flowerYellow1.png","assets/images/flowers/flowerYellow12.png")
  flowerRed = loadAnimation("assets/images/flowers/flowerRed1.png","assets/images/flowers/flowerRed12.png")
  fishingSign = loadAnimation("assets/images/fishing/sign.png")

//FISHING ASSETS==========================================================================================================

      // Background images
      pool = loadImage("assets/images/fishing/pixelwater.gif");
      grass = loadImage("assets/images/fishing/pixelgrass.png");
      rod = loadImage("assets/images/fishing/fishing_rod.png");
      // Fish images
      king = loadImage("assets/images/fishing/pixelfish1.png");
      nPike = loadImage("assets/images/fishing/pixelfish4.png");
      betta = loadImage("assets/images/fishing/pixelfish3.png");
      gold = loadImage("assets/images/fishing/pixelfish2.png");
      // Fish sounds
      goldsound = loadSound("assets/sounds/fishingSounds/pinksound.mp3");
      kingsound = loadSound("assets/sounds/fishingSounds/acansound.mp3");
      nPikesound = loadSound("assets/sounds/fishingSounds/hamasound.mp3");
      bettasound = loadSound("assets/sounds/fishingSounds/ventsound.mp3");
      // Fishing sound effects
      smallSplash = loadSound("assets/sounds/fishingSounds/smallsplash.mp3");
      bigSplash = loadSound("assets/sounds/fishingSounds/bigsplash.mp3");
      reelsound = loadSound("assets/sounds/fishingSounds/reel.mp3");
      song = loadSound("assets/sounds/fishingSounds/diredocks.mp3");
}

//======================================================================================================================
function setup() {
  if (game === "mainGame"){

  createCanvas(507, 507);

  //Initializes objects
  player = new Player(player_stand, player_walkDown, player_standLeft, player_walkLeft, player_standRight, player_walkRight, player_standUp, player_walkUp, woodstep, stoneStep, blank2);

  friend = new Friend(friend_stand, friend_walkDown, friend_standLeft, friend_walkLeft, friend_standRight, friend_walkRight, friend_standUp, friend_walkUp, friend_new, blank, friendDialogue1,friendDialogue2,friendDialogue3,friendDialogue4,friendDialogue5, friendDialogue6);

  phone = new Phone(phoneScreen, selfieIndoor);

  bedroom = new Bedroom(bed, bg_bedroom, ting, door);

  hall = new Hall(bg_hall, mainDoor);

  town = new Town(town, house1, house2, house3, house4, butchery, dog, evildog, growl, tree, townTheme, door, sheriff);

  butcherScene = new Butcher(bg_butcher1, bg_butcher2, ting);

  forestPath = new ForestPath(bg_forestPath);

  forestPath2 = new ForestPath2(bg_forestPath2)

  forestLake = new ForestLake(bg_forestLake, flowerRed, flowerPink, flowerPurple, flowerYellow, fishingSign)

  forestPath3 = new ForestPath3(bg_forestPath3, flowerRed)
  }

  else if (game === "fishingGame"){


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
}
//======================================================================================================================
function draw() {
  if (game === "mainGame"){

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
    hall.doorText(1, "Leave home and go town?", "erm... yes?", "No way in hell");
    hall.doorText(2, "Are you sure?", "Yes", "No I'm really not");
    hall.doorText(3, "Last chance to stay home", "I have to feed myself", "1 more hour..");
    hall.exit(); // Switches scene from hall to bedroom
    hall.anxiety(); //Plays oscillator with frequency which changes depending on players distance from door
  }

  if (scene === "town") {
    town.display();
    town.camera(); // Assigns a virtual camera which keeps the player at the center of the canvas
    town.boundaries();
    town.enterButchery(); // Switches scene from town to butchery
    town.talkToSheriff(); // Interaction with sheriff before player talks to butcher
    town.sheriffText(0, "Just where do you think you're going boy?"); // Interaction with sheriff after player talks to butcher
    town.sheriffText(1, "To forest of course! But why?");
    town.sheriffText(2, "Are you trying to go somewhere secluded to smoke upon the devils lettuce again?");
    town.sheriffText(3, "EMPTY YOUR POCKETS OR I WILL SHOOT");
    town.sheriffText(4, "Ok lets see here. Phone, gum, wallet, keys... ");
    town.sheriffText(5, "You are lucky this time punk");
    town.sheriffText(6, "Go through and do not give me a reason to give you a hard time again okay");
    town.exitToForest(); //Switches scene from town to forest path
  }

  if (scene === "butchery") {
    butcherScene.display();
    butcherScene.boundaries();
    butcherScene.butcherText(1, "THERE YOU ARE BOY!!");
    butcherScene.butcherText(2, "ABOUT TIME YOU PUT THOSE SCRAWNY LEGS TO WORK!");
    butcherScene.butcherText(3, "YOU ARE 10 MINUTES LATE FROM BEING 15 MINUTES EARLY");
    butcherScene.butcherText(4, "YOU KNOW THAT'S NOT ACCEPTABLE BY MY STANDARDS!");
    butcherScene.butcherText(5, "Okay so here's the scoop");
    butcherScene.butcherText(6, "Remember how the state passed that ban on veal?");
    butcherScene.butcherText(7, "OUTRAGEOUS HUH! HALF MY PROFITS WERE THANKS TO THOSE JUICE BABY COWS");
    butcherScene.butcherText(8, "But don't fret. When Benny the Butcher wants something he gets it done!");
    butcherScene.butcherText(9, "I've got a package full of those bad boys being delivered deep within the forest");
    butcherScene.butcherText(10, "Your job for the day is to bring it back here without getting caught");
    butcherScene.butcherText(11, "Got it?");
    butcherScene.butcherText(12, "THEN WHY ARE YOU STILL LOOKING AT ME? TIME I$ MONEY!!!!");
    butcherScene.exit(); //Switches scene from butcher to town
  }

  if (scene === "forestPath") {
    forestPath.display();
    forestPath.camera(); // Y position of camera depends on the y position of the player. X remains fixed
    forestPath.boundaries();
    friend.standingThere(); // Draws the friend sprite
    forestPath.anxiety(); // Plays oscillator with frequency which changes depending on players distance from friend
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
    forestPath.friendText10();
    forestPath.friendText11();
    forestPath.friendText12();
    forestPath.friendText13();
    forestPath.friendText14();
    forestPath.startWalkingTogether();
    if (textStateFP > 15){
    friend.updateDistanceFromPlayer(80);
  }
    forestPath.exit();
  }

  if (scene === "forestPath2"){
    forestPath2.display()
    forestPath2.boundaries()
    forestPath.camera();
    friend.update()
    friend.updateDistanceFromPlayer(80)
    forestPath2.friendText1()
    forestPath2.friendText2()
    forestPath2.friendText3()
    forestPath2.friendText4()
    forestPath2.friendText5()
    forestPath2.friendText6()
    forestPath2.friendText7()
    forestPath2.friendText8()
    forestPath2.friendText9()
    forestPath2.friendText10()
    forestPath2.exit()
}

  if (scene === "lake"){
    forestLake.display()
    forestLake.camera()
    friend.update()
    friend.updateDistanceFromPlayer(60)
    forestLake.boundaries()
    forestLake.friendText1()
    forestLake.friendText2()
    forestLake.friendText3()
    forestLake.friendText4()
    forestLake.askToFish1()
    forestLake.askToFish2()
    forestLake.startFishing()
    forestLake.flowerText1()
    forestLake.flowerText2()
    forestLake.flowerText3()
    forestLake.flowerText4()
    forestLake.flowerText5()
    forestLake.endCutScene()
    forestLake.exit()
  }

  if (scene === "forestPath3"){
    forestPath3.display()
    forestPath.camera()
    forestPath2.boundaries()
    friend.update()
    friend.updateDistanceFromPlayer(50)
    forestPath3.questionForFriend1()
    forestPath3.friendAnswer1(2, "Honestly, just making the most of the one life I have..")
    forestPath3.friendAnswer1(3, "... and making sure that I'm in a position to help and give back to the world which has given me so much");
    forestPath3.friendAnswer1(4, "I couldn't have given you such a fancy answer a few months ago when I had given up on everything")
    forestPath3.friendAnswer1(5, "Goal clarity, gratefulness, acceptance")
    forestPath3.friendAnswer1(6, "I started practicing these instead of letting myself constantly drown in sorrow and despair")
    forestPath3.friendAnswer1(7, "It took A LOT of time and it wasn't fun. It was worth it in the end though")
    forestPath3.friendAnswer1(8, "I constantly feel a sense of existential dread when I don't keep my mind distracted")
    forestPath3.friendAnswer1(9, "I hate when thoughts like 'whats the point', and 'who even why' flood my mind")
    forestPath3.friendAnswer1(10, "We are all gonna die one day, but I guess that's just what gives life its value")
    forestPath3.friendAnswer1(11, "I hate when thoughts like 'whats the point', and 'who even why' flood my mind")
    forestPath3.questionForFriend2()
  }

  player.update(); // Moves the player

  phone.display();
  phone.camera(); // Contains code for the camera app

  //console.log(textStateFP)
  //console.log(mouseScenePosition.x)
  // console.log(player.sprite.position.x)
  // console.log(player.sprite.position.y)
  // console.log(mouseX)
  // console.log(mouseY)
  }
  else if (game === "fishingGame"){
    createCanvas(windowWidth, windowHeight);
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

    textBoxFishing(); // Displays the black text box
    displayText(); //Displays the correct text onto the text box

    returnToMainGame()
  }
}

//========================================================================================================================

function keyPressed() {
  if (scene === "bedroom") {
    bedroom.keyPressed(); // Interacts with bed
  }
  else if (scene === "hall") {
    hall.keyPressed(); // Interacts with main door
  }
  else if (scene === "town") {
    town.changeTextStateSheriff(); // Changes text box content
    town.doggo();  // Interacts with dog
  }
  else if (scene === "butchery") {
    butcherScene.talkToButcher(); // Starts interaction with butcher and changes the background
  }
  else if (scene === "forestPath") {
    forestPath.changeTextState();
  }
  else if (scene === "forestPath2") {
    forestPath2.changeTextState();
  }
  else if (scene === "lake"){
    forestLake.changeTextState1()
    forestLake.changeTextState2()
    forestLake.changeTextState4()
    forestLake.keyPressed()
  }
  else if (scene === "forestPath3"){
    forestPath3.changeTextState()
  }
}

function mousePressed() {
  phone.selectApp(); // Select an app on the phone
  phone.exit(); // Returns to phone homepage from an app
  bedroom.launchGame(); // Launces 'Plent of Alien Fish in the Sea' from the player interacting with the desk
  hall.changeTextState(); // Changes text state for text boxes with options
  hall.exit2(); // Switches scene from hall to town
  forestPath.selectChoice1()
  forestPath.selectChoice2()
  forestPath2.selectChoice1()
  if (scene === "lake"){
    forestLake.changeTextState3()
  }
  if (scene === "forestPath3"){
    forestPath3.selectChoice1()
    forestPath3.selectChoice2()
  }
}

  if (game === "fishingGame"){
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

//========================================================================================================================
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
    fishCaught = fishCaught + 1
  }
  if (fish2.reeled === 1) {
    reelFish(fish2);
  }
  if (fish2.caught === 1) {
    checkFish(fish2);
    catchFish(fish2);
    fish2.caught = 0;
    fishCaught = fishCaught + 1
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


function textBoxFishing() {
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
  var from = color(255, 255, 0, 0.2 * 255)  ;
  var to = color(0, 255, 255, 0.2 * 255);
  col = lerpColor(from, to, 0.33);
  for (var r = radius; r > 0; r -= 1) {
    fill(255, 250, 110);
    ellipse(X, Y, r, r);
    pop();
  }
}

function returnToMainGame(){
  if (fishCaught === 5){
    game = "mainGame"
  }
}
