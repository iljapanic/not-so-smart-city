const browserSync = require('browser-sync');
const config = require('../config');
const gulp = require('gulp');
const handleErrors = require('../lib/handleErrors');
const marked = require('gulp-marked');
const plumber = require('gulp-plumber');

const markdownParseTask = function() {
	gulp.src(config.markdown.parse.src)
		.pipe(plumber())
		.pipe(marked({
			// config
		}))
		.on('error', handleErrors)
		.pipe(gulp.dest(config.markdown.parse.dest))
		.pipe(browserSync.stream());
}

gulp.task('markdown-parse', markdownParseTask);
module.exports = markdownParseTask;
