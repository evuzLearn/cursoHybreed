'use strict';

var gulp = require('gulp');

gulp.task('copyFiles', ['copyIndex']);

gulp.task('copyIndex', function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('www'));
});