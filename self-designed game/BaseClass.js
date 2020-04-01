class BaseClass{
    constructor(x, y, width, height, angle) {
       
        this.body = createSprite(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image= loadImage('images/hauntedHouse.png');
    
      }
      display(){
          
      }
}