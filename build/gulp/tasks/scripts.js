var gulp =require('gulp');
var rename = require('gulp-rename');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');


gulp.task('scripts', function(){
	var bundler = browserify({
		entries: ['./dev/js/main.js']

	});

	function bundle() {
		return bundler.bundle()
			.pipe(source('./web/assets/js/scripts.js'))
			.pipe(gulp.dest('./'));
	}
	bundle();

});