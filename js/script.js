

$(document).ready(function(){

    // Preloader page
    setTimeout(function(){
		$('#loader').removeClass('loader');
		$('h1').css('color','#222222');
	}, 2000);

	
    // Shrink Sticky Header Nav On Scroll
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