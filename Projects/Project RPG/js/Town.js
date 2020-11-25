let buildings;
let entities;
let textStateSheriff = 0
let t1s = "Benny the Buther was looking for you. Head to him right now or else!"

class Town{
  constructor(town, house1, house2, house3, house4, butchery, dog, evildog, growl, tree, townTheme, door, sheriff){
    this.bg = town // background image
    this.song = townTheme
    this.door = door
    buildings = new Group()
    entities = new Group()

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
    butchery.sprite.depth = 1

    dog.sprite = createSprite(280, 600)
    dog.sprite.addAnimation("dog", dog);
    dog.sprite.addAnimation("evildog", evildog)
    dog.sprite.addToGroup(entities)

    tree.sprite = createSprite(-130, 670) //Made corner tree a sprite for multi-direction collision
    tree.sprite.addAnimation("tree", tree)
    tree.sprite.setCollider("rectangle", 0, 60, 90, 152);
    tree.sprite.addToGroup(buildings)
    tree.sprite.depth = 10;

    this.sprite = createSprite(580, 238) //Made corner tree a sprite for multi-direction collision
    this.sprite.addAnimation("door", this.door)
    this.sprite.addToGroup(buildings)
    this.sprite.setCollider("rectangle", 0, 0, 70, 100);
    this.sprite.depth = 2;

    sheriff.sprite = createSprite(250, -150)
    sheriff.sprite.addAnimation("sheriff", sheriff)
    sheriff.sprite.addToGroup(entities)
    sheriff.sprite.setCollider("rectangle", 0, 0, 45, 84)
    sheriff.sprite.depth = 1
  //  bedroom.bed_sprite.remove()
  }

  display(){
    push()
    imageMode(CENTER)
    image(this.bg, 249, 249)
    pop()
    drawSprites(buildings)
    drawSprites(entities)
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
    if (player.sprite.position.y < -170) player.sprite.position.y = -170;
    if (player.sprite.position.x > 680) player.sprite.position.x = 680;
    if (player.sprite.position.y > 660) player.sprite.position.y = 660;

    player.sprite.collide(house1.sprite);
    player.sprite.collide(house2.sprite);
    player.sprite.collide(house3.sprite);
    player.sprite.collide(house4.sprite);
    player.sprite.collide(dog.sprite);
    player.sprite.collide(tree.sprite);
    player.sprite.collide(butchery.sprite);
    player.sprite.collide(sheriff.sprite);
  }

  song(){
    if (scene === "town"){
      if (!this.song.isPlaying()) {
        this.song.play();
    }
  }
}

  talkToSheriff1(){
    if (sheriff.sprite.overlap(player.sprite) && keyCode === SHIFT && butcherTalkedTo === false || butcherTalkedTo === false && player.sprite.position.x > 129 && player.sprite.position.x < 424 && player.sprite.position.y < -146 ){
      dynamicTextBox()
      fill(251, 223, 107)
      textSize(12)
      text(t1s, player.sprite.position.x - 174, player.sprite.position.y - 202, width, height)
    }
  }


  enterButchery(){
    if (this.sprite.overlap(player.sprite) && player.direction === 'up'){
      scene = 'butchery'
      player.sprite.position.x = 287
      player.sprite.position.y = 458
      camera.position.x = 253.5
      camera.position.y = 253.5
    }
  }

  changeTextStateSheriff(){
   if (keyCode === SHIFT && butcherTalkedTo === true && player.sprite.position.x > 129 && player.sprite.position.x < 424 && player.sprite.position.y < -146){
     textStateSheriff = textStateSheriff + 1
   }
  }

  sheriffText1(){
    if (butcherTalkedTo === true && player.sprite.position.x > 129 && player.sprite.position.x < 424 && player.sprite.position.y < -146 && textStateSheriff === 0){
      dynamicTextBox()
      fill(251, 223, 107)
      textSize(12)
      t1s = 'Whoa whoa whoa! Where do you think youre goin boy!'
      text(t1s, player.sprite.position.x - 174, player.sprite.position.y - 202, width, height)
    }
  }

  sheriffText2(){
    if (textStateSheriff === 1 && player.sprite.position.x > 129 && player.sprite.position.x < 424 && player.sprite.position.y < -146){
      dynamicTextBox()
      fill(251, 223, 107)
      textSize(12)
      t1s = 'The forest of course! Why though?'
      text(t1s, player.sprite.position.x - 174, player.sprite.position.y - 202, width, height)
    }
  }

  sheriffText3(){
    if (textStateSheriff === 2 && player.sprite.position.x > 129 && player.sprite.position.x < 424 && player.sprite.position.y < -146){
      dynamicTextBox()
      fill(251, 223, 107)
      textSize(12)
      t1s = 'Are you trying to go somewhere secluded to smoke upon the devils lettuce again?'
      text(t1s, player.sprite.position.x - 174, player.sprite.position.y - 202, width, height)
    }
  }

  sheriffText4(){
    if (textStateSheriff === 3 && player.sprite.position.x > 129 && player.sprite.position.x < 424 && player.sprite.position.y < -146){
      dynamicTextBox()
      fill(251, 223, 107)
      textSize(12)
      t1s = 'EMPTY YOUR POCKETS OR I WILL SHOOT'
      text(t1s, player.sprite.position.x - 174, player.sprite.position.y - 202, width, height)
    }
  }

  sheriffText5(){
    if (textStateSheriff === 4 && player.sprite.position.x > 129 && player.sprite.position.x < 424 && player.sprite.position.y < -146){
      dynamicTextBox()
      fill(251, 223, 107)
      textSize(12)
      t1s = 'Ok lets see here. Phone, gum, wallet, keys... '
      text(t1s, player.sprite.position.x - 174, player.sprite.position.y - 202, width, height)
    }
  }

  sheriffText6(){
    if (textStateSheriff === 5 && player.sprite.position.x > 129 && player.sprite.position.x < 424 && player.sprite.position.y < -146){
      dynamicTextBox()
      fill(251, 223, 107)
      textSize(12)
      t1s = 'You are lucky this time punk'
      text(t1s, player.sprite.position.x - 174, player.sprite.position.y - 202, width, height)
    }
  }

  sheriffText7(){
    if (textStateSheriff === 6 && player.sprite.position.x > 129 && player.sprite.position.x < 424 && player.sprite.position.y < -146){
      dynamicTextBox()
      fill(251, 223, 107)
      textSize(12)
      t1s = 'Go through and do not give me a reason to give you a hard time again okay'
      text(t1s, player.sprite.position.x - 174, player.sprite.position.y - 202, width, height)
    }
  }

exitToForest(){
  if (textStateSheriff > 6 && player.sprite.position.y < -169.6){
    scene = 'forestPath'
    forestPath.start()
  }
}



}
