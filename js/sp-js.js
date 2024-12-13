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

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}