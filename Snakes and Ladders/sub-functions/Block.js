class Block{
    constructor(){} 

    //update block
    updateBlock1(Block){
        database.ref('players/player1/').update({
            block:Block
        });
    }
    updateBlock2(Block){
        database.ref('players/player2/').update({
            block:Block
        })
    }

    //update turn
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