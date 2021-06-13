
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImg;
var player,plrImg;
var obsImg;
var obs,bg

function preload(){
	bgImg=loadImage("Background.png")
	plrImg=loadImage("Player.png")
	obsImg=loadImage("Obstacle.png")
}

function setup() {
	createCanvas(1500, 800);

	engine = Engine.create();
	world = engine.world;

	bg=createSprite(1400,400,20,20)
	bg.addImage("bg",bgImg)
	bg.width=4000;
    console.log(bg.width)
	
	player=createSprite(400,400,20,20)
	player.addImage("plr",plrImg)
	player.scale=0.5
	player.velocityX=25;

	obsGroup=new Group();

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);

  background(bgImg)

  player.y=mouseY;
 
  drawSprites();


  if (player.isTouching(obsGroup)){
	  player.setVelocity(0);
  }
 

 camera.position.x=player.x+210
 camera.position.y=player.y

 spawnBg()
 spawnObstacles();    


}

function spawnObstacles(){
  
		if(frameCount % 30===0){

	    obs=createSprite(player.x+900,200)
		obs.y = Math.round(random(10,790));
	    obs.addImage("owl",obsImg);
		obs.scale=0.3;
		obs.lifetime=1000;
		obsGroup.add(obs);
	}   
	
}

function spawnBg() {

	if(frameCount %75===0){
		bg= createSprite(player.x+1400,400)
		bg.addImage("bg",bgImg)
		bg.lifetime=1200;
		obs.depth=bg.depth+1;
		player.depth=bg.depth+1;	
	}	
}












