let hallObjects
let oscillator;

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

  //Oscillator which increases its frequency the closer you get to the main door
  anxiety(){
    let doorDistance = dist(player.sprite.position.x, player.sprite.position.y, mainDoor.sprite.position.x, mainDoor.sprite.position.y) // Measures distance between player and door
    let newFreq = map(doorDistance, 270, 20, 0, 220)// Max dist = 270. Min = 20
    oscillator.freq(newFreq);
    console.log(doorDistance)
  }


}
