var gulp = require('gulp');

gulp.task('default', ['styles', 'scripts', 'notify'], function() {
	console.log('On s\'est bien occupé de votre code!');
	gulp.watch('./dev/less/*.less', ['styles']);
	gulp.watch('./dev/js/*.js', ['scripts']);
});