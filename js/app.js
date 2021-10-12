var app = {};

(function($){

	"use strict";

	/*************************
		Predefined variables
	*************************/

	var $window =  $(window),
	$document = $(document);

	//*Functions *//

	app.image = function(){
		$('#propos-img').animate({marginLeft:'2%'}, 1000);
	}

	app.text = function(){
		$('#text-propos').animate({opacity:1}, 1000);
	}

	app.imagecomputer = function(){
		$('#competences-img').animate({marginLeft:'80%'}, 1000);
	}

/* Fx competences */

	app.block = function(){
		$('.compet1').animate({opacity:1}, 800,
			function(){$('.compet2').animate({opacity:1}, 600,
				function(){$('.compet3').animate({opacity:1}, 500,
					function(){$('.compet4').animate({opacity:1}, 400,
						function(){$('.compet5').animate({opacity:1}, 300,
							function(){$('.compet6').animate({opacity:1}, 300,
								function(){$('#competences').children('a').animate({opacity:1}, 300,
									function(){$('.compet8').animate({opacity:1}, 300,
										function(){$('.compet9').animate({opacity:1}, 200,
											function(){$('.compet7').animate({opacity:1},300)})})})})})})})})});
	}

	app.final=function(){
		$(window).off("scroll")
	}

/* Fx mes projets */

	app.card = function(){
		$('.card').hide();
		$('#card1').fadeIn(1000, function(){
			$('#card2').fadeIn(800, function(){
				$('#card3').fadeIn(600, function(){
					$('#card4').fadeIn(500, function(){
						$('#card5').fadeIn(400, function(){
							$('#card6').fadeIn(300)
						})})})})})
	}

	// app.late = function(){
	// 	setInterval(function(){
	// 			$('#img-index').fadeOut(1000,'swing');
	// 			$('#img-index').fadeIn(1200,'linear');
	// 			}, 2500);	
	// }

/* Fx Skills competences */

	app.animate = function(){
		$(".img-skills").hover(function(){
			$(this).animate({cursor:"pointer", 
						opacity: "0.2"}, 1000);
		},
	//a la fin de hover. call back
		function(){
			$(this).animate({opacity: "1"},300);
		});
	}

	$document.ready(function(){
		app.card();
		app.animate();
		// app.late();	
	});

	$(window).scroll(function() {
		app.image();
		app.text();
		app.imagecomputer();
		app.block();
		app.final();
	});

})(jQuery);