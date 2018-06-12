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

gulp.task('serve',function(){
    browserSync.init(['./css/*.css','js/*js','views/*.php'],{
        proxy:
             "localhost/Unitec/Apliacion-distribuida/Proyecto/",
             http: true
    });
});

gulp.task('watch',['sass','serve'], function(){
    gulp.watch(['sass/**/*.scss'],['sass']);
});
