$(document).ready(function () {

	//Partials
	//=include partials/header.js
	//=include partials/filter.js
	//=include partials/basket.js

	$(window).on("load",function(){
		$('.city-dropdown, .mobile-menu, .popup, .filter__content, .filter-sm__dropdown').niceScroll({
			cursorcolor: '#baab82',
			horizrailenabled: false,
			autohidemode: false,
			boxzoom: false,
			"verge": "500",
			cursorwidth: '4px',
			cursorborder: 'none',
			cursorborderradius:'0'
		});
	});

	$('.city-dropdown, .mobile-menu, .popup, .filter__content, .filter-sm__dropdown').mouseover(function() {
		$(this).getNiceScroll().resize();
	});

	if($(window).width <= 768 ){
		$('.filter-item__wrap').remove();
	}
	

	//Mask
	if($('.phone-mask').length){
		$('.phone-mask').mask("+7(999) 999-9999");
	}

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
	if($('.product-slider_big').length){
		$('.product-slider_big').bxSlider({
			pagerCustom : '.product-slider_small',
			responsive: true,
			touchEnabled: true,
			slideMargin: 0
		});
	}
	//Section slider
	if($('.js-product-slider').length){
		$('.js-product-slider').each(function(){
			$(this).slick({
			autoplay: true,
			autoplaySpeed: 2000,
			speed: 2000,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,

			customPaging: function (slider, i)
			{
				return i + 1;
			},
			dots:true,
			appendDots:('.product-slider .addition-slider__dots, .product-slider .similar-slider__dots'),

			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4
				}

			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3
				}

			},{
				breakpoint: 481,
				settings: {
					slidesToShow: 1
				}

			},{
				breakpoint: 425,
				settings: {
					slidesToShow: 1
				}

			}],
		});
		})
		
	}

	//Favorits & Buy button in product
	// if($(window).width() <= 425){
	// 	$('.js-buy-button').insertBefore('.mobile-menu');
	// }
	

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
	if($('.js-fancybox').length){
		$('.js-fancybox').fancybox({

			beforeShow: function() {
				$("body").css({
					'overflow-y': 'hidden'
				});
			},
			afterClose: function() {
				$("body").css({
					'overflow-y': 'visible'
				});
			}
	});
	}
	

	// $(document).on('afterLoad.fb', function( e, instance, slide ) {
	// 	slide.$slide.niceScroll({cursorcolor:"#FFF"});
	// });

	$('.fancybox-stage').niceScroll();

	$('img').on('dragstart', function(event) { event.preventDefault(); });


});