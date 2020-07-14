class Player {

  constructor(){
    this.index = null;
    this.name = null;
    this.block = 1;
    this.playerIndex;
    this.turn = 1
  }

  //get player count
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  //update player count
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  //database reference
  updating(){
    this.playerIndex = 'players/player' + this.index;
    database.ref(this.playerIndex).set({
      name: this.name,
      block: this.block,
      turn: this.turn
    });
  }

  //get player information
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    });
  }

  //assign to global variables
  assign(){
    index = this.index; 
    PlayerIndex = this.playerIndex;
    block = this.block;
    turn = this.turn;
  }

  //link and update player block
  linkBlock(){
    var blockCountRef = database.ref(this.playerIndex + '/block');
    blockCountRef.on("value",(data)=>{
      this.block = data.val();
    })
  }
  updateBlock(playerBlock){
    database.ref(this.playerIndex + '/').update({
     block: playerBlock
    }); 
  }

  //link and update player turn
  linkturn(){
    var turnCountRef = database.ref(this.playerIndex + '/turn');
    turnCountRef.on("value",(data)=>{
      this.turn = data.val();
    })
  }
  updateturn(Turn){
    database.ref(this.playerIndex + '/').update({
     turn: Turn
    }); 
  }
}










