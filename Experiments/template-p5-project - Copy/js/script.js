
let fireflies=[];
var pathTime=0;
var glowTimer=0;
var direction=3;
var angle=0;
var z=0;
var expandContract=0;
var direction2=3;
var pathTime2=0;
var pos;
var maxFlies=40;


function setup() {
 createCanvas(windowWidth, windowHeight);

       dim = 15;
        ellipseMode(RADIUS);
        frameRate(100);
        for(var j=0;j<maxFlies;j++)
           fireflies[j]=new firefly(random(0,windowWidth),random(0,windowHeight));
}
function draw() {
  background(100);

   noStroke();
  //var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
 var x = floor(random(windowWidth));
 var y = floor(random(windowHeight));


  for(var j=0;j<maxFlies;j++)
          drawFlies(fireflies[j].x,fireflies[j].y);

  glowTimer++;
  if(parseInt(glowTimer)%2==0){
    if(expandContract==0){dim-=0.5;z++;if(z==3) expandContract=1;}
   else if(expandContract==1){dim+=0.5;z--; if(z==0) expandContract=0;}
   }

  for(var j=0;j<maxFlies;j++)
      fireflies[j].changeDir();
  for(var j=0;j<maxFlies;j++)
        fireflies[j].Move( fireflies[j].dir);
}


class firefly
{

 constructor(X,Y){
   this.x=X;
   this.y=Y;
   this.dir=parseInt(random(0,5));
   this.pathTime=0;
   this.up=random(100,1000);
 }
 changeDir()
 {
   this.pathTime++;

   if(this.pathTime>this.up)
   {
     this.dir=parseInt(random(0,5));
     this.up=random(100,1000);
     this.pathTime=0;
   }
 }

  Move(i)
  {  angle=random(-0.5,0.5);
  if(this.x<0 && this.x>windowWidth && this.y<0 && this.y>windowHeight)
    this.pathTime=10000;
    else{
 if(i==1)
   {this.x+=0.5;
   this.y+=angle;
   }
 else  if(i==2)
{this.x-=0.5;
this.y+=angle;
}
 else if(i==3)
 {this.y+=0.5;
 this.x+=angle;
 }

 else  if(i==4)
    {this.y-=0.5;
    this.x+=angle;
    }
 }
}
}


function   drawFlies(X, Y) {
  var radius = dim/2;
   var from = color(255, 255, 0, 0.2 * 255);
   var to = color(0, 255, 255, 0.2 * 255);
  col=lerpColor(from, to, .33);
   for (var r = radius; r > 0; r-=1) {
   fill(col, 90, 90);
   ellipse(X,Y, r, r);//console.log(r);
  }
 }
