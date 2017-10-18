	//Filter

	$('.js-filter-sorting').click(function(){
		$('.js-filter-sorting').removeClass('is-active');
		$(this).addClass('is-active');
	});
	
	$('.js-filter-open').click(function (){
		$('.filter').addClass('is-open');
		$('body').addClass('is-fixed-bg');
	});

	$('.js-filter-close').click(function (){
		$('.filter').removeClass('is-open');
		$('body').removeClass('is-fixed-bg');
	});

	$('.js-checkbox-title').click(function (){
		$(this).addClass('is-active');			
	});

	$('.js-filter-showmore').click(function (){
		$(this).parent('.filter-item__list').find('.checkbox').removeClass('hidden');
	});