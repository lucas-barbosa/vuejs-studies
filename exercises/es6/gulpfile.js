const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', ['babel'])

gulp.task('babel', () => {
    return gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('assets/js'));
});

gulp.task('watch', () => {
    gulp.watch('src/js/*.js', ['babel']);
});