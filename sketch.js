var database;

var gameState = 0;
var playerCount ;
var allPlayers;
var distance = 0;
var game,player,form;
var player1, player2, player3, player4;
var playerCars = []
var car1, car2, car3, car4;
var track;

function preload(){

  car1 = loadImage("images/car1.png")
  car2 = loadImage("images/car2.png")
  car3 = loadImage("images/car3.png")
  car4 = loadImage("images/car4.png")
  track = loadImage("images/track.jpg")
}

function setup(){

  database = firebase.database();
  createCanvas(displayWidth, displayHeight);
  game = new Gamestate()
  game.getState();
  game.start();

}

function draw(){
 // background("white");

  if (playerCount === 4){
    game.updateState(1)
  }

  if (gameState === 1){
    clear();
    game.play();
  }

   // drawSprites();
  
}