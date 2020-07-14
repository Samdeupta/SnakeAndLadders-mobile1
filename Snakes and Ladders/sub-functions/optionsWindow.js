class OptionWindow{
    constructor(){
        this.diceRoll,this.Turn,this.end,this.name;
        this.diceButton = createButton("ROLL DICE");
    }

    button(){
        //class initializations
        this.diceRoll = new DiceRoll();
        this.Turn = new Turn();
        this.playerAnimation = new PlayerAnimation();
        this.end = new End();
        this.name = new Name();

        //name display functions
        this.name.linkNames();
        this.name.display();

        //diceRoll functions
        this.diceRoll.snake();
        this.diceRoll.ladders();

        //player animation functions
        this.playerAnimation.linkBlocks();
        this.playerAnimation.redMovement();
        this.playerAnimation.blueMovement();

        //endGame functions
        this.end.linkBlock();
        this.end.changeBlock();
        this.end.changeState();
        this.end.endGame();

        //button pressed function
        touches.length > 0 && this.diceButton.mousePressed(()=>{
            touches = [];
            if(turn === index){
                this.diceRoll.DiceRolling();
                this.diceRoll.diceAnime();
                this.diceRoll.playerMovement();
                
                turn += 1;

                //reseting turn
                if(turn > 2){
                    turn = 1;
                }

                //assigning to global variables
                this.Turn.assign();

                // linking and updating turns
                turn1 = turn2 = turn;
                this.Turn.linkTurn1();
                this.Turn.updateTurn1(turn);

                this.Turn.linkTurn2();
                this.Turn.updateTurn2(turn); 
            }else{
                alert("Please Wait for Your Turn");
            }
        }); 
    }

    display(){
        this.diceButton.position((displayWidth/2)-50,displayHeight-200)       
    }
}