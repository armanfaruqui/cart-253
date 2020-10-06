/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let pool;

function preload(){
 img = loadImage('assets/images/C4rp.gif')

function setup() {
createCanvas(1000, 600)
pool = createGraphics(84, 180);



}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(150)

  pool.strokeWeight(5);
  pool.point(84, 180);
  pool.point(135, 70);
  pool.point(255, 56);
  pool.point(395, 100);
  pool.point(560, 130);
  pool.point(790, 220);
  pool.point(920, 340);
  pool.point(890, 500);
  pool.point(700, 560);
  pool.point(450, 540);
  pool.point(250, 580);
  pool.point(100, 420);

  pool.beginShape();
  pool.fill(0, 0, 255)
  pool.strokeWeight(1)
  pool.curveVertex(84, 180);
  pool.curveVertex(84, 180);
  pool.curveVertex(135, 70);
  pool.curveVertex(255, 56);
  pool.curveVertex(395, 100);
  pool.curveVertex(560, 130);
  pool.curveVertex(790, 220);
  pool.curveVertex(920, 340);
  pool.curveVertex(890, 500);
  pool.curveVertex(700, 560);
  pool.curveVertex(450, 540);
  pool.curveVertex(250, 580);
  pool.curveVertex(100, 420);
  pool.endShape(CLOSE);


 // Use the shape as a mask
 img.mask(pool)

 image(img, 200, 0)
}
