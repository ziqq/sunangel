	if ($(window).width() <= 480) {
		//скрытие и отображение меню при скроле
		var header = $(".header__top-line"); // Меню
		var wrapp = $(".wrapper"); // Wrapper
		var main = $('.main');
		var scrollPrev = 0; // Предыдущее значение скролла

		$(window).scroll(function () {
			var scrolled = $(window).scrollTop(); // Высота скролла в px
			var firstScrollUp = false; // Параметр начала сколла вверх
			var firstScrollDown = false; // Параметр начала сколла вниз

			// Если скроллим
			if (scrolled > 0) {
				// $('.header_clone').show();
				// Если текущее значение скролла > предыдущего, т.е. скроллим вниз
				if (scrolled > scrollPrev) {
					firstScrollUp = false; // Обнуляем параметр начала скролла вверх
					// Если меню видно
					if (scrolled < header.height() + header.offset().top) {
						// Если только начали скроллить вниз
						if (firstScrollDown == false) {
							var topPosition = header.offset().top; // Фиксируем текущую позицию меню
							header.css({
								"top": topPosition + "px"
							});
							firstScrollDown = true;
						}
						// Позиционируем меню абсолютно
						header.css({
							"position": "absolute"
						});
						// wrapp.css({
						// 	paddingTop: 60
						// });
						// Если меню НЕ видно
					} else {
						// Позиционируем меню фиксированно вне экрана
						header.css({
							"position": "fixed",
							"top": "-" + header.outerHeight(true) + "px"
						});
					}

					// Если текущее значение скролла < предыдущего, т.е. скроллим вверх
				} else {
					firstScrollDown = false; // Обнуляем параметр начала скролла вниз
					// Если меню не видно
					if (scrolled > header.offset().top) {
						// Если только начали скроллить вверх
						if (firstScrollUp === false) {
							var topPosition = header.offset().top; // Фиксируем текущую позицию меню
							header.css({
								"top": topPosition + "px"
							});
							firstScrollUp = true;
						}
						// Позиционируем меню абсолютно
						header.css({
							"position": "absolute"
						});
						// wrapp.css({
						// 	paddingTop: 60
						// });
					} else {
						// Убираем все стили
						header.removeAttr("style");
						// wrapp.removeAttr("style");
					}
				}
				// Присваеваем текущее значение скролла предыдущему
				scrollPrev = scrolled;
			}

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

	if($(window).width() <= 1024 ){
		$('<a href="javascript:void(0);" class="js-mobile-menu-btn toggle-menu"><span></span></a>').prependTo('.header__bottom');
	}

	//Mobile Munu
	if($(window).width() <= 480 ){
		var hTopLine = $('.header__top-line');

		$('js-mobile-menu-btn').insertAfter('.logo_mobile');
		$('.js-action').prependTo('.menu__inner');
		$('.js-menu').appendTo(hTopLine);
		$('<div class="header-clone">').css('height', $(hTopLine).innerHeight()).insertAfter(hTopLine);
	}

	$('.js-mobile-menu-btn').click(function() {
		$(this).toggleClass('on');
		$('.js-menu').slideToggle();
		$('body').toggleClass('is-fixed');
		if($('.go-top').hasClass('is-visible')){
			$('.go-top').toggleClass('is-visible');
		}
		$('.js-filter-open').toggleClass('is-disable');
		return false
	});
	$(document).click(function(event) {
		if ($(event.target).closest('.js-menu').length) return;
		$('.js-mobile-menu-btn').removeClass('on');
		$('.js-filter-open').removeClass('is-disable');
		$('body').removeClass('is-fixed');
		if($('.go-top').hasClass('is-visible')){
		}else{
			$('.go-top').addClass('is-visible');
		}
		event.stopPropagation();
	});

	if($(window).width() <= 1199 ){
		$('.js-mobile-menu-btn').appendTo('.header__bottom');
	}

	if($(window).width() <= 480 ){
		$('.js-mobile-menu-btn').prependTo('.header__top-line');
		$('.callback').appendTo('.header__top-line');
	}

	//Search
	$('.js-search').click(function (){
		$('.mobile-search').addClass('is-visible');
		return false
	});
	$(document).click(function(event) {
		if ($(event.target).closest('.mobile-search').length) return;
		$('.mobile-search').removeClass('is-visible');
		event.stopPropagation();
	});

	//Auth Close
	if($(window).width() <= 480 ){
		$('.js-auth--open').click(function (){
			$('.user-enter').addClass('is-open');
			$('body').addClass('is-fixed-bg');
		});
	}
	$('.js-close').click(function (){
		$('.user-enter').removeClass('is-open');
		$('body').removeClass('is-fixed-bg');
	});

		$(".auth__item").not(":first").hide();
		$(".auth__tab").click(function() {
			$('.auth__tab').removeClass('is-active');
			$(this).addClass('is-active');
			$(".auth__item").hide().eq($(this).index()).fadeIn();
		}).eq(0).addClass("is-active");