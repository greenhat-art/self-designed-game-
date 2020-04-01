class Player extends BaseClass{
    constructor(x,y){
        super(x,y,150,250);
        //load the player image
        this.animation= loadAnimation("images/player.png","images/player2.png");

    }
    setPlayerAnimation(){
        this.body.addAnimation("player",this.animation);
    }
    display(){
        //load the player image
        super.display();

    }
}