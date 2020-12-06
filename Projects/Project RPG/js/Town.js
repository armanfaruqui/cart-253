let buildings;
let entities;
let textStateSheriff = 0;

class Town {
  constructor(town,
    house1,
    house2,
    house3,
    house4,
    butchery,
    dog,
    evildog,
    growl,
    tree,
    townTheme,
    door,
    sheriff
  ) {
    this.bg = town; // Image of the scene/background
    this.song = townTheme;
    this.door = door;
    buildings = new Group();
    entities = new Group();


    // Displays and sets collision for the houses
    house1.sprite = createSprite(280, 420);
    house1.sprite.addAnimation("house1", house1);
    house1.sprite.setCollider("rectangle", 0, 0, 155, 144);
    house1.sprite.depth = 1;
    house1.sprite.addToGroup(buildings);

    house2.sprite = createSprite(-14, 420);
    house2.sprite.addAnimation("house2", house2);
    house2.sprite.setCollider("rectangle", 0, 0, 155, 144);
    house2.sprite.addToGroup(buildings);
    house2.sprite.depth = 1;

    house3.sprite = createSprite(-14, 200);
    house3.sprite.addAnimation("house3", house3);
    house3.sprite.setCollider("rectangle", 0, 0, 155, 144);
    house3.sprite.depth = 1;
    house3.sprite.addToGroup(buildings);

    house4.sprite = createSprite(280, 200);
    house4.sprite.addAnimation("house4", house4);
    house4.sprite.setCollider("rectangle", 0, 0, 155, 144);
    house4.sprite.addToGroup(buildings);
    house4.sprite.depth = 1;

    // Displays and sets collision for the butchery
    butchery.sprite = createSprite(560, 174);
    butchery.sprite.addAnimation("butchery", butchery);
    butchery.sprite.addToGroup(buildings);
    butchery.sprite.depth = 1;

    // Displays and sets collision for the dog
    dog.sprite = createSprite(280, 600);
    dog.sprite.addAnimation("dog", dog);
    dog.sprite.addAnimation("evildog", evildog);
    dog.sprite.addToGroup(entities);

    //Corner tree coded as a sprite for multi-direction collision
    tree.sprite = createSprite(-130, 670);
    tree.sprite.addAnimation("tree", tree);
    tree.sprite.setCollider("rectangle", 0, 60, 90, 152);
    tree.sprite.addToGroup(buildings);
    tree.sprite.depth = 10;
    //Corner tree coded as a sprite for multi-direction collision. Using variable names such as 'tree2' was causing errors, so used the object variable for the sake of convenience
    this.sprite = createSprite(580, 238);
    this.sprite.addAnimation("door", this.door);
    this.sprite.addToGroup(buildings);
    this.sprite.setCollider("rectangle", 0, 0, 70, 100);
    this.sprite.depth = 2;

    // Displays and sets collision for the sheriff
    sheriff.sprite = createSprite(250, -150);
    sheriff.sprite.addAnimation("sheriff", sheriff);
    sheriff.sprite.addToGroup(entities);
    sheriff.sprite.setCollider("rectangle", 0, 0, 45, 84);
    sheriff.sprite.depth = 1;
  }

  // Displays background and draws sprites
  display() {
    imageMode(CENTER);
    image(this.bg, 249, 249);
    drawSprites(buildings);
    drawSprites(entities);
  }

  // Changes dog sprite and plays its sound when interacted with
  doggo() {
    if (dog.sprite.overlap(player.sprite) && keyCode === SHIFT) {
      dog.sprite.changeAnimation("evildog");
      player.sprite.position.x = player.sprite.position.x - 10;
      fill(255,0,0)
      rect(0, 0, 3000, 3000)
      growl.play();
    }
  }

  // Assigns a virtual camera which keeps the player at the center of the canvas
  camera() {
    camera.zoom = 1;
    camera.position.x = player.sprite.position.x;
    camera.position.y = player.sprite.position.y;
  }

  // Defines walls and gives sprite(s) a collision property
  boundaries() {
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

  song() {
    if (scene === "town") {
      if (!this.song.isPlaying()) {
        this.song.play();
      }
    }
  }

  // Interaction with sheriff before player talks to butcher
  talkToSheriff() {
    if (
      (sheriff.sprite.overlap(player.sprite) &&
        keyCode === SHIFT &&
        butcherTalkedTo === false) ||
        (butcherTalkedTo === false &&
        player.sprite.position.x > 129 &&
        player.sprite.position.x < 424 &&
        player.sprite.position.y < -146)
    ) {
      dynamicTextBox();
      fill(251, 223, 107);
      textSize(12);
      comment = "Benny the Buther was looking for you. Head to him right now or else!";
      text(
        comment,
        player.sprite.position.x - 174,
        player.sprite.position.y - 202,
        width,
        height
      );
    }
  }

  // Switches scene from town to butchery and adjusts camera
  enterButchery() {
    if (this.sprite.overlap(player.sprite) && player.direction === "up") {
      scene = "butchery";
      player.sprite.position.x = 287;
      player.sprite.position.y = 458;
      camera.position.x = 253.5;
      camera.position.y = 253.5;
    }
  }

  // Checks if player is in the correct position and cycles through text boxes upon each click of shift
  changeTextStateSheriff() {
    if (
      keyCode === SHIFT &&
      butcherTalkedTo === true &&
      player.sprite.position.x > 129 &&
      player.sprite.position.x < 424 &&
      player.sprite.position.y < -146
    ) {
      textStateSheriff = textStateSheriff + 1;
    }
  }

  // Displays text inside text boxes
  sheriffText(stateOfText, dialogue) {
    if (
      butcherTalkedTo === true &&
      player.sprite.position.x > 129 &&
      player.sprite.position.x < 424 &&
      player.sprite.position.y < -146 &&
      textStateSheriff === stateOfText
    ) {
      dynamicTextBox();
      fill(251, 223, 107);
      textSize(12);
      comment = dialogue;
      text(
        comment,
        player.sprite.position.x - 174,
        player.sprite.position.y - 202,
        width,
        height
      );
    }
  }

  // Switches scene from town to forest path
  //textStateSheriff > 6 && 

  exitToForest() {
    if (player.sprite.position.y < -169.6) {
      scene = "forestPath";
      forestPath.start();
    }
  }

}
