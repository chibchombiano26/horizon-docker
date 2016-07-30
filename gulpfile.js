// Dependencies
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var exec = require('gulp-exec');

var exec = require('child_process').exec;

gulp.task('tsc', function (cb) {
  exec('npm run tsc', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})
 
// Task
gulp.task('default', ['tsc'], function() {
	// listen for changes
	livereload.listen();	
	// configure nodemon
	nodemon({
		// the script to run the app
		script: 'server.js',
		ext: 'ts'
	}).on('restart', ['tsc'], function(){
		// when the app has restarted, run livereload.				
		gulp.src('server.js')
			.pipe(livereload())
			.pipe(notify('Reloading page, please wait...'));
	})
})