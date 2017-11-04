	//Filter

	$('.js-filter-sm-item').click(function (){
		$('.js-filter-sm-item').removeClass('is-active');
		$(this).addClass('is-active');
	});
	$(document).click(function(event) {
		if ($(event.target).closest('.js-filter-sm-item').length) return;
		$('.js-filter-sm-item').removeClass('is-active');
		event.stopPropagation();
	});

	$('.js-filter-sorting').click(function(){
		$('.js-filter-sorting').removeClass('is-active');
		$(this).addClass('is-active');
	});
	
	$('.js-filter-open').click(function (){
		$('.filter').addClass('is-open');
		$('.go-top').css('display', 'none');
		$('body').addClass('is-fixed');
		$('.mask').css('display', 'block');
		return false

	});

	$('.js-filter-close').click(function (){
		$('.filter').removeClass('is-open');
		$('.go-top').removeAttr('style');
		$('body').removeClass('is-fixed');
		$('.mask').removeAttr('style');
	});

	$('.js-checkbox-title').click(function (){
		if($(this).find('input[type=checkbox]').is(':checked')){
			$(this).addClass('is-active');
		}else{
			$(this).removeClass('is-active');
		}
		
	});

	$('.js-filter-showmore').click(function (){
		$(this).parent('.filter-item__list').find('.checkbox').removeClass('hidden');
		$(this).hide();
	})

	if($(window).width() <= 480){
		$('.js-filter').appendTo('.block-move');
		$('.js-filter-open').html('фильтр').appendTo('.block-move');
	}

	
	if ($('.js-header-catalog').length) {
		var header = $('.header');
		var catHead = $('.js-header-catalog');
		if($(window).width() > 480){
			$(window).scroll(function (){
				var winScrollTop = $(this).scrollTop();
				if(winScrollTop >= header.height()){
					catHead.addClass('is-visible');
				}else{
					catHead.removeClass('is-visible');
				}
			});
		}
		
	}

	if($('.filter-sm__wrap').length){
		var	fSmWrap = $('.filter-sm__wrap');
		var fSmWrapClone = $('<div class="empty">').css('height', fSmWrap.outerHeight(true)).insertAfter(fSmWrap).hide();
		var	fSmWrapOffset = fSmWrap.offset().top;
		if($(window).width() > 480){
			$(window).scroll(function (){
				var winScrollTop = $(this).scrollTop();
				if(winScrollTop >= fSmWrapOffset - fSmWrap.outerHeight(true)){
					fSmWrap.addClass('is-fixed');
					fSmWrapClone.show();
				}else{
					fSmWrap.removeClass('is-fixed');
					fSmWrapClone.hide();
				}
			});
		}
	}	
	