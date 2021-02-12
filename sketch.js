var mr
var fr
function setup() {

  createCanvas(800,400);
  fr =createSprite(400, 200, 100, 20);
  fr.shapeColor="green"
  mr =createSprite(400, 200, 100, 20);
  mr.shapeColor="green"
}

function draw() {
  
  background("black");  
  mr.x = World.mouseX
  mr.y = World.mouseY

  if(mr.x-fr.x+(fr.width/2+mr.width/2)&&fr.x-mr.x+1<mr.width/2&&mr.y-fr.y<fr.height/2+mr.height/2&&fr.y-mr.y<fr.height/2+mr.height/2){
    mr.shapeColor = "red"
    fr.shapeColor = "red"
  }else{
    mr.shapeColor = "green"
    fr.shapeColor = "green" 
  }
  drawSprites();
}