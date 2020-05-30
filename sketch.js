var mr,fr;
function setup() {
  createCanvas(800,400);
  fr = createSprite(600, 100, 50, 50);
  mr = createSprite(600, 400, 100, 50);
  fr.shapeColor = "red";
  mr.shapeColor = "yellow";
  mr.velocityY = -4;
  fr.velocityY = 4;
}

function draw() {
  background(0);  
  
if(mr.x - fr.x <= mr.width/2 + fr.width/2 && 
  fr.x - mr.x <= mr.width/2 + fr.width/2 && 
  mr.y - fr.y <= mr.height/2 + fr.height/2 &&
  fr.y - mr.y <= mr.height/2 + fr.height/2){
  fr.velocityY = fr.velocityY*(-1);
  mr.velocityY = fr.velocityY*(-1);
  fr.velocityX = fr.velocityX*(-1);
  mr.velocityX = fr.velocityX*(-1);
}

  drawSprites();
}