const gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch')
;

gulp.task('sass', function(){
	return gulp.src('sass/*.scss')
		.pipe(sass().on('error',function(error){
			console.log(error);
		}))
		.pipe(gulp.dest('sass'))
});

gulp.task('watch', function(){
	gulp.watch('sass/*.scss', ['sass'])
});
