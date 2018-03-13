const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

gulp.task('default', ['watch']);

// basic babel task
gulp.task('babel', () => {
    return gulp.src('src/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('assets/js'));
});

// basic webpack task   
gulp.task('webpack', ['babel'], () => {
    return gulp.src('assets/js/sum.js')
        .pipe(webpack({
            output: {
                path: '/assets/webpacked',
                filename: 'app.js'
            }
        }))
        .pipe(gulp.dest('assets/webpacked'));
});

// the watch task
gulp.task('watch', () => {
    gulp.watch('src/*.js', ['babel', 'webpack']);
});