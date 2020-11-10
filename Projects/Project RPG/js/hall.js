let hallObjects

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
       map = 'bedroom'
       player.sprite.position.x = 120
       player.sprite.position.y = 420
    }
  }


}