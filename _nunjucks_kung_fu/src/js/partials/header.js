
	$('.main').css('paddingBottom', $('.footer').outerHeight(true));

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

	//Mobile Munu
	if($(window).width() <= 1200 ){
		$('<div class="mobile-menu bg--dark_lighten"></div>').insertAfter('.wrapper');
		$('<a href="javascript:void(0);" class="js-mobile-menu-btn toggle-menu"><span></span></a>').appendTo('.callback');
		$('.js-menu').appendTo('.mobile-menu');
		$('<span class="mobile-menu__logo">sunangel</span>').insertBefore('.mobile-menu .menu');
	}

	$('.js-mobile-menu-btn').click(function() {
		$(this).toggleClass('on');
		$('.wrapper').toggleClass('is-menu-open');
		$('body').toggleClass('is-fixed');
		if($(window).width() <= 480 ){
			$('.header__top-line').toggleClass('is-menu-open');
			$('.js-filter-open').toggleClass('is-menu-open');
		}
		return false
	});
	$('.menu__item').click(function() {
		$('.menu__item').removeClass('is-active');
		$(this).addClass('is-active');
		$('.js-mobile-menu-btn').removeClass('on');
		$('.wrapper').removeClass('is-menu-open');
		$('.js-mobile-menu-btn').removeClass('on');
		$('.header__top-line').removeClass('is-menu-open');
		$('.js-filter-open').removeClass('is-menu-open');
		$('body').removeClass('is-fixed');
		return false
	});
	$(document).click(function(event) {
		if ($(event.target).closest('.mobile-menu').length) return;
		$('.wrapper').removeClass('is-menu-open');
		$('.js-mobile-menu-btn').removeClass('on');
		$('.header__top-line').removeClass('is-menu-open');
		$('.js-filter-open').removeClass('is-menu-open');
		$('body').removeClass('is-fixed');
		event.stopPropagation();
	});

	if($(window).width() <= 480 ){
		$('.js-action').appendTo('.header__top-line');
		$('.js-mobile-menu-btn').prependTo('.header__top-line');
		$('.callback').insertAfter('.mobile-menu__logo');
		$('.header__top-line').wrapInner('<div class="container"></div>').insertBefore('.wrapper');
		$('<div class="mobile-items bg--dark">').appendTo('.header__top-line .container');
		$('.mobile-search').clone().appendTo('.mobile-items');
		$('.user-enter').insertAfter('.mobile-menu');
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