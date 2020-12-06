let butcherTalkedTo = false // Boolean which checks if they player has interacted with the butcher
let textStateButcher = 0 // A variable which represents if a text box should be displayed, and which one if so

class Butcher {

  constructor(bg_butcher1, bg_butcher2, ting){
    this.bg1 = bg_butcher1
    this.bg2 = bg_butcher2

    // Invisible sprite put that the butcher's position to facilitate an overlap interaction
    this.sprite = createSprite(338, 336)
    this.sprite.setCollider("rectangle", 0, 0, 5, 5)
  }

//  Displays relevant background image. Instead of using a sprite to change the butcher's direction, 2 different background images were used instead
  display(){
    if (butcherTalkedTo === false){
    image(this.bg1, 0, 0)
  }
  else if(butcherTalkedTo === true){
    image(this.bg2, 0, 0)
  }
}

  // Defines walls
  boundaries(){
    if (player.sprite.position.x < 100) player.sprite.position.x = 100;
    if (player.sprite.position.y < 336) player.sprite.position.y = 336;
    if (player.sprite.position.x > 407) player.sprite.position.x = 407;
    if (player.sprite.position.y > 462) player.sprite.position.y = 462;
  }
  // Starts conversation when player interacts with butcher
  talkToButcher(){
    if (this.sprite.overlap(player.sprite) && keyCode === SHIFT){
      butcherTalkedTo = true
      textStateButcher = textStateButcher + 1
        ting.play()
    }
  }
  // Displays relevant text in the text box
  butcherText(stateOfText, dialogue) {
    if (textStateButcher === stateOfText && this.sprite.overlap(player.sprite)){
      push()
      textBox()
      fill(254, 151, 155)
      textSize(14)
      comment = dialogue
      text(comment, x, y, width, height)
    }
  }
  // Switches scene from butchery to town
  exit(){
     if (textStateButcher === 13){
        scene = 'town'
        player.sprite.position.x = 585
        player.sprite.position.y = 338
     }
   }

}
