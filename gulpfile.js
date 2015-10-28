var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    watch = require('gulp-watch');

gulp.task('build', function () {
   return browserify('./source/app.js')
       .transform(babelify)
       .bundle()
       .pipe(source('snapterest.js'))
       .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
    gulp.start('build');
    watch('./source/**/*.js', function() {
        gulp.start('build');
    });
});