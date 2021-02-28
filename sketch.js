var dog,dogimg,dogimg2
var database
var food,foodstock

function preload(){
  dogimg=loadImage("dogImg.png")
  dogimg2=loadImage("dogImg1.png")
}

function setup(){
  database=firebase.database()
  createCanvas(500,500)
  dog=createSprite(250,250,100,100)
  dog.addImage(dogimg)
  dog.scale=0.2
  foodstock= database.ref("food")
  foodstock.on("value",(i)=>{
    food=i.val()
  })
}

function draw(){
  background(45,140,85)
  drawSprites()
  if(keyDown("up")){
    writeStock(food)
    dog.addImage(dogimg2)
  }
  textSize(18)
fill(255)
text("food remaining:"+food,180,50)

}

function writeStock(x){
  if(x<=0){
    x=0
  }
  else{x=x-1}
  database.ref("/").update({food:x})
}
