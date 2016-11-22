var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Tasks
gulp.task('sass', function() {
    return gulp.src('assets/css/**/*.scss') // Gets all files ending with .scss in app/scss
        .pipe(sass())
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    });
});

gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('assets/css/**/*.sass', ['sass']);
    gulp.watch('assets/css/**/*.scss', ['sass']);
    // Other watchers
});
