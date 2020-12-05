let redFlowers
let firstFlowerX = 182
let firstFlowerX2 = 366
let firstFlowerY = 1526

class ForestPath3 {
  constructor(bg_forestPath3, flowerRed) {
    this.bg = bg_forestPath3

    redFlowers = new Group();

    for (let i = 0; i<30; i++){
      let newRedFlower = createSprite(firstFlowerX, firstFlowerY)
      newRedFlower.addAnimation("flowerRed", flowerRed)
      redFlowers.add(newRedFlower)
      firstFlowerY = firstFlowerY + 108
    }

    for (let i = 0; i<30; i++){
      let newRedFlower = createSprite(firstFlowerX2, firstFlowerY)
      newRedFlower.addAnimation("flowerRed", flowerRed)
      redFlowers.add(newRedFlower)
      firstFlowerY = firstFlowerY + 108
    }
  }

  display() {
    image(this.bg, 0, 0);
  }

  start(){
    player.sprite.position.x = 270;
    friend.sprite.position.x = 270;
    player.sprite.position.y = 1326;
    friend.sprite.position.y = 1326;
  }

  boundaries(){
    if (player.sprite.position.x < 180) player.sprite.position.x = 180;
    if (player.sprite.position.x > 370) player.sprite.position.x = 370;
    if (player.sprite.position.y > 1326) player.sprite.position.y = 1326;
    if (friend.sprite.position.x < 180) friend.sprite.position.x = 180;
    if (friend.sprite.position.x > 370) friend.sprite.position.x = 370;
    if (friend.sprite.position.y > 1326) friend.sprite.position.y = 1326;
  }

}
