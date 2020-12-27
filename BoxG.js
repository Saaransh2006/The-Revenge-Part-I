class BoxG{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':2.3
      }
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      this.width = 30;
      this.height = 40;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(1);
      fill("lightGreen");
      rect(pos.x, pos.y, this.width, this.height);
    }
}