class Ball {
  constructor(xy) {
    this.x = width / 2;
    this.y = -300;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 5;
    this.size = 50;
    this.active = true;
    this.bounceCount = 0;
    this.gravityForce = 0.0005;
    this.d = undefined;
  }

  gravity(force) {
    this.ay = this.ay + force;
  }

  move() {
    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

  bounce(paddle) {
    if (
      this.x > paddle.x - paddle.width / 2 &&
      this.x < paddle.x + paddle.width / 2 &&
      this.y + this.size / 2 > paddle.y - paddle.height / 2 &&
      this.y - this.size / 2 < paddle.y + paddle.height / 2
    ) {
      this.vy = -this.vy;
      this.ay = 0;
      this.gravityForce += 0.00005;
      this.bounceCount += 1
    }
  }

  reset(){
    let d = dist(this.x, this.y, mouseX, mouseY)
    if (this.bounceCount > 0 && d < 50 && this.vy < 0) {
      food.full = 0
      carpet.clean = 1
  }
}

  display() {
    push();
    fill(255, 50, 50);
    stroke(0);
    ellipse(this.x, this.y, this.size);
    console.log(this.y)
    pop();
  }

  checkIfMissed(){
    if (this.y > windowHeight && state === 'game') {
      state = "neglect"
    }
  }

  checkIfStarved(){
    if (
      this.x > paddle.x - paddle.width / 2 &&
      this.x < paddle.x + paddle.width / 2 &&
      this.y + this.size / 2 > paddle.y - paddle.height / 2 &&
      this.y - this.size / 2 < paddle.y + paddle.height / 2 &&
      food.full === 0
    ) {
      state = "starved"
  }

}

  checkIfDirty() {
    if (
      this.x > paddle.x - paddle.width / 2 &&
      this.x < paddle.x + paddle.width / 2 &&
      this.y + this.size / 2 > paddle.y - paddle.height / 2 &&
      this.y - this.size / 2 < paddle.y + paddle.height / 2 &&
      carpet.clean === 1
    ) {
      state = "dirty"
  }
  }
}
