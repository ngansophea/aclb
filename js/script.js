// Shrink Sticky Header Nav On Scroll
$(document).ready(function(){
    $(document).on("scroll",function() {
        if ($(document).scrollTop() > 80 ) {
            $(".header").addClass("shrink");
            $("#navbar").addClass("shrink-navbar");
        } else {
            $(".header").removeClass("shrink");
            $("#navbar").removeClass("shrink-navbar");
        }
    })
});