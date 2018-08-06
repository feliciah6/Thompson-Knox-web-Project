(function($) {
	
	'use strict';
	
	var Upsite = {
		
		// Initialization the functions
		init: function() {
			Upsite.AffixMenu();
			Upsite.MobileMenu();
			Upsite.ScrollSpy();
			Upsite.SmoothScroll();
			Upsite.FitVids();
			Upsite.PlaceHolder();
			Upsite.Parallax();
			Upsite.Scrollup();
			
			$(window).on('load', function() {
				Upsite.Preload();
			});
		},
		
		// Navigation menu affix
		AffixMenu: function() {
			$('body').waypoint(function() {
				$('#navigation').removeClass('affix');
			}, {
				offset: -49
			});
			
			$('body').waypoint(function() {
				$('#navigation').addClass('affix');
			}, {
				offset: -50
			});
		},
		
		// Add mobile navigation
		MobileMenu: function() {
			var navMenu	= '<nav id="navigation_mobile">';
			navMenu		+= '<div class="nav-menu-links">';
			navMenu		+= '<ul>';
			navMenu		+= $('#navigation .nav').html();
			navMenu		+= '</ul>';
			navMenu		+= '</div>';
			navMenu		+= '<div class="nav-menu-button">';
			navMenu		+= '<button class="nav-menu-toggle"><i class="fa fa-navicon"></i></button>';
			navMenu		+= '</div>';
			navMenu		+= '</nav>';
			
			$('#header').before(navMenu);
			
			$('.nav-menu-toggle').on('click', function() {
				$(this).parent('.nav-menu-button').prev('.nav-menu-links').slideToggle(300, function() {
					$(window).trigger('resize.px.parallax');
				});
			});
		},
		
		// Navigation menu scrollspy to anchor section
		ScrollSpy: function() {
			setTimeout(function() {
				$('body').scrollspy({
					target: '#navigation.scrollspy',
					offset: 71
				});
			}, 100);
		},
		
		// Smooth scrolling to anchor section
		SmoothScroll: function() {
			$('a.smooth-scroll').on('click', function(event) {
				var $anchor		= $(this);
				var offsetTop	= '';
				
				if (window.Response.band(768)) {
					offsetTop = parseInt($($anchor.attr('href')).offset().top - 70, 0);
				} else {
					offsetTop = parseInt($($anchor.attr('href')).offset().top, 0);
				}
				
				$('html, body').stop().animate({
					scrollTop: offsetTop
				}, 1500,'easeInOutExpo');
				
				event.preventDefault();
			});
		},
		
		// Responsive video size
		FitVids: function() {
			$('body').fitVids();
		},
		
		// Placeholder compatibility for IE8
		PlaceHolder: function() {
			$('input, textarea').placeholder();
		},
		
		// Preload function after images loaded
		Preload: function() {
			$('img.parallax-slider, img.sp-image').imgpreload({
				all: function() {
					$('img.parallax-slider, img.sp-image').addClass('loaded');
				}
			});
		},
		
		// Background with parallax effect
		Parallax: function() {
			$(window).resize(function() {
				setTimeout(function() {
					$(window).trigger('resize.px.parallax');
				}, 100);
			});
		},		
		
		// Back to top button function
		Scrollup: function() {
			var $scrollUp = $('.scrollup');
			var $header	  = $('#header');
			
			$('body').waypoint(function() {
				$scrollUp.removeClass('visible');
			}, {
				offset: -($header.height())
			});
			
			$('body').waypoint(function() {
				$scrollUp.addClass('visible');
			}, {
				offset: -($header.height() + 1)
			});
			
			$scrollUp.click(function() {
				$('html, body').stop().animate({
					scrollTop: 0
				}, 2000, 'easeInOutExpo');
				
				return false;
			});
		},
		

		
	};
	
	// Run the main function
	$(function() {
		Upsite.init();	
	});	
	
})(window.jQuery);
