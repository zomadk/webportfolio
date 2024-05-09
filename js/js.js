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






    
    if(windowwide > 5160){
        $("#zoma").html("ZOMA")
        $("#zoma").removeClass("midsize")
        $("#zoma").removeClass("smallsize")
        $("#zoma").addClass("fullsize")

        $("#madu").removeClass("madu-mid")
        $("#madu").removeClass("madu-small")
        $("#madu").addClass("madu-full")
    }

    if(windowwide < 5160 && windowwide > 3900){
        $("#zoma").html("ZOMA")
        $("#zoma").removeClass("fullsize")
        $("#zoma").removeClass("smallsize")
        $("#zoma").addClass("midsize")


        $("#madu").removeClass("madu-small")
        $("#madu").removeClass("madu-full")
        $("#madu").addClass("madu-mid")


    }

    if(windowwide < 3900){
        $("#zoma").html("ZO<br>MA")
        $("#zoma").removeClass("midsize")
        $("#zoma").removeClass("fullsize")
        $("#zoma").addClass("smallsize")
        $("#compdes").css("opacity", "0")

        
        $("#madu").removeClass("madu-mid")
        $("#madu").removeClass("madu-full")
        $("#madu").addClass("madu-small")
    }
    if(windowwide > 3900){
        $("#compdes").css("opacity", "1")

    }

//WIDE SCREEN RESIZING
    if(windowwide > 5160 && windowhigh < 2600 ){
        $("#compdes").css("opacity", "0")
        $(".madu-full").css("top", "-100px")
        $("#zoma").css("font-size", "800px")

    }
    if(windowwide > 5160 && windowhigh < 2260 ){
        $("#madu").css("opacity", "0")
        $(".fullsize").css("top", "50%")
        $("#zoma").css("font-size", "800px")

    }

    if(windowwide > 5160 && windowhigh > 2600 ){
        $("#compdes").css("opacity", "1")
        $(".madu-full").css("top", "0%")
        $("#zoma").css("font-size", "800px")


    }
    if(windowwide > 5160 && windowhigh > 2260 ){
        $("#madu").css("opacity", "1")
        $(".fullsize").css("top", "30%")
        $("#zoma").css("font-size", "800px")
    }


    //MIDSCREEN RESISING

    if(windowwide < 5160 && windowwide > 3900 && windowhigh < 2300){
        $("#compdes").css("opacity", "0")
        $(".madu-mid").css("top", "0")
        $("#zoma").css("font-size", "600px")
    }
    if(windowwide < 5160 && windowwide > 3900 && windowhigh < 1900){
        $("#madu").css("opacity", "0");
        $("#zoma").css("top", "50%")
        $("#zoma").css("font-size", "600px")
    }

    if(windowwide < 5160 && windowwide > 3900 && windowhigh > 2300){
        $("#compdes").css("opacity", "1")
        $(".madu-mid").css("top","10%")
        $("#compdes").css("opacity", "1")
        $("#zoma").css("font-size", "600px")

    }
    if(windowwide < 5160 && windowwide > 3900 && windowhigh > 1900){
        $("#madu").css("opacity", "1");
        $("#zoma").css("top", "30%")
        $("#zoma").css("font-size", "600px")

    }

    //SMALLSCREEN RESIZING
    if(windowwide < 3900 && windowwide > 2120 && windowhigh > 2120){
        $("#zoma")
        .html("ZO<br>MA")
        .css("top","50%")
        $("#madu").css("opacity", "0")
        $("#zoma").css("font-size", "600px")

    }
    if(windowwide < 3900 && windowwide > 2120 && windowhigh < 2120){
        $("#zoma")
        .html("Z")
        .css({"top":"50%"})
        $("#madu").css("opacity", "0")
        $("#zoma").css("font-size", "800px")

    }

    if(windowwide < 2120){
        $("#zoma")
        .html("Z")
        $("#zoma").css("font-size", "800px")

    }
    





    $(".dynamic-txt").html(windowwide + "\n" + windowhigh)




})


