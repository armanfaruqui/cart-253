let showB1 = false

class Bedroom {
  constructor(bed, bg_bedroom, ting){
    this.sprite = createSprite(370, 350, 12, 10);
    this.sprite.addAnimation("bed", bed);
    this.sprite.depth = 1;
    this.sprite.changeAnimation("bed");
  }

  display(){
    image(bg_bedroom, 0, 0);
    drawSprites()
  }

  keyPressed() {
    if (this.sprite.overlap(player.sprite) && keyCode === SHIFT){
      showB1 = true
      ting.play()
    }
    else {
      showB1 = false
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

  boundaries(){
    if (player.sprite.position.x < 120) player.sprite.position.x = 120;
    if (player.sprite.position.y < 150) player.sprite.position.y = 150;
    if (player.sprite.position.x > 380) player.sprite.position.x = 380;
    if (player.sprite.position.y > 450) player.sprite.position.y = 450;
  }

}
