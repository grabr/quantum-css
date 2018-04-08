const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');
const postcssMergeRules = require('postcss-merge-rules');
const cssnano = require('cssnano');
const mqpacker = require('css-mqpacker');

gulp.task('sass', function() {
  gulp.src('scss/index2.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([
        mqpacker(),
        postcssMergeRules(),
        cssnano(),
      ]))
      .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass']);
});
