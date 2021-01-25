var fixedRect, movingRect;
var ball, bat;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ball = createSprite(700,300,50,80);
  ball.shapeColor = "orange";
  bat = createSprite(50,300,70,90);
  bat.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  ball.x = World.mouseX;
  ball.y = World.mouseY;

  bounceOff(bat, ball)

  
  drawSprites();
}

function isTouching(object1, object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true 
}
else {
  
  return false
}

}

function bounceOff(object1, object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = (-1)*object1.velocityX;
}
else (object1.y - object2.y < object2.height/2 + object1.height/2
&& object2.y - object1.y < object2.height/2 + object1.height/2) ;{
 object1.velocityY = (-1)*object1.velocityY ;
  
}

}