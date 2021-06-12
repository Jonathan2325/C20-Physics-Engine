
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle=20;
var poly;
var wall;
var wedge;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   var wedge_options={
     isStatic: true
   };
  wedge = Bodies.rectangle(100,100,90,10,wedge_options)

  wall = Bodies.rectangle(390,250,20,200,wedge_options)
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  World.add(world,wedge);
  World.add(world,wall);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  Body.rotate(wedge,angle);
  push();
  translate(wedge.position.x,wedge.position.y);
  rotate(angle);
  rect(0,0,90,10);
 pop();
 angle+=0.2;
 
rect(wall.position.x,wall.position.y,20,200);
  
  
}

