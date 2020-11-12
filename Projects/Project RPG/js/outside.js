class Outside{
  constructor(bg_outside){
    this.bg = bg_outside

    player.sprite.position.x = 65
    player.sprite.position.y = 620
  }

  display(){
    push()
    imageMode(CENTER)
    image(this.bg, 249, 249)
    pop()
  }

  camera(){
    camera.zoom = 1;
    camera.position.x = player.sprite.position.x;
    camera.position.y = player.sprite.position.y;
  }

  boundaries(){
    if (player.sprite.position.x < -200) player.sprite.position.x = -200;
    if (player.sprite.position.y < -100) player.sprite.position.y = -100;
    if (player.sprite.position.x > 700) player.sprite.position.x = 700;
    if (player.sprite.position.y > 1000) player.sprite.position.y = 1000;
  }
}
