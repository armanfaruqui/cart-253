let oscillator3;
let newFreq2;
let textStateFP = 1; // A variable which represents if a text box should be displayed, and which one if so
let friendTalkedTo = false; // Boolean which checks if interaction with friend has begun
let forestPathSelector = 1

class ForestPath {
  constructor(bg_forest1, friendDialogue1,friendDialogue2,friendDialogue3,friendDialogue4,friendDialogue5, friendDialogue6) {
    this.bg = bg_forest1;
  }

  display() {
    image(this.bg, 0, 0);
  }
  // Assigns player position and starts oscillator
  start() {
    player.sprite.position.x = 270;
    player.sprite.position.y = 950;
    oscillator3 = new p5.Oscillator(220, "triangle");
    oscillator3.start();
  }

  boundaries() {
    if (player.sprite.position.x < 180) player.sprite.position.x = 180;
    if (player.sprite.position.x > 370) player.sprite.position.x = 370;
    if (player.sprite.position.y > 956) player.sprite.position.y = 956;
    if (friend.sprite.position.x < 180) friend.sprite.position.x = 180;
    if (friend.sprite.position.x > 370) friend.sprite.position.x = 370;
    if (friend.sprite.position.y > 956) friend.sprite.position.y = 956;
  if (textStateFP < 15){
    if (player.sprite.position.y < 286) player.sprite.position.y = 286;
  }
  }
  // Y position of camera depends on the Y position of the player. X remains fixed
  camera() {
    camera.zoom = 1;
    camera.position.x = 270;
    camera.position.y = player.sprite.position.y;
  }
  // Plays oscillator with frequency which changes depending on players distance from friend
  anxiety() {
    let friendDistance = dist(
      player.sprite.position.x,
      player.sprite.position.y,
      friend.sprite.position.x,
      friend.sprite.position.y
    ); // Measures distance between player and door
    newFreq2 = map(friendDistance, 280, 20, 0, 100); // Max dist = 270. Min = 20
    oscillator3.freq(newFreq2);
  }

  // If the player interacts directly with the friend
  introduction1() {
    if (player.sprite.position.y < 288 && textStateFP === 1) {
      friend.forestPathText1();
      friendTalkedTo = true;
    }
  }

  // If the player walks past ignoring the friend
  introduction2() {
    if (
      friend.sprite.overlap(player.sprite) &&
      keyCode === SHIFT &&
      textStateFP === 1
    ) {
      friend.forestPathText1();
      friendTalkedTo = true;
    }
  }

  //Display a GIF of squirrels on a tree
  squirrels() {
    if (textStateFP === 2) {
      camera.off()
      image(gif_squirrels, 0, 0);
      player.sprite.position.x =-100
      player.sprite.position.y =-100
      friend.sprite.changeAnimation("blank")
      newFreq2 = 20
    }
  }

