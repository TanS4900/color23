var movingObj, fixedObj



function setup() {
  createCanvas(800,800);
  movingObj = createSprite(400,400,50,50);
  fixedObj = createSprite(300,300,50,50)
  movingObj.shapeColor = "lightblue"
  fixedObj.shapeColor = "lightblue"
}

function draw() {
  background(255,255,255);  
 
  movingObj.x = World.mouseX;
  movingObj.y = World.mouseY;

if(movingObj.x - fixedObj.x < movingObj.width/2 + fixedObj.width/2
  && fixedObj.x - movingObj.x < movingObj.width/2 + fixedObj.width/2
  && movingObj.y - fixedObj.y < movingObj.height/2 + fixedObj.height/2
  && fixedObj.y - movingObj.y < movingObj.height/2 + fixedObj.height/2) {

movingObj.shapeColor = "cyan"
fixedObj.shapeColor = "cyan"



}
else{
  movingObj.shapeColor = "lightblue"
  fixedObj.shapeColor = "lightblue"


}


  drawSprites();

}