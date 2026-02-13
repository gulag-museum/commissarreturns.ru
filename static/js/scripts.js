$(document).ready(function(){
	if ($('.ad-gallery').length){
		var galleries = $('.ad-gallery').adGallery({
			height: 734,
			animation_speed: 800,
			loader_image: 'static/images/loader.gif',
//			description_wrapper: $('.galleryDescr'),
			start_label: 'ss',
			stop_label: 'ss',
			update_window_hash: false,
			hooks: {

				displayDescription: function(image) {
					$('.galleryDescr').html('').text(image.desc);
				}
			},
			cycle: true, 
			 slideshow: {
			    enable: true,
			    autostart: true,
			    speed: 5000,
			    start_label: 'Start',
			    stop_label: 'Stop',
			    // Should the slideshow stop if the user scrolls the thumb list?
			    stop_on_scroll: true, 
			    // Wrap around the countdown
			    countdown_prefix: '(', 
			    countdown_sufix: ')',
			    onStart: function() {
			      // Do something wild when the slideshow starts
			    },
			    onStop: function() {
			      // Do something wild when the slideshow stops
			    }
			  },
			  // or 'slide-vert', 'resize', 'fade', 'none' or false
			  effect: 'fade', 
		});
	}
	if ($('.ad-gallery-main').length){
		console.log('!!');
		var galleries = $('.ad-gallery-main').adGallery({
			animation_speed: 800,
			loader_image: 'static/images/loader.gif',
//			description_wrapper: $('.galleryDescr'),
			start_label: 'ss',
			stop_label: 'ss',
			update_window_hash: false,
			hooks: {

			},
			cycle: true, 
			 slideshow: {
			    enable: true,
			    autostart: true,
			    speed: 5000,
			    start_label: 'Start',
			    stop_label: 'Stop',
			    // Should the slideshow stop if the user scrolls the thumb list?
			    stop_on_scroll: true, 
			    // Wrap around the countdown
			    countdown_prefix: '(', 
			    countdown_sufix: ')',
			    onStart: function() {
			      // Do something wild when the slideshow starts
			    },
			    onStop: function() {
			      // Do something wild when the slideshow stops
			    }
			  },
			  // or 'slide-vert', 'resize', 'fade', 'none' or false
			  effect: 'fade', 
		});
	}
	if ($('.peopleListContainer').length){
		/*$(".peopleListContainer").jCarouselLite({
			btnNext: ".next",
			btnPrev: ".prev",
			vertical: true,
			mouseWheel: true,
			visible: 18,
			auto: 1,
			speed: 10000,
			scroll: 95
		});*/
		$('#scroller').simplyScroll({
			customClass: 'vert',
			orientation: 'vertical',
			auto: true,
			manualMode: 'loop',
			frameRate: 20
		});
	}
});

function switchLang(lang){
	$.ajax({
		url: '/index/lang',
		type: 'POST',
		data:{'lang': lang},
		error: function(response){
		},
		success: function(response){
			location.reload(true);
		}
	});
}