
var game;

var engine,world;





function preload(){
  game= new Game();
 


}

function setup(){
   createCanvas(displayWidth - 20, displayHeight-30);
   loadSound('sounds/leaves.mp3',true);
   
  
 


}
function draw(){
  game.addGameBackground();
  game.addGameAnimations();

  game.display();



drawSprites();
}
function keyPressed(){
  if(keyCode===32){
     game.hitSword();
  }
 

  
}

function keyReleased(){
  if(keyCode===32){
    game.releaseSword();
  }
} 

