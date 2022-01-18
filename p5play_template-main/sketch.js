var box
var box2
function setup() {
  createCanvas(1000,800);
  box=createSprite (500,400,40,40)
box2=createSprite (400,500,40,40)  
}

function draw() 
{
  background("orange");
  if (keyDown(RIGHT_ARROW)){
    box.x=box.x+5
    
  }
  if (keyDown(LEFT_ARROW)){
    box.x=box.x-5
  }
  if (keyDown(UP_ARROW)){
    box.y=box.y-5
  }
  if (keyDown(DOWN_ARROW)){
    box.y=box.y+5
  }
  if(keyDown("W")){
    box2.velocityY=-2
  }
  if(keyDown("S")){
    box2.velocityY=2
  }
  if(keyDown("D")){
    box2.velocityX=2
  }
  if(keyDown("A")){
    box2.velocityX=-2
  }
  if (keyDown ("space")){
    background("purple")
  }
drawSprites ()
}




