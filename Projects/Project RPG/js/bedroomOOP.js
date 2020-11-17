let showB1 = false
let showB2 = false
let showB3 = false
let showB4 = false
let things
let deskSelector = 0;

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

    player.sprite.position.x = 200
    player.sprite.position.y = 200

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
      textBox()
      fill(255)
      let b1 = "You slept for 9 hours and 30 minutes last night"
      textSize(12)
      text(b1, x, y, width, height)
      pop()
    }
  }

  deskText(){
    if (showB2 === true){
      choice()
      push()
      textBox()
      fill(255)
      let b2 = "Play the game ? "
      let yes = "Sure"
      let no = "Not Today"
      textSize(12)
      text(b2, x, y, width, height)
      if (deskSelector === 0) {
        fill(255)
        text(yes, x, y2)
        fill(255);
        text(no, 280, y2)
      }
      else if (deskSelector === 1) {
        fill(229, 112, 40)
        text(yes, x, y2)
        fill(255)
        text(no, 280, y2)
      }
      else if (deskSelector === 2){
        fill(255)
        text(yes, x, y2)
        fill(229, 112, 40)
        text(no, 280, y2)
      }
      pop()
    }
  }

  deskText2(){
    if (showB3 === true && desk.sprite.overlap(player.sprite)){
    push()
    textBox()
    fill(255)
    let b3 = "Okay ? "
    textSize(12)
    text(b3, x, y, width, height)
    }
  }

  deskText3(){
    if (showB4 === true && desk.sprite.overlap(player.sprite)){
    push()
    textBox()
    fill(255)
    let b4 = "weewoo ? "
    textSize(12)
    text(b4, x, y, width, height)
    }
  }

  changeText(){
    if (showB2 === true && deskSelector === 1){
      showB2 = false
      showB3 = true
    }
    if (showB2 === true && deskSelector === 2){
      showB2 = false
      showB4 = true
    }
    if (showB3 === true || showB4 === true){
      showB3 = false
      showB4 = false
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
       scene = 'hall'
      // this.sprite.remove();
      // desk.sprite.remove();
      // door.sprite.remove();

       hall.start()
    }
  }




}
