let humans; // Variable to create a sprite group
let standStill = false; // Boolean which is changed to true if the player's position needs to be fixed

class Player {

  constructor(player_stand, player_walkDown, player_standLeft, player_walkLeft, player_standRight, player_walkRight, player_standUp, player_walkUp, woodstep, stoneStep, blank2) {
    humans = new Group()
    this.sprite = createSprite(200, 200, 42, 42); // Initializes the sprite
    this.sprite.addAnimation("stand", player_stand);  // Adds the preloaded animation(s)
    this.sprite.addAnimation("walkDown", player_walkDown);
    this.sprite.addAnimation("standLeft", player_standLeft);
    this.sprite.addAnimation("walkLeft", player_walkLeft);
    this.sprite.addAnimation("standRight", player_standRight);
    this.sprite.addAnimation("walkRight", player_walkRight);
    this.sprite.addAnimation("standUp", player_standUp);
    this.sprite.addAnimation("walkUp", player_walkUp);
    this.sprite.addAnimation("blank2", blank2);
    this.sprite.setCollider("rectangle", 0, 20, 22, 35);
    this.sprite.addToGroup(humans) // Adds a sprite to a defined group so sprites with similair properties can be reffered to easier
    this.sprite.depth = 5; //Visualize depth as photoshop layers
    this.direction = "down";
    this.stepSound = woodstep;
    this.stepSound2 = stoneStep;
    this.stepSound3 = grassStep;
  }

  update() {
  if(standStill === false){ // Using a function to change this to true locks the player's position
    if (keyIsDown(65) && !keyIsDown(83) && !keyIsDown(68) && !keyIsDown(87)) { // For movement to the left
      this.sprite.changeAnimation("walkLeft"); // Relevant animation triggered
      this.sprite.velocity.x = -2.4; // Moves the sprite
      this.direction = "left"; // Stores the direction for use in different functions
      if (scene === "bedroom" || scene === "hall" || scene === "butchery") { // The following if statements play the relevant step sound
        if (!this.stepSound.isPlaying()) { // Makes sure the sound isn't already playing
          this.stepSound.play();
        }
      }
      else if (scene === "town"|| scene === "cliff") {
        if (!this.stepSound2.isPlaying()) {
          this.stepSound2.play();
        }
      }
      else if (scene === "forestPath" || scene === "forestPath2" || scene === "lake" || scene === "forestPath3") {
        if (!this.stepSound3.isPlaying()) {
          this.stepSound3.play();
        }
      }
    } else if (keyIsDown(83) && !keyIsDown(65) && !keyIsDown(68) && !keyIsDown(87)) { // For movement to the right
      this.sprite.changeAnimation("walkDown"); // Same process repeated for movement in the other 3 directions
      this.sprite.velocity.y = 2.4;
      this.direction = "down";
      if (scene === "bedroom" || scene === "hall" || scene === "butchery") {
        if (!this.stepSound.isPlaying()) {
          this.stepSound.play();
        }
      }
      if (scene === "town"|| scene === "cliff") {
        if (!this.stepSound2.isPlaying()) {
          this.stepSound2.play();
        }
      }
      if (scene === "forestPath" || scene === "forestPath2" || scene === "lake" || scene === "forestPath3") {
        if (!this.stepSound3.isPlaying()) {
          this.stepSound3.play();
        }
      }
    } else if (
      keyIsDown(68) &&
      !keyIsDown(83) &&
      !keyIsDown(65) &&
      !keyIsDown(87)
    ) {
      this.sprite.changeAnimation("walkRight");
      this.sprite.velocity.x = 2.4;
      this.direction = "right";
      if (scene === "bedroom" || scene === "hall" || scene === "butchery") {
        if (!this.stepSound.isPlaying()) {
          this.stepSound.play();
        }
      }
      if (scene === "town"|| scene === "cliff") {
        if (!this.stepSound2.isPlaying()) {
          this.stepSound2.play();
        }
      }
      if (scene === "forestPath" || scene === "forestPath2" || scene === "lake" || scene === "forestPath3") {
        if (!this.stepSound3.isPlaying()) {
          this.stepSound3.play();
        }
      }
    } else if (
      keyIsDown(87) &&
      !keyIsDown(83) &&
      !keyIsDown(68) &&
      !keyIsDown(65)
    ) {
      this.sprite.changeAnimation("walkUp");
      this.sprite.velocity.y = -2.4;
      this.direction = "up";
      if (scene === "bedroom" || scene === "hall" || scene === "butchery") {
        if (!this.stepSound.isPlaying()) {
          this.stepSound.play();
        }
      }
      if (scene === "town" || scene === "cliff") {
        if (!this.stepSound2.isPlaying()) {
          this.stepSound2.play();
        }
      }
      if (scene === "forestPath" || scene === "forestPath2" || scene === "lake" || scene === "forestPath3") {
        if (!this.stepSound3.isPlaying()) {
          this.stepSound3.play();
        }
      }
    } else {
      this.sprite.velocity.x = 0;
      this.sprite.velocity.y = 0;
      if (this.direction === "down") {
        this.sprite.changeAnimation("stand");
      } else if (this.direction === "up") {
        this.sprite.changeAnimation("standUp");
      } else if (this.direction === "right") {
        this.sprite.changeAnimation("standRight");
      } else if (this.direction === "left") {
        this.sprite.changeAnimation("standLeft");
      }
      woodstep.stop(); // Ensures the step sounds don't play when the player isn't moving
      stoneStep.stop();
      grassStep.stop();
    }
  }
  drawSprites(humans); // Draws the sprite
}

  // Locks the player's position
  standStill(){
    standStill = true;
    this.sprite.velocity.x = 0;
    this.sprite.velocity.y = 0;
  }
}
