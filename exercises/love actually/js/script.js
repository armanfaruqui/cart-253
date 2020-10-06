/**************************************************
Looking for Love
Arman Faruqui
Song: Living All Alone - Phylis Hyman

Figure out how to get this circle a date
**************************************************/
// User
let circle1 = {
  x: undefined,
  y: 250,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 5,
};
// Potential date
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
// Collectables
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

let state = "title"; // First state is title
let d; // Distance
let score = 0; //Score
let i = 0; // Counts circle2 bounces off walls

function preload() {
  lose = loadSound('assets/sounds/lose.mp3')
  win = loadSound('assets/sounds/win.mp3')
  song = loadSound('assets/sounds/alone.mp3')
}
// Description of setup() goes here.
function setup() {
  createCanvas(640, 360);
  // Sets starting positions
  circle1.x = (1 / 3) * width;
  circle2.x = (2 / 3) * width;
  circle1.y = (1 / 2) * height;
  circle2.y = (1 / 2) * height;
  // Positions coins
  coin1.x = random(0, width);
  coin2.x = random(0, width);
  coin3.x = random(0, width);

  coin1.y = random(0, height);
  coin2.y = random(0, height);
  coin3.y = random(0, height);
}

function draw() {
  background(0);
//**************************************
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
//***************************************
  function titleText() {
    push();
    textSize(32);
    stroke(255);
    strokeWeight(2);              // Title Screen
    fill(138, 34, 242);
    textAlign(CENTER, TOP);
    text("Is it meant to be?", width / 2, height / 2);
    pop();
  }
  // Allows you to control user
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
  // Controls CPU circle
  function moveCircle2() {
    push();
    circle2.x = circle2.x + circle2.speed * circle2.xdirection;
    circle2.y = circle2.y + circle2.speed * circle2.ydirection;
    if (circle2.x > width - 25 || circle2.x < 25) {
      circle2.xdirection *= -1;
      i += 1;   //Bounce counter
    }
    if (circle2.y > height - 25 || circle2.y < 25) {
      circle2.ydirection *= -1;
      i += 1;
    } // Prints both circles
    fill(209, 235, 45);
    ellipse(circle1.x, circle1.y, circle1.size);
    fill(138, 34, 242);
    stroke(255);
    strokeWeight(2);
    ellipse(circle2.x, circle2.y, circle2.size);
    pop();
  }

  console.log(`i: ${i}`); // Logs bounces

  function coins() {
    push();
    fill(255, 255, 0);
    noStroke();
    ellipse(coin1.x, coin1.y, coin1.size);
    ellipse(coin2.x, coin2.y, coin2.size);    //Draws coins
    ellipse(coin3.x, coin3.y, coin3.size);
    pop();
    // Collects coins
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
// Good outcome
  function checkDist() {
    d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if (d < 50) {
      state = "love";
      if (!lose.isPlaying()) {
      lose.play()
    }
  }
}
  // Bad outcome (took too long)
  function endText() {
    textSize(32);
    stroke(255);
    strokeWeight(2);
    fill(138, 34, 242);
    textAlign(CENTER, TOP)
    fill(138, 34, 242);
    text("Are those real diamonds on her?", width / 2, height / 2);
    text("I better go say hi!", width / 2, height / 2 + 50);
    lose.play()
  }
// Checks if bounce counter goes over the limit
  function checkOff() {
    if (i > 7) {
      state = "end";
    }
  }
// Good and bad ending
  function loveText() {
    if (score < 3) {
      textSize(32);
      stroke(255);
      strokeWeight(2);
      fill(138, 34, 242);
      textAlign(CENTER, TOP);
      text("Ew NO!! With THAT car?", width / 2, height / 2); // Bad if you don't collect enough coins
      if (!lose.isPlaying()) {
      lose.play() }
    } else if (score > 2) {
      textSize(32);
      stroke(255, 196, 252);
      strokeWeight(4);
      textAlign(CENTER, TOP);
      text("Nice whip!! When's the date?", width / 2, height / 2); // Good if you collect the coins
      if (!win.isPlaying()) {
      win.play()
      lose.stop();
    }
    }
  }
  console.log(`score: ${score}`); // Logs collection of coins
}
// Title to action
function mousePressed() {
  if (state === "title") {
    state = "action";
    if (song.isPlaying()) {
      song.stop();
      background(255, 0, 0);
    } else {
      song.play();
      background(0, 255, 0);
  }
}
}
