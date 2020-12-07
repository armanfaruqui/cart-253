// Multiple text state variables used due to the number of different interactions which take place which uses text boxes
let textStateFL_1 = 0;
let textStateFL_2 = 0;
let textStateFL_3 = 0;
let textStateFL_4 = 1;
// Variables used to create sprite groups
let purpleFlowers
let pinkFlowers
let yellowFlowers

// Booleans which check if each separate interaction has taken place
let friendTalkedToLake1 = false
let friendTalkedToLake2 = false
let friendTalkedToLake3 = false
let askToFish = false

class ForestLake{
  constructor(bg_forestLake, flowerRed, flowerPink, flowerPurple, flowerYellow, fishingSign){
    this.bg = bg_forestLake

    // Sprite for the lake
    this.sprite = createSprite(566, 470);
    this.sprite.setCollider("rectangle", 220, 152, 423, 296);
    this.sprite.addAnimation("flowerRed", flowerRed) // A random animation has to be assigned for the collider to function
    this.sprite.depth = 1;

    fishingSign.sprite = createSprite(1008.5, 747.5);
    fishingSign.sprite.addAnimation("fishingSign", fishingSign)
    fishingSign.sprite.setDefaultCollider()

    purpleFlowers = new Group();
    pinkFlowers = new Group();
    yellowFlowers = new Group();

    // Multiple of the animated flower sprites are drawn at random locations within a defined area
    for (let i = 0; i<20; i++){ // For purple flowers
      let newPurpleFlower = createSprite(random(1267, 1883), random(350, 766));
      newPurpleFlower.addAnimation("flowerPurple", flowerPurple)
      purpleFlowers.add(newPurpleFlower)
    }
    for(let j = 0; j<25; j++){ // For pink flowers
      let newPinkFlower = createSprite(random(1267, 1883), random(350, 766));
      newPinkFlower.addAnimation("flowerPink", flowerPink)
      pinkFlowers.add(newPinkFlower)
    }
    for(let k = 0; k<25; k++){ // For yellow flowers
      let newYellowFlower = createSprite(random(1267, 1883), random(350, 766));
      newYellowFlower.addAnimation("flowerYellow", flowerYellow)
      yellowFlowers.add(newYellowFlower)
    }
  }

  // Displays background image and draws sprites
  display(){
    image(this.bg, 0, 0)
    drawSprites(purpleFlowers);
    drawSprites(pinkFlowers);
    drawSprites(yellowFlowers);
  }
  // Assigns player's and friend's starting position
  start(){
    player.sprite.position.x = 1160
    friend.sprite.position.x = 1222
    player.sprite.position.y = 1374
    friend.sprite.position.y = 1374
  }

  // Camera slightly zoomed out. Also shifts with the players x axis movement again like it did in town
  camera() {
    camera.zoom = 0.9;
    camera.position.x = player.sprite.position.x;
    camera.position.y = player.sprite.position.y;
  }

  // Defines walls and sets players collision property with sprites
  boundaries(){
    if (player.sprite.position.y > 818){ // Walls for whilst the player is still in the pathway area
        if (player.sprite.position.x < 1090) player.sprite.position.x = 1090;
        if (player.sprite.position.x > 1283) player.sprite.position.x = 1283;
        if (player.sprite.position.y > 1374) player.sprite.position.y = 1374;
        if (friend.sprite.position.x < 1090) friend.sprite.position.x = 1090;
        if (friend.sprite.position.x > 1283) friend.sprite.position.x = 1283;
        if (friend.sprite.position.y > 1374) friend.sprite.position.y = 1374;
    }
    else if (player.sprite.position.y < 815){ // Walls for when the player enters the open lake area
        if (player.sprite.position.x < 442) player.sprite.position.x = 442;
        if (player.sprite.position.x > 1935) player.sprite.position.x = 1935;
        if (player.sprite.position.y > 807) player.sprite.position.y = 807;
        if (player.sprite.position.y < 286) player.sprite.position.y = 286;
        if (friend.sprite.position.x < 442) friend.sprite.position.x = 442;
        if (friend.sprite.position.x > 1935) friend.sprite.position.x = 1935;
        if (friend.sprite.position.y > 807) friend.sprite.position.y = 807;
        if (friend.sprite.position.y < 286) friend.sprite.position.y = 286;
    }
    player.sprite.collide(this.sprite)
    friend.sprite.collide(this.sprite)

    player.sprite.collide(fishingSign.sprite)
    friend.sprite.collide(fishingSign.sprite)
  }
  // Text for the first interaction near the path area
  friendText1(stateOfText, dialogue){
    if (player.sprite.position.y < 1041 && textStateFL_1 === 0){
      if (player.sprite.position.y < 1039) player.sprite.position.y = 1039
      if (friend.sprite.position.y < 1039) friend.sprite.position.y = 1039
      dynamicTextBox()
      fill(65, 243, 252);
      textSize(12);
      comment = dialogue
      text(comment, player.sprite.position.x - 174, player.sprite.position.y - 202, width, height);
      friendTalkedToLake1 = true
    }
  }
  // Text function for the interaction that takes place when the player goes towards the lake
  friendText2(stateOfText, dialogue){
    if (player.sprite.position.x < 1048 && textStateFL_2 === stateOfText){
      dynamicTextBox()
      fill(65, 243, 252);
      textSize(12);
      comment = dialogue
      text(comment, player.sprite.position.x - 174, player.sprite.position.y - 202, width, height);
      friendTalkedToLake2 = true
    }
  }

