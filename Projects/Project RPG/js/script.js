let game = "mainGame"; // State variable for the game being played. Used to allow separate minigames to be implemented

// MAIN GAME VARIABLES===================================================================================================
let player; // The user controlled sprite

let scene = "bedroom"; // The scene/map that the player is currently in. Assigned bedroom here since that is the first scene

let i = 0; //For loops

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

let fish1; //variable for fish
let fish2;

let fishCaught = 0; // Counts the number of fish caught

let hook = { // Refers to the red ellipse which is attatched to the end of the rod
  x: 0,
  y: 0,
  size: 10,
};

let droppedhook = { // Seperate hook object for when the hook is dropped and kept in a fixed position
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

// Background and sprite image variables
let grass;
let pool;
let rod;

// Variables for the different fish. Used to determine which fish is caught
let goldFish = 0;
let kingFish = 0;
let pike = 0;
let bettaFish = 0;

function preload() {

  // MAIN GAME ASSETS====================================================================================================

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
  friend_standRight = loadAnimation("assets/images/chars/friend-walkright001.png");
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
  friendDialogue1 = loadSound("assets/sounds/friend_dialogue1.mp3");
  friendDialogue2 = loadSound("assets/sounds/friend_dialogue2.mp3");
  friendDialogue3 = loadSound("assets/sounds/friend_dialogue3.mp3");
  friendDialogue4 = loadSound("assets/sounds/friend_dialogue4.mp3");
  friendDialogue5 = loadSound("assets/sounds/friend_dialogue5.mp3");
  friendDialogue6 = loadSound("assets/sounds/friend_dialogue6.mp3");
  sheriffSound = loadSound("assets/sounds/sheriffSound.mp3");

  // Music
  townTheme = loadSound("assets/sounds/outsideTheme.mp3");
  lakeTheme = loadSound("assets/sounds/lakeMusic.mp3");
  forestTheme = loadSound("assets/sounds/forestSong.mp3");
  cliffTheme = loadSound("assets/sounds/cliffSong.mp3");

  //Phone assets
  phoneScreen = loadImage("assets/images/phone/screen.png");
  musicScreen = loadImage("assets/images/phone/musicScreen.png");
  notesScreen = loadImage("assets/images/phone/notesScreen.png");
  selfieIndoor = loadImage("assets/images/phone/selfieIndoor.png");
  selfieTown = loadImage("assets/images/phone/selfieOutdoor.png");
  selfieForestPath = loadImage("assets/images/phone/selfieForestPath.png");
  selfieForestPath3 = loadImage("assets/images/phone/selfieForestPath3.png");
  selfieLake = loadImage("assets/images/phone/selfieLak.png");
  phoneSong1 = loadSound("assets/images/phone/breakfast.mp3");
  phoneSong2 = loadSound("assets/images/phone/DFTB.mp3");
  phoneSong3 = loadSound("assets/images/phone/cabinFever.mp3");

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
  bg_forestPath2 = loadImage("assets/images/exterior/forest2.png");
  bg_forestPath3 = loadImage("assets/images/exterior/forest3.png");

  // Forest Lake assets
  bg_forestLake = loadImage("assets/images/exterior/forest-lake.gif");
  flowerPurple = loadAnimation("assets/images/flowers/flowerPurple1.png", "assets/images/flowers/flowerPurple12.png");
  flowerPink = loadAnimation("assets/images/flowers/flowerPink1.png", "assets/images/flowers/flowerPink12.png");
  flowerYellow = loadAnimation("assets/images/flowers/flowerYellow1.png", "assets/images/flowers/flowerYellow12.png");
  flowerRed = loadAnimation("assets/images/flowers/flowerRed1.png", "assets/images/flowers/flowerRed12.png");
  fishingSign = loadAnimation("assets/images/fishing/sign.png");

  bg_sunsetCliff = loadImage("assets/images/exterior/sunsetCliff.png");

  //FISHING ASSETS=======================================================================================================

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

  createCanvas(507, 507);

  //Initializes objects
  player = new Player(player_stand, player_walkDown, player_standLeft, player_walkLeft, player_standRight, player_walkRight, player_standUp, player_walkUp, woodstep, stoneStep, blank2);

  friend = new Friend(friend_stand, friend_walkDown, friend_standLeft, friend_walkLeft, friend_standRight, friend_walkRight, friend_standUp, friend_walkUp, friend_new, blank, friendDialogue1, friendDialogue2, friendDialogue3, friendDialogue4, friendDialogue5, friendDialogue6);

  phone = new Phone(phoneScreen, musicScreen, notesScreen, selfieIndoor, selfieTown, selfieForestPath, selfieForestPath3, selfieLake, phoneSong1, phoneSong2, phoneSong3);

  bedroom = new Bedroom(bed, bg_bedroom, ting, door);

  hall = new Hall(bg_hall, mainDoor);

  town = new Town(town, house1, house2, house3, house4, butchery, dog, evildog, growl, tree, townTheme, door, sheriff, sheriffSound);

  butcherScene = new Butcher(bg_butcher1, bg_butcher2, ting);

  forestPath = new ForestPath(bg_forestPath, forestTheme);

  forestPath2 = new ForestPath2(bg_forestPath2);

  forestLake = new ForestLake(bg_forestLake, flowerRed, flowerPink, flowerPurple, flowerYellow, fishingSign, lakeTheme);

  forestPath3 = new ForestPath3(bg_forestPath3, flowerRed);

  cliff = new SunsetCliff(bg_sunsetCliff, cliffTheme);
}
//======================================================================================================================
function draw() {
  if (game === "mainGame") {

    background(100);

    // State functions used to call the methods relevant to each scene
    if (scene === "bedroom") {
      bedroom.display();
      bedroom.bedText();
      bedroom.deskText();
      bedroom.boundaries();
      bedroom.exit();
    }

    if (scene === "hall") {
      hall.display();
      hall.boundaries();
      hall.doorText(1, "Leave home and go town?", "erm... yes?", "No way in hell");
      hall.doorText(2, "Are you sure?", "Yes", "No I'm really not");
      hall.doorText(3, "Last chance to stay home", "I have to feed myself", "1 more hour..");
      hall.exit();
      hall.anxiety();
    }

    if (scene === "town") {
      town.display();
      town.camera();
      town.playTheme();
      town.boundaries();
      town.enterButchery();
      town.talkToSheriff();
      town.sheriffText(0, "Just where do you think you're going boy?");
      town.sheriffText(1, "To forest of course! But why?");
      town.sheriffText(2, "Are you trying to go somewhere secluded to smoke upon the devils lettuce again?");
      town.sheriffText(3, "EMPTY YOUR POCKETS OR I WILL SHOOT");
      town.sheriffText(4, "Ok lets see here. Phone, gum, wallet, keys... ");
      town.sheriffText(5, "You are lucky this time punk");
      town.sheriffText(6, "Go through and do not give me a reason to give you a hard time again okay");
      town.exitToForest();
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
      butcherScene.exit();
    }

    if (scene === "forestPath") {
      forestPath.display();
      forestPath.camera();
      forestPath.playTheme();
      forestPath.boundaries();
      forestPath.standingNextToTree();
      forestPath.anxiety();
      forestPath.introduction();
      forestPath.friendText(1, "Psssst  Check this out");
      forestPath.squirrels();
      forestPath.friendText(3, "This is the sweetest");
      forestPath.friendText(4, "Watching these two build their home to survive the cold winter with each other");
      forestPath.friendText(5, "It's not often I bump into people my age near this town. Are you from somewhere else?");
      forestPath.friendText(6, "REALLY!? Wow its so nice to meet you!");
      forestPath.friendText(7, "I really like your outfit and the earring");
      forestPath.friendText(8, "It's so hard to find people that like to dress colorfully here");
      forestPath.playerReply(9, "Thanks", "Thanks. I like your's too");
      forestPath.friendText(10, "What are you up to right now? I was just going on my usual forest hike");
      forestPath.friendText(11, "It would be nice to have some company during it for a change");
      forestPath.playerReply(12, "I've got this job...", "Why not")
      forestPath.friendText(13, "Come on don't be shy. We can stop where you need to go on the way");
      forestPath.friendText(14, "That's the spirit!");
      forestPath.friendText(15, "Let's go then. This should be nice :)");
      forestPath.startWalkingTogether();
      if (textStateFP > 15) {
        friend.updateDistanceFromPlayer(80);
      }
      forestPath.exit();
    }

    if (scene === "forestPath2") {
      forestPath2.display();
      forestPath2.boundaries() // Defines walls and gives sprite(s) a collision property
      forestPath.camera();
      friend.update();
      friend.updateDistanceFromPlayer(80);
      forestPath2.friendText(1, "So what do you like to do for fun");
      forestPath2.friendAnswer(2, "I play video games", "I spend time outdoors");
      forestPath2.friendText(3, "Same! I've been super busy lately so I haven't had the time to enjoy enough of it");
      forestPath2.friendText(4, "I have such a bad habit of avoiding the work and tasks that stress me out");
      forestPath2.friendText(5, "It needs to change. Avoidance makes doing what you are dreading 100 times harder because it completely disempowers you");
      forestPath2.friendText(6, "When you let your goal become avoidance, your brain makes progression feel very uncomfortable");
      forestPath2.friendText(7, "Since I became aware of this and shifted my goal towards progress its been so much easier.");
      forestPath2.friendText(8, "Goal clarity is like giving your brain a quest marker. It becomes your friend instead of your enemy");
      forestPath2.friendText(9, "I rambled too long there didn't I");
      forestPath2.friendText(10, "You're saying I didn't? I'm glad you don't find talking about these kinds of things to be weird :)");
      forestPath2.exit();
    }

    if (scene === "lake") {
      forestLake.display();
      forestLake.camera();
      forestLake.playTheme();
      friend.update();
      friend.updateDistanceFromPlayer(60);
      forestLake.boundaries();
      forestLake.friendText1(0, "Welcome to my sanctuary");
      forestLake.friendText1(1, "It's where I come to relax and catch some fish.");
      forestLake.friendText2(0, "Come on its perfect weather for some fishing");
      forestLake.friendText2(1, "My aunt let me borrow her fishing rod. She won't mind if you use it");
      forestLake.askToFish(1, "Start fishing", "Yes", "No", 1);
      forestLake.askToFish(2, "Are you sure? You don't want them to see you mess up", "Whatever", "I just need a minute", 2);
      forestLake.startFishing();
      forestLake.flowerText(1, "I'm sure you can tell why I come here so often :D");
      forestLake.flowerText(2, "This flower field is my favourite place to kick back and listen to music");
      forestLake.flowerText(3, "What kind of music do you like listening to. Show me your playlist");
      forestLake.flowerText(4, "Awwww. These songs won't fit this scenery");
      forestLake.flowerText(5, "Here. I just sent you this song I found recently. Play it right now and tell me what you think");
      forestLake.endCutScene();
      forestLake.exit();
    }

    if (scene === "forestPath3") {
      forestPath3.display();
      forestPath.camera(); // Uses the same camera as the one in forestPath so that method is called here
      forestPath2.boundaries(); // Has the same walls as the ones in forestPath2 so that method is called here
      forestPath3.playTheme();
      friend.update();
      friend.updateDistanceFromPlayer(50);
      forestPath3.questionForFriend1();
      forestPath3.friendAnswer(2, "Honestly, just making the most of the one life I have..");
      forestPath3.friendAnswer(3, "... and making sure that I'm in a position to help and give back to the world which has given me so much");
      forestPath3.friendAnswer(4, "I couldn't have given you such a fancy answer a few months ago when I had given up on everything");
      forestPath3.friendAnswer(5, "Goal clarity, gratefulness, acceptance");
      forestPath3.friendAnswer(6, "I started practicing these instead of letting myself constantly drown in sorrow and despair");
      forestPath3.friendAnswer(7, "It took A LOT of time and it wasn't fun. It was worth it in the end though");
      forestPath3.friendAnswer(8, "I constantly feel a sense of existential dread when I don't keep my mind distracted");
      forestPath3.friendAnswer(9, "I hate when thoughts like 'whats the point', and 'who even why' flood my mind");
      forestPath3.friendAnswer(10, "We are all gonna die one day, but I guess that's just what gives life its value");
      forestPath3.friendAnswer(11, "Also cockroaches. They suck");
      forestPath3.questionForFriend2()
      forestPath3.friendAnswer(13, "The sound and feeling of the wind blowing past me");
      forestPath3.friendAnswer(14, "Being absorbed in the beauty of the plants and animals around me");
      forestPath3.friendAnswer(15, "The freedom you feel from not being confined within four walls");
      forestPath3.friendAnswer(16, "I could go on forever hahaha");
      forestPath3.friendAnswer(17, "Nothing clears my mind and gives me a greater sense of peace than a good hike");
      forestPath3.resetPosition();
      forestPath3.exit();
    }

    if (scene === "cliff") {
      cliff.display();
      cliff.boundaries();
      friend.update();
      friend.updateDistanceFromPlayer(40);
      cliff.playTheme()
      cliff.friendText(1, "We made it");
      cliff.friendText(2, "The journey here could have taken five times as long..");
      cliff.friendText(3, ".. but it still would have been worth it for this view");
      cliff.playerText(4, "It's beautiful", "It's not too shabby");
      cliff.friendText(5, "I know right. I've watched the sunset here hundreds of times but it never loses its charm");
      cliff.friendText(6, "There is a whole lot more life to live and memories to create");
      cliff.friendText(7, "Some good some bad");
      cliff.friendText(8, "But the sun rises every morning. Nothing changes that");
      cliff.friendText(9, ":)");
      cliff.friendText(10, "You probably need to do that job you came all this way for");
      cliff.playerText(11, "I had a great time", "Thank you for today");
      cliff.friendText(12, "So did I");
      cliff.friendText(13, "No. Thank you");
      cliff.friendText(14, "I really loved being able to talk so freely about where my mind has been during these crazy months");
      cliff.friendText(15, "So..");
      cliff.friendText(16, "How about another hike same time tomorrow?");
      cliff.endText();
    }

    player.update(); // Moves the player

    if (scene !== "cliff") { // Phone shouldn't be displayed on the cliff scene
      phone.display();
      phone.camera(); // Contains code for the camera app
      phone.displayMusic();
      phone.notes();
    }

    // console.log(player.sprite.position.x)
    // console.log(player.sprite.position.y)
    // console.log(mouseX)
    // console.log(mouseY)

  } else if (game === "fishingGameSetup") { //Simulates the setup function for the fishing minigame

    fish1 = createFish();
    fish2 = createFish();
    //Sets position of fish
    setFish(fish1);
    setFish(fish2);

    //Background song
    song.loop();

    game = "fishingGameplay" // Switches from the fishing game setup to its draw function once setup is complete
  } else if (game === "fishingGameplay") { // Simulates the draw function of the fishing mini game
    createCanvas(windowWidth, windowHeight);
    background(150);

    moveFish(fish1);
    moveFish(fish2);

    checkDist(fish1);
    checkDist(fish2);

    checkOffScreen();

    baitFish(fish1);
    baitFish(fish2);

    scareFish(fish1);
    scareFish(fish2);

    checkAndCatchFish();

    displayLake();
    displayBackground();

    setHook();
    dropHook();

    displayRod();

    displaySign();
    displayInstructions();
    displayFishOnSign();

    textBoxFishing();
    displayText();

    returnToMainGame();
  } else if (game === "resetCanvas") {
    createCanvas(507, 507);
    game = "mainGame";
  }
}

//=======================================================================================================================

function keyPressed() {
  if (scene === "bedroom") {
    bedroom.keyPressed();
  } else if (scene === "hall") {
    hall.keyPressed();
  } else if (scene === "town") {
    town.changeTextStateSheriff();
    town.doggo();
  } else if (scene === "butchery") {
    butcherScene.talkToButcher();
  } else if (scene === "forestPath") {
    forestPath.changeTextState();
  } else if (scene === "forestPath2") {
    forestPath2.changeTextState();
  } else if (scene === "lake") {
    forestLake.changeTextState1();
    forestLake.changeTextState2();
    forestLake.changeTextState4();
    forestLake.interactWithLake();
  } else if (scene === "forestPath3") {
    forestPath3.changeTextState();
  } else if (scene === "cliff") {
    cliff.changeTextState();
  }
}

function mousePressed() {
  phone.selectApp(); // Select an app on the phone
  phone.playMusic();
  phone.exit(); // Returns to phone homepage from an app
  bedroom.launchGame(); // Launces 'Plent of Alien Fish in the Sea' from the player interacting with the desk
  hall.changeTextState(); // Changes text state for text boxes with options
  hall.exit2(); // Switches scene from hall to town
  forestPath.selectChoice1();
  forestPath.selectChoice2();
  forestPath2.selectChoice();
  if (scene === "lake") {
    forestLake.changeTextState3();
  }
  if (scene === "forestPath3") {
    forestPath3.selectChoice1();
    forestPath3.selectChoice2();
  }
  if (scene === "cliff") {
    cliff.playerReply();
  }
  if (game === "fishingGameplay") {
    if (
      hookDown === 0 &&
      mouseX > 0 &&
      mouseX < lake.topRightX - (2 / 3) * lake.padding && //  Checks if user is hovering over the water
      mouseY > lake.topLeftY &&
      mouseY < lake.bottomLeftY + lake.padding
    ) {
      // Toggles hookDown and plays relevant sound
      hookDown = 1;
      reelsound.play(); // When hook is dropped
      smallSplash.play();
    } else if (hookDown === 1) {
      hookDown = 0;
      reelsound.play(); // When hook is reeled back
    }
    // When hook is reeled back once it has caught a fish
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
};

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

//FUNCTIONS EXCLUSIVE TO FISHING SIMULATION==============================================================================

// Displays lake and lowers its opacity
function displayLake() {
  push();
  imageMode(CENTER);
  tint(255, 188);
  image(pool, 400, 280, 750, 700);
  pop();
}
// Displays the background containing the lake and grass
function displayBackground() {
  push();
  imageMode(CORNER);
  image(grass, 0, 0, windowWidth, windowHeight);
  pop();
}
// Displays the rod on the mouse
function displayRod() {
  push();
  imageMode(CENTER);
  image(rod, mouseX, mouseY, 138, 138); //  Displays rod
  pop();
}
// Displays the sign
function displaySign() {
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
// Displays the instructions in the top right hand corner
function displayInstructions() {
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
// Checks which was the last caught fish and calls the relevant function to display them on the sign
function displayFishOnSign() {
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

// Defines fish objects/variable
function createFish() {
  let fish = {
    x: undefined,
    y: undefined,
    size: undefined,
    vx: 0,
    vy: 0,
    speed: 2,
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
  if (change < 0.05 && hookDown === 0) { // Creates random movement for the fish
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }
  // Negates fish movement if they are attatched to the hook
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
  // Moves fish
  fish.x += fish.vx;
  fish.y += fish.vy;
  // The dark circles representing the fish still in the water
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

// Checks if the fish have strayed too far away from the fool and calls the setFish function to reset their position
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
// Resets fish if they enter catching range whilst the sound from the hook being dropped in the water is still playing
function scareFish(fish) {
  if (fish.d < 40 && smallSplash.isPlaying()) {
    setFish(fish);
  }
}

//Checks which fish is caught,catches it, and spawns a new fish
function checkAndCatchFish() {
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
    fishCaught = fishCaught + 1;
  }
}

// Checks the size property of the fish to determine which type it is. It then plays the relevant sound for each fish, whilst also calling the relevant function which displays text regarding the fish in the text box
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

// The following 4 functions contain information on how the fish should be displayed on the sign once it is caught
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

// Draws the black text box
function textBoxFishing() {
  fill(255);
  rect(812, 122, 421, 116, 10);
  fill(0);
  rect(820, 130, 405, 100);
  textFont(myFont);
}
// Stores the text to be shown before a fish is caught
function warningText() {
  fill(65, 243, 252);
  textSize(12);
  textFont(myFont);
  comment = "Don't drop your hook too close to a fish or they'll get scared and swim away. Good luck you got this!";
  text(comment, 840, 150, 395, 80);
}

// The following 4 functions store the text and its properties for the 4 types of fish you can catch in this simulation
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
// Displays the relevant text regarding the fish last caught in the text box
function displayText() {
  if (goldFish === 1) {
    textGoldfish();
  } else if (kingFish === 1) {
    textKingfish();
  } else if (pike === 1) {
    textPike();
  } else if (bettaFish === 1) {
    textBetta();
  } else {
    warningText();
  }
}

// Once 5 fish are caught, the fishing simulation ends returning you to the main game
function returnToMainGame() {
  if (fishCaught > 4) {
    game = "resetCanvas";
    song.stop();
  }
}
