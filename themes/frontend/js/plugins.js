$(function(){
	// Load vegas slider
	$('#header').vegas({
		slides : [
			{src : '/themes/frontend/images/bgs/bg20.jpg'},
			{src : '/themes/frontend/images/bgs/bg4.png'},
			{src : '/themes/frontend/images/bgs/bg5.png', transition: 'fade'},
		],

		overlay : true,
		delay: 5000,
        timer: false,
        shuffle: false,
        transition: 'fade',
        color: '#fff',
        cover: true 

	});
	$('#owl-testimonials').owlCarousel({
		 slideSpeed : 200,
		 paginationSpeed : 800,
		 rewindSpeed : 1000,
		 autoPlay : 20000,
		 items	: 2
	});
	 $('.counterup').counterUp({
            delay: 10,
            time: 1000
        });
});
