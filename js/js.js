var windowwide;
var windowhigh;
var divWidth;
var divHeight;
var divWPadding;
var divHPadding

$(document).ready(function(){
    windowwide = $( window ).width();
    windowhigh = $( window ).height();
    divWidth = $("#bottom-left").width();
    divHeight = $("#bottom-left").height();






    
    if(windowwide > 1290){
        $("#zoma").html("ZOMA")
        $("#zoma").removeClass("midsize")
        $("#zoma").removeClass("smallsize")
        $("#zoma").addClass("fullsize")

        $("#madu").removeClass("madu-mid")
        $("#madu").removeClass("madu-small")
        $("#madu").addClass("madu-full")
    }

    if(windowwide < 1290 && windowwide > 960){
        $("#zoma").html("ZOMA")
        $("#zoma").removeClass("fullsize")
        $("#zoma").removeClass("smallsize")
        $("#zoma").addClass("midsize")


        $("#madu").removeClass("madu-small")
        $("#madu").removeClass("madu-full")
        $("#madu").addClass("madu-mid")


    }

    if(windowwide < 960){
        $("#zoma").html("ZO<br>MA")
        $("#zoma").removeClass("midsize")
        $("#zoma").removeClass("fullsize")
        $("#zoma").addClass("smallsize")
        $("#compdes").css("opacity", "0")

        
        $("#madu").removeClass("madu-mid")
        $("#madu").removeClass("madu-full")
        $("#madu").addClass("madu-small")
    }
    if(windowwide > 960){
        $("#compdes").css("opacity", "1")

    }

//WIDE SCREEN RESIZING
    if(windowwide > 1290 && windowhigh < 600 ){
        $("#compdes").css("opacity", "0")
        $(".madu-full").css("top", "-50px")
        $("#zoma").css("font-size", "200px")

    }
    if(windowwide > 1290 && windowhigh < 500 ){
        $("#madu").css("opacity", "0")
        $(".fullsize").css("top", "50%")
        $("#zoma").css("font-size", "200px")

    }

    if(windowwide > 1290 && windowhigh > 600 ){
        $("#compdes").css("opacity", "1")
        $(".madu-full").css("top", "0%")
        $("#zoma").css("font-size", "200px")


    }
    if(windowwide > 1290 && windowhigh > 500 ){
        $("#madu").css("opacity", "1")
        $(".fullsize").css("top", "30%")
        $("#zoma").css("font-size", "200px")
    }


    //MIDSCREEN RESISING

    if(windowwide < 1290 && windowwide > 960 && windowhigh < 600){
        $("#compdes").css("opacity", "0")
        $(".madu-mid").css("top", "0")
        $("#zoma").css("font-size", "150px")
    }
    if(windowwide < 1290 && windowwide > 960 && windowhigh < 500){
        $("#madu").css("opacity", "0");
        $("#zoma").css("top", "50%")
        $("#zoma").css("font-size", "150px")
    }

    if(windowwide < 1290 && windowwide > 960 && windowhigh > 600){
        $("#compdes").css("opacity", "1")
        $(".madu-mid").css("top","10%")
        $("#compdes").css("opacity", "1")
        $("#zoma").css("font-size", "150px")

    }
    if(windowwide < 1290 && windowwide > 960 && windowhigh > 500){
        $("#madu").css("opacity", "1");
        $("#zoma").css("top", "30%")
        $("#zoma").css("font-size", "150px")

    }

    //SMALLSCREEN RESIZING
    if(windowwide < 960 && windowwide > 560 && windowhigh > 560){
        $("#zoma")
        .html("ZO<br>MA")
        .css("top","50%")
        $("#madu").css("opacity", "0")
        $("#zoma").css("font-size", "150px")

    }
    if(windowwide < 960 && windowwide > 560 && windowhigh < 560){
        $("#zoma")
        .html("Z")
        .css({"top":"50%"})
        $("#madu").css("opacity", "0")
        $("#zoma").css("font-size", "200px")

    }

    if(windowwide < 560){
        $("#zoma")
        .html("Z")
        $("#zoma").css("font-size", "200px")

    }
    





    $(".dynamic-txt").html(windowwide + "\n" + windowhigh)




})


