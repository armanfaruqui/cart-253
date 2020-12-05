let redFlowersColumn1
let redFlowersColumn2
let firstFlower = {
  x1: 182,
  x2: 366,
  y1: 1526,
  y2: 1526,
}

let textStateFP3 = 1

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

  display() {
    image(this.bg, 0, 0);
    drawSprites(redFlowersColumn1)
    drawSprites(redFlowersColumn2)
  }

  start(){
    player.sprite.position.x = 270;
    friend.sprite.position.x = 270;
    player.sprite.position.y = 1326;
    friend.sprite.position.y = 1326;
  }

  boundaries(){
    if (player.sprite.position.x < 180) player.sprite.position.x = 180;
    if (player.sprite.position.x > 370) player.sprite.position.x = 370;
    if (player.sprite.position.y > 1326) player.sprite.position.y = 1326;
    if (friend.sprite.position.x < 180) friend.sprite.position.x = 180;
    if (friend.sprite.position.x > 370) friend.sprite.position.x = 370;
    if (friend.sprite.position.y > 1326) friend.sprite.position.y = 1326;
  }

  friendText1() {
    if (textStateFP3 === 1 && player.sprite.position.y < 1320) {
      choice()
      dynamicTextBox2();
      question = "Ask a question"
      choice1 = "What motivates you"
      choice2 = "What worries you"
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

  friendAnswer1(stateOfText, dialogue) {
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
    }
    else if(textStateFP3 === 1 & selector === 2){
      textStateFP3 = textStateFP3 + 7
    }
  }


}
