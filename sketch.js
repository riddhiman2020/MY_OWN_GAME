const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var gameMode=0;
var car1;

function preload(){
    //C1=loadImage("car1.png")
    C2=loadImage("car2.png")
    C3=loadImage("car3.png")
    C4=loadImage("car4.png")
    C5=loadImage("car5.png")
    obstacle=loadImage("barrier.png")
}

function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;


    car1 = new Car(100,100,70,100);
    
    //barrier = createSprite(850,300,100,100)
    //this.barrier=Bodies.rectangle(x,)
    //barrier.addImage("barrier1",obstacle)
    //barrier.scale=0.4
   // car4 = createSprite(100,200,20,20);
   //car4.addImage("car4",C4);
   // car5 = createSprite(100,200,20,20);
   // car5.addImage("car5",C5);
   track1=new Track(displayWidth/2,-2350,900,6000)
}

function draw(){
    background(255)
    
    Engine.update(engine);
    
    if(keyDown('up_arrow')){
        car1.y=car1.y-25
    }
    if(keyDown('down_arrow')){
        car1.y=car1.y+25
    }
    if(keyDown('left_arrow')){      
        car1.x=car1.x-10
    }
    if(keyDown('right_arrow')){
        car1.x=car1.x+10
    }

    camera.position.x = displayWidth/2;
    camera.position.y = car1.y-120;


    track1.display();
    car1.display(); 
    moveCar();
    spawnCars();
    drawSprites();
}


function keyPressed(){
   if(keyCode===37){
    //car1.isStatic=false;
    car1.x=car1.x-10
   }
   if(keyCode===38){
    car1.y=car1.y-10
   }
   if(keyCode===39){
    car1.x=car1.x+10
   }
   if(keyCode===40){
    car1.y=car1.y-10
   }
}


function spawnCars(){
     if(frameCount%50===0){
        car2 = createSprite(540,400,20,20);
        car2.y=Math.round(random(1000,-1500));
        car2.addImage("car2",C2);
        car2.scale=0.2;
        car3 = createSprite(540,300,20,20);
        car3.y=Math.round(random(600,-1200));
        car3.addImage("car3",C3);
        car3.scale=0.2;
     }
}







