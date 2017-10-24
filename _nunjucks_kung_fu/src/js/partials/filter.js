	//Filter

	$('.js-filter-sm-item').click(function (){
		$('.js-filter-sm-item').removeClass('is-active');
		$(this).addClass('is-active');
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