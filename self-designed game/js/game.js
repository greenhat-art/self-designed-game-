class Game{
    constructor(){
        //game levels
        this.level= 1;
        //loading images for the background
        this.autumnRoadImage= loadImage('images/autumnRoad.png');
        this.halloweenRoadImage= loadImage('images/halloweenRoad.png');
        this.monsoonRoadImage= loadImage('images/monsoonRoad.png');
        this.mummyAnimation= loadAnimation("images/mummy1.png","images/mummy2.png");
        
        //creating sword and player 
        this.sword= new Sword(displayWidth/2+20,2*displayHeight/3);
        this.player= new Player(displayWidth/2-100,2*displayHeight/3+40);
       
        


        //create a static ground
        this.ground= new Ground(displayWidth/2,displayHeight-100,displayWidth,20);
        

        
        
        
    }
    addGameAnimations(){
        this.sword.setSwordImage();
        this.player.setPlayerAnimation();
    }
    addGameBackground(){
        switch(this.level){
            case 1:
                background(this.autumnRoadImage);
                break;
             case 2:
                 background(this.halloweenRoadImage);
                 break;
             case 3:
                 background(this.monsoonRoadImage);
                 break;
             default:
                 break;   
                  
        }
    }

    
    display(){
        //loading the background for the levels
      
       //line(this.player.body.position.x,this.player.body.position.y,this.sword.body.position.x,this.sword.body.position.y);
       
       this.sword.display();
       this.player.display();
       this.mummyAnimation;
       
       
       
    
    
    }
    hitSword(){
        this.sword.body.x= this.sword.body.x-130;
        this.sword.body.addImage("hit",this.sword.image2);
        
        
    }
    releaseSword(){
        this.sword.body.x= this.sword.body.x+130;
    
        this.sword.body.addImage("rest",this.sword.image1);
    }

}
