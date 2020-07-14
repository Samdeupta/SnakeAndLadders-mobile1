// game basic elements
var gameState = 0;
var playerCount = 0;
var turn;
var database;

//player elements
var allPlayers,player;
var index,PlayerIndex;
var block;
var turn1,turn2; 

//board
var board,boardImg;
var backgroundImg;

//peices
var red,blue;

//sub functoin variables
var inputWindow,optionWindow,game,reset;


function preload(){
  //board and background images
  boardImg = loadImage('images/Board.png');
  backgroundImg1 = loadImage('images/background1.png');
  backgroundImg2 = loadImage('images/background2.png');
  
  //peices images
  redImg = loadImage('images/peices/red.png');
  blueImg = loadImage('images/peices/blue.png');
}


function setup() {
  //canvas creation and database initialization
  createCanvas(displayWidth,displayHeight-111);
  database = firebase.database();

  //game class initialization
  game = new Game();
  game.getState();
  game.start();

  //reseting class initialization
  reset = new Reseting();

  //board creation
  board = createSprite(displayWidth/2,(displayHeight-111)/2);
  board.addImage(boardImg);
  board.scale = (displayWidth/displayHeight)/1.4;
  board.visible = false;

  //player1 and player2 peices
  red = createSprite(600,830.5,10,10);
  red.visible = false;
  red.addImage(redImg);

  blue = createSprite(600,830.5,10,10);
  blue.visible = false;
  blue.addImage(blueImg);
}

function draw() {
  background(backgroundImg1);

  //reset functions
  reset.display();
  reset.reseting();
  
  game.playUpdate();
  
  //update gamestate
  if(playerCount === 2){
    game.update(1);
  }

  //start game
  if(gameState === 1){
    inputWindow.destroy();
    background(backgroundImg2);

    red.visible = true;
    blue.visible = true;

    board.visible = true;

    optionWindow = new OptionWindow();
    optionWindow.display();
    optionWindow.button();
    
  }

  
  drawSprites();
}