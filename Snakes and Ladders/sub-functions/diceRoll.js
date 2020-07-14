class DiceRoll{
    constructor(){
        this.dice,this.Dice;
        
        this.diceAnimation = loadAnimation('images/dice/1.png','images/dice/2.png','images/dice/3.png','images/dice/4.png','images/dice/5.png','images/dice/6.png');
        this.dice1 = loadImage('images/dice/1.png');
        this.dice2 = loadImage('images/dice/2.png');
        this.dice3 = loadImage('images/dice/3.png');
        this.dice4 = loadImage('images/dice/4.png');
        this.dice5 = loadImage('images/dice/5.png');
        this.dice6 = loadImage('images/dice/6.png');

        this.Dice;
    }

    //dice roll
    DiceRolling(){
        this.dice = round(random(1,6));
    }

    // updating player block
    playerMovement(){
        block += this.dice;

        player.linkBlock();
        player.updateBlock(block);
    }

    //snake function
    snake(){
        if(block === 43){
            block = 17;
            player.linkBlock();
            player.updateBlock(block);
        }
        if(block === 50){
            block = 5;
            player.linkBlock();
            player.updateBlock(block);
        }
        if(block === 56){
            block = 8;
            player.linkBlock();
            player.updateBlock(block);
        }
        if(block === 73){
            block = 15;
            player.linkBlock();
            player.updateBlock(block);
        }
        if(block === 84){
            block = 58;
            player.linkBlock();
            player.updateBlock(block);
        }
        if(block === 87){
            block = 49;
            player.linkBlock();
            player.updateBlock(block);
        }
        if(block === 98){
            block = 40;
            player.linkBlock();
            player.updateBlock(block);
        }
    }

    //ladders function
    ladders(){
        if(block === 2){
            block = 23;
            player.linkBlock();
            player.updateBlock(block);
        }
        if(block === 6){
            block = 45;
            player.linkBlock();
            player.updateBlock(block);
        }
        if(block === 20){
            block = 59;
            player.linkBlock();
            player.updateBlock(block);
        } 
        if(block === 52){
            block = 72;
            player.linkBlock();
            player.updateBlock(block);
        }  
        if(block === 57){
            block = 96;
            player.linkBlock();
            player.updateBlock(block);
        }
        if(block === 71){
            block = 92;
            player.linkBlock();
            player.updateBlock(block);
        }
    }

    //dice animation
    diceAnime(){
        this.Dice = createSprite((displayWidth/2) + 650 ,(displayHeight-111)/2,10,10);
        this.Dice.scale = 4;
        
        switch(this.dice){
                case 1: this.Dice.addImage(this.dice1)   
              break;
                case 2: this.Dice.addImage(this.dice2)
              break;
                case 3: this.Dice.addImage(this.dice3)
              break;
                case 4: this.Dice.addImage(this.dice4)
              break;
                case 5: this.Dice.addImage(this.dice5)
              break;
                case 6: this.Dice.addImage(this.dice6)
              break;
              default: break
          }
    }
}