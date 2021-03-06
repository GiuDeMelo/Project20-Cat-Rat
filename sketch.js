///////////////////////////////// VARIABLES /////////////////////////////////
 var cat;
 var catImg1,catImg2,catImg3;

 var rat;
 var ratImg1,ratImg2,ratImg3;

 var garden;
 var gardenImg;
/////////////////////////////////////////////////////////////////////////////

////////////////////////////// FUNCTION PRELOAD //////////////////////////////
 function preload() {

  //cat loadImages
   catImg1 = loadImage("images/cat1.png");
   catImg2 = loadImage("images/cat2.png","images/cat3.png");
   catImg3 = loadImage("images/cat4.png");

  //rat loadImages
   ratImg1 = loadImage("images/mouse1.png");
   ratImg2 = loadImage("images/mouse2.png","images/mouse3.png");
   ratImg3 = loadImage("images/mouse4.png");

  //garden loadImage
   gardenImg = loadImage("images/garden.png");
 }
//////////////////////////////////////////////////////////////////////////////

////////////////////////////// FUNCTION SETUP //////////////////////////////
 function setup(){
  createCanvas(1000,800);

  //cat createSprite
   cat = createSprite(870,600);
   cat.addAnimation("sittedcat",catImg1);
   cat.scale = 0.2;
   cat.velocityX = 0;

  //rat createSprite
   rat = createSprite(200,600);
   rat.addImage("stillrat",ratImg1)
   rat.scale = 0.2;
    
 }
////////////////////////////////////////////////////////////////////////////

////////////////////////////// FUNCTION DRAW //////////////////////////////
 function draw() {
  background(gardenImg);

  //collide cat&rat
   if(cat.x-rat.x < (cat.width-rat.width)/2){
    //cat
     cat.velocityX = 0;
     cat.addAnimation("finalcat",catImg3);
     cat.changeAnimation("finalcat");
     cat.x = 300;
     cat.scale = 0.2;

    //rat
     rat.addAnimation("finalrat",ratImg3);
     rat.changeImage("finalrat");
   }

  drawSprites();
 }
///////////////////////////////////////////////////////////////////////////

////////////////// function keyPressed //////////////////
 function keyPressed(){

  if(keyCode === LEFT_ARROW){
   //rat
    rat.addAnimation("annoyingrat",ratImg2);
    rat.changeAnimation("annoyingrat");
    rat.frameDelay = 25;

   //cat
    cat.velocityX = -5;
    cat.addAnimation("walkingcat",catImg2);
    cat.changeAnimation("walkingcat");
    cat.frameDelay = 25;
  }

 }
