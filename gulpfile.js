var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('connect', function() {
    connect.server({
        port:8080,
        livereload:true
    });
});

gulp.task('default', ['connect']);