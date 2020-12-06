let textStateFP2 = 1 // A variable which represents if a text box should be displayed, and which one if so

class ForestPath2 {
  constructor(bg_forestPath2) {
    this.bg = bg_forestPath2
  }

// Displays background
  display() {
    image(this.bg, 0, 0);
  }

// Assigns player and friend's starting Y position
  start() {
    player.sprite.position.y = 1326;
    friend.sprite.position.y = 1326;
  }

  // Defines walls
  boundaries() {
    if (player.sprite.position.x < 180) player.sprite.position.x = 180;
    if (player.sprite.position.x > 370) player.sprite.position.x = 370;
    if (player.sprite.position.y > 1326) player.sprite.position.y = 1326;
    if (friend.sprite.position.x < 180) friend.sprite.position.x = 180;
    if (friend.sprite.position.x > 370) friend.sprite.position.x = 370;
    if (friend.sprite.position.y > 1326) friend.sprite.position.y = 1326;

  if (textStateFP2 < 11){ // Restricts player from walking forward until the conversation is finished
      if (player.sprite.position.y < 258) player.sprite.position.y = 258;
      if (friend.sprite.position.y < 258) friend.sprite.position.y = 258;
    }
  }

  // Displays relevant text in the text box and makes adjustments to the sprites when necassary
  friendText(stateOfText, dialogue) {
    if (textStateFP2 === stateOfText && player.sprite.position.y < 1202) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment = dialogue;
      text(comment, x, player.sprite.position.y - 202, width, height);
    }
  }
  // Displays text options for player to select
  friendAnswer(stateOfText, c1, c2) {
    if (textStateFP2 === stateOfText) {
      choice()
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      choice1 = c1
      choice2 = c2
      if (selector === 1) {
        fill(229, 112, 40)
        text(c1, x, player.sprite.position.y - 180)
        fill(255)
        text(c2, x + 50, player.sprite.position.y - 150)
      } else if (selector === 2) {
        fill(255)
        text(c1, x, player.sprite.position.y - 180)
        fill(229, 112, 40)
        text(c2, x + 50, player.sprite.position.y - 150)
      }
    }
  }
    // Updates the text box displayed and plays the relevant dialogue sound effect on each click of shift
  changeTextState() {
    if (textStateFP2 > 0 && (keyCode === SHIFT)) {
      textStateFP2 = textStateFP2 + 1;
    }
  }
  // Shows next text box when the player selects an option
  selectChoice() {
    if (textStateFP2 === 2) {
      textStateFP2 = textStateFP2 + 1;
    }
  }

  // Switches scene from forestPath2 to lake
  exit(){
    if (player.sprite.position.y < 250){
      scene = "lake"
      forestLake.start()
    }
  }

}
