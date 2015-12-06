var gulp = require('gulp'),
    watch = require('gulp-watch'),
    rigger = require('gulp-rigger');

gulp.task('html', function () {
    gulp.src('*.html') //������� ����� �� ������� ����
        .pipe(rigger()) //�������� ����� rigger
        .pipe(gulp.dest('build/')); //�������� �� � ����� build
});

gulp.task('watch', function(){
    watch(['*.html'], function(event, cb) {
        gulp.start('html');
    });
});