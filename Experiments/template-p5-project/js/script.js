/**************************************************
Alien
Arman Faruqui

Activity Week 1
**************************************************/

// setup()
//
// Foundation for picture
function setup() {
createCanvas(500, 500);
background(22, 26, 51);

// Head of Alien

fill(94, 112, 92);
noStroke();
ellipse(250, 130, 100, 240);
// Ears
rectMode(CENTER);
noStroke();
rect(280, 60, 135, 20);

noStroke();
rect(220, 60, 135, 20);

triangle(150, 45, 138, 95, 166, 55);
triangle(351, 45, 363, 95, 336, 50);

// Eyes
fill(0, 0, 0);
noStroke();
ellipse(230, 130, 20, 130);

// Mouth
fill(92, 17, 10);
noStroke();
ellipse(240, 230, 15, 15);

fill(92, 17, 10);
noStroke();
ellipse(260, 230, 15, 15);

fill(0, 0, 0);
noStroke();
ellipse(270, 130, 20, 130);

//neck
fill(94, 112, 92);
noStroke();
rect(250, 230, 20, 130);

//Nostrils
fill(0, 0, 0);
noStroke();
ellipse(245, 200, 7, 7);

fill(0, 0, 0);
noStroke();
ellipse(255, 200, 7, 7);

// Body
fill(94, 25, 92);
noStroke();
ellipse(250, 400, 120, 240);

fill(94, 25, 92);
noStroke();
triangle(160, 500, 250, 300, 340, 500);








}


// draw()
//
// Description of draw() goes here.
function draw() {

}
