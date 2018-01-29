const gulp = require('gulp');
const sequence = require('run-sequence');

const defaultTask = function(callback) {
	sequence('html', 'include', 'css', 'js', 'images', 'watch', callback);
}

gulp.task('default', defaultTask);
module.exports = defaultTask;
