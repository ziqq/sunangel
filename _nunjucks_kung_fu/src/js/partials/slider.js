	//Product Slider
	if($('.product-slider').length){
		$('.product-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.product-slider__nav',
			arrows: false
		});
		$('.product-slider__nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.product-slider',
			centerMode: true,
			focusOnSelect: true,
			arrows: false,
			vertical: true,

			responsive: [{
				breakpoint: 1025,
				settings: {
					vertical: false,
				}
			}],
		});
	}
	//Section slider
	if($('.js-slider').length){
		$('.js-slider').slick({
			// autoplay: true,
			autoplaySpeed: 5000,
			speed: 2000,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			appendArrows: '.main-slider .slider__dots',

			dots:true,
			customPaging: function (slider, i)
			{
				return (i + 1) + '/' + slider.slideCount;
			},
			appendDots:('.main-slider .slider__dots'),
		});		
	}

	//Section slider
	if($('.js-addition-slider').length){
		$('.js-addition-slider').slick({
			autoplay: true,
			autoplaySpeed: 2000,
			speed: 2000,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			appendArrows: '.slider-addition .slider__dots',
			centerPadding: 0,

			dots:true,
			customPaging: function (slider, i)
			{
				return (i + 1) + '/' + slider.slideCount;
			},
			appendDots:('.slider-addition .slider__dots'),

			responsive: [{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3
				}

			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3
				}

			},{
				breakpoint: 481,
				settings: {
					slidesToShow: 1
				}

			},{
				breakpoint: 426,
				settings: {
					slidesToShow: 1
				}

			}],
		});		
	}	

	if($('.js-slider-brands').length){
		$('.js-slider-brands').slick({
			autoplay: true,
			autoplaySpeed: 2000,
			speed: 2000,
			infinite: true,
			slidesToShow: 7,
			slidesToScroll: 1,
			arrows: true,
			appendArrows: '.slider-brands .slider__dots',
			centerPadding: 0,

			dots:true,
			customPaging: function (slider, i)
			{
				return (i + 1) + '/' + slider.slideCount;
			},
			appendDots:('.slider-brands .slider__dots'),

			responsive: [{
				breakpoint: 1025,
				settings: {
					slidesToShow: 6
				}

			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 5
				}

			},{
				breakpoint: 481,
				settings: {
					slidesToShow: 3
				}

			},{
				breakpoint: 376,
				settings: {
					slidesToShow: 2
				}

			}],
		});		
	}	

	if($('.js-similar-slider').length){
		$('.js-similar-slider').slick({
			autoplay: true,
			autoplaySpeed: 2000,
			speed: 2000,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			appendArrows: '.slider-similar .slider__dots',
			centerPadding: 0,

			dots:true,
			customPaging: function (slider, i)
			{
				return (i + 1) + '/' + slider.slideCount;
			},
			appendDots:('.slider-similar .slider__dots'),

			responsive: [{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3
				}

			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3
				}

			},{
				breakpoint: 481,
				settings: {
					slidesToShow: 1
				}

			},{
				breakpoint: 426,
				settings: {
					slidesToShow: 1
				}

			}],
		});		
	}	

	//News Slider
	if($('.js-news-slider').length){
		$('.js-news-slider').slick({
			// autoplay: true,
			autoplaySpeed: 2000,
			speed: 2000,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			appendArrows: '.slider-news .slider__dots',
			centerMode: true,

			dots:true,
			customPaging: function (slider, i)
			{
				return (i + 1) + '/' + slider.slideCount;
			},
			appendDots:('.slider-news .slider__dots'),

			responsive: [{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2
				}

			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
				}

			}],
		});		
	}	