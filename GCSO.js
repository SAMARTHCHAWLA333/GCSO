var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  car=createSprite(50,200,50,50);
  car.shapeColour="blue";
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColour="80,80,80";
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255);
  if(wall.x-car.x<(car.weight+wall.width/2))
  {
    car.velocityX = 0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation<100)
    {
      car.shapeColour="0,255,0";
    }
    if(deformation>100 && deformation<180){
      car.shapeColour="230,230,0";
    }
    if(deformation>180){
      car.shapeColour="255,0,0";
    }
    else{
      car.shapeColour="blue";
      car.shapeColour="blue";
    }
    }
  drawSprites();
}