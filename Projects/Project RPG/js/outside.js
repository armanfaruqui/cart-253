let buildings;
let entities;

class Outside{
  constructor(bg_outside, house1, house2, house3, house4, butchery, dog, evildog, growl, tree, outsideTheme){
    this.bg = bg_outside // background image
    this.song = outsideTheme

    house1.sprite = createSprite(280, 420);
    house1.sprite.addAnimation("house1", house1);
    house1.sprite.setCollider("rectangle", 0, 0, 155, 144);
    house1.sprite.depth = 1;
    house1.sprite.addToGroup(buildings)

    house2.sprite = createSprite(-14, 420);
    house2.sprite.addAnimation("house2", house2);
    house2.sprite.setCollider("rectangle", 0, 0, 155, 144);
    house2.sprite.addToGroup(buildings)
    house2.sprite.depth = 1;

    house3.sprite = createSprite(-14, 200);
    house3.sprite.addAnimation("house3", house3);
    house3.sprite.setCollider("rectangle", 0, 0, 155, 144);
    house3.sprite.depth = 1;
    house3.sprite.addToGroup(buildings)

    house4.sprite = createSprite(280, 200);
    house4.sprite.addAnimation("house4", house4);
    house4.sprite.setCollider("rectangle", 0, 0, 155, 144);
    house4.sprite.addToGroup(buildings)
    house4.sprite.depth = 1;

    butchery.sprite = createSprite(560, 174);
    butchery.sprite.addAnimation("butchery", butchery);
    butchery.sprite.addToGroup(buildings)

    dog.sprite = createSprite(280, 600)
    dog.sprite.addAnimation("dog", dog);
    dog.sprite.addAnimation("evildog", evildog)
    dog.sprite.addToGroup(entities)

    tree.sprite = createSprite(-130, 670) //Made corner tree a sprite for multi-direction collision
    tree.sprite.addAnimation("tree", tree)
    tree.sprite.setCollider("rectangle", 0, 60, 90, 152);
    tree.sprite.addToGroup(buildings)
    tree.sprite.depth = 10;

  //  bedroom.bed_sprite.remove()
  }

  display(){
    push()
    imageMode(CENTER)
    image(this.bg, 249, 249)
    pop()
    drawSprites(buildings)
    // bedroom.sprite.remove()
    // bedroom.desk.sprite.remove()
    // bedroom.door.sprite.remove()
    // hall.sprite.remove()
    // hall.maindoor.sprite.remove()
  }

  doggo(){
    if (dog.sprite.overlap(player.sprite) && keyCode === SHIFT){
      dog.sprite.changeAnimation("evildog")
      player.sprite.position.x = player.sprite.position.x - 10
      growl.play()
    }
  }


  camera(){
    camera.zoom = 1;
    camera.position.x = player.sprite.position.x;
    camera.position.y = player.sprite.position.y;
  }

  boundaries(){
    if (player.sprite.position.x < -145) player.sprite.position.x = -145;
    if (player.sprite.position.y < -100) player.sprite.position.y = -100;
    if (player.sprite.position.x > 680) player.sprite.position.x = 680;
    if (player.sprite.position.y > 660) player.sprite.position.y = 660;

    player.sprite.collide(house1.sprite);
    player.sprite.collide(house2.sprite);
    player.sprite.collide(house3.sprite);
    player.sprite.collide(house4.sprite);
    player.sprite.collide(dog.sprite);
    player.sprite.collide(tree.sprite);
    player.sprite.collide(butchery.sprite);
  }

  song(){
    if (scene === "outside"){
      if (!this.song.isPlaying()) {
        this.song.play();
    }
  }
}

}
