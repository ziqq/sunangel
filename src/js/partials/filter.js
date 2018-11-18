//Filter
$('.js-filter-top-item').on('click', function() {
    $('.js-filter-top-item').removeClass('is-active');
    $(this).addClass('is-active');
});
$(document).on('click', function(e) {
    if ($(e.target).closest('.js-filter-top-item, .js-filter').length) return;
    $('.js-filter-top-item').removeClass('is-active');
    $('.js-filter').removeClass('is-open');
    $('.go-top').removeAttr('style');
    $('body').removeClass('is-fixed-bg');
    $('.mask').removeAttr('style');
    e.stopPropagation();
});

$('.js-filter-sorting').on('click', function() {
    $('.js-filter-sorting').removeClass('is-active');
    $(this).addClass('is-active');
});

$('.js-filter-open').on('click', function() {
    $('.js-filter').addClass('is-open');
    $('.go-top').css('display', 'none');
    $('body').addClass('is-fixed-bg');

    if ($(window).width() >= 480) {
        $('.mask').css('display', 'block');
    }

    return false;
});

$('.js-filter-close').on('click', function() {
    $('.js-filter').removeClass('is-open');
    $('.go-top').removeAttr('style');
    $('body').removeClass('is-fixed-bg');
    $('.mask').removeAttr('style');
});

$('.js-checkbox-title').on('click', function() {
    if (
        $(this)
            .find('input[type=checkbox]')
            .is(':checked')
    ) {
        $(this).addClass('is-active');
    } else {
        $(this).removeClass('is-active');
    }
});

$('.js-filter-showmore').on('click', function() {
    $(this)
        .parent('.filter-item__list')
        .find('.checkbox')
        .removeClass('hidden');
    $(this).hide();
    return false;
});

if ($(window).width() <= 480) {
    $('.js-filter').appendTo('.block-move');
    $('.js-filter-open')
        .html('фильтр')
        .appendTo('.block-move');
}

if ($('.js-header-catalog').length) {
    var header = $('.header');
    var catHead = $('.js-header-catalog');
    if ($(window).width() > 480) {
        $(window).scroll(function() {
            var winScrollTop = $(this).scrollTop();
            if (winScrollTop >= header.height()) {
                catHead.addClass('is-visible');
            } else {
                catHead.removeClass('is-visible');
            }
        });
    }
}

if ($('.filter-top__wrap').length) {
    var fSmWrap = $('.filter-top__wrap');
    var fSmWrapClone = $('<div class="empty">')
        .css('height', fSmWrap.outerHeight(true))
        .insertAfter(fSmWrap)
        .hide();
    var fSmWrapOffset = fSmWrap.offset().top;
    if ($(window).width() > 480) {
        $(window).scroll(function() {
            var winScrollTop = $(this).scrollTop();
            if (winScrollTop >= fSmWrapOffset - fSmWrap.outerHeight() * 2) {
                fSmWrap.addClass('is-fixed');
                fSmWrapClone.show();
            } else {
                fSmWrap.removeClass('is-fixed');
                fSmWrapClone.hide();
            }
        });
    }
}
