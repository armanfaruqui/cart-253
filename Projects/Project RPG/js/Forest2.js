let textStateFP2 = 1
let tfp2;
let forestPath2Choice1
let forestPath2Choice2
let forestPath2Choice3

class ForestPath2 {
  constructor(bg_forestPath2) {
    this.bg = bg_forestPath2
  }

  display() {
    image(this.bg, 0, 0);
    console.log(textStateFP2)
  }

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
      tfp2 =
        "So what do you like to do for fun";
      text(tfp2, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText2() {
    if (textStateFP2 === 2) {
      choice()
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      forestPath2Choice1 = "Play video games (Truth)"
      forestPath2Choice2 = "Spend time outdoors (Lie)"
      if (selector === 1) {
        fill(229, 112, 40)
        text(forestPath2Choice1, x, player.sprite.position.y - 180)
        fill(255)
        text(forestPath2Choice2, x + 50, player.sprite.position.y - 150)
      } else if (selector === 2) {
        fill(255)
        text(forestPath2Choice1, x, player.sprite.position.y - 180)
        fill(229, 112, 40)
        text(forestPath2Choice2, x + 50, player.sprite.position.y - 150)
      }
    }
  }

  friendText3() {
    if (textStateFP2 === 3) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      tfp2 =
        "Same! I've been super busy lately so I haven't had the time to enjoy enough of it";
      text(tfp2, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText4() {
    if (textStateFP2 === 4) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      tfp2 =
        "I have such a bad habit of avoiding the work and tasks that stress me out";
      text(tfp2, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText5() {
    if (textStateFP2 === 5) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      tfp2 =
        "It needs to change. Avoidance makes doing what you are dreading 100 times harder because it completely disempowers you";
      text(tfp2, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText6() {
    if (textStateFP2 === 6) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      tfp2 =
        "When you let your goal become avoidance, your brain makes progression feel very uncomfortable";
      text(tfp2, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText7() {
    if (textStateFP2 === 7) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      tfp2 =
        "Since I became aware of this and shifted my goal towards progress its been so much easier.";
      text(tfp2, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText8() {
    if (textStateFP2 === 8) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      tfp2 =
        "Goal clarity is like giving your brain a quest marker. It becomes your friend instead of your enemy";
      text(tfp2, x, player.sprite.position.y - 202, width, height);
    }
  }
  friendText9() {
    if (textStateFP2 === 9) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      tfp2 =
        "I rambled too long there didn't I";
      text(tfp2, x, player.sprite.position.y - 202, width, height);
    }
  }
  friendText10() {
    if (textStateFP2 === 10) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      tfp2 =
        "You're saying I didn't? I'm glad you don't mind talking about these kinds of things :)";
      text(tfp2, x, player.sprite.position.y - 202, width, height);
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