$(window).on('resize', function() {
    windowwide = $( window ).width();
    windowhigh = $( window ).height();

    $(".dynamic-txt").html(windowwide + "\n" + windowhigh)

    if(windowwide > 5160){
        $("#zoma").html("ZOMA")
        $("#zoma").removeClass("midsize")
        $("#zoma").removeClass("smallsize")
        $("#zoma").addClass("fullsize")

        $("#madu").removeClass("madu-mid")
        $("#madu").removeClass("madu-small")
        $("#madu").addClass("madu-full")
    }

    if(windowwide < 5160 && windowwide > 3900){
        $("#zoma").html("ZOMA")
        $("#zoma").removeClass("fullsize")
        $("#zoma").removeClass("smallsize")
        $("#zoma").addClass("midsize")


        $("#madu").removeClass("madu-small")
        $("#madu").removeClass("madu-full")
        $("#madu").addClass("madu-mid")


    }

    if(windowwide < 3900){
        $("#zoma").html("ZO<br>MA")
        $("#zoma").removeClass("midsize")
        $("#zoma").removeClass("fullsize")
        $("#zoma").addClass("smallsize")
        $("#compdes").css("opacity", "0")

        
        $("#madu").removeClass("madu-mid")
        $("#madu").removeClass("madu-full")
        $("#madu").addClass("madu-small")
    }
    if(windowwide > 3900){
        $("#compdes").css("opacity", "1")

    }

//WIDE SCREEN RESIZING
    if(windowwide > 5160 && windowhigh < 2600 ){
        $("#compdes").css("opacity", "0")
        $(".madu-full").css("top", "-100px")
        $("#zoma").css("font-size", "800px")

    }
    if(windowwide > 5160 && windowhigh < 2260 ){
        $("#madu").css("opacity", "0")
        $(".fullsize").css("top", "50%")
        $("#zoma").css("font-size", "800px")

    }

    if(windowwide > 5160 && windowhigh > 2600 ){
        $("#compdes").css("opacity", "1")
        $(".madu-full").css("top", "0%")
        $("#zoma").css("font-size", "800px")


    }
    if(windowwide > 5160 && windowhigh > 2260 ){
        $("#madu").css("opacity", "1")
        $(".fullsize").css("top", "30%")
        $("#zoma").css("font-size", "800px")
    }


    //MIDSCREEN RESISING

    if(windowwide < 5160 && windowwide > 3900 && windowhigh < 2300){
        $("#compdes").css("opacity", "0")
        $(".madu-mid").css("top", "0")
        $("#zoma").css("font-size", "600px")
    }
    if(windowwide < 5160 && windowwide > 3900 && windowhigh < 1900){
        $("#madu").css("opacity", "0");
        $("#zoma").css("top", "50%")
        $("#zoma").css("font-size", "600px")
    }

    if(windowwide < 5160 && windowwide > 3900 && windowhigh > 2300){
        $("#compdes").css("opacity", "1")
        $(".madu-mid").css("top","10%")
        $("#compdes").css("opacity", "1")
        $("#zoma").css("font-size", "600px")

    }
    if(windowwide < 5160 && windowwide > 3900 && windowhigh > 1900){
        $("#madu").css("opacity", "1");
        $("#zoma").css("top", "30%")
        $("#zoma").css("font-size", "600px")

    }

    //SMALLSCREEN RESIZING
    if(windowwide < 3900 && windowwide > 2120 && windowhigh > 2120){
        $("#zoma")
        .html("ZO<br>MA")
        .css("top","50%")
        $("#madu").css("opacity", "0")
        $("#zoma").css("font-size", "600px")

    }
    if(windowwide < 3900 && windowwide > 2120 && windowhigh < 2120){
        $("#zoma")
        .html("Z")
        .css({"top":"50%"})
        $("#madu").css("opacity", "0")
        $("#zoma").css("font-size", "800px")

    }

    if(windowwide < 2120){
        $("#zoma")
        .html("Z")
        $("#zoma").css("font-size", "800px")

    }
    




    divWidth = $("#bottom-left").width();
    divHeight = $("#bottom-left").height();

})



//P5 SKETCH

var s = function(p){
    
    p.setup = function(){


        divWPadding = divWidth - 25;
        divHPadding = divHeight + 25;
        p.frameRate(60)

        p.createCanvas(divWPadding, divHPadding);
        p.background(100, 0);
    }

    p.draw = function(){

        //p.background('#7921f1');
        p.noStroke();
        p.fill(255)
        p.ellipse(p.mouseX, p.mouseY, 500)

    }

    p.windowResized = function(){
        divWPadding = divWidth - 25;
        divHPadding = divHeight + 25;

        p.createCanvas(divWPadding, divHPadding)
        //p.createCanvas(divWPadding, divHPadding);
       // p.background('#7921f1');
    }

};

var myp5 = new p5(s, 'c1')

