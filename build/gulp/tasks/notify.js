var gulp = require('gulp');
var notify = require('gulp-notify');

gulp.task('notify', function(){
	module.exports = notify.onError(function(error){
	  console.log(error);

	  return {
	    title: 'Error',
	    message:  '<%= error.message %>' 
	  };
	});
});