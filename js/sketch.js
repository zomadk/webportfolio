var i = 0;
var b = 0;
var c = 0;
var rotater = 0;
var w, h, d, time;
isRotating = false;
let l;

function setup(){

    createCanvas(1000, 1000, WEBGL)
    //background(0)
    frameRate(30)

    w = 100;
    h = 1;
    d = 400;
}

function draw(){

    background(200)
    fill(0, 0)
    time = millis();

    if (time > 1000){

        if (i < 20){
            w = w + i;
            i = i + 0.5
    
        }  
        if (i == 20 && b < 30){
            h = h + b;
            b++;
        }
    
        if (b == 30){
            if(time > 4000){
                isRotating = true;
                if(isRotating == true){
                    rotater++;
                    rotateX(-0.01 * rotater);
                    rotateY(-0.01 * rotater);
                
                }
            }
        }

        if (time > 6000 && h >= 100){
            w = w - 5;
            h = h - 5;
            d = d - 5;

            console.log(h)
        }
    
    }
    translate(-100, 0, 0)
    box(w, h, d);




}

