
$(".js-basket-tab-content").not(":first").hide();
$(".js-basket-tab").click(function() {
	$(".js-basket-tab").removeClass("is-active").eq($(this).index()).addClass("is-active");
	$(".js-basket-tab-content").hide().eq($(this).index()).show();
}).eq(0).addClass("active");