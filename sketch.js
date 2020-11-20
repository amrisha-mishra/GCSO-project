var car1 , car2 , car3, speed, weight, wall, deformation;


function setup() {
  createCanvas(1600,400);
  speed = random(55,70);
  weight = random(400,1500);
  car1 = createSprite(50, 150, 50, 30);
    car1.shapeColor = "purple";
    car1.depth = 2;
  wall = createSprite(1300, 250, 20, 300);
    wall.shapeColor = "black";
    wall.depth = 2;
}

function draw() {
  background("lightgreen");

  deformation = 0.5*weight*speed*speed/22500;

  if (keyDown("space")){
    car1.velocityX = speed;
  }
  if(wall.x- car1.x< wall.width/2+car1.width/2){

    car1.velocityX= 0;
    console.log(deformation);

     if(deformation < 80){
    car1.shapeColor = "green";
    }

     if(deformation === random(80,180) ){
    car1.shapeColor = "yellow";
    }

      if(deformation > 180){
      car1.shapeColor = "red";
    }
  }    
   
    
  
  
 

 


  drawSprites();
}