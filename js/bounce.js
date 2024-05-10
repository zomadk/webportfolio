var smiley;
var borderCollider;
var paddle;
var purple;
var dynamicW;
var dynamicH;
var terrain;

var terraincount = 0;

var halfH, halfW;

var counter = 0;

function preload(){
    smil = loadImage("smiley.png")
}

function setup() {
    new Canvas(windowWidth, windowHeight);

    dynamicH = windowHeight;
    dynamicW = windowWidth;

    halfH = windowHeight / 2;
    halfW = windowWidth / 2;

    console.log(halfW);

   //purple = new p5.Color('rgba(121, 33, 24, 1)');

    
    borderCollider = new Sprite([[1, 0], [0, dynamicH], [dynamicW, dynamicH], [dynamicW, 0], [0, 0]]);
    borderCollider.collider = 'static';
    borderCollider.color = color(255, 1)
    borderCollider.position = createVector(0, 0)
    //borderCollider.debug = true;

    paddle = new Sprite()
    paddle.height = 150;
    paddle.width = 25;
    paddle.stroke = (255)
    paddle.color = (255);
    paddle.collider = 'static';
    paddle.position = createVector(mouseX, mouseY); 
    paddle.friction = 5;


    


    smiley = new Sprite(10, 0, 150)
    smiley.img = smil;
    smiley.position = createVector(500, 500)
    //smiley.height = 550;
    //smiley.width = 550;
    smiley.vel.x = 5;
    smiley.vel.y = 5;
    smiley.rotationLock = true;
    //smiley.debug = true;

}

function draw(){
    background(121, 33, 241)

    paddle.position = createVector(mouseX, mouseY); 

    smiley.speed = 10;

    halfH = dynamicH / 2;
    halfW = dynamicW / 2;


    if(mouseX < halfW && mouseY > halfH){
       
        paddle.color = 'rgb(121, 33, 241)';
        paddle.stroke = 'rgb(121, 33, 241)';
        console.log("leftside")


    }
else{
        
        paddle.color = (255)
    }

    if(mouseX < (halfW - 50) && mouseY > (halfH + 50)){
        terrain = new Sprite(10, 0, 100);
        terrain.position = createVector(mouseX, mouseY);
        terrain.collider = 'static';
        terrain.color = (255);
        terrain.stroke = (255);
        terrainNumber();
        console.log(terraincount);

    }


    


    
    if (smiley.collided(borderCollider)){
        //counter = counter + 1;
        increment();

        
    }   
    if(counter % 2 == 0){
        smiley.img = 'smiley.png'     

    }
    if (counter % 2 != 0){
        smiley.img = 'frowney.png'     

    }
    //console.log(counter)

    if(smiley.vel.y < 1 && smiley.vel.y > -1){

        smiley.vel.y = smiley.vel.y + random(-5, 5)
    }

    if(smiley.vel.x < 1 && smiley.vel.x > -1){

        smiley.vel.x = smiley.vel.x + random(-5, 5)
    }

}

function windowResized() {
   /* borderCollider.remove();

    for (let i = 0; i < terraincount; i++) {
        terrain.remove();
        
    }*/
    

    dynamicH = windowHeight;
    dynamicW = windowWidth;

    createCanvas(windowWidth, windowHeight);
    


    borderCollider = new Sprite([[1, 0], [0, dynamicH], [dynamicW, dynamicH], [dynamicW, 0], [0, 0]]);
    borderCollider.collider = 'static';
    borderCollider.color = color(255, 1)
    borderCollider.position = createVector(0, 0)
   //borderCollider.debug = true;

  }


  function mouseClicked() {
    console.log(',[' + floor(mouseX) + ', ' + floor(mouseY) + ']')
    
}

function terrainNumber(){
    terraincount++;
}

