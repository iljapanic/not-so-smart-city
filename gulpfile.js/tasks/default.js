const gulp = require('gulp');
const sequence = require('gulp-sequence');

const defaultTask = function(cb) {
	sequence('html', 'css', 'watch', cb);
}

gulp.task('default', defaultTask);
module.exports = defaultTask;
