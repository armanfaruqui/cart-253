let hallObjects
let oscillator;
let textState = 0
let doorSelector = 0

class Hall {
  constructor(bg_hall, mainDoor){
    hallObjects = new Group()
    this.sprite = createSprite(372, 370, 50, 100);
    this.sprite.addAnimation("door", door);
    this.sprite.setCollider("rectangle", 0, 0, 70, 100);
    this.sprite.collide(player.sprite);
    this.sprite.depth = 1;
    this.sprite.addToGroup(hallObjects);

    mainDoor.sprite = createSprite(255, 100, 30, 50)
    mainDoor.sprite.addAnimation("mainDoor", mainDoor);
    mainDoor.sprite.depth = 1;
    mainDoor.sprite.addToGroup(hallObjects);


  }

  start(){
    oscillator = new p5.Oscillator(220, 'triangle')
    oscillator.start()
    player.sprite.position.x = 325;
    player.sprite.position.y = 365;
  }

  display(){
    image(bg_hall, 0, 0);
    drawSprites(hallObjects)
  }

  keyPressed() {
    if (mainDoor.sprite.overlap(player.sprite) && keyCode === SHIFT){
       textState = 1
  }
}

  DoorText1() {
    if (textState === 1 && mainDoor.sprite.overlap(player.sprite)){
      choice()
      push()
      textBox()
      fill(255)
      let t1 = "Leave home and go outside? "
      let yesDoor = "erm... yes?"
      let noDoor = "No way in hell"
      textSize(12)
      text(t1, x, y, width, height)

     if (doorSelector === 1) {
        fill(229, 112, 40)
        text(yesDoor, x, y2- 30)
        fill(255)
        text(noDoor, 280, y2- 30)
      }
      else if (doorSelector === 2){
        fill(255)
        text(yesDoor, x, y2- 30)
        fill(229, 112, 40)
        text(noDoor, 280, y2- 30)
      }
      pop()
    }
  }

  DoorText2() {
    if (textState === 2 && mainDoor.sprite.overlap(player.sprite)){
      choice()
      push()
      textBox()
      fill(255)
      let t2 = "Are you sure? "
      let yesDoor2 = "yes"
      let noDoor2 = "No I'm really not"
      textSize(12)
      text(t2, x, y, width, height)

     if (doorSelector === 1) {
        fill(229, 112, 40)
        text(yesDoor2, x, y2 - 30)
        fill(255)
        text(noDoor2, 250, y2 - 30)
      }
      else if (doorSelector === 2){
        fill(255)
        text(yesDoor2, x, y2 - 30)
        fill(229, 112, 40)
        text(noDoor2, 250, y2 - 30)
      }
      pop()
    }
  }

  DoorText3() {
    if (textState === 4 && mainDoor.sprite.overlap(player.sprite)){
      choice()
      push()
      textBox()
      fill(255)
      let t3 = "Last chance to stay home. "
      let yesDoor3 = "I have to feed myself"
      let noDoor3 = "I can't"
      textSize(12)
      text(t3, x, y, width, height)

     if (doorSelector === 1) {
        fill(229, 112, 40)
        text(yesDoor3, x - 30, y2 - 30)
        fill(255)
        text(noDoor3, 330, y2 - 30)
      }
      else if (doorSelector === 2){
        fill(255)
        text(yesDoor3, x - 30, y2 - 30)
        fill(229, 112, 40)
        text(noDoor3, 330, y2 - 30)
      }
      pop()
    }
  }

  changeTextState(){
    if (textState === 1 && doorSelector === 1 || textState === 2 && doorSelector === 1 || textState === 3 && doorSelector === 1){
    textState += 1
  }
    else {
      textState = 0
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
       scene = 'bedroom'
       player.sprite.position.x = 120
       player.sprite.position.y = 420
       oscillator.stop()
    }
  }

  exit2(){
    if (textState === 3 && doorSelector === 1){
      scene = 'outside'
      player.sprite.position.x = 65
      player.sprite.position.y = 620
      oscillator.stop()
      bedroom.spite.setCollider("rectangle", 0,0,0,0)
      bedroom.sprite.remove()
      bedroom.desk.sprite.remove()
      bedroom.door.sprite.remove()
      this.sprite.remove()
      maindoor.sprite.remove()
    }

  }


  //Oscillator which increases its frequency the closer you get to the main door
  anxiety(){
    let doorDistance = dist(player.sprite.position.x, player.sprite.position.y, mainDoor.sprite.position.x, mainDoor.sprite.position.y) // Measures distance between player and door
    let newFreq = map(doorDistance, 280, 20, 0, 100)// Max dist = 270. Min = 20
    oscillator.freq(newFreq);
    console.log(newFreq);
  }


}
