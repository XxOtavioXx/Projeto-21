const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var ball

function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  var ball_options={
    isStatic:false,
    restitution: 0.30,
    friction: 0,
    density:1.2
  }
  ball = Bodies.circle(200,200,10,ball_options)
  World.add(world,ball)
  ground =new Ground(500,395,1000,6);
  left = new Ground(600,370,10,110)
  right = new Ground(750,370,10,110)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  left.show();
  right.show();
  ellipse(ball.position.x, ball.position.y, 10)
  Engine.update(engine);
} 

function keyPressed(){
  if(keyCode==UP_ARROW){
    Matter.Body.applyForce(ball, ball.position, {x:20,y:-10})
  }
 }

