$(document).ready(function () {	

	//Partials
	//=include partials/header.js
	//=include partials/slider.js
	//=include partials/filter.js
	//=include partials/basket.js

	$(window).on("load",function(){
		$('.city-dropdown, .mobile-menu, .popup, .filter__content, .filter-sm__inner, .favorite__inner, .cart__inner').niceScroll({
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

	$('.city-dropdown, .mobile-menu, .popup, .filter__content, .filter-sm__inner, .favorite__inner, .cart__inner').mouseover(function() {
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
	if($('.js-sa-input').length){
		$('.js-sa-input').focus(function (){
			$(this).parent('.sa-input__box').addClass('is-focus');
		}).blur(function(){
			if($(this).val() == ''){
				$(this).parent('.sa-input__box').removeClass('is-focus');
			}
		});
	}
	

	//equalheights
	function heightses() {
		$('.product-item__title').height('auto').equalHeights();
	}
	$(window).resize(function() {
		heightses();
	});

	if($('.product-item__title').length){
		heightses();
	}
	

	$('.seo-text__desc').not(':first').hide();
	$('.seo-text__readnext').click(function (){
		$('.seo-text__desc').slideDown('450');
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
	if($('.js-fancybox').length){
		$('.js-fancybox').fancybox({
			autoSize:!1,
			fitToView:!1,
			width:"100%",
			height:"auto",
			margin:0,
			padding:0,
			closeSpeed:0,
			helpers:{
				overlay:{
					locked:!1
				}
			}
		});
	}

	$('img').on('dragstart', function(event) { event.preventDefault(); });

	

	//map-text close
	$('.js-map-text-close').click(function (){
		$('.map__text').addClass('is-close');
	});
	$('.js-map-shops').click(function (){
		$('.map__text').removeClass('is-close');
	});

	//about nav
	$('.about-nav__item').click(function (){
		$('.about-nav__item').removeClass('is-active');
		$(this).addClass('is-active');
	});


	//Map
	if ($('#map').length){
		ymaps.ready(init);
		var myMap,
		myPlacemark1,
		myPlacemark2,
		myPin;

		function init(){
			myMap = new ymaps.Map("map", {
				center: [52.01662042, 47.81215808],
				zoom: 14
			});

			myMap.behaviors.disable(['scrollZoom']);

			myMap.controls
			.remove('searchControl')
			.remove('trafficControl')
			.remove('typeSelector')
			.add( 'routeEditor');

			myPin = new ymaps.GeoObjectCollection({}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/general/map-pin.svg',
				iconImageSize: [30, 42],
				iconImageOffset: [-3, -42]
			});

			myPlacemark1 = new ymaps.Placemark([52.02289564, 47.82915305], {
				balloonContentHeader: '<span class="map-pin__title"> Тц, ГринХаус, Салон Sunangel</span>',
				balloonContentBody: '<span class="map-shop__place">ул. Трнавская, 24</span><span class="map-shop__time"><i class="fa fa-clock-o"></i>10:00 — 22:00</span><span class="map-shop__phone"><i class="fa fa-phone-square"></i><a href="tel:">+7 (999) 000-00-00</a></span>',
				hintContent: 'Sunangel'
			});

			myPlacemark2 = new ymaps.Placemark([52.01096799, 47.79694039], {
				balloonContentHeader: '<span class="map-pin__title"> Тц, Оранж, Салон Sunangel</span>',
				balloonContentBody: '<span class="map-shop__place">ул. Волжская, 100</span><span class="map-shop__time"><i class="fa fa-clock-o"></i>9:00 — 21:00</span><span class="map-shop__phone"><i class="fa fa-phone-square"></i><a href="tel:">+7 (999) 000-00-00</a></span>',
				hintContent: 'Sunangel'
			});

			myPin.add(myPlacemark1).add(myPlacemark2);
			myMap.geoObjects.add(myPin);
		}
	}


});