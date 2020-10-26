class Carpet {
  constructor(carpclean, carpdirty, cleaner) {
    this.x = 1000;
    this.y = 100;
    this.height = 300;
    this.width = 250;
    this.clean = 0;
    this.selected = 0;
    this.carpet = carpclean;
    this.carpetdirty = carpdirty;
    this.cleaner = cleaner;
  }

  display() {
    if (this.clean === 0) {
      image(carpetClean, this.x, this.y, this.width, this.height);
    } else if (this.clean === 1) {
      image(carpetDirty, this.x, this.y, this.width, this.height);
    }
    if (this.selected === 0) {
      image(cleaner, 100, height - 100, 50, 100);
    } else if (this.selected === 1) {
      image(cleaner, mouseX, mouseY, 50, 100);
    }
  }

  mousePressed() {
    if (
      this.selected === 0 && //Selects cleaner
      mouseX > 100 &&
      mouseX < 150 &&
      mouseY > height - 150
    ) {
      this.selected = 1;
    }

    if (
      this.selected === 1 &&
      mouseX > this.x &&
      mouseX < this.x + this.width && //Cleans carpet and returns cleaner
      mouseY > this.y &&
      mouseY < this.y + this.height
    ) {
      this.clean = 0;
      this.selected = 0;
    }
  }
}
