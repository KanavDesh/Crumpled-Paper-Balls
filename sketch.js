var ball, groundObj, leftSide, rightSide;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		denstiy: 1.2
	}

	
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ball = Matter.Bodies.circle(100, 50, 10, ball_options)
	World.add(world, ball)
	
	groundObj = new Ground(400, 660, width, 20);
	leftSide = new Ground(550, 600, 20, 120)
	rightSide = new Ground(700, 600, 20, 120)
	
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	groundObj.display();
	leftSide.display();
	rightSide.display();
	ellipse(ball.position.x, ball.position.y, 40, 40)
	
	drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0.003, y: 0.001})
	}
}