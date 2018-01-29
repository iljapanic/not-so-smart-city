const browserSync = require('browser-sync');
const config = require('../config');
const data = require('gulp-data');
const fs = require('fs');
const gulp = require('gulp');
const handleErrors = require('../lib/handleErrors');
const nunjucks = require('gulp-nunjucks');
const plumber = require('gulp-plumber');

const htmlParseTask = function() {
	return gulp.src(config.html.src)
		.pipe(plumber())
		.pipe(data(function(file) {
			return JSON.parse(fs.readFileSync(config.html.meta));
		}))
		.on('error', handleErrors)
		.pipe(nunjucks.compile())
		.on('error', handleErrors)
		.pipe(gulp.dest(config.html.dest))
		.pipe(browserSync.stream());
}

gulp.task('html-parse', htmlParseTask);
