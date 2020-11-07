const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var umbrella;
var drops = [];
var t1 ,t2 ,t3 ,t4;
var maxDrops = 180;

function preload(){
  t1 = loadImage("1.png");
  t2 = loadImage("2.png");
  t3 = loadImage("3.png");
  t4 = loadImage("4.png");

}

function setup(){
   createCanvas(500,700);
   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(240,550,350);

   thunderGroup = new Group();

   for(var i=0; i<maxDrops; i++){
       drops.push(new Drops(random(0,500), random(0,500)));
   }
   
}

function draw(){
    background(0)
    umbrella.display();

    Engine.update(engine);

    for (var i = 0; i < drops.length; i++) {
  
      drops[i].display();
      
    drops[i].rain();  
    }
    spawnThunder();
    drawSprites();
}

function spawnThunder() {
    if(frameCount % 60  === 0) {
      var thunder = createSprite(random(50,450),100,40,50);
    //  obstacle.velocityX = -5;
      
      //generate random obstacles
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: thunder.addImage(t1);
                break;
        case 2: thunder.addImage(t2);
                break;
        case 3: thunder.addImage(t3);
                break;
        case 4: thunder.addImage(t4);
                break;
        default: break;
      }
      
      //assign scale and lifetime to the obstacle           
      thunder.scale = 0.3;
      thunder.lifetime = 10;
      //add each obstacle to the group
      thunderGroup.add(thunder);
    }
  }
  

