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

    this.sprite = createSprite(566, 470);
    this.sprite.setCollider("rectangle", 220, 152, 423, 296);
    this.sprite.addAnimation("flowerRed", flowerRed)
    this.sprite.depth = 1;

    fishingSign.sprite = createSprite(1008.5, 747.5);
    fishingSign.sprite.addAnimation("fishingSign", fishingSign)
    fishingSign.sprite.setDefaultCollider()

    purpleFlowers = new Group();
    pinkFlowers = new Group();
    yellowFlowers = new Group();

    for (let i = 0; i<20; i++){
      let newPurpleFlower = createSprite(random(1267, 1883), random(350, 766));
      newPurpleFlower.addAnimation("flowerPurple", flowerPurple)
      purpleFlowers.add(newPurpleFlower)
    }
    for(let j = 0; j<25; j++){
      let newPinkFlower = createSprite(random(1267, 1883), random(350, 766));
      newPinkFlower.addAnimation("flowerPink", flowerPink)
      pinkFlowers.add(newPinkFlower)
    }
    for(let k = 0; k<25; k++){
      let newYellowFlower = createSprite(random(1267, 1883), random(350, 766));
      newYellowFlower.addAnimation("flowerYellow", flowerYellow)
      yellowFlowers.add(newYellowFlower)
    }
  }

  display(){
    image(this.bg, 0, 0)
    drawSprites(purpleFlowers);
    drawSprites(pinkFlowers);
    drawSprites(yellowFlowers);
  }

  start(){
    player.sprite.position.x = 1160
    friend.sprite.position.x = 1222
    player.sprite.position.y = 1374
    friend.sprite.position.y = 1374
  }

  camera() {
    camera.zoom = 0.9;
    camera.position.x = player.sprite.position.x;
    camera.position.y = player.sprite.position.y;
  }

  boundaries(){
    if (player.sprite.position.y > 818){
        if (player.sprite.position.x < 1090) player.sprite.position.x = 1090;
        if (player.sprite.position.x > 1283) player.sprite.position.x = 1283;
        if (player.sprite.position.y > 1374) player.sprite.position.y = 1374;
        if (friend.sprite.position.x < 1090) friend.sprite.position.x = 1090;
        if (friend.sprite.position.x > 1283) friend.sprite.position.x = 1283;
        if (friend.sprite.position.y > 1374) friend.sprite.position.y = 1374;
    }
    else if (player.sprite.position.y < 815){
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

  friendText1(){
    if (player.sprite.position.y < 1041 && textStateFL_1 === 0){
      if (player.sprite.position.y < 1039) player.sprite.position.y = 1039
      if (friend.sprite.position.y < 1039) friend.sprite.position.y = 1039
      dynamicTextBox()
      fill(65, 243, 252);
      textSize(12);
      comment = "Welcome to my sanctuary"
      text(comment, player.sprite.position.x - 174, player.sprite.position.y - 202, width, height);
      friendTalkedToLake1 = true
    }
  }

  friendText2(){
    if (player.sprite.position.y < 1041 && textStateFL_1 === 1 ){
      if (player.sprite.position.y < 1039) player.sprite.position.y = 1039
      if (friend.sprite.position.y < 1039) friend.sprite.position.y = 1039
      dynamicTextBox()
      fill(65, 243, 252);
      textSize(12);
      comment = "It's where I come to relax and catch some fish."
      text(comment, player.sprite.position.x - 174, player.sprite.position.y - 202, width, height);
      friendTalkedToLake1 = true
    }
  }

  friendText3(){
    if (player.sprite.position.x < 1048 && textStateFL_2 === 0){
      dynamicTextBox()
      fill(65, 243, 252);
      textSize(12);
      comment = "Come on its perfect weather for some fishing"
      text(comment, player.sprite.position.x - 174, player.sprite.position.y - 202, width, height);
      friendTalkedToLake2 = true
    }
  }

  friendText4(){
    if (player.sprite.position.x < 1048 && textStateFL_2 === 1){
      dynamicTextBox()
      fill(65, 243, 252);
      textSize(12);
      comment = "My uncle leaves his fishing rod behind the sign here. He won't mind if we use it"
      text(comment, player.sprite.position.x - 174, player.sprite.position.y - 202, width - 20, height);
      friendTalkedToLake2 = true
    }
  }

  keyPressed(){
    if(this.sprite.overlap(player.sprite) && keyCode === SHIFT){
      textStateFL_3 = 1
    }
  }

  askToFish1(){
    if (this.sprite.overlap(player.sprite) && textStateFL_3 === 1){
      choice()
      dynamicTextBox()
      fill(255)
      question = "Start fishing"
      choice1 = "Yes"
      choice2 = "No"
      textSize(12)
      text(question, player.sprite.position.x - 174, player.sprite.position.y - 202, width - 20, height)

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
  }

  askToFish2(){
    if (this.sprite.overlap(player.sprite) && textStateFL_3 === 2){
      choice()
      dynamicTextBox()
      fill(255)
      question = "Are you sure? You don't want her to see you mess up "
      choice1 = "Whatever"
      choice2 = "I just need a minute"
      textSize(12)
      text(question, player.sprite.position.x - 174, player.sprite.position.y - 202, width - 20, height)

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

  startFishing(){
    if (textStateFL_3 === 3){
      game = "fishingGame"
    }
  }

  flowerText1(){
    if (player.sprite.position.x > 1450 && player.sprite.position.y < 620 && textStateFL_4 === 1){
      friendTalkedToLake3 = true
      player.standStill()
      friend.standStill()
      player.sprite.changeAnimation("standRight")
      friend.sprite.changeAnimation("standLeft")
      dynamicTextBox()
      fill(65, 243, 252);
      textSize(12);
      comment = "I'm sure you can tell why I come here so often :D"
      text(comment, player.sprite.position.x - 174, player.sprite.position.y - 202, width, height);
    }
  }

  flowerText2(){
    if (textStateFL_4 === 2){
      friendTalkedToLake3 = true
      player.standStill()
      friend.standStill()
      player.sprite.changeAnimation("standRight")
      friend.sprite.changeAnimation("standLeft")
      dynamicTextBox()
      fill(65, 243, 252);
      textSize(12);
      comment = "This field of flowers is my favourite place to kick back and listen to music"
      text(comment, player.sprite.position.x - 174, player.sprite.position.y - 202, width, height);
    }
  }

  flowerText3(){
    if (textStateFL_4 === 3){
      friendTalkedToLake3 = true
      player.standStill()
      friend.standStill()
      player.sprite.changeAnimation("standRight")
      friend.sprite.changeAnimation("standLeft")
      dynamicTextBox()
      fill(65, 243, 252);
      textSize(12);
      comment = "What kind of music do you like listening to. Show me your playlist"
      text(comment, player.sprite.position.x - 174, player.sprite.position.y - 202, width, height);
    }
  }

  flowerText4(){
    if (textStateFL_4 === 4){
      friendTalkedToLake3 = true
      player.standStill()
      friend.standStill()
      player.sprite.changeAnimation("standRight")
      friend.sprite.changeAnimation("standLeft")
      dynamicTextBox()
      fill(65, 243, 252);
      textSize(12);
      comment = "Awwww. These songs won't fit this scenery"
      text(comment, player.sprite.position.x - 174, player.sprite.position.y - 202, width, height);
    }
  }

  flowerText5(){
    if (textStateFL_4 === 5){
      friendTalkedToLake3 = true
      player.standStill()
      friend.standStill()
      player.sprite.changeAnimation("standRight")
      friend.sprite.changeAnimation("standLeft")
      dynamicTextBox()
      fill(65, 243, 252);
      textSize(12);
      comment = "Here. I just sent you this song I found recently. Play it right now and tell me what you think"
      text(comment, player.sprite.position.x - 174, player.sprite.position.y - 202, width, height);
    }
  }

  endCutScene(){
    if (textStateFL_4 > 5){
      standStill = false
      standStill2 = false
    }
  }

  changeTextState1(){
    if (friendTalkedToLake1 === true && keyCode === SHIFT){
      textStateFL_1 = textStateFL_1 + 1
    }
  }

  changeTextState2(){
    if (friendTalkedToLake2 === true && keyCode === SHIFT){
      textStateFL_2 = textStateFL_2 + 1
    }
  }

  changeTextState3(){
    if (this.sprite.overlap(player.sprite) && selector === 1){
      textStateFL_3 = textStateFL_3 + 1
    }
    else{
      textStateFL_3 = 0
    }
  }

  changeTextState4(){
    if (friendTalkedToLake3 === true && keyCode === SHIFT){
      textStateFL_4 = textStateFL_4 + 1
    }
  }

  exit(){
    if(friendTalkedToLake3 === true && player.sprite.position.y < 287){
      scene = "forestPath3"
      forestPath3.start()
    }
  }

}
