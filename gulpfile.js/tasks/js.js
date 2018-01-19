const browserSync = require('browser-sync');
const	concat = require('gulp-concat');
const config = require('../config');
const gulp = require('gulp');
const handleErrors = require('../lib/handleErrors');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

const jsTask = function() {
	gulp.src(config.js.src)
		.pipe(plumber())
		.pipe(concat(config.js.bundle))
		.on('error', handleErrors)
		.pipe(gulp.dest(config.js.dest))
		.pipe(rename(config.js.bundleMin))
		.pipe(uglify())
		.on('error', handleErrors)
		.pipe(gulp.dest(config.js.dest))
		.pipe(browserSync.stream());
}


gulp.task('js', jsTask);
module.exports = jsTask;



// previous Browserify workflow

// const jsTask = function() {
// 	var b = browserify({
// 		entries: [config.js.entry],
// 		debug: true
// 	});

// 	return b.bundle()
// 		.pipe(source(config.js.bundle))
// 		.pipe(buffer())
// 		.pipe(sourcemaps.init())
// 		.on('error', handleErrors)
// 		// .pipe(uglify())
// 		.on('error', handleErrors)
// 		.pipe(sourcemaps.write('./'))
// 		.pipe(gulp.dest(config.js.dest))
// 		.pipe(browserSync.stream());
// }
