const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const autoPrefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(autoPrefixer())
        .pipe(sass({
            includePaths: ['sass']
        }))
        .pipe(gulp.dest('./css'));
}); 

gulp.task('serve', ['sass'], function() {
    browserSync.init(["./css/*.css", "./js/*.js", "./*.html"], {
      server: {
        baseDir: './'
      }
    });
});

gulp.task('watch',['sass','serve'], function(){
    gulp.watch(['sass/**/*.scss'],['sass']);
});
