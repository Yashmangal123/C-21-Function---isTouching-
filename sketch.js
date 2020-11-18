var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "yellow";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "yellow";
  
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "yellow";

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "yellow";
  }

  drawSprites();
}

