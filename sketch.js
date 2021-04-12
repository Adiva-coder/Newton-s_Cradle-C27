
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	/*var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 600,
            showVelocity: true
        }
    });*/

	bob1 = new Bob(320, 450);
	bob2 = new Bob(440, 450);
	bob3 = new Bob(500, 450);
	bob4 = new Bob(380, 450);
	bob5 = new Bob(260, 450);

	roof = new Roof(380, 260, 300, 23);

	rope1 = new Rope(bob1.body, roof.body, -60, 0);
	World.add(world, rope1);
	rope2 = new Rope(bob2.body, roof.body, +60, 0);
	World.add(world, rope2);
	rope3 = new Rope(bob3.body, roof.body, +120, 0);
	World.add(world, rope3);
	rope4 = new Rope(bob4.body, roof.body, 0, 0);
	World.add(world, rope4);
	rope5 = new Rope(bob5.body, roof.body, -120, 0);
	World.add(world, rope5);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("#E6E6E6");
  
	Engine.update(engine);

  roof.display();


	rope1.display();
	rope2.display(); 
	rope3.display(); 
	rope4.display(); 
	rope5.display(); 

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	//keyPressed();

  drawSprites();
 
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce( bob5.body, bob5.body.position, {x: -1000, y: 0});
	
	}
}
