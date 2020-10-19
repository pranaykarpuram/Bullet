var wall,thickness;
var bullet, speed, weight;
var gameState = 0;
function setup() {
  createCanvas(800,400);
 bullet = createSprite(100, 200, 50, 50);
 wall = createSprite(700,200,thickness,height/2);
 wall.shapeColor = "white";
}

function draw() {
  background(0);  
  thickness = random(22,83);
  speed= random(223,321);
  weight = random(30,52);
  bullet.velocityX = 10;
if (gameState ===0){
  if(collided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  if(damage>10){
   wall.shapeColor = "red";
   gameState =1;
  }
  if(damage<10){
    wall.shapeColor = "green";
    gameState =1; 
  }  

}
}
if (gameState ===1){
  bullet.velocityX = 0;
}
console.log(damage);
drawSprites();
}