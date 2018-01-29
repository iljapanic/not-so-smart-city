const	concat = require('gulp-concat');
const config = require('../config');
const fs = require('fs');
const gulp = require('gulp');
const handleErrors = require('../lib/handleErrors');
const plumber = require('gulp-plumber');
const sequence = require('run-sequence');

// concat body text
const markdownConcatTextTask = function() {
	return gulp.src(config.markdown.concatText.src)
		.pipe(plumber())
		.pipe(concat(config.markdown.concatText.filename))
		.on('error', handleErrors)
		.pipe(gulp.dest(config.markdown.concatText.dest))
}

gulp.task('markdown-concatText', markdownConcatTextTask);


// concat footer
const markdownConcatFooterTask = function() {
	return gulp.src(config.markdown.concatFooter.src)
		.pipe(plumber())
		.pipe(concat(config.markdown.concatFooter.filename))
		.on('error', handleErrors)
		.pipe(gulp.dest(config.markdown.concatFooter.dest))
}

gulp.task('markdown-concatFooter', markdownConcatFooterTask);

// combine concat tasks
const markdownConcatTask = function(callback) {
	sequence('markdown-concatText', 'markdown-concatFooter', callback);
}

gulp.task('markdown-concat', markdownConcatTask);
