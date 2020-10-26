var canvas, backgroundImg, playerCount, database,CurrentPos;
var form, player, game,allPlayers,currPlayer;
var gameState = 0; 

var ath1,ath2,ath3,ath4,bg;
var aths = [];
var ath;

var hurdleImg;

var athlete;

//CNates = Coordinates;
var bgImg,ath1Img,ath2Img,ath3Img,ath4Img,athCNates;

var athletes = [];
var hurdles = [];

function preload(){
  bgImg = loadImage("images/background.jpg");
  athCNates = loadJSON('images/athlete.json');
  ath1Img = loadImage('images/testSonic.png');

  hurdleImg = loadImage('images/obstacle.png');
}

function setup(){

database = firebase.database();
canvas = createCanvas(displayWidth,displayHeight);

game = new Game();
game.getState();
game.start(); 
}

function draw(){

  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }

  if(random(1) < 0.01){
    hurdles.push(new Hurdle(670));
  }
}