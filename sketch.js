const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, cannon;

function setup() {
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200, height, 400, 20);
    cannon = new Cannon(200, 200, 50, 50);
}

function draw() {
    background(0);
    Engine.update(engine);
    console.log(cannon.body.position.x);
    console.log(cannon.body.position.y);
    console.log(cannon.body.angle);
    ground.display();
    cannon.display();
}
