
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var chao
var bloco1
var bloco2
var bloco3



function preload()
{
	
}

function setup() {
	createCanvas(600, 700);
 

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui

	var chaooptions={
	isStatic:true	
	}

	//isso faz com que o circulo caia mais lento
	var bloco2options={
	  restitution:0.7,
	  friction: 0.01,
	  frictionAir: 0.1	
	}
	chao=Bodies.rectangle(300,680,600,35,chaooptions);
    bloco1=Bodies.rectangle(300,75,75,75)
	bloco2=Bodies.circle(300,176,76,bloco2options);
	bloco3=Bodies.rectangle(350,400,75,150)

 World.add(world,chao)
 World.add(world,bloco1)
 World.add(world,bloco2)
 World.add(world,bloco3)
}
  

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  Engine.update(engine);

  rect(chao.position.x, chao.position.y,600,35);
  rect(bloco1.position.x,bloco1.position.y,75,75);
  ellipse(bloco2.position.x,bloco2.position.y,76);
  rect(bloco3.position.x,bloco3.position.y,75,150);
}



