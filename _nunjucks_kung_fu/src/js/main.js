$(document).ready(function () {

	//Partials
	//=include partials/header.js
	//=include partials/filter.js

	$('.js-checkbox-title').click(function (){
		$(this).addClass('is-active');			
	});

	$('.js-filter-showmore').click(function (){
		$(this).parent('.filter-item__list').find('.checkbox__title').removeClass('hidden');
	});

	$(window).on("load",function(){
		$('.city-dropdown, .mobile-menu, .popup').niceScroll({
			cursorcolor: '#ee8b76',
			horizrailenabled: false,
			autohidemode: false,
			boxzoom: false,
			"verge": "500",
			cursorwidth: '3px',
			cursorborder: 'none',
			cursorborderradius:'0'
		});
	});
	

	//Mask
	$('.phone-mask').mask("+7(999) 999-9999");

	//Custom Input
	$('.js-sa-input').focus(function (){
		$(this).parent('.sa-input__box').addClass('is-focus');
	}).blur(function(){
		if($(this).val() == ''){
			$(this).parent('.sa-input__box').removeClass('is-focus');
		}
	});

	//equalheights
	function heightses() {
		$('.product-item__title').height('auto').equalHeights();
	}heightses();
	$(window).resize(function() {
		heightses();
	});

	$('.seo-text__desc').not(':first').hide();
	$('.seo-text__readnext').click(function (){
		$('.seo-text__desc').slideDown('450');
	});


	//Product Slider
	$('.product-slider_big').bxSlider({
		pagerCustom : '.product-slider_small',
		responsive: true,
		touchEnabled: true,
		slideMargin: 0
	});
	//Section slider
	$('.product-slider').bxSlider({
		slideWidth: true,
		minSlides: 4,
		maxSlides: 4,
		responsive: true,
		touchEnabled: true,
		nextText: '<i class="fa fa-long-arrow-right"></i>',
		prevText: '<i class="fa fa-long-arrow-left"></i>',
		// pager: true,
		// pagerSelector: '.addition__slider_count',
		pagerType: 'short'
	});

	$('.js-extra-item').click(function (){
		$('.js-extra-item').removeClass('is-visible');
		$(this).addClass('is-visible')
	});
	$(document).click(function(event) {
		if ($(event.target).closest('.extra-item').length) return;
		$('.js-extra-item').removeClass('is-visible');
		event.stopPropagation();
	});

	//Popup
	$('.js-popup').fancybox();

	// $(document).on('afterLoad.fb', function( e, instance, slide ) {
	// 	slide.$slide.niceScroll({cursorcolor:"#FFF"});
	// });

	$('.fancybox-stage').niceScroll();

	$('img').on('dragstart', function(event) { event.preventDefault(); });


});