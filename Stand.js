class Stand{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;

        if(this.body.speed < 3){
          super.display();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           translate(this.body.position.x, this.body.position.y);
           rotate(angle);
           rectMode(CENTER);
           rect(0,0,this.width, this.height);
           pop();
         }
      }
