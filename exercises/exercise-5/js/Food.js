class Food {
  constructor(bowl, bowlfull, ketchup) {
    this.x = 200;
    this.y = 100;
    this.height = 250;
    this.width = 250;
    this.full = 1;
    this.selected = 0;
    this.bowl = bowl;
    this.bowlfull = bowlfull;
    this.ketchup = ketchup;
  }

  display() {
    if (this.full === 0) {
      image(bowl, this.x, this.y, this.width, this.height);
    } else if (this.full === 1) {
      image(bowlfull, this.x, this.y, this.width, this.height);
    }
    if (this.selected === 0) {
      image(ketchup, 1000, height - 100, 100, 100);
    } else if (this.selected === 1) {
      image(ketchup, mouseX, mouseY, 100, 100);
    }
    console.log(this.full)
  }

  mousePressed() {
    if (
      this.selected === 0 && //Selects ketchup
      mouseX > 1000 &&
      mouseX < 1100 &&
      mouseY > height - 150
    ) {
      this.selected = 1;
    }

    if (
      this.selected === 1 && //Fills bowl and returns ketchup
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height
    ) {
      this.full = 1;
      this.selected = 0;
    }
  }
}
