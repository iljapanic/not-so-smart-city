const config = require('../config');
const gulp = require('gulp');
const watch = require('gulp-watch');

const watchTask = function() {
	watch(config.markdown.watch, function() { gulp.start('html'); });
	watch(config.html.watch, function() { gulp.start('html'); });
	watch(config.css.watch, function() { gulp.start('css'); });
}

gulp.task('watch', ['browserSync'], watchTask)
module.exports = watchTask