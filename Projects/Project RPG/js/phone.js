let phoneWidth = 77;
let phoneHeight = 140;
let bezel = 6;

class Phone {
  constructor(phoneScreen, selfieIndoor) {
    this.x = 400;
    this.y = 400;
    this.width = phoneWidth;
    this.height = phoneHeight;
    this.bezel = bezel;
    this.selected = 'menu';
    this.screenImage = phoneScreen;
    this.selfieIndoor = selfieIndoor;
  }

  display() {
    push();
    fill(57, 58, 56);
    rect(this.x, this.y, this.width, this.height, 5);
    image(this.screenImage, this.x + this.bezel, this.y + this.bezel);
    pop();
  }

  dynamicDisplay(){
    this.x = player.sprite.position.x + 155
    this.y = player.sprite.position.y + 145
    fill(57, 58, 56);
    rect(this.x, this.y, this.width, this.height, 5);
    image(this.screenImage, this.x + this.bezel, this.y + this.bezel);
    // console.log(this.selected)
    // console.log(mouseX)
    // console.log(mouseY)
    // console.log(this.x)
    // console.log(this.y)
    fill(255)
    rect(this.x,this.y, 10,10)
    }

    dynamicDisplay2(){
      this.x = player.sprite.position.x + 155
      this.y = player.sprite.position.y + 145
      fill(57, 58, 56);
      rect(this.x, this.y, this.width, this.height, 5);
      image(this.screenImage, this.x + this.bezel, this.y + this.bezel);
      // console.log(this.selected)
      // console.log(mouseX)
      // console.log(mouseY)
      // console.log(this.x)
      // console.log(this.y)
      fill(255)
      rect(this.x,this.y, 10,10)
      }

  selectApp() {
    if (
      mouseX > this.x + this.bezel + 8 &&
      mouseX < this.x + this.bezel + 27 &&
      mouseY > this.y + this.bezel + 12 &&
      mouseY < this.y + this.bezel + 31
    ) {
      this.selected = "camera";
    }
    if (
      mouseX > this.x + this.bezel + 8 &&
      mouseX < this.x + this.bezel + 27 &&
      mouseY > this.y + this.bezel + 43 &&
      mouseY < this.y + this.bezel + 62
    ) {
      this.selected = "music";
    }
    if (
      mouseX > this.x + this.bezel + 39 &&
      mouseX < this.x + this.bezel + 58 &&
      mouseY > this.y + this.bezel + 12 &&
      mouseY < this.y + this.bezel + 31
    ) {
      this.selected = "messages";
    }
    if (
      mouseX > this.x + this.bezel + 39 &&
      mouseX < this.x + this.bezel + 58 &&
      mouseY > this.y + this.bezel + 43 &&
      mouseY < this.y + this.bezel + 62
    ) {
      this.selected = "pong";
    }
  }

  dynamicSelectApp(){
    if (
      mouseX > this.x + this.bezel + 8 &&
      mouseX < this.x + this.bezel + 27 &&
      mouseY > this.y + this.bezel + 12 &&
      mouseY < this.y + this.bezel + 31
    ) {
      this.selected = "camera";
    }
    if (
      mouseX > this.x + this.bezel + 8 &&
      mouseX < this.x + this.bezel + 27 &&
      mouseY > this.y + this.bezel + 43 &&
      mouseY < this.y + this.bezel + 62
    ) {
      this.selected = "music";
    }
    if (
      mouseX > this.x + this.bezel + 39 &&
      mouseX < this.x + this.bezel + 58 &&
      mouseY > this.y + this.bezel + 12 &&
      mouseY < this.y + this.bezel + 31
    ) {
      this.selected = "messages";
    }
    if (
      mouseX > this.x + this.bezel + 39 &&
      mouseX < this.x + this.bezel + 58 &&
      mouseY > this.y + this.bezel + 43 &&
      mouseY < this.y + this.bezel + 62
    ) {
      this.selected = "pong";
    }
  }

  camera(){
    if (this.selected === "camera") {
      if (scene === 'bedroom' || scene === 'hall'){
        image(selfieIndoor, this.x + this.bezel, this.y + this.bezel)
      }
    }
  }

  exit(){
    if (
      mouseX > this.x + this.bezel  &&
      mouseX < this.x + this.bezel + 20 &&
      mouseY > this.y + this.bezel  &&
      mouseY < this.y + this.bezel + 20

    ) {
      this.selected = "menu";
      push();
      fill(57, 58, 56);
      rect(this.x, this.y, this.width, this.height, 5);
      image(this.screenImage, this.x + this.bezel, this.y + this.bezel);
      pop();
    }
  }
}
