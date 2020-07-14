class Name{
    constructor(){
        this.name1,this.name2;
    }

    //linking names
    linkNames(){
        var name1Ref = database.ref('players/player1/name');
        name1Ref.on("value",(data)=>{
            this.name1 = data.val();
        })

        var name2Ref = database.ref('players/player2/name');
        name2Ref.on("value",(data)=>{
            this.name2 = data.val();
        })
    }

    display(){
        fill('white');
        textSize(40);
        textFont('Arial Rounded MT Bold');

        text(this.name1,130,150);
        text(this.name2,130,270);
    }
}