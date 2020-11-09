let hallObjects

class Hall {
  constructor(bg_hall){
    hallObjects = new Group()
    this.sprite = createSprite(372, 370, 50, 100);
    this.sprite.addAnimation("door", door);
    this.sprite.setCollider("rectangle", 0, 0, 70, 100);
    this.sprite.collide(player.sprite);
    this.sprite.depth = 1;
    this.sprite.addToGroup(hallObjects);



  }

  display(){
    image(bg_hall, 0, 0);
    drawSprites(hallObjects)
  }


  keyPressed() {
    if (this.sprite.overlap(player.sprite) && keyCode === SHIFT){
      showB1 = true
      ting.play()
    }
    else {
      showB1 = false
    }
    if (desk.sprite.overlap(player.sprite) && keyCode === SHIFT){
      showB2 = true
      ting.play()
    }
    else {
      showB2 = false
    }
  }

  bedText(){
    if (showB1 === true){
      push()
      fill(255)
      rect(42, 22, 421, 116, 10)
      fill(0)
      rect(50, 30, 405, 100)
      fill(255)
      let b1 = "You slept for 9 hours and 30 minutes last night"
      textSize(16)
      textFont('Press Start 2P')
      text(b1, 80, 50, 427, 80)
      pop()
    }
  }

  deskText(){
    if (showB2 === true){
      push()
      fill(255)
      rect(42, 22, 421, 116, 10)
      fill(0)
      rect(50, 30, 405, 100)
      fill(255)
      let b2 = "Play 'plenty of A̶L̶I̶E̶N̶  fish in the sea' ? "
      textSize(16)
      textFont('Press Start 2P')
      text(b2, 80, 50, 427, 80)
      pop()
    }
  }

  boundaries(){
    if (player.sprite.position.x < 170) player.sprite.position.x = 170;
    if (player.sprite.position.y < 120) player.sprite.position.y = 120;
    if (player.sprite.position.x > 330) player.sprite.position.x = 330;
    if (player.sprite.position.y > 400) player.sprite.position.y = 400;
  }

  exit(){
    if (this.sprite.overlap(player.sprite) && player.direction === 'right'){
       map = 'bedroom'
       player.sprite.position.x = 120
       player.sprite.position.y = 440
    }
  }


}
