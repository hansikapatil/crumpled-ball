class dustbin{
    constructor(x, y ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.bodyplate = Bodies.rectangle(x, y, 20, 70, options);
        this.bodyleftplate = Bodies.rectangle(x-35, y-35,20,70, options); 
        this.bodyrightplate = Bodies.rectangle(x+35, y+35, 20,70, options);

        this.width = 20;
        this.height = 70;
        this.image=loadImage("dustbin.png")
        World.add(world, this.bodyplate);
        World.add(world, this.bodyleftplate);
        World.add(world, this.bodyrightplate);
    }
      display(){
        //var angle = this.body.angle;
       // push();
        //translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
        imageMode(CENTER);
        image(this.image, this.bodyplate.position.x, this.bodyplate.position.y, this.width, this.height);
       // pop();
      }
}


