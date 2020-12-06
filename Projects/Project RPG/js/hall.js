let hallObjects
let oscillator;
let textState = 0 // A variable which represents if a text box should be displayed, and which one if so

class Hall {
  constructor(bg_hall, mainDoor) {
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

  start() {
    oscillator = new p5.Oscillator(220, 'triangle')
    oscillator.start()
    player.sprite.position.x = 325;
    player.sprite.position.y = 365;
  }

  display() {
    image(bg_hall, 0, 0);
    drawSprites(hallObjects)
  }

  keyPressed() {
    if (mainDoor.sprite.overlap(player.sprite) && keyCode === SHIFT) {
      textState = 1
    }
  }

  doorText(stateOfText, q, c1, c2) {
    if (textState === stateOfText && mainDoor.sprite.overlap(player.sprite)) {
      choice()
      push()
      textBox()
      fill(255)
      question = q
      choice1 = c1
      choice2 = c2
      textSize(12)
      text(question, x, y, width, height)

      if (selector === 1) {
        fill(229, 112, 40)
        text(choice1, x, y2 - 30)
        fill(255)
        if (textState === 1) {
          text(choice2, 280, y2 - 30)
        } else if (textState === 2) {
          text(choice2, 240, y2 - 30)
        }
      } else if (selector === 2) {
        fill(255)
        text(choice1, x, y2 - 30)
        fill(229, 112, 40)
        if (textState === 1) {
          text(choice2, 280, y2 - 30)
        } else if (textState === 2) {
          text(choice2, 240, y2 - 30)
        }
      }
      pop()
    }
  }

  changeTextState() {
    if (textState === 1 && selector === 1 || textState === 2 && selector === 1 || textState === 3 && selector === 1) {
      textState = textState + 1
    } else {
      textState = 0
    }
  }


  boundaries() {
    if (player.sprite.position.x < 170) player.sprite.position.x = 170;
    if (player.sprite.position.y < 120) player.sprite.position.y = 120;
    if (player.sprite.position.x > 330) player.sprite.position.x = 330;
    if (player.sprite.position.y > 400) player.sprite.position.y = 400;
  }

  exit() {
    if (this.sprite.overlap(player.sprite) && player.direction === 'right') {
      scene = 'bedroom'
      player.sprite.position.x = 120
      player.sprite.position.y = 420
      oscillator.stop()
    }
  }

  exit2() {
    if (textState === 4 && selector === 1) {
      scene = 'town'
      player.sprite.position.x = 65
      player.sprite.position.y = 620
      oscillator.stop()

      // For some reason, these sprites needed to be manually removed or have their collider set to 0 to prevent them from being drawn on other scenes in their respective positions
      bedroom.spite.setCollider("rectangle", 0, 0, 0, 0)
      bedroom.sprite.remove()
      bedroom.desk.sprite.remove()
      bedroom.door.sprite.remove()
      this.sprite.remove()
      maindoor.sprite.remove()
    }
  }

  //Oscillator which increases its frequency the closer you get to the main door
  anxiety() {
    let doorDistance = dist(player.sprite.position.x, player.sprite.position.y, mainDoor.sprite.position.x, mainDoor.sprite.position.y) // Measures distance between player and door
    let newFreq = map(doorDistance, 280, 20, 0, 100) // Max dist = 270. Min = 20
    oscillator.freq(newFreq);
    console.log(newFreq);
  }


}
