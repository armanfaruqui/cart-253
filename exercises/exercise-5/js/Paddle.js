class Paddle {

constructor(w, h) {
  this.width = w;
  this.height = h;
  this.x = 0;
  this.y = height - this.height/2;
}

move() {
  this.x = mouseX
  this.y = mouseY
}

display() {
  push();
  fill(25, 42, 245);
  noStroke();
  rectMode(CENTER);
  rect(this.x, this.y, this.width, this.height);
  fill(255)
  textSize(18)
  text("Maths101", this.x - 120, this.y + 5)
  pop();
}

}
