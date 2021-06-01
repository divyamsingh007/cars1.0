class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref("playerCount").once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }
    car_1 = createSprite(100, 200);
    car_2 = createSprite(300, 200);
    car_3 = createSprite(500, 200);
    car_4 = createSprite(700, 200);
    cars = [car_1,car_2,car_3,car_4]
  }

  play() {
    form.hide();
    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
      var index = 0;
      var x = 0,y
      for(var plr in allPlayers){
        index++;
        x = x+200;
        y = displayHeight-allPlayers[plr].distance
        cars[index-1].x = x
        cars[index-1].y = y
        if (index=== player.index) {
          cars[index-1].shapeColor = 'red'
          camera.position.x = displayWidth/2
          camera.position.y = cars[index-1].y
        }
      }
    }

    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 50;
      player.update();
    }
    drawSprites()
  }
}