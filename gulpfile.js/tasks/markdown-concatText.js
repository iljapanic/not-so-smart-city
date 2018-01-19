const	concat = require('gulp-concat');
const config = require('../config');
const footer = require('gulp-footer');
const gulp = require('gulp');
const handleErrors = require('../lib/handleErrors');
const header = require('gulp-header');
const plumber = require('gulp-plumber');

const markdownConcatTextTask = function() {
	gulp.src(config.markdown.concatText.src)
		.pipe(plumber())
		.pipe(concat(config.markdown.concatText.filename))
		.on('error', handleErrors)
		.pipe(gulp.dest(config.markdown.concatText.dest))
}

gulp.task('markdown-concatText', markdownConcatTextTask);
module.exports = markdownConcatTextTask;
