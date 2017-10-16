	//Filter
	

	$('.js-filter-open').click(function (){
		$('.filter').addClass('is-open');
		$('body').addClass('is-fixed-bg');
	});

	$('.js-filter-close').click(function (){
		$('.filter').removeClass('is-open');
		$('body').removeClass('is-fixed-bg');
	});

	

	$(".filter__content").niceScroll(".filter__content_inner",{
		cursorcolor: '#ee8b76',
		horizrailenabled: false,
		"verge": "500",
		cursorwidth: '3px',
		cursorborder: 'none',
		cursorborderradius:'0'
	});