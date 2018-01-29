const gulp = require('gulp');
const sequence = require('run-sequence');

const markdownTask = function(callback) {
	sequence('markdown-concat', 'markdown-parse', callback);
}

gulp.task('markdown', markdownTask);
