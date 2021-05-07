var bg;
var tom;
var tomWalking;
var jerry;
var jerryWalking,jerry2,jerry3,tom3;


function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    tomImage=loadAnimation("images/cat1.png")
    tomWalking=loadAnimation("images/cat2.png","images/cat3.png")
    jerryWalking=loadAnimation("images/mouse1.png")
    jerry2=loadAnimation("images/mouse2.png","images/mouse3.png")
    tom3=loadAnimation("images/cat4.png")
    jerry3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(900,height-150,50,50);
    tom.addAnimation("sleeping",tomImage);
    tom.scale=0.2;
    jerry=createSprite(150,height-150,40,40);
    jerry.addAnimation("walking",jerryWalking);
    jerry.scale=0.1;
    
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    tom.x=mouseX;
    if(tom.x=jerry.x>(tom.width+jerry.width)/2){
        tom.addAnimation("tom3",tom3)
        tom.changeAnimation("tom3");
        jerry.addAnimation("jerry3",jerry3);
        //tom.x=300;
        tom.velocityX=0;
        jerry.changeAnimation("jerry3");
        
      


    }
    drawSprites();
}


//function keyPressed(){
  // if(keyCode===LEFT_ARROW){
//    tom.velocityX=-2;
//    tom.addAnimation("tomWalking",tomWalking)
//    tom.changeAnimation("tomWalking");
//    jerry.addAnimation("jerry2",jerry2)
//    jerry.changeAnimation("jerry2");
//    jerry.frameDelay=25;
   
//    }
//   //For moving and changing animation write code here


// }
