$(function() {

	var owl = $(".slider");

	owl.owlCarousel({
		items: 1,
		loop: true,
		autoplay : true,
		autoplayTimeout : 3000,
		autoplayHoverPause: true
	});


	$(".slider_section .navs .nav").on("click",function(e){
		e.preventDefault();

		$(this).hasClass("next") ? owl.trigger("next.owl.carousel") : owl.trigger("prev.owl.carousel");
	});

	// tabs

	$(".tab_content .tab").on("click",function(e){

		e.preventDefault();

		var ind = $(this).index();

		$(".tab_item").removeClass("active");
		$(".tab_item:eq("+ind+")").addClass("active");

		$(".tab_content .tab").removeClass("active");
		$(this).addClass("active");


	});

	// Mnu

	$(".btn_toggle_mnu").on("click",function(){

		$(this).toggleClass("active");

	});

	// services anchors 

	$(".anchors_serv .item").on("click",function(e){
		e.preventDefault();

		var ind = $(this).index();
		var top = $(".serv_wrap .item").eq(ind).offset().top; 
		var offset = 15;

		$("body,html").animate({
			"scrollTop" : (top - offset)
		},500);

	});
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
