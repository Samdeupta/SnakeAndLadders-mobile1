class Reseting{
    constructor(){
        this.resetButton = createButton("RESET");
        this.resetButton,this.game,this.player;
    }

    reseting(){
        //class initialization
        this.reset = new Reset();
        this.game = new Game();
        this.player = new Player();
        
        this.resetButton.mousePressed(()=>{
            //all reset functions
            this.reset.updateBlock1(1);
            this.reset.updateBlock2(1);
            this.reset.updateTurn1(1);
            this.reset.updateTurn2(1);

            this.game.update(0);
            this.player.updateCount(0);
        })
    }

    display(){
        this.resetButton.position(displayWidth - 100,displayHeight-(displayHeight-20));
    }
}