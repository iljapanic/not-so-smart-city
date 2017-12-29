const gulp = require('gulp');
const sequence = require('gulp-sequence');

const htmlTask = function(cb) {
	sequence('markdown-concat', 'markdown-parse', 'html-parse', cb);
}

gulp.task('html', htmlTask);
module.exports = htmlTask;