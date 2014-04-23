module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

	});

	// Load plugins
	grunt.loadNpmTasks('assemble');

	// Default task
	grunt.registerTask('default', []);

};
