var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var postcssImport = require('postcss-import');
var cssnano = require('cssnano');

gulp.task('sass', function() {
  gulp.src('scss/index.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([
        postcssImport(),
        cssnano()
      ]))
      .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass']);
});
