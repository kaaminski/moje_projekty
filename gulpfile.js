'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('buildcss', function () {
  return gulp.src('./dev-assets/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./prod-assets'));
});