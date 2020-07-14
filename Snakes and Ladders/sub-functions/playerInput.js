class PlayerInput {

  constructor() {
    this.inputImg = loadImage('images/inputWindow/registerWindow.png');
    this.waitingImg = loadImage('images/inputWindow/waitingWindow.png');

    this.input = createInput("Name");
    this.button = createButton("PLAY");
    this.window;
  } 

  destroy(){
    this.window.destroy();
  }

  display(){
    //creating window
    this.window = createSprite(displayWidth/2,(displayHeight-111)/2);
    this.window.addImage(this.inputImg);

    this.input.position(displayWidth/2 -100, (displayHeight-111)/2 + 30);
    this.button.position(displayWidth/2 +100, (displayHeight-111)/2 + 30);

    //button pressed function
    touches.length > 0 && this.button.mousePressed(()=>{
      touches = [];
      this.input.hide();
      this.button.hide();
      
      //get name
      player.name = this.input.value();
      playerCount +=1;
      player.index = playerCount; 
      player.updating();
      player.updateCount(playerCount);

      if(allPlayers === undefined){
        this.window.addImage(this.waitingImg);
      }
    }); 
  }

  
}
