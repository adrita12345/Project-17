
var knife, knifeAnimation;
var fruit, f1Image, f2Image, f3Image, f4Image, bomb, bombAnimation, knifeSound, gameoverImage, gameoverSound;

var PLAY = 1;
var END = 0;
var gamestate = 1;

var score;



function preload(){
  
knifeAnimation = loadImage("sword.png");
  f1Image = loadImage("fruit1.png");  
  f2Image = loadImage("fruit2.png");
  f3Image = loadImage("fruit3.png"); 
  f4Image = loadImage("fruit4.png"); 
bombAnimation = loadImage("alien1.png", "alien2.png");
  gameoverImage = loadImage("gameover.png");
 
  knifeSound = loadSound("knifeSwooshSound.mp3");
    gameoverSound = loadSound("gameover.mp3");
}

function setup(){
    
  createCanvas(500, 500);
  score = 0;
  
  fruitGroup = new Group();
  enemyGroup = new Group();
  
  knife = createSprite (100, 100, 10, 10);
  knife.addAnimation ("sword", knifeAnimation);
  knife.scale = 0.7;
 
}

function draw(){
  
  background("lightgreen");
  
  if(gamestate===PLAY){
   knife.y = World.mouseY;
  knife.x = World.mouseX;
  fruits();
  enemy();
    if(fruitGroup.isTouching(knife)) {
      fruitGroup.destroyEach();
      knifeSound.play();
      score = score +2;
    }

    
    if(enemyGroup.isTouching(knife)){
      gamestate = END;
      gameoverSound.play();
    }
  }
  
  if(gamestate===END){
    knife.visible = false;
    var gameover = createSprite(250, 250, 40, 40);
    gameover.addImage("end",gameoverImage);
    gameover.scale = 2;
    enemyGroup.destroyEach();
    fruitGroup.destroyEach();
  }

  
  drawSprites();
  
  text("Score: "+score, 370, 30);
  score = score ; 
}

function fruits(){
  
  if(World.frameCount%50 === 0){
    fruit = createSprite(450, 200, 20, 20);
    fruit.scale = 0.2;
    
    r= Math.round(random(1,4));
    if(r===1){
      fruit.addImage(f1Image);
    } else if(r===2){
      fruit.addImage(f2Image);
    } else if(r===3){
      fruit.addImage(f3Image);
    } else if(r===4){
      fruit.addImage(f4Image);
    } 
     fruit.y = Math.round(random(40, 450));
     
    fruit.velocityX = -8;
    fruit.setLifetime = 120;
    
    fruitGroup.add(fruit);
  
}
  
}

function enemy(){
  if(World.frameCount%180===0){
    bomb = createSprite(400, 200, 20, 20);
    bomb.addAnimation("moving", bombAnimation);
    bomb.y=Math.round(random(100,400));
    bomb.velocityX = -7;
    bomb.setLifetime = 100;
    
    enemyGroup.add(bomb);
    
  }
  
  
}


  if (arrowGroup.isTouching(b1Group)){
    b1Group.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
       }      
  
   if (arrowGroup.isTouching(b2Group)){
    b2Group.destroyEach();
    arrowGroup.destroyEach();
    score = score+2;
       }      
  
   if (arrowGroup.isTouching(b3Group)){
    b3Group.destroyEach();
    arrowGroup.destroyEach();
    score = score+3;
       }      
  
   if (arrowGroup.isTouching(b4Group)){
    b4Group.destroyEach();
    arrowGroup.destroyEach();
    score = score+4;
       } 


       for (var i = 0; i < 8; i++ ) {
            b1 = createSprite(-20, 55+(60*i), 30, 20);
            b1.addAnimation("balloon", b1Image);
            b1.scale = 1.3;    
          b1Group.add(b1);
        }

        for (var i = 0; i < 8; i++ ) {
            b2 = createSprite(-20, 55+(60*i), 30, 20);
            b2.addAnimation("balloon1", b2Image);
            b2.scale = 0.11;    
  b2Group.add(b2);
        }

        for (var i = 0; i < 8; i++ ) {
            b3 = createSprite(-20, 55+(60*i), 30, 20);
            b3.addAnimation("balloon2", b3Image);
            b3.scale = 0.1;    
  b3Group.add(b3);
        }

        for (var i = 0; i < 8; i++ ) {
            b4 = createSprite(-20, 55+(60*i), 50, 30);
            b4.addAnimation("balloon3", b4Image);
            b4.scale = 0.03;    
  b4Group.add(b4);
        }

        for (var i = 0; i < 8; i++ ) {
            b5 = createSprite(-20, 55+(50*i), 50, 30);
            b5.addAnimation("balloon4", b5Image);
            b5.scale = 0.08; 
            b5Group.add(b5);
        }
  
        for (var i = 0; i < 8; i++ ) {
            b6 = createSprite(-20, 55+(50*i), 50, 30);
            b6.addAnimation("balloon4", b5Image);
            b6.scale = 0.08;   
            b5Group.add(b6);
        }
  
         for (var i = 0; i < 6; i++ ) {
            b7 = createSprite(-20, 55+(60*i), 50, 30);
            b7.addAnimation("balloon3", b4Image);
            b7.scale = 0.03;    
  b4Group.add(b7);
        }
  
         for (var i = 0; i < 4; i++ ) {
            b8 = createSprite(-20, 55+(60*i), 30, 20);
            b8.addAnimation("balloon2", b3Image);
            b8.scale = 0.1;    
  b3Group.add(b8);
        }
   
         for (var i = 0; i < 6; i++ ) {
            b9 = createSprite(-20, 55+(60*i), 30, 20);
            b9.addAnimation("balloon1", b2Image);
            b9.scale = 0.11;    
  b2Group.add(b9);
        }
  
        for (var i = 0; i < 6; i++ ) {
            b10 = createSprite(-20, 55+(60*i), 30, 20);
            b10.addAnimation("balloon", b1Image);
            b10.scale = 1.3;    
  b1Group.add(b10);
        }































 





