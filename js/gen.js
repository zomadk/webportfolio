var vidsel;

$(document).ready(function(){

    $(".grid-vid").click(function() {
        vidsel =  $(this).attr("src");
        console.log(vidsel)


        $(".front-div").css("opacity", "1")
        $(".front-vid").attr("src", vidsel)


    })

    $("#close-btn").click(function() {
        $(".front-div").css("opacity", "0")
    })  

})

