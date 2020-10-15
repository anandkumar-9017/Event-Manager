	
(function($) {
  "use strict";
	function aos_init() {
	AOS.init({
	  duration: 1000,
	  once: true
	});
	}
	$(window).on('load', function() {
	aos_init();
	});
	$("#carouselimage").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

})(jQuery);