$(document).ready(function () {

	//Partials
	//=include partials/header.js
	//=include partials/filter.js
	
	$(window).on("load",function(){
		$('.city-dropdown, .mobile-menu').niceScroll({
		cursorcolor: '#ee8b76',
		horizrailenabled: false,
		"verge": "500",
		cursorwidth: '3px',
		cursorborder: 'none',
		cursorborderradius:'0'
		});
	});

	//Custom Input
	$('.js-sa-input').focus(function (){
		$(this).parent('.sa-input__box').addClass('is-focus');
	});

	$('.js-sa-input').blur(function(){
		if($(this).val() == ''){
			$(this).parent('.sa-input__box').removeClass('is-focus');
		}

	});
	$('.js-sa-input').change(function(){
		if($(this).val() == ''){
			$(this).parent('.sa-input__box').removeClass('is-focus');
		}else{
			$(this).parent('.sa-input__box').addClass('is-focus');
		}
	});

	//Mask
	$('.phone-mask').mask("+7(999) 999-9999");


});