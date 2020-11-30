var bullet1,bullet2,bullet3,wall;
var thickness;
var speed1,speed2,speed3,weight,damage1,damage2,damage3;
function setup() {
  createCanvas(1200,400);
  
  bullet1 = createSprite(50, 100, 30,30);
 bullet1.shapeColor = "blue";
 
 bullet2 = createSprite(50, 200, 30,30);
 bullet2.shapeColor = "blue";
 
 bullet3 = createSprite(50,300, 30,30);
 bullet3.shapeColor = "blue";
 
 
 thickness = random(24,83);
 speed1 = random(223,321);
  speed2 = random(223,321);
  speed3 = random(223,321);
  weight = random(30,52);
}

function draw() {
  console.log(bullet1.x)
  console.log(bullet2.x);
  background("black");
  console.log(thickness);
  wall = createSprite(1100,200,thickness,400);
 wall.shapeColor = (80,80,80);
  bullet1.velocityX = speed1;
  bullet2.velocityX = speed2;
  bullet3.velocityX = speed3; 
  if(isTouching(bullet1,wall)){
    bullet1.velocityX = 0;
    bullet1.x = 1060;
    damage1 = (0.5*weight*speed1*speed1)/(thickness*thickness*thickness);
    if(damage1<10){
      wall.shapeColor = "green";
      bullet1.x = wall.x-(thickness/2)-1;
    bullet2.x = wall.x-(thickness/2)-1;
    bullet3.x = wall.x-(thickness/2)-1;
    }
   
    if(damage1>10){
      wall.shapeColor = "red";
     
    }
    bullet1.x = wall.x-(thickness/2)-1;
    bullet2.x = wall.x-(thickness/2)-1;
    bullet3.x = wall.x-(thickness/2)-1;
  } 
  if(isTouching(bullet2,wall)){
    bullet2.velocityX = 0;
    
    damage2 =(0.5*weight*speed1*speed1)/(thickness*thickness*thickness);
    if(damage2<10){
      wall.shapeColor = "green";
      bullet1.x = wall.x-(thickness/2)-1;
    bullet2.x = wall.x-(thickness/2)-1;
    bullet3.x = wall.x-(thickness/2)-1;
    }
    
    if(damage2>10){
      wall.shapeColor = "red";
      bullet1.x = wall.x-(thickness/2)-1;
    bullet2.x = wall.x-(thickness/2)-1;
    bullet3.x = wall.x-(thickness/2)-1;
    }
    
  } 

  if(isTouching(bullet3,wall)){
    bullet3.velocityX = 0;
    
    damage3 = (0.5*weight*speed1*speed1)/(thickness*thickness*thickness);
    if(damage3<10){
      wall.shapeColor = "green";
      bullet1.x = wall.x-(thickness/2)-1;
    bullet2.x = wall.x-(thickness/2)-1;
    bullet3.x = wall.x-(thickness/2)-1;
    }
  
    if(damage3>10){
      wall.shapeColor = "red";
      bullet1.x = wall.x-(thickness/2)-1;
    bullet2.x = wall.x-(thickness/2)-1;
    bullet3.x = wall.x-(thickness/2)-1;
    }
    
  } 
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2) {
  return true;
    }
  else {
  return false;
  }
  }


