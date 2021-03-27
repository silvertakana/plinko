const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0,droptime = 0,divPoint = [5,5,5,4,3,3,4,5,5,5];
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%10===0&&score <5){
     particles.push(new Particle((mouseX), 10,10));
     droptime++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
   for (let index = 0; index < divPoint.length; index++) {
    text(divPoint[index],index*width/10+30,height-50)
   }
   score = 0
   
   for (var index = 0; index < particles.length; index++) {
    var pos = particles[index].body.position
     if(pos.y>height-divisionHeight&&pos.y<height){
      score += divPoint[round(pos.x/(width/10))]
     }
   }
   console.log(round(mouseX/width/10))
   text(score, mouseX, mouseY-50)
}