$(window).on('resize', function() {
    windowwide = $( window ).width();
    windowhigh = $( window ).height();

    $(".dynamic-txt").html(windowwide + "\n" + windowhigh)

    if(windowwide > 1290){
        $("#zoma").html("ZOMA")
        $("#zoma").removeClass("midsize")
        $("#zoma").removeClass("smallsize")
        $("#zoma").addClass("fullsize")

        $("#madu").removeClass("madu-mid")
        $("#madu").removeClass("madu-small")
        $("#madu").addClass("madu-full")
    }

    if(windowwide < 1290 && windowwide > 960){
        $("#zoma").html("ZOMA")
        $("#zoma").removeClass("fullsize")
        $("#zoma").removeClass("smallsize")
        $("#zoma").addClass("midsize")


        $("#madu").removeClass("madu-small")
        $("#madu").removeClass("madu-full")
        $("#madu").addClass("madu-mid")


    }

    if(windowwide < 960){
        $("#zoma").html("ZO<br>MA")
        $("#zoma").removeClass("midsize")
        $("#zoma").removeClass("fullsize")
        $("#zoma").addClass("smallsize")
        $("#compdes").css("opacity", "0")

        
        $("#madu").removeClass("madu-mid")
        $("#madu").removeClass("madu-full")
        $("#madu").addClass("madu-small")
    }
    if(windowwide > 960){
        $("#compdes").css("opacity", "1")

    }

//WIDE SCREEN RESIZING
    if(windowwide > 1290 && windowhigh < 600 ){
        $("#compdes").css("opacity", "0")
        $(".madu-full").css("top", "-50px")
        $("#zoma").css("font-size", "200px")

    }
    if(windowwide > 1290 && windowhigh < 500 ){
        $("#madu").css("opacity", "0")
        $(".fullsize").css("top", "50%")
        $("#zoma").css("font-size", "200px")

    }

    if(windowwide > 1290 && windowhigh > 600 ){
        $("#compdes").css("opacity", "1")
        $(".madu-full").css("top", "0%")
        $("#zoma").css("font-size", "200px")


    }
    if(windowwide > 1290 && windowhigh > 500 ){
        $("#madu").css("opacity", "1")
        $(".fullsize").css("top", "30%")
        $("#zoma").css("font-size", "200px")
    }


    //MIDSCREEN RESISING

    if(windowwide < 1290 && windowwide > 960 && windowhigh < 600){
        $("#compdes").css("opacity", "0")
        $(".madu-mid").css("top", "0")
        $("#zoma").css("font-size", "150px")
    }
    if(windowwide < 1290 && windowwide > 960 && windowhigh < 500){
        $("#madu").css("opacity", "0");
        $("#zoma").css("top", "50%")
        $("#zoma").css("font-size", "150px")
    }

    if(windowwide < 1290 && windowwide > 960 && windowhigh > 600){
        $("#compdes").css("opacity", "1")
        $(".madu-mid").css("top","10%")
        $("#compdes").css("opacity", "1")
        $("#zoma").css("font-size", "150px")

    }
    if(windowwide < 1290 && windowwide > 960 && windowhigh > 500){
        $("#madu").css("opacity", "1");
        $("#zoma").css("top", "30%")
        $("#zoma").css("font-size", "150px")

    }

    //SMALLSCREEN RESIZING
    if(windowwide < 960 && windowwide > 560 && windowhigh > 560){
        $("#zoma")
        .html("ZO<br>MA")
        .css("top","50%")
        $("#madu").css("opacity", "0")
        $("#zoma").css("font-size", "150px")

    }
    if(windowwide < 960 && windowwide > 560 && windowhigh < 560){
        $("#zoma")
        .html("Z")
        .css({"top":"50%"})
        $("#madu").css("opacity", "0")
        $("#zoma").css("font-size", "200px")

    }

    if(windowwide < 560){
        $("#zoma")
        .html("Z")
        $("#zoma").css("font-size", "200px")

    }
    




    divWidth = $("#bottom-left").width();
    divHeight = $("#bottom-left").height();

})








//P5 SKETCH

var s = function(p){
    
    p.setup = function(){



        divWPadding = divWidth - 5;
        divHPadding = divHeight + 5;
        p.frameRate(60)

        p.createCanvas(divWPadding, divHPadding);
        p.background(121, 33, 241, 0);
        
    }

    p.draw = function(){

        //p.background('#7921f1');
        p.noStroke();
        p.fill(255)
        p.ellipse(p.mouseX, p.mouseY, 100)

    }

    p.windowResized = function(){
        divWPadding = divWidth;
        divHPadding = divHeight + 25;

        p.createCanvas(divWPadding, divHPadding)
        //p.createCanvas(divWPadding, divHPadding);
       // p.background('#7921f1');
    }

};

var myp5 = new p5(s, 'c1')


function increment() {
    counter++;
}



