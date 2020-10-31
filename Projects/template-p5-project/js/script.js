//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
let player_stand
let player_walkDown
let player_sprite
let player_walkLeft

//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {
  //create an animation from a sequence of numbered images
  player_stand = loadAnimation('assets/images/main/main-walk001.png')
  player_walkDown = loadAnimation('assets/images/main/main-walk001.png', 'assets/images/main/main-walk004.png');
  player_walkLeft = loadAnimation('assets/images/main/main-walk001.png', 'assets/images/main/main-walk003.png');

}

function setup() {
  createCanvas(300, 300);
  player_sprite = createSprite(100, 100, 28, 52);
  player_sprite.addAnimation('walkDown', player_walkDown);
  player_sprite.addAnimation('stand', player_stand);
}

function draw() {
  clear()
  background(100);

  if(keyDown(DOWN_ARROW)) {
    player_sprite.changeAnimation('walkDown');
    player_sprite.velocity.y = 2;
  }
  else  {
    player_sprite.changeAnimation('stand');
    player_sprite.velocity.y = 0;
  }
  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  drawSprites()
}
