$(document).ready(function(){

	"use strict";

	/* =================================
	LOADER 
	=================================== */
	$(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");

	/* =================================
	NAVBAR 
	=================================== */
	jQuery(window).scroll(function () {
		var top = jQuery(document).scrollTop();
		var batas = jQuery(window).height();

		if ( top > batas ) {
			jQuery('.navbar-main').addClass('stiky');
		}else {
			jQuery('.navbar-main').removeClass('stiky');
		}
	});

	/* =================================
	BANNER ROTATOR IMAGE 
	=================================== */
	$('#slides').superslides({
		//animation: "fade",
		play: 8000,
		slide_speed: 800,
		pagination: true,
		hashchange: false,
		scrollable: true,
		autoplayHoverPause: true,



	});

	/* =================================
	BACK TO TOP 
	=================================== */
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

	/* =================================
	ISOTOPE
	=================================== */
	$(window).load(function(){
		// INITIALIZE ISOTOPE
		var $container = $('.grid-services');
		$container.isotope({
			filter: '*',
		});
	 	$('.portfolio_filter a').on('click', function() {
	 		$('.portfolio_filter .active').removeClass('active');
			$(this).addClass('active');

			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 500,
					animationEngine : "jquery"
				}
			});
			return false;
	 	});
	});

	/* =================================
	OWL
	=================================== */

	var caro = $("#caro");
	caro.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplayHoverPause: true,
		loop: true,
	});

	var owl = $("#owl-testimony");
	owl.owlCarousel({
		autoplay: 10000,
		stopOnHover: true,
		margin: 30,
		items : 2,
		nav: true,
		navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
		dots: true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			1000:{
				items:2
			}
		}
	});

	var testimony2 = $("#owl-testimony2");
	testimony2.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
		dots: true,
		loop: true
	});

	/* =================================
	FAQ
	=================================== */
	$(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
	    if (e.type=='show'){
	      $(this).addClass('active');
	    }else{
	      $(this).removeClass('active');
	    }
  	});
	/* =================================
	Counter
	=================================== */

		$(document).ready(function() {
		var options = {
		threshold: 0.9 // Trigger when 90% of the element is visible
	};

		var observer = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(entry) {
		if (entry.isIntersecting) {
		var $counterNumber = $(entry.target).find('.counter-number');
		var countTo = parseInt($counterNumber.text());

		if (countTo !== 2019) {
		$({ countNum: 0 }).animate(
	{
		countNum: countTo
	},
	{
		duration: 2000,
		easing: 'linear',
		step: function() {
		$counterNumber.text(Math.floor(this.countNum));
	},
		complete: function() {
		$counterNumber.text(countTo);
	}
	}
		);
	}

		observer.unobserve(entry.target);
	}
	});
	}, options);

		$('.counter-1').each(function() {
		observer.observe(this);
	});
	});






	/* =================================
	MAGNIFIC POPUP
	=================================== */
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });

    $('.grid-services').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '';
			}
		}
	});
	/* =================================
	LOAD SVG LOGO
	=================================== */

		function loadSVGWhenVisible() {
		const svgContainer = document.getElementById('svg-container');
		const rect = svgContainer.getBoundingClientRect();

		// Check if the SVG container is in the viewport
		if (rect.top <= window.innerHeight && rect.bottom >= 0) {
		// Replace the content of the SVG container with the SVG code
		svgContainer.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve" width="500" height="500">

<g id="OBJECTS">
\t<g>
\t\t<g>
\t\t\t<g>
\t\t\t\t<g>
\t\t\t\t\t<g>
\t\t\t\t\t\t<path style="fill: rgb(0, 181, 232);" d="M260.067,110.108c-31.668,4.629-56.284,26.867-59.459,54.489v60.815
\t\t\t\t\t\t\tc-17.462,5.607-31.809,16.648-40.188,30.708v-89.911c0-31.188,29.739-56.58,66.311-56.58H250
\t\t\t\t\t\t\tC253.396,109.628,256.772,109.783,260.067,110.108z" class="svg-elem-1"></path>
\t\t\t\t\t\t<path style="fill: rgb(1, 125, 192);" d="M339.58,304.68c0,38.58-33.67,70.57-77.26,75.71c-0.19,0.03-0.37,0.05-0.56,0.07h-0.02
\t\t\t\t\t\t\tc-31.19-3.93-55.87-24.86-60.61-51.44c1.3,5.37,4.86,10.05,9.8,13.25v0.01c4.39,2.85,9.87,4.54,15.8,4.54H250
\t\t\t\t\t\t\tc27.23,0,49.39-18.91,49.39-42.14c0-16.36-10.97-30.56-26.94-37.54c14.99-3.01,28.65-8.98,40.1-17.14
\t\t\t\t\t\t\tC329.21,263.89,339.58,283.28,339.58,304.68z" class="svg-elem-2"></path>
\t\t\t\t\t</g>
\t\t\t\t</g>
\t\t\t\t<g>
\t\t\t\t\t<path style="fill: rgb(0, 181, 232);" d="M261.735,380.46c-0.944,0.103-1.909,0.206-2.874,0.274c-0.944,0.086-1.889,0.154-2.853,0.206
\t\t\t\t\t\tc-1.105,0.069-2.21,0.103-3.336,0.137c-0.884,0.017-1.788,0.034-2.673,0.034h-23.269c-36.572,0-66.311-25.393-66.311-56.58
\t\t\t\t\t\tv-39.726c0-31.205,29.739-56.58,66.311-56.58h22.023c-27.851,7.218-48.106,29.302-48.106,55.414
\t\t\t\t\t\tc-0.02,0.394-0.04,0.772-0.04,1.166v39.726c0,0.72,0.04,1.44,0.121,2.143c0.04,0.257,0.08,0.531,0.12,0.789
\t\t\t\t\t\tc0.04,0.24,0.081,0.497,0.121,0.754c0.04,0.274,0.101,0.549,0.161,0.806C205.873,355.599,230.549,376.534,261.735,380.46z" class="svg-elem-3"></path>
\t\t\t\t\t<path style="fill: rgb(1, 125, 192);" d="M339.46,186.08c0.07,11.78-2.95,23.55-9.22,33.97c-0.2,0.36-0.43,0.72-0.65,1.08
\t\t\t\t\t\tc-3.29,5.43-7.31,10.47-11.99,15.05c-0.43,0.43-0.87,0.86-1.31,1.27c-0.48,0.44-0.98,0.91-1.47,1.34
\t\t\t\t\t\tc-15.87,14.1-37.78,22.76-60.7,23.64c-1.37,0.05-2.73,0.09-4.12,0.09h-23.27c-0.5,0-1.02,0.01-1.53,0.05
\t\t\t\t\t\tc-0.38,0-0.76,0.03-1.14,0.07c-6.07,0.5-11.9,2.94-16.11,6.69c-0.03,0.03-0.06,0.05-0.09,0.08c-0.72,0.65-1.42,1.34-2.05,2.07
\t\t\t\t\t\tc-0.2,0.21-0.4,0.43-0.56,0.67c-1.63,1.99-2.85,4.2-3.64,6.57c-0.3,0.87-0.54,1.78-0.7,2.69c-0.12,0.74-0.22,1.47-0.26,2.23
\t\t\t\t\t\tc0-26.11,20.25-48.2,48.1-55.42H250c0.82,0,1.65-0.01,2.47-0.05c0.06,0,0.14,0,0.22-0.01c0.79-0.04,1.57-0.09,2.35-0.16
\t\t\t\t\t\tc0.63-0.05,1.25-0.12,1.85-0.19c19.31-2.14,35.85-14.94,40.83-30.91c3.56-11.41,1.16-24.07-6.43-33.94
\t\t\t\t\t\tc-7.96-10.37-21.81-17.76-36.37-18.82c-0.78-0.08-1.56-0.13-2.35-0.17h-0.12c-0.8-0.03-1.63-0.05-2.45-0.05h-23.27
\t\t\t\t\t\tc-6.13,0-11.75,1.81-16.21,4.84c-6.04,4.08-9.91,10.39-9.91,17.45v-1.61c3.17-27.62,27.79-49.86,59.48-54.49
\t\t\t\t\t\tc0.2,0.02,0.39,0.04,0.59,0.07c28.22,2.94,54.22,17.89,67.88,39.2C335.68,160.47,339.39,173.28,339.46,186.08z" class="svg-elem-4"></path>
\t\t\t\t</g>
\t\t\t</g>
\t\t\t<g>
\t\t\t\t<path style="opacity: 0.5; fill: rgb(31, 30, 33);" d="M262.32,380.39c-0.19,0.03-0.37,0.05-0.56,0.07h-0.02
\t\t\t\t\tc-31.19-3.93-55.87-24.86-60.61-51.44c1.3,5.37,4.86,10.05,9.8,13.25v0.01c0,0,0,0.01,0.01,0.02
\t\t\t\t\tC211.28,343.22,222.52,372.7,262.32,380.39z" class="svg-elem-5"></path>
\t\t\t\t<path style="opacity: 0.5; fill: rgb(31, 30, 33);" d="M210.69,148.41c-0.04,0.09-0.09,0.17-0.13,0.26c-0.03,0.06-0.04,0.09-0.04,0.09
\t\t\t\t\tc-6.04,4.08-9.91,10.39-9.91,17.45v-1.61c3.17-27.62,27.79-49.86,59.48-54.49C260.24,110.12,229.667,113.87,210.69,148.41z" class="svg-elem-6"></path>
\t\t\t\t<path style="opacity: 0.5; fill: rgb(31, 30, 33);" d="M248.47,228.3c-36.9,12.69-40.52,41.03-40.52,41.03c-0.03,0.03-0.06,0.05-0.09,0.08
\t\t\t\t\tc-0.72,0.65-1.42,1.34-2.05,2.07c-0.2,0.21-0.4,0.43-0.56,0.67c-1.63,1.99-2.85,4.2-3.64,6.57c-0.3,0.87-0.54,1.78-0.7,2.69
\t\t\t\t\tc-0.12,0.74-0.22,1.47-0.26,2.23C200.65,257.62,220.76,235.59,248.47,228.3z" class="svg-elem-7"></path>
\t\t\t</g>
\t\t\t<path style="fill: rgb(255, 255, 255);" d="M260.07,110.11c-31.67,4.63-56.29,26.87-59.46,54.49v60.81c-1.27,0.41-2.52,0.84-3.75,1.31V164.6
\t\t\t\tc3.17-27.62,27.79-49.86,59.46-54.49c-3.3-0.33-6.67-0.48-10.07-0.48H250C253.4,109.63,256.77,109.78,260.07,110.11z" class="svg-elem-8"></path>
\t\t\t<path style="fill: rgb(255, 255, 255);" d="M258.86,380.73l-0.33,0.03c-30.09-3.59-56.6-26.23-61.15-51.74c-0.06-0.25-0.12-0.53-0.16-0.8
\t\t\t\tc-0.04-0.26-0.08-0.52-0.12-0.76c-0.04-0.25-0.08-0.53-0.12-0.79c-0.08-0.7-0.12-1.42-0.12-2.14V284.8
\t\t\t\tc0-0.39,0.02-0.77,0.04-1.16c0-26.11,20.25-48.2,48.1-55.42h3.75c-27.85,7.22-48.1,29.31-48.1,55.42
\t\t\t\tc-0.02,0.39-0.04,0.77-0.04,1.16v39.73c0,0.72,0.04,1.44,0.12,2.14c0.04,0.26,0.08,0.54,0.12,0.79c0.04,0.24,0.08,0.5,0.12,0.76
\t\t\t\tc0.04,0.27,0.1,0.55,0.16,0.8c4.74,26.58,29.42,47.51,60.61,51.44C260.79,380.56,259.83,380.67,258.86,380.73z" class="svg-elem-9"></path>
\t\t</g>
\t</g>
</g>
<style type="text/css">
@-webkit-keyframes animate-svg-fill-1{0%{fill:transparent}100%{fill:rgb(0,181,232)}}@keyframes animate-svg-fill-1{0%{fill:transparent}100%{fill:rgb(0,181,232)}}.svg-elem-1{-webkit-animation:animate-svg-fill-1 0.7s ease-in-out 0.8s both;animation:animate-svg-fill-1 0.7s ease-in-out 0.8s both}@-webkit-keyframes animate-svg-fill-2{0%{fill:transparent}100%{fill:rgb(1,125,192)}}@keyframes animate-svg-fill-2{0%{fill:transparent}100%{fill:rgb(1,125,192)}}.svg-elem-2{-webkit-animation:animate-svg-fill-2 0.7s ease-in-out 0.9s both;animation:animate-svg-fill-2 0.7s ease-in-out 0.9s both}@-webkit-keyframes animate-svg-fill-3{0%{fill:transparent}100%{fill:rgb(0,181,232)}}@keyframes animate-svg-fill-3{0%{fill:transparent}100%{fill:rgb(0,181,232)}}.svg-elem-3{-webkit-animation:animate-svg-fill-3 0.7s ease-in-out 1s both;animation:animate-svg-fill-3 0.7s ease-in-out 1s both}@-webkit-keyframes animate-svg-fill-4{0%{fill:transparent}100%{fill:rgb(1,125,192)}}@keyframes animate-svg-fill-4{0%{fill:transparent}100%{fill:rgb(1,125,192)}}.svg-elem-4{-webkit-animation:animate-svg-fill-4 0.7s ease-in-out 1.1s both;animation:animate-svg-fill-4 0.7s ease-in-out 1.1s both}@-webkit-keyframes animate-svg-fill-5{0%{fill:transparent}100%{fill:rgb(31,30,33)}}@keyframes animate-svg-fill-5{0%{fill:transparent}100%{fill:rgb(31,30,33)}}.svg-elem-5{-webkit-animation:animate-svg-fill-5 0.7s ease-in-out 1.2000000000000002s both;animation:animate-svg-fill-5 0.7s ease-in-out 1.2000000000000002s both}@-webkit-keyframes animate-svg-fill-6{0%{fill:transparent}100%{fill:rgb(31,30,33)}}@keyframes animate-svg-fill-6{0%{fill:transparent}100%{fill:rgb(31,30,33)}}.svg-elem-6{-webkit-animation:animate-svg-fill-6 0.7s ease-in-out 1.3s both;animation:animate-svg-fill-6 0.7s ease-in-out 1.3s both}@-webkit-keyframes animate-svg-fill-7{0%{fill:transparent}100%{fill:rgb(31,30,33)}}@keyframes animate-svg-fill-7{0%{fill:transparent}100%{fill:rgb(31,30,33)}}.svg-elem-7{-webkit-animation:animate-svg-fill-7 0.7s ease-in-out 1.4000000000000001s both;animation:animate-svg-fill-7 0.7s ease-in-out 1.4000000000000001s both}@-webkit-keyframes animate-svg-fill-8{0%{fill:transparent}100%{fill:rgb(255,255,255)}}@keyframes animate-svg-fill-8{0%{fill:transparent}100%{fill:rgb(255,255,255)}}.svg-elem-8{-webkit-animation:animate-svg-fill-8 0.7s ease-in-out 1.5s both;animation:animate-svg-fill-8 0.7s ease-in-out 1.5s both}@-webkit-keyframes animate-svg-fill-9{0%{fill:transparent}100%{fill:rgb(255,255,255)}}@keyframes animate-svg-fill-9{0%{fill:transparent}100%{fill:rgb(255,255,255)}}.svg-elem-9{-webkit-animation:animate-svg-fill-9 0.7s ease-in-out 1.6s both;animation:animate-svg-fill-9 0.7s ease-in-out 1.6s both}
</style>
</svg>`;

		// Remove the event listener after the SVG is loaded
		window.removeEventListener('scroll', loadSVGWhenVisible);
	}
	}

		// Add an event listener to call the function when scrolling
		window.addEventListener('scroll', loadSVGWhenVisible);

	/* =================================
FOOTER_RELATED
=================================== */
	// Isotope
	if ( plugins.isotope.length ) {
		for ( var i = 0; i < plugins.isotope.length; i++ ) {
			var
				wrap = plugins.isotope[ i ],
				filterHandler = function ( event ) {
					event.preventDefault();
					for ( var n = 0; n < this.isoGroup.filters.length; n++ ) this.isoGroup.filters[ n ].classList.remove( 'active' );
					this.classList.add( 'active' );
					this.isoGroup.isotope.arrange( { filter: this.getAttribute( "data-isotope-filter" ) !== '*' ? '[data-filter*="' + this.getAttribute( "data-isotope-filter" ) + '"]' : '*' } );
				},
				resizeHandler = function () {
					this.isoGroup.isotope.layout();
				};

			wrap.isoGroup = {};
			wrap.isoGroup.filters = wrap.querySelectorAll( '[data-isotope-filter]' );
			wrap.isoGroup.node = wrap.querySelector( '.isotope' );
			wrap.isoGroup.layout = wrap.isoGroup.node.getAttribute( 'data-isotope-layout' ) ? wrap.isoGroup.node.getAttribute( 'data-isotope-layout' ) : 'masonry';
			wrap.isoGroup.isotope = new Isotope( wrap.isoGroup.node, {
				itemSelector: '.isotope-item',
				layoutMode: wrap.isoGroup.layout,
				filter: '*',
				columnWidth: ( function() {
					if ( wrap.isoGroup.node.hasAttribute('data-column-class') ) return wrap.isoGroup.node.getAttribute('data-column-class');
					if ( wrap.isoGroup.node.hasAttribute('data-column-width') ) return parseFloat( wrap.isoGroup.node.getAttribute('data-column-width') );
				}() )
			} );

			for ( var n = 0; n < wrap.isoGroup.filters.length; n++ ) {
				var filter = wrap.isoGroup.filters[ n ];
				filter.isoGroup = wrap.isoGroup;
				filter.addEventListener( 'click', filterHandler );
			}

			window.addEventListener( 'resize', resizeHandler.bind( wrap ) );
		}
	}

	// WOW
	if ($html.hasClass("wow-animation") && plugins.wow.length && !isNoviBuilder && isDesktop) {
		new WOW().init();
	}

	// Material Parallax
	if ( plugins.materialParallax.length ) {
		if ( !isNoviBuilder && !isIE && !isMobile) {
			plugins.materialParallax.parallax();
		} else {
			for ( var i = 0; i < plugins.materialParallax.length; i++ ) {
				var $parallax = $(plugins.materialParallax[i]);

				$parallax.addClass( 'parallax-disabled' );
				$parallax.css({ "background-image": 'url('+ $parallax.data("parallax-img") +')' });
			}
		}
	}

	// jQuery Count To
	if (plugins.counter.length) {
		for (var i = 0; i < plugins.counter.length; i++) {
			var
				counter = $(plugins.counter[i]),
				initCount = function () {
					var counter = $(this);
					if (!counter.hasClass("animated-first") && isScrolledIntoView(counter)) {
						counter.countTo({
							refreshInterval: 40,
							speed: counter.attr("data-speed") || 1000,
							from: 0,
							to: parseInt(counter.text(), 10)
						});
						counter.addClass('animated-first');
					}
				};

			$.proxy(initCount, counter)();
			$window.on("scroll", $.proxy(initCount, counter));
		}
	}



	/* =================================
	GOOGLE MAPS
	=================================== */

	function CustomZoomControl(controlDiv, map) {
		//grap the zoom elements from the DOM and insert them in the map
		var controlUIzoomIn= document.getElementById('cd-zoom-in'),
			controlUIzoomOut= document.getElementById('cd-zoom-out');
		controlDiv.appendChild(controlUIzoomIn);
		controlDiv.appendChild(controlUIzoomOut);

		// Setup the click event listeners and zoom-in or out according to the clicked element
		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
			map.setZoom(map.getZoom()+1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
			map.setZoom(map.getZoom()-1)
		});
	}

	if ($('#maps').length) {
	//set your google maps parameters
	var myLat = $('#maps').data('lat'),
	myLng = $('#maps').data('lng'),
	myMarkerx = $('#maps').data('marker');


	var latitude = myLat,
		longitude = myLng,
		markerx = myMarkerx,
		map_zoom = 14;

	//google map custom marker icon - .png fallback for IE11
	var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
	var marker_url = ( is_internetExplorer11 ) ? markerx : markerx;

	//define the basic color of your map, plus a value for saturation and brightness
	var main_color = '#000000',
		saturation_value= -80,
		brightness_value= 5;

	//we define here the style of the map
	var style= [
		{
			//set saturation for the labels on the map
			elementType: "labels",
			stylers: [
				{saturation: saturation_value}
			]
		},
		{ //poi stands for point of interest - don't show these lables on the map
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show highways lables on the map
			featureType: 'road.highway',
			elementType: 'labels',
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show local road lables on the map
			featureType: "road.local",
			elementType: "labels.icon",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show arterial road lables on the map
			featureType: "road.arterial",
			elementType: "labels.icon",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show road lables on the map
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{visibility: "off"}
			]
		},
		//style different elements on the map
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]

		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		}
	];

	//set google map options
	var map_options = {
		center: new google.maps.LatLng(latitude, longitude),
		zoom: map_zoom,
		panControl: false,
		zoomControl: false,
		mapTypeControl: false,
		streetViewControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false,
		styles: style,
	}
	//inizialize the map
	var map = new google.maps.Map(document.getElementById('maps'), map_options);
	//add a custom marker to the map
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(latitude, longitude),
		map: map,
		visible: true,
		icon: marker_url,
	});

	var zoomControlDiv = document.createElement('div');
	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

	//insert the zoom div on the top left of the map
	map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
  }

});




  
  