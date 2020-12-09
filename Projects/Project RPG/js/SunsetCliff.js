let textStateSC = 1;

class SunsetCliff {
  constructor(bg_sunsetCliff, cliffTheme) {
    this.bg = bg_sunsetCliff;
  }
  // Displays background
  display() {
    image(this.bg, 15, -10);
  }
  // Assigns starting position
  start() {
    player.sprite.position.y = 498;
    friend.sprite.position.y = 498;
  }
  // Defines walls
  boundaries() {
    if (player.sprite.position.x < 27) player.sprite.position.x = 27;
    if (friend.sprite.position.x < 27) friend.sprite.position.x = 27;
    if (player.sprite.position.x > 480) player.sprite.position.x = 480;
    if (friend.sprite.position.x > 480) friend.sprite.position.x = 480;
    if (player.sprite.position.y > 498) player.sprite.position.y = 498;
    if (friend.sprite.position.y > 498) friend.sprite.position.y = 498;
    if (player.sprite.position.y < 374) player.sprite.position.y = 374;
    if (friend.sprite.position.y < 374) friend.sprite.position.y = 374;
  }

  // Plays the theme for the scene
  playTheme() {
    if (scene === "cliff") {
      if (!cliffTheme.isPlaying() && !phoneSong1.isPlaying() && !phoneSong2.isPlaying() && !phoneSong3.isPlaying()) {
        cliffTheme.play();
      }
    }
  }

  // Displays relevant text in the text box
  friendText(stateOfText, dialogue) {
    if (textStateSC === stateOfText && player.sprite.position.y < 376) {
      textBox();
      fill(65, 243, 252);
      textSize(12);
      comment = dialogue;
      text(comment, x, y, width, height);
    }
  }
  // Displays the text for circumstances where the player has to make a selection
  playerText(stateOfText, c1, c2) {
    if (textStateSC === stateOfText) {
      choice();
      textBox();
      textSize(12);
      choice1 = c1;
      choice2 = c2;
      if (selector === 1) {
        fill(229, 112, 40);
        text(c1, x, y + 20, width / 2, height);
        fill(255);
        text(c2, 280, y + 20, width / 2, height);
      } else if (selector === 2) {
        fill(255);
        text(c1, x, y + 20, width / 2, height);
        fill(229, 112, 40);
        text(c2, 280, y + 20, width / 2, height);
      }
    }
  }
  // Updates the text box displayed and plays the relevant dialogue sound effect on each click of shift
  changeTextState() {
    if (
      player.sprite.position.y < 376 &&
      keyCode === SHIFT &&
      textStateSC !== 4 &&
      textStateSC !== 11 &&
      textStateSC !== 12
    ) {
      textStateSC = textStateSC + 1;
      switch (textStateSC) {
        case 0:
          friend.dialogue2.play();
          break;
        case 1:
          friend.dialogue1.play();
          break;
      }
    } else if (textStateSC === 12) {
      textStateSC = textStateSC + 2;
    }
  }
  // Shows next text box when the player selects an option and plays the relevant dialogue sound
  playerReply() {
    if (textStateSC === 4) {
      textStateSC = textStateSC + 1;
    }
    if (textStateSC === 11 && selector === 1) {
      textStateSC = textStateSC + 1;
    } else if (textStateSC === 11 && selector === 2) {
      textStateSC = textStateSC + 2;
    }
  }

  endText() {
    if (textStateSC > 16) {
      fill(120, 31, 44);
      textFont(myFont);
      textSize(18);
      textAlign(CENTER);
      text("THE END? .. or", width / 2 + 50, height / 2);
      text("THE BEGINNING", width / 2 + 50, height / 2 + 30);
    }
  }
}
