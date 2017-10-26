	//Filter

	if($('.filter-sm__wrap').lenght){
		var	fSmWrap = $('.filter-sm__wrap');
		var	fSmWrapOffset = $('.filter-sm__wrap').offset().top;
		var fSmWrapClone = $('<div class="filter-sm--clone">').css('height', fSmWrap.outerHeight(true)).insertAfter(fSmWrap).hide();
		$(window).scroll(function (){
			var winScrollTop = $(this).scrollTop();
			if(winScrollTop >= fSmWrapOffset){
				fSmWrap.addClass('is-fixed');
				fSmWrapClone.show();
			}else{
				fSmWrap.removeClass('is-fixed');
				fSmWrapClone.hide();
			}
		});
	}


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
		$('body').addClass('is-fixed-bg');
		return false

	});

	$('.js-filter-close').click(function (){
		$('.filter').removeClass('is-open');
		$('body').removeClass('is-fixed-bg');
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
		$('<div class="block-move">').insertAfter('.wrapper');
		$('.js-filter').appendTo('.block-move');
		$('.js-filter-open').html('фильтр').appendTo('.block-move');
	}

	var target = $('.footer');
	var targetPos = target.offset().top;
	var winHeight = $(window).height();
	var scrollToElem = targetPos - winHeight;
	$(window).scroll(function(){
		var winScrollTop = $(this).scrollTop();
		if(winScrollTop > scrollToElem){
			$('.js-filter-open').css({
				backgroundColor: '#fff',
				color          : '#222222'
			});
		}else{
			$('.js-filter-open').removeAttr('style');
		}
	});