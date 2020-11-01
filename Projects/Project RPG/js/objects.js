let player_stand;
let player_walkDown;
let player_sprite;
let player_standLeft;
let player_walkLeft;
let player_standRight;
let player_walkRight;
let player_standup;
let player_walkup;
let direction = 'down'

class Player {

  constructor(player_stand, player_walkDown, player_standLeft, player_walkLeft, player_standRight, player_walkRight, player_standUp, player_walkUp) {
    this.sprite = createSprite(100, 100, 28, 52);
    this.stand = this.sprite.addAnimation("stand", player_stand);
    this.walkDown = this.sprite.addAnimation("walkDown", player_walkDown);
    this.standLeft = this.sprite.addAnimation("standLeft", player_standLeft);
    this.walkLeft = this.sprite.addAnimation("walkLeft", player_walkLeft);
    this.standRight = this.sprite.addAnimation("standRight", player_standRight);
    this.walkRight = this.sprite.addAnimation("walkRight", player_walkRight);
    this.standUp = this.sprite.addAnimation("standUp", player_standUp);
    this.walkUp = this.sprite.addAnimation("walkUp", player_walkUp);
  }

  display(){
    if (keyIsDown(LEFT_ARROW) && !keyIsDown(DOWN_ARROW) && !keyIsDown(RIGHT_ARROW) && !keyIsDown(UP_ARROW)) {
      this.sprite.changeAnimation("walkLeft");
      this.sprite.velocity.x = -2.4;
      direction = 'left'
    }
    else if (keyIsDown(DOWN_ARROW) && !keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW) && !keyIsDown(UP_ARROW)) {
     this.sprite.changeAnimation("walkDown");
     this.sprite.velocity.y = 2;
     direction = 'down'
    }
    else if (keyIsDown(RIGHT_ARROW) && !keyIsDown(DOWN_ARROW) && !keyIsDown(LEFT_ARROW) && !keyIsDown(UP_ARROW)) {
      this.sprite.changeAnimation("walkRight");
      this.sprite.velocity.x = 2.4;
      direction = 'right'
    }
    else if (keyIsDown(UP_ARROW) && !keyIsDown(DOWN_ARROW) && !keyIsDown(RIGHT_ARROW) && !keyIsDown(LEFT_ARROW)) {
      this.sprite.changeAnimation("walkUp");
      this.sprite.velocity.y = -2;
      direction = 'up'
    }
    else {
      this.sprite.velocity.x = 0;
      this.sprite.velocity.y = 0;
      if (direction === 'down'){
        this.sprite.changeAnimation("stand");
        }
      else if (direction === 'up'){
        this.sprite.changeAnimation("standUp");
        }
      else if (direction === 'right'){
        this.sprite.changeAnimation("standRight");
        }
      else if (direction === 'left') {
        this.sprite.changeAnimation("standLeft");
        }
      }
  }
}
