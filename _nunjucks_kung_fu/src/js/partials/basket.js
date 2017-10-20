
$(".js-basket-tab-content").not(":first").hide();
$(".js-basket-tab").click(function() {
	$(".js-basket-tab").removeClass("is-active").eq($(this).index()).addClass("is-active");
	$(".js-basket-tab-content").hide().eq($(this).index()).show();
}).eq(0).addClass("active");

$('.js-choice-payment').click(function (){
	$('.js-basket-tab').removeClass('is-active').eq($(this).index() - 1).addClass("is-active");
	$(".js-basket-tab-content").hide().eq($(this).index() - 1).show();
	$('.page-title').replaceWith('<h1 class="page-title">Оплата</h1>');
});

$('.js-address').click(function (){
	$('.js-basket-tab').removeClass('is-active').eq($(this).index()).addClass("is-active");
	$(".js-basket-tab-content").hide().eq($(this).index()).show();
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