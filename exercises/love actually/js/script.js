/**************************************************
Looking for Love
Arman Faruqui

Here is a description of this template p5 project.
**************************************************/
let circle1 = {
  x: undefined,
  y: 250,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 5,
};

let circle2 = {
  x: undefined,
  y: 250,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 4,
  xdirection: 1, // Left or Right
  ydirection: 1, // Top to Bottom
};

let coin1 = {
  x: 0,
  y: 0,
  size: 20,
};

let coin2 = {
  x: 0,
  y: 0,
  size: 20,
};

let coin3 = {
  x: 0,
  y: 0,
  size: 20,
};

let state = "title";
let d;
let score = 0;
let i = 0;
// Description of setup() goes here.
function setup() {
  createCanvas(640, 360);
  // Sets starting positions
  circle1.x = (1 / 3) * width;
  circle2.x = (2 / 3) * width;
  circle1.y = (1 / 2) * height;
  circle2.y = (1 / 2) * height;

  coin1.x = random(0, width);
  coin2.x = random(0, width);
  coin3.x = random(0, width);

  coin1.y = random(0, height);
  coin2.y = random(0, height);
  coin3.y = random(0, height);
}

function draw() {
  background(0);

  if (state === "title") {
    titleText();
  } else if (state === "action") {
    moveCircle2();
    checkOff();
    checkDist();
    coins();
  } else if (state === "end") {
    endText();
  } else if (state === "love") {
    loveText();
  }

  function titleText() {
    push();
    textSize(32);
    stroke(255);
    strokeWeight(2);
    fill(138, 34, 242);
    textAlign(CENTER, TOP);
    text("Is it meant to be?", width / 2, height / 2);
    pop();
  }
  // Controls user
  if (state === "action") {
    if (keyIsDown(LEFT_ARROW)) {
      circle1.x -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      circle1.x += 5;
    }

    if (keyIsDown(UP_ARROW)) {
      circle1.y -= 5;
    }

    if (keyIsDown(DOWN_ARROW)) {
      circle1.y += 5;
    }
  }

  function moveCircle2() {
    push();
    circle2.x = circle2.x + circle2.speed * circle2.xdirection;
    circle2.y = circle2.y + circle2.speed * circle2.ydirection;
    if (circle2.x > width - 25 || circle2.x < 25) {
      circle2.xdirection *= -1;
      i += 1;
    }
    if (circle2.y > height - 25 || circle2.y < 25) {
      circle2.ydirection *= -1;
      i += 1;
    }
    fill(209, 235, 45);
    ellipse(circle1.x, circle1.y, circle1.size);
    fill(138, 34, 242);
    stroke(255);
    strokeWeight(2);
    ellipse(circle2.x, circle2.y, circle2.size);
    pop();
  }

  console.log(`i: ${i}`);

  function coins() {
    push();
    fill(255, 255, 0);
    noStroke();
    ellipse(coin1.x, coin1.y, coin1.size);
    ellipse(coin2.x, coin2.y, coin2.size);
    ellipse(coin3.x, coin3.y, coin3.size);
    pop();

    let c1 = dist(circle1.x, circle1.y, coin1.x, coin1.y);
    let c2 = dist(circle1.x, circle1.y, coin2.x, coin2.y);
    let c3 = dist(circle1.x, circle1.y, coin3.x, coin3.y);

    if (c1 < 25) {
      coin1.x = 1000;
      score += 1;
    }

    if (c2 < 25) {
      coin2.x = 1000;
      score += 1;
    }

    if (c3 < 25) {
      coin3.x = 1000;
      score += 1;
    }
  }

  function checkDist() {
    d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if (d < 50) {
      state = "love";
    }
  }

  function endText() {
    textSize(32);
    stroke(255);
    strokeWeight(2);
    fill(138, 34, 242);
    textAlign(CENTER, TOP)
    fill(138, 34, 242);
    text("Are those real diamonds on her?", width / 2, height / 2);
    text("I better go say hi!", width / 2, height / 2 + 50);
  }

  function checkOff() {
    if (i > 7) {
      state = "end";
    }
  }

  function loveText() {
    if (score < 3) {
      textSize(32);
      stroke(255);
      strokeWeight(2);
      fill(138, 34, 242);
      textAlign(CENTER, TOP);
      text("Ew NO!! With THAT car?", width / 2, height / 2);
    } else if (score > 2) {
      textSize(32);
      stroke(255, 196, 252);
      strokeWeight(4);
      textAlign(CENTER, TOP);
      text("Nice whip!! When's the date?", width / 2, height / 2);
    }
  }
  console.log(`score: ${score}`);
}

function mousePressed() {
  if (state === "title") {
    state = "action";
  }
}
