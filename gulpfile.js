var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('js', function () {
  return gulp.src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('html', function() {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('css', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
})

gulp.task('all', function() {
  return gulp.start('html').start('js').start('css');
});

gulp.task('watch', function () {
  watch('src/js/**/*.js', function (events, done) {
    gulp.start('js', done);
  });
  watch('src/html/**/*.html', function (events, done) {
    gulp.start('html', done);
  });
});