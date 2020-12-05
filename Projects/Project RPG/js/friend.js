let tfp;
let standStill2 = false

class Friend {
  constructor(friend_stand, friend_walkDown, friend_standLeft, friend_walkLeft, friend_standRight, friend_walkRight, friend_standUp, friend_walkUp, friend_new, blank) {
    this.sprite = createSprite(-400, -400, 42, 42);
    this.sprite.addAnimation("stand", friend_stand);
    this.sprite.addAnimation("walkDown", friend_walkDown);
    this.sprite.addAnimation("standLeft", friend_standLeft);
    this.sprite.addAnimation("walkLeft", friend_walkLeft);
    this.sprite.addAnimation("standRight", friend_standRight);
    this.sprite.addAnimation("walkRight", friend_walkRight);
    this.sprite.addAnimation("standUp", friend_standUp);
    this.sprite.addAnimation("walkUp", friend_walkUp);
    this.sprite.addAnimation("blank", blank);
    this.sprite.setCollider("rectangle", 0, 20, 22, 35);
    this.sprite.addToGroup(humans)
    this.sprite.depth = 4; //Visualize depth as photoshop layers
    this.direction = "down";

  }

  standingThere() {
    if (textStateFP < 15) {
      this.sprite.position.x = 190
      this.sprite.position.y = 382
      this.sprite.changeAnimation("standLeft")
      player.sprite.collide(this.sprite)
    }
  }

  forestPathText1() {
    dynamicTextBox2()
    fill(65, 243, 252)
    textSize(12)
    tfp = 'Psst hey check this out!'
    text(tfp, x, player.sprite.position.y - 202, width, height)
  }

  update() {
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
  updateDistanceFromPlayer(distanceBetween){
    let d = dist(this.sprite.position.x, this.sprite.position.y, player.sprite.position.x, player.sprite.position.y)
    //console.log(d)
    if (d < distanceBetween) {
      this.sprite.position.x = this.sprite.position.x + 1
    }
    this.sprite.position.y = player.sprite.position.y
  }

  adjustPostion(){
    this.sprite.position.x = player.sprite.position.x + 80
    this.sprite.position.y = player.sprite.position.y
  }

  standStill(){
    standStill2 = true
    this.sprite.velocity.x = 0
    this.sprite.velocity.y = 0
  }

}
