//mecanica fisica
const Engine = Matter.Engine;
//mundo fisico
const World = Matter.World;
//corpo fisico
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bola;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  //configurações da boa
  var bola_options = {
    frictionAir: 0.05,
    restitution: 1
  }

  //criando a bola
  bola = Bodies.circle(200,200,50,bola_options);
  //adicionando a bola ao mundo
  World.add(world,bola);

}

function draw() {
  background("black");

  //atualizando a fisica para a fisica funcionar
  Engine.update(engine);

  //mostrando a bola na tela
  ellipse(bola.position.x,bola.position.y,50);

}

