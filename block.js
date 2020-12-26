class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0.001,
            'density':0.01,
            'isStatic': false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=225;
        World.add(world, this.body);
      }

      display(){
        if(this.body.speed < 3){
        var angle = this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rotate(angle);
        fill("pink");
        rect(0, 0, this.width, this.height);
      
        pop();
       
        }

        else{
          push();
          score++;
         
          World.remove(world, this.body);
          var message = "message";
          console.log(message);
          pop();
        }
    }  
}
