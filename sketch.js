var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1, box1B
var box2, box2B


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-30, width,10);
	groundSprite.shapeColor=color(225)
	
    box1 = 	createSprite(width/4, 625,20 , 80)
	box1.shapeColor = color (255,0,0)

	box2 = createSprite(width/1.5, 625,20, 80)
	box2.shapeColor=color(255,0,0)

	box3 = createSprite(365,655,318,20)
	box3.shapeColor=color(255,0,0)


	engine = Engine.create();
	world = engine.world;


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1 = Bodies.rectangle(width/2, 20, width, 6, {isStatic:true});
	box1B = Bodies.rectangle(width/2, 20, width, 6, {isStatic:true});
	World.add(world, ground);

	box2 = Bodies.rectangle(width/2, 20, width, 20, {isStatic:true});
	box2B = Bodies.rectangle(width/2, 20, width, 20, {isStatic:true});
	World.add(world, ground);

    box3 = Bodies.rectangle(width/2, 20, width, 6, {restitution:1,isStatic:true});
	box3B = Bodies.rectangle(width/2, 20, width, 6, {restitution:1,isStatic:true});
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  box1.x = box1B.position.x;
  box1.y = box1B.position.y;
  
  box2.x = box2B.position.x;
  box2.y = box2B.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false)
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y

    
  }
}



