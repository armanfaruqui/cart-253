let phoneWidth = 77;
let phoneHeight = 140;
let bezel = 6;

class Phone {
  constructor(phoneScreen) {
    this.x = 400;
    this.y = 400;
    this.up = false;
    this.width = phoneWidth;
    this.height = phoneHeight;
    this.bezel = bezel;
    this.selected = undefined;
    this.screenImage = phoneScreen;
  }

  display() {
    push();
    fill(57, 58, 56);
    rect(this.x, this.y, this.width, this.height, 5);
    image(this.screenImage, this.x + this.bezel, this.y + this.bezel);
    pop();
  }

  access() {
    if (this.up === false) {
      this.y = this.y + 80;
      this.up = true;
    }
    if (this.up === true) {
      this.y = this.y - 80;
      this.up = false;
    }
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
}
