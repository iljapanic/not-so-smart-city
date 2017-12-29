const browserSync = require('browser-sync')
const config = require('../config')
const gulp = require('gulp')

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: config.publicDir
    }
  })
})