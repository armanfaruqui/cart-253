let player_stand; //Player variables
let player_walkDown;
let player_sprite;
let player_standLeft;
let player_walkLeft;
let player_standRight;
let player_walkRight;
let player_standUp;
let player_walkup;
let humans
let standStill = false

class Player {

  constructor(player_stand, player_walkDown, player_standLeft, player_walkLeft, player_standRight, player_walkRight, player_standUp, player_walkUp, woodstep, stoneStep, blank2) {
    humans = new Group()
    this.sprite = createSprite(200, 200, 42, 42);
    this.sprite.addAnimation("stand", player_stand);
    this.sprite.addAnimation("walkDown", player_walkDown);
    this.sprite.addAnimation("standLeft", player_standLeft);
    this.sprite.addAnimation("walkLeft", player_walkLeft);
    this.sprite.addAnimation("standRight", player_standRight);
    this.sprite.addAnimation("walkRight", player_walkRight);
    this.sprite.addAnimation("standUp", player_standUp);
    this.sprite.addAnimation("walkUp", player_walkUp);
    this.sprite.addAnimation("blank2", blank2);
    this.sprite.setCollider("rectangle", 0, 20, 22, 35);
    this.sprite.addToGroup(humans)
    this.sprite.depth = 5; //Visualize depth as photoshop layers
    this.direction = "down";
    this.stepSound = woodstep;
    this.stepSound2 = stoneStep;
    this.stepSound3 = grassStep

  }

  update() {
  if(standStill === false){
    if (keyIsDown(65) && !keyIsDown(83) && !keyIsDown(68) && !keyIsDown(87)) {
      this.sprite.changeAnimation("walkLeft");
      this.sprite.velocity.x = -4.4;
      this.direction = "left";
      if (scene === "bedroom" || scene === "hall" || scene === "butchery") {
        if (!this.stepSound.isPlaying()) {
          this.stepSound.play();
        }
      }
      if (scene === "town") {
        if (!this.stepSound2.isPlaying()) {
          this.stepSound2.play();
        }
      }
      if (scene === "forestPath") {
        if (!this.stepSound3.isPlaying()) {
          this.stepSound3.play();
        }
      }
    } else if (
      keyIsDown(83) &&
      !keyIsDown(65) &&
      !keyIsDown(68) &&
      !keyIsDown(87)
    ) {
      this.sprite.changeAnimation("walkDown");
      this.sprite.velocity.y = 4;
      this.direction = "down";
      if (scene === "bedroom" || scene === "hall" || scene === "butchery") {
        if (!this.stepSound.isPlaying()) {
          this.stepSound.play();
        }
      }
      if (scene === "town") {
        if (!this.stepSound2.isPlaying()) {
          this.stepSound2.play();
        }
      }
      if (scene === "forestPath") {
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
      this.sprite.velocity.x = 4.4;
      this.direction = "right";
      if (scene === "bedroom" || scene === "hall" || scene === "butchery") {
        if (!this.stepSound.isPlaying()) {
          this.stepSound.play();
        }
      }
      if (scene === "town") {
        if (!this.stepSound2.isPlaying()) {
          this.stepSound2.play();
        }
      }
      if (scene === "forestPath") {
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
      this.sprite.velocity.y = -4;
      this.direction = "up";
      if (scene === "bedroom" || scene === "hall" || scene === "butchery") {
        if (!this.stepSound.isPlaying()) {
          this.stepSound.play();
        }
      }
      if (scene === "town") {
        if (!this.stepSound2.isPlaying()) {
          this.stepSound2.play();
        }
      }
      if (scene === "forestPath") {
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
      woodstep.stop()
      stoneStep.stop()
      grassStep.stop()
    }
    this.sprite.collide(bedroom.sprite)
  }
  drawSprites(humans)
}

  standStill(){
    standStill = true
    this.sprite.velocity.x = 0
    this.sprite.velocity.y = 0
  }

}
// stopSound() {
//   if (scene === "bedroom" || scene === "hall"){
//     woodstep.stop()
//   }
//   if (scene === "town"){
//     stoneStep.stop()
//   }
// }
