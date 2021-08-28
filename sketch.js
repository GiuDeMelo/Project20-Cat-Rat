///////////////////////////////// VARIABLES /////////////////////////////////
 var cat;
 var catImg1,catImg2;

 var rat;
 var ratImg1,ratImg2;

 var garden;
 var gardenImg;
/////////////////////////////////////////////////////////////////////////////

////////////////////////////// FUNCTION PRELOAD //////////////////////////////
 function preload() {

  //cat loadImages
   catImg1 = loadImage("cat1.png");
   catImg2 = loadImage("cat2.png","cat3.png");
   catImg3 = loadImage("cat4.png");

  //rat loadImages
   ratImg1 = loadImage("mouse1.png");
   ratImg2 = loadImage("mouse2.png","mouse3.png");
   ratImg3 = loadImage("mouse4.png");

  //garden loadImage
   gardenImg = loadImage("garden.png");
 }
//////////////////////////////////////////////////////////////////////////////

////////////////////////////// FUNCTION SETUP //////////////////////////////
 function setup(){
  createCanvas(1000,800);

  //cat createSprite
   cat = createSprite(870,600);
   cat.addAnimation("sittedcat",catImg1);
   cat.scale = 0.2;

  //rat createSprite
   rat = createSprite(840,600);
   rat.addImage("stillrat",ratImg1)
   rat.scale = 0.2;
    
 }
////////////////////////////////////////////////////////////////////////////

////////////////////////////// FUNCTION DRAW //////////////////////////////
 function draw() {
  background(255);

  //collide cat&rat
   if(cat.x-rat.x < (cat.width-rat.width)/2){
    cat.velocity = 0;
    cat.addAnimation("finalcat",catImg3);
    cat.changeAnimation("finalcat");
    cat.x = 300;
    cat.scale = 0.2;
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
    cat.velocity = -5;
    cat.addAnimation("walkingcat",catImg2);
    cat.changeAnimation("walkingcat");
    //cat.frameDelay = 25; ???
  }

 }
