var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car_1, car_2, car_3, car_4, cars;

function setup() {
  canvas = createCanvas(displayWidth - 50, displayHeight - 100);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  if (playerCount === 4) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }
}
