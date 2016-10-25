var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src(['scss/atomic.scss', 'scss/molecular.scss'])
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', ['sass']);
});
