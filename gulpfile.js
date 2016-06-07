/**
 * @author: Kvkens(kvkens@qq.com)
 * @date: 2016-06-07 14:51:04
 * @description:FE
 */

var gulp    = require('gulp'),
	connect = require('gulp-connect');

gulp.task('server', function() {
	connect.server({
		livereload: true
	});
});

gulp.task('livereload',function() {
	return gulp.src('./**/*.{html,css,js}')
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('./**/*.{html,css,js}', ['livereload']);
});

gulp.task('default', ['server', 'watch']);