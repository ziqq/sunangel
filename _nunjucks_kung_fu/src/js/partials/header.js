	if ($(window).width() <= 480) {
		var lastScrollTop = 0;
		var header = $('.header');
		var headerClone = $('<div class="header-clone">').css('height', header.innerHeight()).insertBefore(header).hide();
		$(window).scroll(function(event){
			var st = $(this).scrollTop();
			if (st > lastScrollTop){   
				header.removeClass('is-fixed');
				headerClone.hide();
			} else {
				header.addClass('is-fixed');
				headerClone.show();
			}
			lastScrollTop = st;
		});
	}

	//City hover
	$('.js-city-hover').click(function (){
		$(this).toggleClass('is-active');
	});
	$(document).click(function(event) {
		if ($(event.target).closest('.js-city-hover').length) return;
		$('.js-city-hover').removeClass('is-active');
		event.stopPropagation();
	});

	if($(window).width() <= 1199 ){
		$('.js-mobile-menu-btn').appendTo('.header__bottom');
	}


	if($(window).width() <= 1024 ){
		$('<a href="javascript:void(0);" class="js-mobile-menu-btn toggle-menu"><span></span></a>').prependTo('.header__bottom');
	}

	//Mobile Munu
	if($(window).width() <= 480 ){
		var header = $('.header');

		$('<div class="block-move">').insertAfter('.wrapper');
		$('js-mobile-menu-btn').insertAfter('.logo_mobile');
		$('.js-action').prependTo('.menu__inner');
		$('.js-menu').appendTo(header);
		$('.js-mobile-menu-btn').prependTo(header);
		$('.callback').appendTo(header);
		$('.js-user-enter').appendTo('.block-move');
		$('.js-search-block').appendTo('.block-move');
	}

	$('.js-mobile-menu-btn').click(function() {
		$(this).toggleClass('on');
		$('.js-menu').slideToggle();
		$('body').toggleClass('is-fixed-bg');
		if($('.go-top').hasClass('is-visible')){
			$('.go-top').toggleClass('is-visible');
		}
		$('.js-filter-open').toggleClass('is-disable');
		return false
	});

	$(document).click(function(event) {
		if($(window).width() <= 1024){	
			if ($(event.target).closest('.js-menu, .js-user-enter, .js-search-block, .js-mobile-menu-btn').length) return;
			$('.js-mobile-menu-btn').removeClass('on');
			$('.js-filter-open').removeClass('is-disable');
			$('body').removeClass('is-fixed-bg');

			if($('.go-top').hasClass('is-visible')){
			}else{
				$('.go-top').addClass('is-visible');
			}		
			$('.js-menu').slideUp();
			event.stopPropagation();
		}
	});
	
	//Search
	$('.js-search').keyup(function (){
		if($(this).val() != ''){
			$('.search__result').slideDown();
		}else if($(this).val() == ''){
			$('.search__result').slideUp();
		}
	});


	//Auth Close
	if($(window).width() <= 480 ){
		$('.js-auth').click(function (){
			$('.js-user-enter').addClass('is-open');
			$('body').addClass('is-fixed-bg');
		});

		$('.js-search').click(function (){
			$('.js-search-block').addClass('is-open');
			$('body').addClass('is-fixed-bg');
		});
	}
	$('.js-close').click(function (){
		$('.js-user-enter').removeClass('is-open');
		$('.js-search-block').removeClass('is-open');
		$('body').removeClass('is-fixed-bg');
	});

	$(".js-tab-item").not(":first").hide();
	$(".js-tab").click(function() {
		$('.js-tab').removeClass('is-active');
		$(this).addClass('is-active');
		$(".js-tab-item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("is-active");

	$(".js-tab-item--clone").not(":first").hide();
	$(".js-tab--clone").click(function() {
		$('.js-tab--clone').removeClass('is-active');
		$(this).addClass('is-active');
		$(".js-tab-item--clone").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("is-active");