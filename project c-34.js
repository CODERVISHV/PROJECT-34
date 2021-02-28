//Create variables here
var dog,happydog,food,database,dog2,foodstoke

function preload()
{
  happydog=loadImage("dogImg1.png")
  foodplat=createSprite("240,250")
  foodbowl=loadImage("foodbowl.png")
	//load images here
}

function setup() {
	createCanvas(500,500);
  database=firebase.database();

  dog=createSprite(250,250)
  foodbowl.x=mouse.x
  foodbowl.y=mouse.y

  
}


function draw() {  
  
  drawSprites();
  happydog.display=false
  //foodbowl.display=false

  if(foodbowl.isTouching(dog)){
    dog=setAnimation("dogImg1")
  }
  //add styles here

}



