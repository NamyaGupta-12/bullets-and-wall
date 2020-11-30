var bullet,wall
var speed,weight,thickness

function setup() {
  createCanvas(1600,400);
  rectMode(CENTER)
 
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet=createSprite(50,200,30,60);
  bullet.shapeColor=color (255,255,255);
  wall=createSprite(1200,200,thickness,height/2);
  

}

function draw() {

 
  background(0,0,0);
  bullet.velocityX=speed; 
  
  if(hasCollided(bullet,wall))
  {
 bullet.velocityX=0;

 var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
 if(deformation>10)
 {
   wall.shapeColor= color(255,0,0);
 }

 if(deformation<10) {
  wall.shapeColor= color(0,255,0);
 }

 

  }
  drawSprites();
}