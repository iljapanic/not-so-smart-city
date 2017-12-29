const gulp = require('gulp');
const sequence = require('gulp-sequence');

const markdownTask = function(cb) {
	sequence('markdown-concat', 'markdown-parse', cb);
}

gulp.task('markdown', markdownTask);
module.exports = markdownTask;
