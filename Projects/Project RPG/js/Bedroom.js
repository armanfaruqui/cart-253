//  Booleans which checks if text boxes should be displayed
let showB1 = false;
let showB2 = false;
let showB3 = false;
let showB4 = false;
let things; // Variable which is used below to create a sprite group

class Bedroom {
  constructor(bed, bg_bedroom, ting, door) {
    things = new Group(); // Spites are assigned into groups. Groups can be drawn separately
    if (scene === "bedroom") {
      // Bed sprite
      this.sprite = createSprite(370, 350, 12, 10); // Initializes a sprite
      this.sprite.addAnimation("bed", bed); // Adds the preloaded animation(s)
      this.sprite.depth = 1; // Depth determines the order in which sprites are displayed. Sprites with higher depths are drawn on top of sprites with lower depths
      this.sprite.changeAnimation("bed"); // Decides which animation should be displayed since sprites can hold multiple
      this.sprite.addToGroup(things); // Adds a sprite to a defined group so sprites with similair properties can be reffered to easier
      // Desk sprite
      desk.sprite = createSprite(270, 150, 12, 10);
      desk.sprite.addAnimation("desk", desk);
      desk.sprite.depth = 1;
      desk.sprite.changeAnimation("desk");
      desk.sprite.addToGroup(things);
      // Door sprite
      door.sprite = createSprite(88, 432, 50, 100);
      door.sprite.addAnimation("door", door);
      door.sprite.setCollider("rectangle", 0, 0, 50, 30); // Defines a custom collider. First paramter refers to its shape. The 2 after refer the offset x and y position from where the sprite is drawn. The last 2 represent the width and height of the collider respectively
      door.sprite.addToGroup(things);
      door.sprite.depth = 1;
      // Assigns players starting position
      player.sprite.position.x = 200;
      player.sprite.position.y = 200;
    }
  }
  // Displays the background and draws spites
  display() {
    image(bg_bedroom, 0, 0);
    drawSprites(things); // Draws sprites in the group 'things'
  }
 // Plays a sound and changes a boolean to allow the relevant text to be displayed
  keyPressed() {
    // Interacts with bed
    if (this.sprite.overlap(player.sprite) && keyCode === SHIFT) {
      showB1 = true;
      ting.play();
    } else {
      showB1 = false;
    }
    // Interacts with desk
    if (desk.sprite.overlap(player.sprite) && keyCode === SHIFT) {
      showB2 = true;
      ting.play();
    } else {
      showB2 = false;
    }
  }
  // Displays relevant text when player interacts with the desk/computer
  bedText() {
    if (showB1 === true) {
      push();
      textBox();
      fill(255);
      comment = "You slept for 9 hours and 30 minutes last night";
      textSize(12);
      text(comment, x, y, width, height);
      pop();
    }
  }
  // Displays relevant text when player interacts with the desk/computer
  deskText() {
    if (showB2 === true) {
      choice();
      push();
      textBox();
      fill(255);
      question = "Use your computer?";
      choice1 = "Sure";
      choice2 = "Not Today";
      textSize(12);
      text(question, x, y, width, height);
      if (selector === 0) {
        fill(255);
        text(choice1, x, y2);
        fill(255);
        text(choice2, 280, y2);
      } else if (selector === 1) {
        fill(229, 112, 40);
        text(choice1, x, y2);
        fill(255);
        text(choice2, 280, y2);
      } else if (selector === 2) {
        fill(255);
        text(choice1, x, y2);
        fill(229, 112, 40);
        text(choice2, 280, y2);
      }
      pop();
    }
  }
  // Opens a game in a separate tab
  launchGame() {
    if (showB2 === true && selector === 1) {
      window.open("https://www.google.com/search?sxsrf=ALeKk028iLTxTp1ScADA2TEffxpkOVliag%3A1607497826917&ei=YnjQX9rKN82ggQbksaiYBQ&q=why+am+i+so+useless&oq=why+am+i+so+useless&gs_lcp=CgZwc3ktYWIQAzIFCAAQyQMyAggAMgIIADICCAAyAggAMgIIADICCAAyBggAEBYQHjIGCAAQFhAeMgYIABAWEB46BAgjECc6BwgAEMkDEEM6BAgAEEM6BAguEEM6CAgAELEDEIMBOgoILhCxAxDJAxBDOggILhCxAxCDAToLCC4QsQMQgwEQyQM6BQgAEMcDUNJpWMV9YP99aABwAXgAgAHOAogB9x2SAQYyLTE1LjGYAQCgAQGqAQdnd3Mtd2l6wAEB&sclient=psy-ab&ved=0ahUKEwjag82HrMDtAhVNUMAKHeQYClMQ4dUDCA0&uact=5"); // Launches browser
      showB2 = false;
    }
    if (showB2 === true && selector === 2) {
      showB2 = false;
    }
  }
  // Sets walls/boundaries for the player
  boundaries() {
    if (player.sprite.position.x < 120) player.sprite.position.x = 120;
    if (player.sprite.position.y < 150) player.sprite.position.y = 150;
    if (player.sprite.position.x > 380) player.sprite.position.x = 380;
    if (player.sprite.position.y > 450) player.sprite.position.y = 450;

    player.sprite.collide(this.sprite)
  }
  // Switches scene from bedroom to hall
  exit() {
    if (door.sprite.overlap(player.sprite) && player.direction === "left") {
      scene = "hall";
      hall.start();
    }
  }
}
