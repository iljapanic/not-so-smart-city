const gulp = require('gulp');
const sequence = require('run-sequence');

const buildTask = function(callback) {
	sequence('html', 'include', 'css', 'js', 'images', callback);
}

gulp.task('build', buildTask);
module.exports = buildTask;
