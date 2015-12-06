var gulp = require('gulp'),
    watch = require('gulp-watch'),
    rigger = require('gulp-rigger');

gulp.task('html', function () {
    gulp.src('*.html') //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest('build/')); //Выплюнем их в папку build
});

gulp.task('watch', function(){
    watch(['*.html'], function(event, cb) {
        gulp.start('html');
    });
});