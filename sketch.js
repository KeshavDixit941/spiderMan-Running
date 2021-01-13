var spiderMan, road, road2, supperMan, antMan, ironMan;

var bullet, web, gameOver;

var standingSpiderManImg, attackingSpiderManImg, backgroundImg, duplicatebackgoundImg, gameOverImg, pointImg, webImg, superManImg, ironManImg, bulletImg, antManImg;
    
function preload(){
  standingSpiderManImg = loadImage("download.png");
  attackingSpiderManImg = loadImage("images.jpg");
  backgroundImg = loadImage("highway-clipart-straight-road-1.jpg");
  duplicatebackgoundImg = loadImage("highway-clipart-straight-road-1.jpg");
  gameOverImg = loadImage("GameOver.png");
  pointImg = loadImage("pngtree-classic-yellow-stars-clipart-png-image_2395190.jpg");
  webImg = loadImage("images.png");
  superManImg = loadImage("images (1).jpg")
  ironManImg = loadImage("169-1695678_iron-man-fly-photo-iron-man-mk-50.png");
  bulletImg = loadImage("bullet.png");
  antManImg = loadImage("download.jpg")
}

function setup() {
    createCanvas(600,600);
 
  road2 = createSprite(300,100,10,10);
  road2.addImage(duplicatebackgoundImg);
  
  road = createSprite(300,300,10,10);
  road.addImage(backgroundImg);
  
  
  
 webG = new Group()
 supperManG = new Group();
 ironManG  = new Group();
 antManG = new Group();
 spiderManG = new Group();
  
  spiderMan = createSprite(300,520,10,10);
  spiderMan.addImage(standingSpiderManImg);
  spiderMan.scale = 0.5;
  spiderManG.add(spiderMan);
  
}

function draw() {
  background("white")
  
  if(keyDown("right")){
    spiderMan.x = spiderMan.x+5;
  }
  if(keyDown("left")){
    spiderMan.x = spiderMan.x-5;
  }
  if(keyWentDown("space")){
    spiderMan.addImage(attackingSpiderManImg);
  }
  if(keyWentUp("space")){
    spiderMan.addImage(standingSpiderManImg);
    spawnWeb()
    
  }
  
  spawnSupperMan();
  spawnAntMan();
  spawnIronMan();

 if(webG.isTouching(supperManG)){
   supperManG.destroyEach();
   webG.destroyEach();
 }  
  if(webG.isTouching(ironManG)){
   ironManG.destroyEach();
   webG.destroyEach();
 }  
  if(webG.isTouching(antManG)){
   antManG.destroyEach();
   webG.destroyEach();
 }  
  if(supperManG.isTouching(spiderManG)||ironManG.isTouching(spiderManG)||antManG.isTouching(spiderManG)){
    gameOver = createSprite(300,300,10,10); 
    gameOver.addImage(gameOverImg);
    ironMan.velocityY = 0;
    antManG.velocityY = 0;
    supperMan.velocityY = 0;
    road.velocityY = 0;
    webG.velocityY = 0;
  }
  
 //moving background
  road.velocityY = 8;
  if(road.y>400){
    road.y = 300;
  } 
  drawSprites();
}

function spawnSupperMan(){
  if(frameCount % 240 === 0){
     supperMan = createSprite(random(100,400),10,10,10);
     supperMan.addImage(superManImg);
     supperMan.scale = 0.5;
     supperMan.velocityY = 4;
     supperMan.lifetime = 600;
     supperManG.add(supperMan)
  }
}

function spawnAntMan(){
  if(frameCount % 400 === 0){
    antMan = createSprite(random(100,500),10,10,10);
    antMan.addImage(antManImg);
    antMan.velocityY = 5;
    antMan.lifetime = 600;
    antMan.scale = 0.5;
    antManG.add(antMan);
  }
}
function spawnIronMan(){
  if(frameCount % 300 === 0){
    ironMan = createSprite(random(100,500),10,10,10)
    ironMan.addImage(ironManImg);
    ironMan.velocityY = 3;
    ironMan.lifetime = 600;
    ironMan.scale = 0.1;
    ironManG.add(ironMan);
  }  
}

function spawnWeb(){
  web = createSprite (100,100,10,10);
  web.addImage(webImg);
  web.velocityY = -7;
  web.y = spiderMan.y + 10;
  web.x = spiderMan.x;
  web.lifetime = 600;
  web.scale = 0.1;
  webG.add(web);
}

