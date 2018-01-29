const gulp = require('gulp');
const sequence = require('gulp-sequence');

const defaultTask = function(callback) {
	sequence('markdown', 'html', 'include', 'css', 'js', 'images', 'watch', callback);
}

gulp.task('default', defaultTask);
module.exports = defaultTask;
