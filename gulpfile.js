var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    watch = require('gulp-watch');

gulp.task('build', function () {
   console.log('I am about to learn the essentials of React.js https://apps.twitter.com/app/8995886');
   return browserify('./source/app.js')
       .transform(babelify)
       .bundle()
       .pipe(source('snapterest.js'))
       .pipe(gulp.dest('./build/'))
});

//gulp.task("watch", function() {
//    gulp.watch('./source/**/*.js', ['build']);
//});

gulp.task('watch', function() {
    watch('./source/**/*.js', function() {
        gulp.start('build');
    });
});