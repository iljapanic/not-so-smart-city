const gulp = require('gulp');
const sequence = require('run-sequence');

const htmlTask = function(callback) {
	sequence('markdown', 'html-parse', callback);
}

gulp.task('html', htmlTask);
