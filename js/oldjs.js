var win = $(window);
var rotationAmt = 0.01;
var over = false;
var hovering = false; 
var i = 0;
var r = 255;
var g = 255;
var b = 0;
var strokeW = 1;;



$(document).ready(function(){


    $(".dropdown-list").hide();

    $(".nav-elem1").hover(function() {
        $(".circle1").toggleClass("cir")
        $(".dropdown-list").show();
        

        if ($(".nav-elem1:hover").length != 0){
            hovering = true;
            r = 127;
            g = 255; 
            b = 212;
            strokeW = 3;

        }
        else{
            hovering = false;
            $(".dropdown-list").hide();

        }

    });

    $(".work-li1").hover(function() {
        $(".circle4").toggleClass("cir2")

    });

    $(".work-li2").hover(function() {
        $(".circle5").toggleClass("cir2")

    });

    $(".work-li3").hover(function() {
        $(".circle6").toggleClass("cir2")

    });



  
    $(".nav-elem2").hover(function() {

        var pos = $(".nav-elem2").position();
        var pos2 = $(".circle2").position();

        $("cir").css("top", "500px")
        $(".circle2").toggleClass("cir")

        if ($(".nav-elem2:hover").length != 0){
            hovering = true;
        }
        else{
            hovering = false;
        }
    });

    $(".nav-elem3").hover(function() {

        
        $(".circle3").toggleClass("cir")
        if ($(".nav-elem3:hover").length != 0){
            hovering = true;
        }
        else{
            hovering = false;
        }
    });


    

});


if (hovering == true){
    r = 127;
    g = 255; 
    b = 212;
    strokeW = 3;
}

if (hovering == false){
    r = 0;
    g = 0; 
    b = 0;
    strokeW = 1;
}


$(window).on('resize', function() {
    var windowwide = $( window ).width();
    var scaleTextRate = windowwide / 20.5
    var scaleLineRate = windowwide / 26.2


    $("#about-div").css("font-size", scaleTextRate)
    

})

// P5 SKETCH
var s = function (p){

    var k = 0;
    var b = 0;
    var c = 0;
    var rotater = 0;
    var w, h, d, time;
    isRotating = false;
    let l;


    p.setup = function(){
        
        p. createCanvas(1000, 1000, p.WEBGL);
        p.stroke(r, g, b)
        p.strokeWeight(1)

        w = 0;
        h = 1;
        d = 350;
    };

    p.draw = function(){
        p.background(200, 0)
        time = p.millis();

        p.fill(0, 0)
        p.stroke(r, g, b)
        p.strokeWeight(strokeW)

        //change color on hover
        if(time > 2000){
            if (p.mouseX > 320 && p.mouseX < 682 && p.mouseY > 326 && p.mouseY < 663){
                over = true;
                p.stroke(127, 255, 212)
                p.strokeWeight(3)
    
            }
            else if (hovering != true){
                over = false;
                p.stroke(0)
                p.strokeWeight(1)
            }
            if (over == false){
                i++;
            }
        }


        //box animation
        if (time > 1000){

            if (k < 25){
                w = w + 10;
                k = k + 0.5
        
            }  
            if (time > 2000 && k == 25 && b < 40){
                h = h + 10;
                b++;
            }
        
            if (b == 40){
                if(time > 3500){
                    isRotating = true;
                    if(isRotating == true){
                        rotater++;
                        p.rotateX(-0.005 * rotater);
                        p.rotateY(-0.005 * rotater);
                    
                    }
                }
            }
    
            if (time > 5500 && h >= 200){
                w = w - 3;
                h = h - 3;
                d = d - 3;
                }
        
        }

        //translate(-10, 0, 0)
        p.box(w, h, d)



    };

    
};
var myp5 = new p5(s, 'c1')

