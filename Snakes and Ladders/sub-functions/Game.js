class Game {
  constructor(){}

  //get and update gamestate
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    });
  }
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  //get information from database
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");

      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      inputWindow = new PlayerInput();
      inputWindow.display();
    }
  }

  //update during game
  async playUpdate(){
    player.updating();
    player.assign();

    player.linkturn();
    player.updateturn(turn);
  }
} 