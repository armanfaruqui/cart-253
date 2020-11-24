let oscillator3;
let textStateFP = 1;
let friendTalkedTo = false;
let forestPathSelector = 1
let forestPathChoice1
let forestPathChoice2
let forestPathChoice3

class ForestPath {
  constructor(bg_forest1) {
    this.bg = bg_forest1;
  }

  display() {
    image(this.bg, 0, 0);
  }

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
    if (player.sprite.position.y < 286) player.sprite.position.y = 286;
  }

  camera() {
    camera.zoom = 1;
    camera.position.x = 270;
    camera.position.y = player.sprite.position.y;
  }

  anxiety() {
    let friendDistance = dist(
      player.sprite.position.x,
      player.sprite.position.y,
      friend.sprite.position.x,
      friend.sprite.position.y
    ); // Measures distance between player and door
    let newFreq2 = map(friendDistance, 280, 20, 0, 100); // Max dist = 270. Min = 20
    oscillator3.freq(newFreq2);
  }

  introduction1() {
    if (player.sprite.position.y < 288 && textStateFP === 1) {
      friend.forestPathText1();
      friendTalkedTo = true;
    }
  }

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

  squirrels() {
    if (textStateFP === 2) {
      image(gif_squirrels, 0, 0);
      player.sprite.changeAnimation("blank")
      friend.sprite.changeAnimation("blank")
    }
  }

  friendText2() {
    if (textStateFP === 3) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      tfp = "Its beautiful isnt it";
      text(tfp, x, player.sprite.position.y - 202, width, height);
      player.sprite.position.x = 201
      player.sprite.position.y = 415
      friend.sprite.position.x = 190
      friend.sprite.position.y = 392
      player.sprite.changeAnimation("standLeft")
      friend.sprite.changeAnimation("standLeft")
    }
  }

  friendText3() {
    if (textStateFP === 4) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      tfp =
        "Watching these 2 build their home where they will have to survive the cold winter with nothing but each other";
      text(tfp, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText4() {
    if (textStateFP === 5) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      tfp =
        "It's not often I bump into people my age near this town. Are you from somewhere else?";
      text(tfp, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText5() {
    if (textStateFP === 6) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      tfp =
        "REALLY!? Wow its so nice to meet you!";
      text(tfp, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText6() {
    if (textStateFP === 7) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      tfp =
        "My name is Munia";
      text(tfp, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText7() {
    if (textStateFP === 8) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      tfp =
        "I really like your outfit and the earring. It's so hard to find people that dress colorfully here";
      text(tfp, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText8() {
    if (textStateFP === 9) {
      choice()
      dynamicTextBox2();
      forestPathChoice1 = "Thanks"
      forestPathChoice2 = "Thanks. I like your's too"
      if (selector === 1) {
         fill(229, 112, 40)
         text(forestPathChoice1, x, player.sprite.position.y - 180)
         fill(255)
         text(forestPathChoice2, x - 180, player.sprite.position.y - 180)
       }
       else if (selector === 2){
         fill(255)
         text(forestPathChoice1, x, player.sprite.position.y - 180)
         fill(229, 112, 40)
         text(forestPathChoice2, 250, player.sprite.position.y - 180)
       }
    }
  }

  friendText9() {
    if (textStateFP === 10) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      tfp =
        "What are you up to right now? I was just going on my usual forest hike";
      text(tfp, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText10() {
    if (textStateFP === 11) {
      dynamicTextBox2();
      fill(65, 243, 252);
      textSize(12);
      tfp =
        "It would be nice to have some company during it for a change";
      text(tfp, x, player.sprite.position.y - 202, width, height);
    }
  }

  friendText11(){

  }

  changeTextState() {
    if ((friendTalkedTo === true) & (keyCode === SHIFT)) {
      textStateFP = textStateFP + 1;
    }
  }
}