  friendText2() {
    if (textStateFP === 3) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment = "This is the sweetest";
      text(comment, x, player.sprite.position.y - 202, width, height);
      player.sprite.position.x = 201
      player.sprite.position.y = 415
      friend.sprite.position.x = 190
      friend.sprite.position.y = 392
      player.sprite.changeAnimation("standLeft")
      friend.sprite.changeAnimation("standLeft")
      oscillator3.stop()
      }
    }

  friendText3() {
    if (textStateFP === 4) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment =
        "Watching these two build their home to survive the cold winter with each other";
      text(comment, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText4() {
    if (textStateFP === 5) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment =
        "It's not often I bump into people my age near this town. Are you from somewhere else?";
      text(comment, x, player.sprite.position.y - 202, width, height);
      friend.sprite.changeAnimation("stand")
    }
  }

  friendText5() {
    if (textStateFP === 6) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment =
        "REALLY!? Wow its so nice to meet you!";
      text(comment, x, player.sprite.position.y - 202, width, height);
      friend.sprite.changeAnimation("stand")
    }
  }

  friendText6() {
    if (textStateFP === 7) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment =
        "I really like your outfit and the earring";
      text(comment, x, player.sprite.position.y - 202, width, height);
        friend.sprite.changeAnimation("stand")
    }
  }

  friendText7() {
    if (textStateFP === 8) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment =
        "It's so hard to find people that dress colorfully here";
      text(comment, x, player.sprite.position.y - 202, width, height);
          friend.sprite.changeAnimation("stand")
    }
  }

  friendText8() {
    if (textStateFP === 9) {
      friend.sprite.changeAnimation("stand")
      choice()
      dynamicTextBox2();
      choice1 = "Thanks"
      choice2 = "Thanks. I like your's too"
      if (selector === 1) {
         fill(229, 112, 40)
         text(choice1, x, player.sprite.position.y - 180)
         fill(255)
         text(choice2, x + 50, player.sprite.position.y - 150)
       }
       else if (selector === 2){
         fill(255)
         text(choice1, x, player.sprite.position.y - 180)
         fill(229, 112, 40)
         text(choice2, x + 50, player.sprite.position.y - 150)
       }
    }
  }

  friendText9() {
    if (textStateFP === 10) {
          friend.sprite.changeAnimation("stand")
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment =
        "What are you up to right now? I was just going on my usual forest hike";
      text(comment, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText10() {
    if (textStateFP === 11) {
          friend.sprite.changeAnimation("stand")
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment =
        "It would be nice to have some company during it for a change";
      text(comment, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText11() {
    if (textStateFP === 12) {
      friend.sprite.changeAnimation("stand")
      choice()
      dynamicTextBox2();
      choice1 = "I've got this job..."
      choice2 = "Why not"
      if (selector === 1) {
         fill(229, 112, 40)
         text(choice1, x, player.sprite.position.y - 180)
         fill(255)
         text(choice2, x + 275, player.sprite.position.y - 180)
       }
       else if (selector === 2){
         fill(255)
         text(choice1, x, player.sprite.position.y - 180)
         fill(229, 112, 40)
         text(choice2, x + 275, player.sprite.position.y - 180)
       }
    }
  }

  friendText12() {
    if (textStateFP === 13) {
          friend.sprite.changeAnimation("stand")
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment =
        "Come on don't be shy. We can stop where you need to go on the way";
      text(comment, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText13() {
    if (textStateFP === 14) {
          friend.sprite.changeAnimation("stand")
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment =
        "That's the spirit!";
      text(comment, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText14() {
    if (textStateFP === 15) {
          friend.sprite.changeAnimation("standLeft")
          friend.adjustPostion()
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      comment =
        "Let's go then. This should be nice :)";
      text(comment, x, player.sprite.position.y - 202, width, height);
    }
  }

  startWalkingTogether() {
    if (textStateFP > 15){
      friend.update()
    }
  }

  // Updates the text box displayed and plays the relevant dialogue sound effect on each click of shift
  //&& textStateFP !== 9 && textStateFP !== 12
  changeTextState() {
    if ((friendTalkedTo === true) && keyCode === SHIFT ) {
      textStateFP = textStateFP + 1;
      switch(textStateFP)  {
        case 4: friendDialogue4.play(); break;
        case 5: friendDialogue4.play(); break;
        case 6: friendDialogue4.play(); break;
        case 7: friendDialogue4.play(); break;
        case 8: friendDialogue4.play(); break;
        case 10: friendDialogue4.play(); break;
        case 11: friendDialogue4.play(); break;
        case 13: friendDialogue4.play(); break;
        case 14: friendDialogue4.play(); break;
        case 15: friendDialogue4.play(); break;
      }
    }
  }

  selectChoice1() {
    if ((friendTalkedTo === true) && textStateFP === 9) {
      textStateFP = textStateFP + 1;
    }
  }

  selectChoice2(){
    if ((friendTalkedTo === true) && textStateFP === 12 && selector === 1) {
      textStateFP = textStateFP + 1;
    }
    else if ((friendTalkedTo === true) && textStateFP === 12 && selector === 2){
      textStateFP = textStateFP + 2
    }
  }

  exit(){
    if (player.sprite.position.y < 286 && textStateFP > 15){
      scene = "forestPath2"
      forestPath2.start()
    }
  }
}
