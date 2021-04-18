class snowball {
    constructor(x,y,radius)
      {
          var options = { 
              density: 0.04,
              restitution:0.001 ,
              frictionAir: 0.04
              
          };
          this.x=x;
          this.y=y;
          this.r=radius;
          this.image=loadImage("snow5.webp");
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
          World.add(world, this.body);
  
      }
      
      display(){
              
              
              push()
              translate(this.body.position.x, this.body.position.y);
             // rectMode(CENTER)
              imageMode(CENTER);
              image(this.image, 0,0,this.r, this.r)
              pop()
              
      }
  }
  