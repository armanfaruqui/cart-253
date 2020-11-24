let tfp;

class Friend {
  constructor(friend_stand, friend_walkDown, friend_standLeft, friend_walkLeft, friend_standRight, friend_walkRight, friend_standUp, friend_walkUp, friend_new, blank){
    this.sprite = createSprite(-300, -300, 42, 42);
    this.sprite.addAnimation("stand", friend_stand);
    this.sprite.addAnimation("walkDown", friend_walkDown);
    this.sprite.addAnimation("standLeft", friend_standLeft);
    this.sprite.addAnimation("walkLeft", friend_walkLeft);
    this.sprite.addAnimation("standRight", friend_standRight);
    this.sprite.addAnimation("walkRight", friend_walkRight);
    this.sprite.addAnimation("standUp", friend_standUp);
    this.sprite.addAnimation("walkUp", friend_walkUp);
    this.sprite.addAnimation("blank", blank);
    this.sprite.setCollider("rectangle", 0, 0, 44, 42);
    this.sprite.addToGroup(humans)
    this.sprite.depth = 4; //Visualize depth as photoshop layers
    this.direction = "down";

  }

    standingThere(){
      this.sprite.position.x = 190
      this.sprite.position.y = 382
      this.sprite.changeAnimation("standLeft")
      player.sprite.collide(this.sprite)
    }

    forestPathText1(){
      dynamicTextBox2()
      fill(65, 243, 252)
      textSize(12)
      tfp = 'Psst hey check this out!'
      text(tfp, x, player.sprite.position.y - 202, width, height)
    }



    forestPathText4(){
      dynamicTextBox2()
      fill(65, 243, 252)
      textSize(12)
      tfp = 'Its beautiful isnt it'
      text(tfp, x, player.sprite.position.y - 202, width, height)
    }

    forestPathText5(){
      dynamicTextBox2()
      fill(65, 243, 252)
      textSize(12)
      tfp = 'Its beautiful isnt it'
      text(tfp, x, player.sprite.position.y - 202, width, height)
    }
}
