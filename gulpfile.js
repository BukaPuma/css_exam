const gulp = require('gulp'); //Подключаем галп
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const sass = require('gulp-sass');

gulp.task('scss', function (done) {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/'));
    done();
})

gulp.task('watch', function () {
    watch(['./dist/*.html', './dist/*.css'], gulp.parallel(browserSync.reload));
    watch('./app/scss/**/*.scss', gulp.parallel('scss'));
});

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    })
});

gulp.task('default', gulp.parallel('server', 'watch', 'scss'));
