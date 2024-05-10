var windowwide = $( window ).width();

var fadeouter =  function() {
    $(".hero-img").addClass("disappear");
    $(".tagline").addClass("disappear");

} 

var scaleText =  function() {
    $(".hero-img").addClass("disappear");
    $(".tagline").addClass("disappear");

} 



$(document).ready(function(){

    var windowwide = $( window ).width();
    var scaleTextRate = windowwide / 28.8
    var scaleLineRate = windowwide / 26.2
    $(".tagline").css({"font-size": scaleTextRate, "line-height": scaleLineRate + "px"})


   // $("#software-body").animate({scrollTop: 0});

   setTimeout(function(){
        $("#software-body").animate({scrollTop: 70}, 1200);
        }, 500);
/* 
    setTimeout(function(){
        $(".hero-img").addClass("disappear")   
        $(".tagline").addClass("disappear")   
    }, 7000);*/




});

//var docwide = $( document ).width();

$(window).on('resize', function() {

    var windowwide = $( window ).width();
    var scaleTextRate = windowwide / 28.8
    var scaleLineRate = windowwide / 26.2



    /*console.log(windowwide)
    $(".dynamic-txt")
    .html(windowwide)*/

    $(".tagline").css({"font-size": scaleTextRate, "line-height": scaleLineRate + "px"})

   /* if(windowwide < 4000){
        $("#info-tex")
    }*/
    

})
