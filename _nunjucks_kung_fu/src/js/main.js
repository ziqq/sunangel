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
	$('.js-su-input').focus(function (){
		$(this).parent('.su-input__box').addClass('is-focus');
	});

	$('.js-su-input').blur(function(){
		if($(this).val() == ''){
			$(this).parent('.su-input__box').removeClass('is-focus')
		}

	});

	
	// $(window).on("load",function(){
	// 	$('.city-dropdown').mCustomScrollbar();
	// });

});