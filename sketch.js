var fixed, moving, obs1, obs2;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(300, 200, 80, 80);
  fixed.shapeColor = "green";
  moving = createSprite(200, 200, 60, 60);
  moving.shapeColor = "green";

  obs1 = createSprite(700,200,50,50);
  obs1.velocityX = -1;
  obs2 = createSprite(500,200,30,30);
  obs2.velocityX = 1;
}

function draw() {
  background("lightblue");

  //moving.x = mouseX;
 // moving.y = mouseY;
  console.log(moving.y - fixed.y);

  if(moving.x - fixed.x <= moving.width/2 + fixed.width/2 
    && moving.x - fixed.x >= -(moving.width/2 + fixed.width/2)
    && moving.y - fixed.y <= moving.height/2 + fixed.height/2
    && moving.y - fixed.y >= -(moving.height/2 + fixed.height/2)){
    moving.shapeColor = "red";
    fixed.shapeColor = "red";
  }
  else {
    moving.shapeColor = "green";
    fixed.shapeColor = "green";
  }

  if(obs1.x - obs2.x <= obs1.width/2 + obs2.width/2 && obs1.x - obs2.x >= -(obs1.width/2 + obs2.width/2)){
    obs1.velocityX = (-1)* obs1.velocityX;
    obs2.velocityX = (-1)* obs2.velocityX;
  }
  if(obs1.y - obs2.y <= obs1.height/2 + obs2.height/2 && obs1.y - obs2.y >= -(obs1.height/2 + obs2.height/2)){
    obs1.velocityY = (-1)* obs1.velocityY;
    obs2.velocityY = (-1)* obs2.velocityY;
  }

  drawSprites();
}