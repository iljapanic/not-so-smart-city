const config = require('../config');
const gulp = require('gulp');
const watch = require('gulp-watch');

const watchTask = function() {
	watch([config.markdown.watch, config.markdown.watchIgnore], function() { gulp.start('markdown'); });
	watch(config.html.watch, function() { gulp.start('html'); });
	watch(config.data.watch, function() { gulp.start('html'); });
	watch(config.css.watch, function() { gulp.start('css'); });
	watch(config.js.watch, function() { gulp.start('js'); });
	watch(config.include.watch, function() { gulp.start('include'); });
}

gulp.task('watch', ['browserSync'], watchTask)
module.exports = watchTask
