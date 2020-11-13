let buildings

class Outside{
  constructor(bg_outside, house1, house2, house3){
    this.bg = bg_outside

    house1.sprite = createSprite(280, 360);
    house1.sprite.addAnimation("house1", house1);
    house1.sprite.depth = 1;
    house1.sprite.changeAnimation("house1");
    house1.sprite.addToGroup(buildings)

    house2.sprite = createSprite(-14, 360);
    house2.sprite.addAnimation("house2", house2);
    house1.sprite.changeAnimation("house2");
    //house2.sprite.setCollider("rectangle", 0, 0, 50, 30);
    house2.sprite.addToGroup(buildings)
    house2.sprite.depth = 1;

    house3.sprite = createSprite(574, 360);
    house3.sprite.addAnimation("house3", house3);
    house3.sprite.depth = 1;
    house3.sprite.changeAnimation("house3");
    house3.sprite.addToGroup(buildings)



    player.sprite.position.x = 65
    player.sprite.position.y = 620
  }

  display(){
    push()
    imageMode(CENTER)
    image(this.bg, 249, 249)
    pop()
    drawSprites(buildings)

  }

  camera(){
    camera.zoom = 1;
    camera.position.x = player.sprite.position.x;
    camera.position.y = player.sprite.position.y;
  }

  boundaries(){
    if (player.sprite.position.x < -200) player.sprite.position.x = -200;
    if (player.sprite.position.y < -100) player.sprite.position.y = -100;
    if (player.sprite.position.x > 650) player.sprite.position.x = 650;
    if (player.sprite.position.y > 660) player.sprite.position.y = 660;
  }
}
