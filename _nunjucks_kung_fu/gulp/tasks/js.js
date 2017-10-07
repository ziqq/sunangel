var gulp = require('gulp');
var include = require("gulp-include");
var rename  = require('gulp-rename');
var uglify = require('gulp-uglify');
var config = require('../config');
var browserSync = require('browser-sync');
var babel = require('gulp-babel');
reload = browserSync.reload;


gulp.task('js', ['js:libs'], function () {
    gulp.src(config.src.js + '/main.js')
        .pipe(include())
        .on('error', function(){notify("Javascript include error");})
        //.pipe(uglify())
        .pipe(babel())
        .pipe(gulp.dest(config.dest.js+'/'))
        .pipe(reload({stream: true}));
});

gulp.task('js:libs', function() {
	return gulp.src(config.src.js + '/libs.js')
	.pipe(include())
	.on('error', function(){notify("Javascript include error");})
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(uglify())
	.pipe(gulp.dest(config.dest.js + '/'))
	.pipe(reload({stream: true}));
});

gulp.task('js:watch', function() {
    gulp.watch(config.src.js + '/*', ['js']);
});