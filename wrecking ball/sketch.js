const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    
    b1= new BUILding (900,50,50,50)
    b2= new BUILding (900,50,50,50)
    b3= new BUILding (900,50,50,50)
    b4= new BUILding (900,50,50,50)
    b5= new BUILding (900,50,50,50)
    b6= new BUILding (800,50,50,50)
    b7= new BUILding (800,50,50,50)
    b8= new BUILding (800,50,50,50)
    b9= new BUILding (800,50,50,50)
    b10= new BUILding (800,50,50,50)
    b11= new BUILding (800,50,50,50)
ball= new Ball(200,200,80,80);
    
    ground= new Ground (600,380,1200,20)
    rope = new Slingshot(ball.body,{x:500,y:50})
    
}

function draw(){
    background("lightblue");
    Engine.update(engine);

    fill("red")
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    fill("green")
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    ground.display();
    fill("black")
    ball.display();
    rope.display();
    
}
function mouseDragged (){
 Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
