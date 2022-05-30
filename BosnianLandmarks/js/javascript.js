document.getElementById("arrows").addEventListener("click", myFunction);

function myFunction() {

    document.getElementById("prikaz").scrollIntoView();
}

$(document).ready(function () {
    $(window).on("scroll", function () {
        var wn = $(window).scrollTop();
        if (wn > 300) {
            $(".navbar").css("background", "#333");
        }
        else {
            $(".navbar").css("background", "transparent");


        }
    });
});







