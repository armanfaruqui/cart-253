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

  boundaries() {
    if (player.sprite.position.x < 180) player.sprite.position.x = 180;
    if (player.sprite.position.x > 370) player.sprite.position.x = 370;
    if (player.sprite.position.y > 1326) player.sprite.position.y = 1326;
    if (friend.sprite.position.x < 180) friend.sprite.position.x = 180;
    if (friend.sprite.position.x > 370) friend.sprite.position.x = 370;
    if (friend.sprite.position.y > 1326) friend.sprite.position.y = 1326;

  if (textStateFP2 < 11){
      if (player.sprite.position.y < 258) player.sprite.position.y = 258;
      if (friend.sprite.position.y < 258) friend.sprite.position.y = 258;
    }
  }

  friendText1() {
    if (textStateFP2 === 1 && player.sprite.position.y < 1202) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment =
        "So what do you like to do for fun";
      text(comment, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText2() {
    if (textStateFP2 === 2) {
      choice()
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      choice1 = "Play video games (Truth)"
      choice2 = "Spend time outdoors (Lie)"
      if (selector === 1) {
        fill(229, 112, 40)
        text(choice1, x, player.sprite.position.y - 180)
        fill(255)
        text(choice2, x + 50, player.sprite.position.y - 150)
      } else if (selector === 2) {
        fill(255)
        text(choice1, x, player.sprite.position.y - 180)
        fill(229, 112, 40)
        text(choice2, x + 50, player.sprite.position.y - 150)
      }
    }
  }

  friendText3() {
    if (textStateFP2 === 3) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment =
        "Same! I've been super busy lately so I haven't had the time to enjoy enough of it";
      text(comment, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText4() {
    if (textStateFP2 === 4) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment =
        "I have such a bad habit of avoiding the work and tasks that stress me out";
      text(comment, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText5() {
    if (textStateFP2 === 5) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment =
        "It needs to change. Avoidance makes doing what you are dreading 100 times harder because it completely disempowers you";
      text(comment, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText6() {
    if (textStateFP2 === 6) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment =
        "When you let your goal become avoidance, your brain makes progression feel very uncomfortable";
      text(comment, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText7() {
    if (textStateFP2 === 7) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment =
        "Since I became aware of this and shifted my goal towards progress its been so much easier.";
      text(comment, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText8() {
    if (textStateFP2 === 8) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment =
        "Goal clarity is like giving your brain a quest marker. It becomes your friend instead of your enemy";
      text(comment, x, player.sprite.position.y - 202, width, height);
    }
  }
  friendText9() {
    if (textStateFP2 === 9) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment =
        "I rambled too long there didn't I";
      text(comment, x, player.sprite.position.y - 202, width, height);
    }
  }
  friendText10() {
    if (textStateFP2 === 10) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment =
        "You're saying I didn't? I'm glad you don't find talking about these kinds of things to be weird :)";
      text(comment, x, player.sprite.position.y - 202, width, height);
    }
  }

  changeTextState() {
    if (textStateFP2 > 0 && (keyCode === SHIFT)) {
      textStateFP2 = textStateFP2 + 1;
    }
  }

  selectChoice1() {
    if (textStateFP2 === 2) {
      textStateFP2 = textStateFP2 + 1;
    }
  }

  exit(){
    if (player.sprite.position.y < 250){
      scene = "lake"
      forestLake.start()
    }
  }

}
