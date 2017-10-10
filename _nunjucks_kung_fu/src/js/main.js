$(document).ready(function () {
	
	//City hover
	$('.js-city-hover').click(function (){
		$(this).toggleClass('is-active');
	});
	$(document).click(function(event) {
		if ($(event.target).closest('.js-city-hover').length) return;
		$('.js-city-hover').removeClass('is-active');
		event.stopPropagation();
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
	// $('.js-sa-input').change(function(){
	// 	$(this).parent('.sa-input__box').addClass('is-focus');
	// });
	$('.js-sa-input').change(function(){
		if($(this).val() == ''){
			$(this).parent('.sa-input__box').removeClass('is-focus');
		}
	});

	//Authentification
	$(".auth__item").not(":first").hide();
	$(".auth__tab").click(function() {
		$('.auth__tab').removeClass('is-active');
		$(this).addClass('is-active');
		$(".auth__item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("is-active");



	//Mask
	$('.phone-mask').mask("+7(999) 999-9999");

	
	// $(window).on("load",function(){
	// 	$('.city-dropdown').mCustomScrollbar();
	// });

});