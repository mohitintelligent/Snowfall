const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var snowfall=[];
var backimg
function preload(){
  backimg=loadImage("snow2.jpg")
}
function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

}

function draw() {
  background(backimg);  
    Engine.update(engine);
  if(frameCount%10==0){
   snowfall.push(new snowball(random(50,750),0,50));
   console.log("ok")
   
  }
  
  for (var k = 0; k < snowfall.length; k++) {
    
    snowfall[k].display();   
   
  }

  drawSprites();
}