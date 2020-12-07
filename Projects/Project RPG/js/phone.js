let phoneWidth = 77;
let phoneHeight = 140;
let bezel = 6;
let showSongs = 1

class Phone {
  constructor(phoneScreen, musicScreen, selfieIndoor, selfieTown, selfieForestPath, selfieLake, selfieForestPath3, phoneSong1, phoneSong2, phoneSong3) {
    this.x = 400;
    this.y = 400;
    this.width = phoneWidth;
    this.height = phoneHeight;
    this.bezel = bezel;
    this.selected = 'menu';
    this.screenImage = phoneScreen;
  }

  display() {
    camera.off();
    push();
    fill(57, 58, 56);
    rect(this.x, this.y, this.width, this.height, 5);
    if (this.selected === "music") {
      image(musicScreen, this.x + this.bezel, this.y + this.bezel);
    } else {
      image(this.screenImage, this.x + this.bezel, this.y + this.bezel);
    }
    pop();
    camera.on();
  }

  selectApp() {
    if (this.selected === "menu") {
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
  camera() {
    if (this.selected === "camera") {
      if (scene === 'bedroom' || scene === 'hall' || scene === 'butchery') {
        camera.off()
        image(selfieIndoor, this.x + this.bezel, this.y + this.bezel)
        camera.on()
      }
      if (scene === 'forestPath' || scene === 'forestPath2') {
        camera.off()
        image(selfieForestPath, this.x + this.bezel, this.y + this.bezel)
        camera.on()
      }
      if (scene === 'lake') {
        camera.off()
        image(selfieLake, this.x + this.bezel, this.y + this.bezel)
        camera.on()
      }
      if (scene === 'forestPath3') {
        camera.off()
        image(selfieForestPath3, this.x + this.bezel, this.y + this.bezel)
        camera.on()
      }
      if (scene === 'town') {
        camera.off()
        image(selfieTown, this.x + this.bezel, this.y + this.bezel)
        camera.on()
      }
    }
  }

  displayMusic() {
    if (this.selected === "music") {
      camera.off()
      if (showSongs === 1) {
        fill(46, 106, 66)
        rect(this.x + this.bezel, this.y + this.bezel + 20, 65, 20);
        rect(this.x + this.bezel, this.y + this.bezel + 40, 65, 20);
        if (mouseX > this.x + this.bezel && mouseX < this.x + this.bezel + 65 && mouseY > this.y + this.bezel + 20 && mouseY < this.y + this.bezel + 40) {
          fill(251, 223, 107)
          textSize(8)
          text("BREAKFAST", this.x + this.bezel + 3, this.y + this.bezel * 2 + 25);
        }
        else{
          fill(255)
          textSize(8)
          text("BREAKFAST", this.x + this.bezel + 3, this.y + this.bezel * 2 + 25);
        }
        if (mouseX > this.x + this.bezel && mouseX < this.x + this.bezel + 65 && mouseY > this.y + this.bezel + 40 && mouseY < this.y + this.bezel + 60) {
          fill(251, 223, 107)
          textSize(8)
          text("Breathe", this.x + this.bezel + 3, this.y + this.bezel * 2 + 45);
        }
        else{
          fill(255)
          textSize(8)
          text("Breathe", this.x + this.bezel + 3, this.y + this.bezel * 2 + 45);
        }
      if (friendTalkedToLake3 === true){
        fill(46, 106, 66)
        rect(this.x + this.bezel, this.y + this.bezel + 60, 65, 20);
        if (mouseX > this.x + this.bezel && mouseX < this.x + this.bezel + 65 && mouseY > this.y + this.bezel + 60 && mouseY < this.y + this.bezel + 80 ) {
          fill(251, 223, 107)
          textSize(8)
          text("Cabin Fever", this.x + this.bezel + 3, this.y + this.bezel * 2 + 65);
        }
        else {
          fill(255)
          textSize(8)
          text("Cabin Fever", this.x + this.bezel + 3, this.y + this.bezel * 2 + 65);
        }
       }
      }
     }
     camera.on()
    }

  playMusic() {
    if (this.selected === "music") {
      camera.off()
      if (mouseX > this.x + this.bezel && mouseX < this.x + this.bezel + 65 && mouseY > this.y + this.bezel + 20 && mouseY < this.y + this.bezel + 40) {
        if (!phoneSong1.isPlaying()){
        phoneSong2.stop()
        phoneSong3.stop()
        phoneSong1.play()
        }
      }
      if (mouseX > this.x + this.bezel && mouseX < this.x + this.bezel + 65 && mouseY > this.y + this.bezel + 40 && mouseY < this.y + this.bezel + 60) {
        if (!phoneSong2.isPlaying()){
        phoneSong1.stop()
        phoneSong3.stop()
        phoneSong2.play()
        }
      }
      if (mouseX > this.x + this.bezel && mouseX < this.x + this.bezel + 65 && mouseY > this.y + this.bezel + 60 && mouseY < this.y + this.bezel + 80) {
        if (!phoneSong3.isPlaying()){
        phoneSong1.stop()
        phoneSong2.stop()
        phoneSong3.play()
        }
      }
      camera.on()
    }
  }

  exit() {
    if (
      mouseX > this.x + this.bezel &&
      mouseX < this.x + this.bezel + 20 &&
      mouseY > this.y + this.bezel &&
      mouseY < this.y + this.bezel + 20
    ) {
      this.selected = "menu";
      phoneSong1.stop() // Songs stop playing when you exit the music app
      phoneSong2.stop()
      phoneSong3.stop()
      push();
      fill(57, 58, 56);
      rect(this.x, this.y, this.width, this.height, 5);
      image(this.screenImage, this.x + this.bezel, this.y + this.bezel);
      pop();
    }
  }
}