  // Text function for the interaction that takes place when the player interacts with the lake
  askToFish(stateOfText, q, c1, c2, positioning){
    if (this.sprite.overlap(player.sprite) && textStateFL_3 === stateOfText){
      choice()
      dynamicTextBox()
      fill(255)
      question = q
      choice1 = c1
      choice2 = c2
      textSize(12)
      text(question, player.sprite.position.x - 174, player.sprite.position.y - 202, width - 20, height)
    if (positioning === 1){
     if (selector === 1) {
        fill(229, 112, 40)
        text(choice1, player.sprite.position.x - 174, player.sprite.position.y - 170, width - 20, height)
        fill(255)
        text(choice2, player.sprite.position.x + 120, player.sprite.position.y - 170, width - 20, height)
      }
      else if (selector === 2){
        fill(255)
        text(choice1, player.sprite.position.x - 174, player.sprite.position.y - 170, width - 20, height)
        fill(229, 112, 40)
        text(choice2, player.sprite.position.x + 120, player.sprite.position.y - 170, width - 20, height)
        }
      }
    else if (positioning === 2){
      if (selector === 1) {
         fill(229, 112, 40)
         text(choice1, player.sprite.position.x - 188, player.sprite.position.y - 150, width - 20, height)
         fill(255)
         text(choice2, player.sprite.position.x - 40, player.sprite.position.y - 150, width - 20, height)
       }
       else if (selector === 2){
         fill(255)
         text(choice1, player.sprite.position.x - 188, player.sprite.position.y - 150, width - 20, height)
         fill(229, 112, 40)
         text(choice2, player.sprite.position.x - 40, player.sprite.position.y - 150, width - 20, height)
        }
      }
    }
  }
  // Starts the interaction with between the player and the lake
  interactWithLake(){
    if(this.sprite.overlap(player.sprite) && keyCode === SHIFT){
      textStateFL_3 = 1
    }
  }
  // Switches the game state from mainGame to the setup function for the fishing game
  startFishing(){
    if (textStateFL_3 === 3){
      game = "fishingGameSetup"
    }
  }
  // Text function for the interaction that takes place when the player walks into the flower field
  flowerText(stateOfText, dialogue){
    if (player.sprite.position.x > 1450 && player.sprite.position.y < 620 && textStateFL_4 === stateOfText){
      friendTalkedToLake3 = true
      player.standStill()
      friend.standStill()
      player.sprite.changeAnimation("standRight")
      friend.sprite.changeAnimation("standLeft")
      dynamicTextBox()
      fill(65, 243, 252);
      textSize(12);
      comment = dialogue
      text(comment, player.sprite.position.x - 174, player.sprite.position.y - 202, width, height);
    }
  }

  // Allows the player to move again after the flowerText interaction takes place
  endCutScene(){
    if (textStateFL_4 > 5){
      standStill = false
      standStill2 = false
    }
  }

  // Updates the text box displayed and plays the relevant dialogue sound effect on each click of shift for the first interaction
  changeTextState1(){
    if (friendTalkedToLake1 === true && keyCode === SHIFT){
      textStateFL_1 = textStateFL_1 + 1
      switch (textStateFL_1) {
        case 0:
          friend.dialogue2.play();
          break;
        case 1:
          friend.dialogue1.play();
          break;
      }
    }
  }
  // Updates the text box displayed and plays the relevant dialogue sound effect on each click of shift for the interaction that takes place when the player walks towards the lake
  changeTextState2(){
    if (friendTalkedToLake2 === true && keyCode === SHIFT){
      textStateFL_2 = textStateFL_2 + 1
      switch (textStateFL_2) {
        case 0:
          friend.dialogue2.play();
          break;
        case 1:
          friend.dialogue1.play();
          break;
      }
    }
  }
  // Updates the text box displayed on each click of shift for the interaction that takes place when the player interacts with the lake
  changeTextState3(){
    if (this.sprite.overlap(player.sprite) && selector === 1){
      textStateFL_3 = textStateFL_3 + 1
    }
    else{
      textStateFL_3 = 0
    }
  }
  // Updates the text box displayed and plays the relevant dialogue sound effect on each click of shift for the interaction that takes place when the player walks into the flower field
  changeTextState4(){
    if (friendTalkedToLake3 === true && keyCode === SHIFT){
      textStateFL_4 = textStateFL_4 + 1
    }
    switch (textStateFL_4) {
      case 0:
        friend.dialogue2.play();
        break;
      case 1:
        friend.dialogue1.play();
        break;
    }
  }
  // Switches scene from lake to forestPath3
  exit(){
    if(friendTalkedToLake3 === true && player.sprite.position.y < 287){
      scene = "forestPath3"
      forestPath3.start()
    }
  }

}
