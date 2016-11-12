var gulp = require('gulp');
var sass = require('gulp-sass');


// Tasks

gulp.task('sass', function(){
  return gulp.src('assets/css/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('assets/css'))
});
