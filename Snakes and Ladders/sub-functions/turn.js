class Turn{
    constructor(){
        this.turn1,this.turn2;
    }

    //link player turn functions
    linkTurn1(){
        var turn1CountRef = database.ref('players/player1/turn');
        turn1CountRef.on("value",(data)=>{
            this.turn1 = data.val();
        })
    }
    linkTurn2(){
        var turn2CountRef = database.ref('players/player2/turn');
        turn2CountRef.on("value",(data)=>{
            this.turn2 = data.val();
        })
    }     

    //update player turn functions
    updateTurn1(Turn){
        database.ref('players/player1/').update({
            turn: Turn
           });
    }
    updateTurn2(Turn){
        database.ref('players/player2/').update({
            turn: Turn
           });
    }

    //assign to global variables
    assign(){
        turn1 = this.turn1;
        turn2 = this.turn2;
    }
}