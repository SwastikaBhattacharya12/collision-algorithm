var fR, mR;

function setup() {
  createCanvas(1200,800);
  fR = createSprite(200, 200, 50, 80);
  fR.shapeColor = "pink";
  fR.debug = true;
  mR = createSprite(400, 200, 70, 50);
  mR.shapeColor = "pink";
  mR.debug = true;
}

function draw() {
  background(0);  
  mR.x = World.mouseX;
  mR.y = World.mouseY;

  console.log(mR.x - fR.x);

  if ((mR.x - fR.x < mR.width/2 + fR.width/2)
    && (fR.x - mR.x < fR.width/2 + mR.width/2)
    && (mR.y - fR.y < mR.height/2 + fR.height/2)
    && (fR.y - mR.y < fR.height/2 + mR.height/2)){
     fR.shapeColor = "purple";
     mR.shapeColor = "purple";
  } else {
    fR.shapeColor = "pink";
    mR.shapeColor = "pink";
  } 


  drawSprites();
}