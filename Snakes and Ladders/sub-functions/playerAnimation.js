class PlayerAnimation{
    constructor(){
        this.block1,this.block2;
    }

    //linking player blocks for animation
    linkBlocks(){
        var block1Ref = database.ref('players/player1/block');
        block1Ref.on("value",(data)=>{
            this.block1 = data.val();
        })
        var block2Ref = database.ref('players/player2/block');
        block2Ref.on("value",(data)=>{
            this.block2 = data.val();
        })
    }

    //player1 movement
    redMovement(){
        var z,z1;
        var x,y,yVal,X,Y;

        var Bh = 75;
        var Bw = 75;
        var Oh = 865;
        var Ow = 580;

        z = this.block1;
        z1 = z - 1;

        yVal = (z1 - 5)/10;
        y = round(yVal);
        x = z1 - (10*y);

        Y = (y*Bh) + (Bh/2);
        X = (x*Bw) + (Bw/2) + 5;

        if(y % 2 !== 0){
            X = (10*Bw) - X;
        }

        Y = Oh - Y;
        X = Ow + X;

        red.y = Y;
        red.x = X;

    }

    //player2 movement
    blueMovement(){
        var z,z1;
        var x,y,yVal,X,Y;

        var Bh = 75;
        var Bw = 75;
        var Oh = 865;
        var Ow = 580;

        z = this.block2;
        z1 = z - 1;

        yVal = (z1 - 5)/10;
        y = round(yVal);
        x = z1 - (10*y);

        Y = (y*Bh) + (Bh/2);
        X = (x*Bw) + (Bw/2) - 5;

        if(y % 2 !== 0){
            X = (10*Bw) - X;
        }

        Y = Oh - Y;
        X = Ow + X;

        blue.y = Y;
        blue.x = X;
    }
}