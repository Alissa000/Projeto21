
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var botão1;
var botão2;
var ground1;
var ground2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700); 


	engine = Engine.create();
	world = engine.world;

	botão1 = createImg("seta01.png");
	botão1.position(220,30);
	botão1.size(50,50);
	botão1.mouseClicked(hForce);

	botão2 = createImg("seta02.png");
	botão2.position(20,30);
	botão2.size(50,50);
	botão2.mouseClicked(vForce);


	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0,  //0.3 //0 //1.2
		friction:0,
		destisy:0
	}

	ball = Bodies.circle(220,10,10,ball_options); 
	World.add(world,ball);
	fill("blue");
	   
	var ground_options ={
		isStatic: true
	  };

	  var ground1_options ={
		isStatic: true
	  };

	  var ground2_options ={
		isStatic: true
	  };

	 
	  ground = Bodies.rectangle(400,680,400,20,ground_options); 
     World.add(world,ground);

	 ground1 = Bodies.rectangle(700,1340,400,20,ground1_options); 
     World.add(world,ground1);

	 ground2 = Bodies.rectangle(500,1340,400,20,ground2_options); 
     World.add(world,ground2);


	 function hForce()
	 {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.002,y:0});  //x:0.05,y:0
	 }

	 function vForce()
	 {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.01}); ///x:0,y:-0.05
	 }


	 rectMode(CENTER);
	 ellipseMode(RADIUS);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  background("white");

  drawSprites();
  ellipse(ball.position.x,ball.position.y,10);
  rect(ground.position.x,ground.position.y,1000,10);
  rect(ground1.position.x,1270,10,ground1.position.y,10);
  rect(ground2.position.x,1270,10,ground2.position.y,10);

 
}

