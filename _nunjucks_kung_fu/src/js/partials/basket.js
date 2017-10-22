
$(".js-tab-content").not(":first").hide();
$(".js-tab").click(function() {
	$(".js-tab").removeClass("is-active").eq($(this).index()).addClass("is-active");
	$(".js-tab-content").hide().eq($(this).index()).show();
	heightses();
}).eq(0).addClass("active");

$('.js-choice-payment').click(function (){
	$('.js-tab').removeClass('is-active').eq($(this).index() - 1).addClass("is-active");
	$(".js-tab-content").hide().eq($(this).index() - 1).show();
	$('.page-title').replaceWith('<h1 class="page-title">Оплата</h1>');
});

$('.js-address').click(function (){
	$('.js-tab').removeClass('is-active').eq($(this).index()).addClass("is-active");
	$(".js-tab-content").hide().eq($(this).index()).show();
	$('.page-title').replaceWith('<h1 class="page-title">Адрес доставки</h1>');
});

$('.js-basket-card').click(function (){
	$('.page-title').replaceWith('<h1 class="page-title">Корзина</h1>');
});

$('.js-basket-pay').click(function (){
	$('.page-title').replaceWith('<h1 class="page-title">Оплата</h1>');
});

$('.js-basket-adress').click(function (){
	$('.page-title').replaceWith('<h1 class="page-title">Адрес доставки</h1>');
});

//LK

$('.lk-item__content').hide().prev().click(function() {
	$(this).parents('.lk-item__wrap').find('.lk-item__content').not(this).slideUp().prev().removeClass('is-active');
	$(this).next().not(':visible').slideDown().prev().addClass('is=active');
});