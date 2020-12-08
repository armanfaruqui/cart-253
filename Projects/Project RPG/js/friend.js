let standStill2 = false // Boolean which is changed to true if the player's position needs to be fixed

class Friend {
  constructor(friend_stand, friend_walkDown, friend_standLeft, friend_walkLeft, friend_standRight, friend_walkRight, friend_standUp, friend_walkUp, friend_new, friendDialogue1, friendDialogue2, friendDialogue3, friendDialogue4, friendDialogue5, friendDialogue6) {
    this.sprite = createSprite(-400, -400, 42, 42);
    this.sprite.addAnimation("stand", friend_stand);
    this.sprite.addAnimation("walkDown", friend_walkDown);
    this.sprite.addAnimation("standLeft", friend_standLeft);
    this.sprite.addAnimation("walkLeft", friend_walkLeft);
    this.sprite.addAnimation("standRight", friend_standRight);
    this.sprite.addAnimation("walkRight", friend_walkRight);
    this.sprite.addAnimation("standUp", friend_standUp);
    this.sprite.addAnimation("walkUp", friend_walkUp);
    this.sprite.setCollider("rectangle", 0, 20, 22, 35);
    this.sprite.addToGroup(humans)
    this.sprite.depth = 4; //Visualize depth as photoshop layers
    this.direction = "down";
    this.dialogue1 = friendDialogue1 // Adds dialogue sounds to the object
    this.dialogue2 = friendDialogue2
    this.dialogue3 = friendDialogue3
    this.dialogue4 = friendDialogue4
    this.dialogue5 = friendDialogue5
    this.dialogue6 = friendDialogue6
  }

  update() { // Is the same as update() for the player, but without the step sounds
  if (standStill2 === false){
    if (keyIsDown(65) && !keyIsDown(83) && !keyIsDown(68) && !keyIsDown(87)) {
      this.sprite.changeAnimation("walkLeft");
      this.sprite.velocity.x = -4.4;
      this.direction = "left";

    } else if (
      keyIsDown(83) &&
      !keyIsDown(65) &&
      !keyIsDown(68) &&
      !keyIsDown(87)
    ) {
      this.sprite.changeAnimation("walkDown");
      this.sprite.velocity.y = 4;
      this.direction = "down";

    } else if (
      keyIsDown(68) &&
      !keyIsDown(83) &&
      !keyIsDown(65) &&
      !keyIsDown(87)
    ) {
      this.sprite.changeAnimation("walkRight");
      this.sprite.velocity.x = 4.4;
      this.direction = "right";

    } else if (
      keyIsDown(87) &&
      !keyIsDown(83) &&
      !keyIsDown(68) &&
      !keyIsDown(65)
    ) {
      this.sprite.changeAnimation("walkUp");
      this.sprite.velocity.y = -4;
      this.direction = "up";

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

    }
  }
    drawSprites(humans)
}

  // If due to a collision the distance is closed between the player and friend, this readjusts their position
  updateDistanceFromPlayer(distanceBetween){
    let d = dist(this.sprite.position.x, this.sprite.position.y, player.sprite.position.x, player.sprite.position.y)
    //console.log(d)
    if (d < distanceBetween) {
      this.sprite.position.x = this.sprite.position.x + 1 // Smoothly adjusts x position until the correct distance inbetween is reached
    }
    this.sprite.position.y = player.sprite.position.y // Levels y position since they always walk side by side
  }


  // Locks the friend's position
  standStill(){
    standStill2 = true
    this.sprite.velocity.x = 0
    this.sprite.velocity.y = 0
  }


}
