const	concat = require('gulp-concat');
const config = require('../config');
const gulp = require('gulp');
const handleErrors = require('../lib/handleErrors');
const plumber = require('gulp-plumber');

const markdownConcatTask = function() {
	gulp.src(config.markdown.concat.src)
		.pipe(plumber())
		.pipe(concat(config.markdown.concat.filename))
		.on('error', handleErrors)
		.pipe(gulp.dest(config.markdown.concat.dest))
}

gulp.task('markdown-concat', markdownConcatTask);
module.exports = markdownConcatTask;
