var smiley;
var borderCollider;

var dynamicW;
var dynamicH;

var counter = 0;

function preload(){
    smil = loadImage("../images/smile.png")
}

function setup() {
    new Canvas(windowWidth, windowHeight);

    dynamicH = windowHeight;
    dynamicW = windowWidth;

    
    borderCollider = new Sprite([[1, 0], [0, dynamicH], [dynamicW, dynamicH], [dynamicW, 0], [0, 0]]);
    borderCollider.collider = 'static';
    borderCollider.color = color(255, 1)
    borderCollider.position = createVector(0, 0)
    //borderCollider.debug = true;
 

    


    smiley = new Sprite(30, 0, 550)
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


    smiley.speed = 10;




    if (smiley.collided(borderCollider)){
        //counter = counter + 1;
        increment();

        
    }   
    if(counter % 2 == 0){
        smiley.img = '../images/smile.png'     

    }
    if (counter % 2 != 0){
        smiley.img = '../images/frown.png'     

    }
    //console.log(counter)

    if(smiley.vel.y < 1 && smiley.vel.y > -1){

        smiley.vel.y = smiley.vel.y + random(-5, 5)
    }

}

function windowResized() {
    //borderCollider.remove();
    resizeCanvas(windowWidth, windowHeight);
    
    dynamicH = windowHeight;
    dynamicW = windowWidth;

    borderCollider = new Sprite([[1, 0], [0, dynamicH], [dynamicW, dynamicH], [dynamicW, 0], [0, 0]]);
    borderCollider.collider = 'static';
    borderCollider.color = color(255, 1)
    borderCollider.position = createVector(0, 0)
   //borderCollider.debug = true;

  }


  function mouseClicked() {
    console.log(',[' + floor(mouseX) + ', ' + floor(mouseY) + ']')
    
}

function increment() {
    counter++;
}
