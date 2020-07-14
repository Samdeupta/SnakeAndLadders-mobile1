class Reset{
    constructor(){
        this.block1,this.block2;
        this.turn1,this,turn2;
    }

    //update blocks
    updateBlock1(Block){
        database.ref('players/player1/').update({
            block:Block
        });
    }
    updateBlock2(Block){
        database.ref('players/player2/').update({
            block:Block
        });
    }

    //updateTurn
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
}