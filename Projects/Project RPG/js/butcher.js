let butcherTalkedTo = false
let textStateButcher = 0
let t1b = "THERE YOU ARE BOY!!"

class Butcher {

  constructor(bg_butcher1, bg_butcher2, ting){
    this.bg1 = bg_butcher1
    this.bg2 = bg_butcher2

    this.sprite = createSprite(338, 336)
    this.sprite.setCollider("rectangle", 0, 0, 5, 5)
  }


  display(){
    if (butcherTalkedTo === false){
    image(this.bg1, 0, 0)
  }
  else if(butcherTalkedTo === true){
    image(this.bg2, 0, 0)
  }
    console.log(player.sprite.position.x)
    console.log(player.sprite.position.y)
}


  boundaries(){
    if (player.sprite.position.x < 100) player.sprite.position.x = 100;
    if (player.sprite.position.y < 336) player.sprite.position.y = 336;
    if (player.sprite.position.x > 407) player.sprite.position.x = 407;
    if (player.sprite.position.y > 462) player.sprite.position.y = 462;
  }

  talkToButcher(){
    if (this.sprite.overlap(player.sprite) && keyCode === SHIFT){
      butcherTalkedTo = true
      textStateButcher = textStateButcher + 1
        ting.play()
    }
  }

  butcherText1() {
    if (textStateButcher === 1 && this.sprite.overlap(player.sprite)){
      push()
      textBox()
      fill(254, 151, 155)
      textSize(14)
      text(t1b, x, y, width, height)
    }
  }

  butcherText2() {
    if (textStateButcher === 2 && this.sprite.overlap(player.sprite)){
      push()
      textBox()
      fill(254, 151, 155)
      t1b = "ABOUT TIME YOU PUT THOSE SCRAWNY LEGS TO WORK!"
      textSize(14)
      text(t1b, x, y, width, height)
    }
  }

  butcherText3() {
    if (textStateButcher === 3 && this.sprite.overlap(player.sprite)){
      push()
      textBox()
      fill(254, 151, 155)
      t1b = "YOU ARE 10 MINUTES LATE FROM BEING 15 MINUTES EARLY"
      textSize(14)
      text(t1b, x, y, width, height)
    }
  }

  butcherText4() {
    if (textStateButcher === 4 && this.sprite.overlap(player.sprite)){
      push()
      textBox()
      fill(254, 151, 155)
      t1b = "YOU KNOW THAT'S NOT ACCEPTABLE BY MY STANDARDS!"
      textSize(14)
      text(t1b, x, y, width, height)
    }
  }

  butcherText5() {
    if (textStateButcher === 5 && this.sprite.overlap(player.sprite)){
      push()
      textBox()
      fill(254, 151, 155)
      t1b = "Okay so here's the scoop"
      textSize(14)
      text(t1b, x, y, width, height)
    }
  }

  butcherText6() {
    if (textStateButcher === 6 && this.sprite.overlap(player.sprite)){
      push()
      textBox()
      fill(254, 151, 155)
      t1b = "Remember how the state passed that ban on veal?"
      textSize(14)
      text(t1b, x, y, width, height)
    }
  }

  butcherText7() {
    if (textStateButcher === 7 && this.sprite.overlap(player.sprite)){
      push()
      textBox()
      fill(254, 151, 155)
      t1b = "OUTRAGEOUS HUH! HALF MY PROFITS WERE THANKS TO THOSE JUICE BABY COWS"
      textSize(14)
      text(t1b, x, y, width, height)
    }
  }

  butcherText8() {
    if (textStateButcher === 8 && this.sprite.overlap(player.sprite)){
      push()
      textBox()
      fill(254, 151, 155)
      t1b = "But don't fret. When Benny the Butcher wants something he gets it done!"
      textSize(14)
      text(t1b, x, y, width, height)
    }
  }

  butcherText9() {
    if (textStateButcher === 9 && this.sprite.overlap(player.sprite)){
      push()
      textBox()
      fill(254, 151, 155)
      t1b = "I've got a package full of those bad boys being delivered deep within the forest"
      textSize(14)
      text(t1b, x, y, width, height)
    }
  }

  butcherText10() {
    if (textStateButcher === 10 && this.sprite.overlap(player.sprite)){
      push()
      textBox()
      fill(254, 151, 155)
      t1b = "Your job for the day is to bring it back here without getting caught"
      textSize(14)
      text(t1b, x, y, width, height)
    }
  }

  butcherText11() {
    if (textStateButcher === 11 && this.sprite.overlap(player.sprite)){
      push()
      textBox()
      fill(254, 151, 155)
      t1b = "Got it?"
      textSize(14)
      text(t1b, x, y, width, height)
    }
  }

  butcherText12() {
    if (textStateButcher === 12 && this.sprite.overlap(player.sprite)){
      push()
      textBox()
      fill(254, 151, 155)
      t1b = "THEN WHY ARE YOU STILL LOOKING AT ME? TIME I$ MONEY!!!!"
      textSize(14)
      text(t1b, x, y, width, height)
    }
  }


  exit(){
     if (textStateButcher === 13){
        scene = 'town'
        player.sprite.position.x = 585
        player.sprite.position.y = 338
     }

   }
}
