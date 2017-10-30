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
		$('body').addClass('is-fixed-bg');
		return false

	});

	$('.js-filter-close').click(function (){
		$('.filter').removeClass('is-open');
		$('.go-top').removeAttr('style');
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

	if($('.filter__wrap').length){
		var	fSmWrap = $('.filter__wrap');
		var	fSmWrapOffset = fSmWrap.offset().top;
		var fSmWrapClone = $('<div class="filter__wrap--clone">').css('height', fSmWrap.outerHeight(true)).insertAfter(fSmWrap).hide();
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