	//Filter

	// let flTop = $('.filter__top');
	// let flBottom = $('.filter__bottom');
	// let flContent = $('.filter__content');

	// function fl(){
	// 	flContent.css({
	// 	paddingTop : flTop.height(),
	// 	paddingBottom : flBottom.height()
	// });
	// }fl();
	// $(window).resize(fl());
	

	$('.js-filter-open').click(function (){
		$('.filter').addClass('is-open');
	});

	$('.js-filter-close').click(function (){
		$('.filter').removeClass('is-open');
	});

	

	$(".filter__content").niceScroll(".filter__content_inner",{
		cursorcolor: '#ee8b76',
		horizrailenabled: false,
		"verge": "500",
		cursorwidth: '3px',
		cursorborder: 'none',
		cursorborderradius:'0'
	});