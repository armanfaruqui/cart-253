let showB1 = false
let showB2 = false
let things


class Bedroom {
  constructor(bed, bg_bedroom, ting){
    things = new Group()
    this.sprite = createSprite(370, 350, 12, 10);
    this.sprite.addAnimation("bed", bed);
    this.sprite.depth = 1;
    this.sprite.changeAnimation("bed");
    this.sprite.addToGroup(things)


    desk.sprite = createSprite(270, 150, 12, 10);
    desk.sprite.addAnimation("desk", desk);
    desk.sprite.depth = 1;
    desk.sprite.changeAnimation("desk");
    desk.sprite.addToGroup(things)


    door.sprite = createSprite(88, 432, 50, 100);
    door.sprite.addAnimation("door", door);
    door.sprite.setCollider("rectangle", 0, 0, 50, 30);
    door.sprite.addToGroup(things)
    door.sprite.depth = 1;


  }

  display(){
    image(bg_bedroom, 0, 0);
    drawSprites(things)
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
      let yes = "Sure"
      let no = "Not Today"
      textSize(16)
      textFont('Press Start 2P')
      text(b2, 80, 50, 427, 80)
      text(yes, 80, 100)
      text(no, 280, 100)

      pop()
    }
  }

  boundaries(){
    if (player.sprite.position.x < 120) player.sprite.position.x = 120;
    if (player.sprite.position.y < 150) player.sprite.position.y = 150;
    if (player.sprite.position.x > 380) player.sprite.position.x = 380;
    if (player.sprite.position.y > 450) player.sprite.position.y = 450;
  }

  exit(){
    if (door.sprite.overlap(player.sprite) && player.direction === 'left'){
       map = 'hall'
      // this.sprite.remove();
      // desk.sprite.remove();
      // door.sprite.remove();
       player.sprite.position.x = 325;
       player.sprite.position.y = 365;
    }
  }


}
