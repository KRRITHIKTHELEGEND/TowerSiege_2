class Block{
  constructor(x, y) {
      var options = {
          density : 1.0,
          restitution :0.4,
          friction : 2,
          //isStatic:true
         
      }
      this.visiblity = 255;
      this.body = Bodies.rectangle(x, y, 10, 10, options);
      this.width = 30;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      /*var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();*/

      if(this.body.speed < 3){
        var angle = this.body.angle;
       var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         //tint(255,this.Visiblity);
         //rect(this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }
    }
}