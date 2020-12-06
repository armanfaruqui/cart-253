// Variables to create groups for both columns of flowers
let redFlowersColumn1
let redFlowersColumn2

let questionAsked = 0 // Stores which question the player selected
let questionAsked2 = 0 // Stores which question the player selected on the second time of asking
let conversationEnded = false // Checks if the conversation is finished
let firstFlower = {
  x1: 182, // X value of the first flower drawn in the first row
  x2: 366, // X value of the second flower drawn in the second row
  y1: 1526, // Y value of the first flower drawn in the first row
  y2: 1526, // Y value of the first flower drawn in the second row
}

let textStateFP3 = 1 // A variable which represents if a text box should be displayed, and which one if so

class ForestPath3 {
  constructor(bg_forestPath3, flowerRed) {
    this.bg = bg_forestPath3

    redFlowersColumn1 = new Group();
    redFlowersColumn2 = new Group();

    // Draws the flowers on the left column, evenly distributing them
    for (let i = 0; i<15; i++){
      let newRedFlower = createSprite(firstFlower.x1, firstFlower.y1)
      newRedFlower.addAnimation("flowerRed", flowerRed)
      redFlowersColumn1.add(newRedFlower)
      firstFlower.y1 = firstFlower.y1 - 108
    }
    // Draws the flowers on the right column, evenly distributing them
    for (let i = 0; i<15; i++){
      let newRedFlower2 = createSprite(firstFlower.x2, firstFlower.y2)
      newRedFlower2.addAnimation("flowerRed", flowerRed)
      redFlowersColumn2.add(newRedFlower2)
      firstFlower.y2 = firstFlower.y2 - 108
    }
  }
  // Displays background and draws flower sprites
  display() {
    image(this.bg, 0, 0);
    drawSprites(redFlowersColumn1)
    drawSprites(redFlowersColumn2)
  }
  // Assigns player's and friend's starting position
  start(){
    player.sprite.position.x = 270;
    friend.sprite.position.x = 320;
    player.sprite.position.y = 1326;
    friend.sprite.position.y = 1326;
  }
  // Defines walls
  boundaries(){
    if (player.sprite.position.x < 180) player.sprite.position.x = 180;
    if (player.sprite.position.x > 370) player.sprite.position.x = 370;
    if (player.sprite.position.y > 1326) player.sprite.position.y = 1326;
    if (friend.sprite.position.x < 180) friend.sprite.position.x = 180;
    if (friend.sprite.position.x > 370) friend.sprite.position.x = 370;
    if (friend.sprite.position.y > 1326) friend.sprite.position.y = 1326;
  }

  questionForFriend1() {
    if (textStateFP3 === 1 && player.sprite.position.y < 1320) {
      choice()
      dynamicTextBox2();
      question = "Ask a question"
      choice1 = "What motivates you"
      choice2 = "What worries you the most"
      textSize(12)
      fill(255)
      text(question, x, player.sprite.position.y - 205, width, height)
      if (selector === 1) {
         fill(229, 112, 40)
         text(choice1, x, player.sprite.position.y - 160, width/2, height)
         fill(255)
         text(choice2, x + 190, player.sprite.position.y - 160, width/2, height)
       }
       else if (selector === 2){
         fill(255)
         text(choice1, x, player.sprite.position.y - 160, width/2, height)
         fill(229, 112, 40)
         text(choice2, x + 190, player.sprite.position.y - 160, width/2, height)
       }
    }
  }

  questionForFriend2() {
    if (textStateFP3 === 12 && player.sprite.position.y < 1320 && questionAsked2 === 0) {
      choice()
      dynamicTextBox2();
      question = "That went okay"
      if (questionAsked === 2){
        choice1 = "What motivates you"
      }
      else if (questionAsked === 1){
        choice1 = "What worries you the most"
      }
        choice2 = "What's your favourite part of hiking"
      textSize(12)
      fill(255)
      text(question, x, player.sprite.position.y - 205, width, height)
      if (selector === 1) {
         fill(229, 112, 40)
         text(choice1, x, player.sprite.position.y - 160, width/2, height)
         fill(255)
         text(choice2, x + 190, player.sprite.position.y - 175, width/2, height)
       }
       else if (selector === 2){
         fill(255)
         text(choice1, x, player.sprite.position.y - 160, width/2, height)
         fill(229, 112, 40)
         text(choice2, x + 190, player.sprite.position.y - 175, width/2, height)
       }
    }
  }

  friendAnswer(stateOfText, dialogue) {
    if (textStateFP3 === stateOfText) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment = dialogue;
      text(comment, x, player.sprite.position.y - 202, width, height);
    }
  }

  selectChoice1(){
    if (textStateFP3 === 1 & selector === 1){
      textStateFP3 = textStateFP3 + 1
      questionAsked = 1
    }
    else if(textStateFP3 === 1 & selector === 2){
      textStateFP3 = textStateFP3 + 7
      questionAsked = 2
    }
  }

  selectChoice2(){
    if (textStateFP3 === 12 & selector === 1 && questionAsked === 2){
      textStateFP3 = 2
      questionAsked2 = 1
    }
    else if(textStateFP3 === 12 & selector === 1 && questionAsked === 1){
      textStateFP3 = 8
      questionAsked2 = 2
    }
    else if(textStateFP3 === 12 & selector === 2){
      textStateFP3 = textStateFP3 + 1
      questionAsked2 = 3
    }
  }

  changeTextState(){
    if(keyCode === SHIFT && textStateFP3 > 0 && textStateFP3 !== 1 && textStateFP3 !== 12 && textStateFP3 !== 7){
      textStateFP3 = textStateFP3 + 1
    }
    if(keyCode === SHIFT && textStateFP3 === 7){
      textStateFP3 = 12
    }
    if (keyCode === SHIFT && textStateFP3 === 11 && questionAsked2 === 2){
      conversationEnded = true
    }
    if (keyCode === SHIFT && textStateFP3 === 12 && questionAsked2 === 1){
      conversationEnded = true
    }
    if (keyCode === SHIFT && textStateFP3 === 17){
      conversationEnded = true
    }
  }

  resetPosition(){
    if (player.sprite.position.y < 258 && conversationEnded === false){
      player.sprite.position.y = 1326;
      friend.sprite.position.y = 1326;
    }
  }

  exit(){
    if (player.sprite.position.y < 250){
      scene === "booty"
    }
  }

}
