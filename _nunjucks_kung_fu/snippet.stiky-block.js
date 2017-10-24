var elTarget = $('.js-user-items--list');
var elRelative = $('.js-user-items--active');

if ((elTarget.length > 0 && elRelative.length) && $(window).width() > 768) {
	fixTargetByRelativeElement(elTarget, elRelative);
}

function fixTargetByRelativeElement(elTarget, elRelative) {

			var scrollPrev = 0; // Предыдущее значение скролла
			var firstScrollUp = false; // Параметр начала сколла вверх
			var firstScrollDown = false; // Параметр начала сколла вниз
			var dHeightCur = fixDelta(elTarget);
			var dHeightPrev = fixDelta(elTarget);

			//Функция вычисления дельты от размера элемента и размера окна
			function fixDelta(elTarget) {
				dHeight = 15;
				if ($(window).height() < elTarget.outerHeight()) {
					return dHeight = elTarget.outerHeight() - $(window).height() + 30;
				} else return 15;
				alert(dHeight);
			}

			//Фукнция проверки достигли ли верхней границы элемента
			function topScrolledUp(elTarget, scrolled) {
				if (elTarget.offset().top - 15 < scrolled) {
					return false;
				} else {
					return true;
				}
			}

			//Фукнция проверки достигли ли нижней границы элемента
			function topScrolledDown(elTarget, scrolled) {
				var dHeight = fixDelta(elTarget);
				if (elTarget.offset().top + dHeight - 30 > scrolled) {
					return false;
				} else {
					return true;
				}
			}

			//Фукнция прикрепления элемента по верхней границе
			function fixTop(elTarget, elRelative, scrolled) {
				if (scrolled > elRelative.offset().top + 15) {
					elTarget.css({
						"position": "fixed",
						"top": 15 + "px"
					});
					return true;
				} else return false;
			}


			//Фукнция прикрепления элемента по нижней границе
			function fixBottom(elTarget, elRelative, scrolled) {
				var dHeight = fixDelta(elTarget);
				if (scrolled > elRelative.offset().top + dHeight - 30) {
					elTarget.css({
						"position": "fixed",
						"top": 30 - dHeight + "px",
						"z-index": 3
					});
					return true;
				} else return false;
			}

			//Функция открепления окна в низу по нижним границам целевого и относительного элемента
			function fixBottomPos(elTarget, elRelative, scrolled) {
				var dHeight = fixDelta(elTarget);
				var maxBottomPosition = elRelative.offset().top + elRelative.outerHeight() - elTarget.outerHeight() - 15 + dHeight;
				if (scrolled > maxBottomPosition) {
					elTarget.css({
						"position": "absolute",
						"top": maxBottomPosition - dHeight + 15 + "px"
					});
					return true;
				} else return false;
			}
			//Функция смены fixed на Absolute относительно текущей позиции окна.
			function fixChanged(elTarget) {
				var currPos = elTarget.offset().top;
				elTarget.css({
					"position": "absolute",
					"top": currPos + "px"
				});
			}

			//Функция возврата в исходное состояние
			function fixReset(elTarget, elRelative, scrolled) {
				if (scrolled <= elRelative.offset().top - 15) {
					elTarget.removeAttr("style");
				}
			}

			$(window).scroll(function () {
				var scrolled = $(window).scrollTop(); // Высота скролла в px

				// Если скроллим
				if (scrolled > 0) {
						if (scrolled > scrollPrev) { //Если скролим в низ
							dHeightCur = fixDelta(elTarget);
							if (!fixBottomPos(elTarget, elRelative, scrolled)) { //Если не достигли самого низа
								if (topScrolledDown(elTarget, scrolled)) { //Если дошли до нижней границы целевого элемента
									fixBottom(elTarget, elRelative, scrolled); //Закрепить элемент на экране по нижней границе
								}
							}
							if (firstScrollUp || dHeightCur > dHeightPrev) { //Если сменили направление скролла
								fixChanged(elTarget);//Открепить и поместить элемент по его текущему положению
							}
							firstScrollDown = true;
							firstScrollUp = false;
						}

						else { //Если скролим вверх
							if (topScrolledUp(elTarget, scrolled)) { //Если достигли верхней точки элемента на экране
								if (!fixBottomPos(elTarget, elRelative, scrolled)) { //Если элемент не находится ниже максимальной возможной позиции (выровнен по нижней границе относительного элемента)
									if (!fixTop(elTarget, elRelative, scrolled)) { //Если не закрпляем по верхней границе
										fixReset(elTarget, elRelative, scrolled); //Сбросить значения крепления элемента
									}
								}
							}
							if (firstScrollDown) { //Если сменили направление скролла
								fixChanged(elTarget); //Открепить и поместить элемент по его текущему положению
							}
							firstScrollDown = false;
							firstScrollUp = true;
						}

						scrollPrev = scrolled;
						dHeightPrev = fixDelta(elTarget);
					}
				});
		}