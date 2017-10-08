// var  gulp        = require('gulp');
// var  runSequence = require('run-sequence');
// var  svgSprite   = require("gulp-svg-sprite");
// var  concat      = require('gulp-concat');
// var  replace     = require('gulp-replace');
// var  inject      = require('gulp-inject-string');
// var  config      = require('../../config');

// //Sprite SVG
// gulp.task('svg-sprite', function () {
// 	return gulp.src(config.src.iconsSvg + '/*.svg')
// 	//.pipe(svgmin())
// 		.pipe(svgSprite({
// 			mode: {
// 				symbol: {
// 					dest: config.src.root,
// 					sprite: "sprite.svg",
// 					example: {
// 						dest: "sprite.html"
// 					}
// 				}
// 			}
// 		}))
// 		.pipe(gulp.dest(config.src.img));
// });


//   Переводим полученный SVG спрайт в строку,
//  Чтобы иметь возможность подключить его прямо из документа
//  ------------------------------------ 
// gulp.task('svg2string', function () {
// 	gulp.src(config.src.img + 'src/sprite.svg')
// 	// Меняем формат в .js
// 		.pipe(concat('sprite.js'))
// 		// Удаляем все переносы строк
// 		.pipe(replace("\n", ""))
// 		// Оборачиваем в переменную, которую потом запросим из HTML документа
// 		.pipe(inject.wrap('var SVG_SPRITE = [\'', '\'];'))
// 		// Перемещаем в общую директорию для .js файлов
// 		.pipe(gulp.dest(config.dest.js))
// });

// /*  Объединяем задачи в последовательность
//  ------------------------------------ */
// gulp.task('sprite:svg', function (callback) {
// 	runSequence(
// 		'svg-sprite',
// 		'svg2string',
// 		callback);
// });

// gulp.task('sprite:svg:watch', function() {
//     gulp.watch(config.src.iconsSvg + '/*.svg', ['sprite:svg']);
// });