const gulp = require('gulp');  
const sass = require('gulp-sass');  
const browserSync = require('browser-sync');


gulp.task('sass', function () {  
    gulp.src('sass/app.sass')
        .pipe(sass({includePaths: ['sass']}))
        .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["*.html","css/*.css", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("sass/*.sass", ['sass']);
    gulp.watch("sass/modules/*.sass", ['sass']);
});