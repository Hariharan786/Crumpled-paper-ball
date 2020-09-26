var paper1;
var dr1,dr2,dr3;
var groundSprite;
var ballBody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	

	paper1 = Bodies.circle(100,650,20, ball_options);
    World.add(World,paper1);
	

	
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	dr1 = createSprite(355,620,20,80);
	dr2 = createSprite(480,620,20,80);
	dr3 = createSprite(418,650,110,20);

	dr1.shapeColor=("red");
	dr2.shapeColor=("red");
	dr3.shapeColor=("red");


	engine = Engine.create();
	World = engine.world;

	ballBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, ballBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	ellipse(CENTER);
  background(0);

  paper1.bounceOff(dr1);
  paper1.bounceOff(dr2);
  paper1.bounceOff(dr3);

	
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    
	paper1.x = 85;
	paper1.y = -85;
  }
}



