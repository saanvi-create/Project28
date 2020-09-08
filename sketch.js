//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var dustbinimage


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world
	
	box1=new Boxes(600,680,200,20);
	box2=new Boxes(500,640,20,100);
	box3=new Boxes(720,640,20,100);
	ground=new Ground(400,height,800,20)
	paper=new Paperclass(150,450)
	paperlauncher = new launcher(paper.body,{x:200, y:100});
}


function draw() {
	Engine.update(engine)
  background("yellow");
  box1.display();
  box2.display();
  box3.display();
ground.display();
 paper.display();
 paperlauncher.display();

}



function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   paperlauncher.fly()
}
  