$('.js-tab-content')
    .not(':first')
    .hide();
$('.js-tab').on('click', function() {
    $('.js-tab').removeClass('is-active');
    $(this).addClass('is-active');
    $('.js-tab-content')
        .hide()
        .eq($(this).index())
        .show();
    heightses();
});

$('.js-choice-payment').on('click', function() {
    $('.js-tab').removeClass('is-active');
    $('.js-basket-pay').addClass('is-active');
    $('.js-tab-content')
        .hide()
        .filter('.tab-item_pay')
        .show();
    $('.page-title').replaceWith('<h1 class="page-title">Оплата</h1>');
});

$('.js-address').on('click', function() {
    $('.js-tab').removeClass('is-active');
    $('.js-basket-adress').addClass('is-active');
    $('.js-tab-content')
        .hide()
        .filter('.tab-item_delivery')
        .show();
    $('.page-title').replaceWith('<h1 class="page-title">Адрес доставки</h1>');
});

$('.js-basket-card').on('click', function() {
    $('.page-title').replaceWith('<h1 class="page-title">Корзина</h1>');
});

$('.js-basket-pay').on('click', function() {
    $('.page-title').replaceWith('<h1 class="page-title">Оплата</h1>');
});

$('.js-basket-adress').on('click', function() {
    $('.page-title').replaceWith('<h1 class="page-title">Адрес доставки</h1>');
});

//LK

$('.lk-item__content')
    .hide()
    .prev()
    .on('click', function() {
        $(this)
            .parents('.lk-item__wrap')
            .find('.lk-item__content')
            .not(this)
            .slideUp()
            .prev()
            .removeClass('is-active');
        $(this)
            .next()
            .not(':visible')
            .slideDown()
            .prev()
            .addClass('is=active');
    });
