$(document).ready(function () {
    $(window).scroll(function () {

        if($(this).scrollTop() > 550) {
            $(".navbar").addClass("solid");
            $(".back-to-top").addClass("visible");
        } else {
            $(".navbar").removeClass("solid");
            $(".back-to-top").removeClass("visible");
        }
    });
});

$(document).ready(function (){
   $("a").on("click", function (evt) {

    if (this.hash !== "") {
        evt.preventDefault();

        let hash = this.hash;
        $("html, body").animate({
            scrollTop: $(hash).offset().scrollTop
          
        }, 800, function() {
            window.location.hash = hash;
        });
    }
   });
});