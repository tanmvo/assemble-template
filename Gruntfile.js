export.modules = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

	});

	// Load plugins
	grunt.loadNpmTasks('');

	// Default task
	grunt.registerTask('default', ['']);
	
};
