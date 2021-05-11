var ground,engine;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
 paper = new paper(100,300,10);
 dustbin = new dustbin(790,390,100,10);

 ground = Bodies.rectangle(width / 2, 400, width, 10,{ isStatic: true});

 World.add(world, ground);



	
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");


  paper.display();
  dustbin.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW ) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x: 12,y: -13 } )
	}
}

