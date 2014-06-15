'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		assemble: {
			options: {
		        flatten: true,
		        prettify: {
		          indent: 2,
		          condense: true,
		          newlines: true
		        },
		        assets: 'assets/',
		        helpers: 'templates/helpers/*.js',
		        partials: 'templates/includes/*.hbs',
		        layoutdir: 'templates/layouts',
		        layout: 'default.hbs',
		    },
	      	page001: {
	      		files: {'dist/001/': ['001/index.hbs']},
	      		options: {
	      			partials: '001/*.hbs',
	      			data: '001/*.json'
	      		}
	      	},
		},
		clean: ['dist/**/*'],
		connect: {
			options: {
				port: 8000,
				livereload: 35729,
				hostname: 'localhost',
				open: {appName: 'Google Chrome'},
				base: ['dist/']
			},
			livereload: true,
		},
		copy: {},
		replace: {},
		watch: {
			options: {
					livereload: true,
				},
			hbs: {
				files: ['001/*.hbs', 'templates/**/*.hbs'],
				tasks: ['assemble'],
			},
		},
	});
	// Load npm plugins to provide necessary tasks.
  	grunt.loadNpmTasks('assemble');
  	grunt.loadNpmTasks('grunt-contrib-clean');
  	grunt.loadNpmTasks('grunt-contrib-connect');
		grunt.loadNpmTasks('grunt-contrib-copy');
		grunt.loadNpmTasks('grunt-text-replace');
  	grunt.loadNpmTasks('grunt-contrib-watch');
  	// Default task to be run.
  	grunt.registerTask('default', ['clean', 'assemble']);
  	grunt.registerTask('test', ['clean', 'assemble', 'connect', 'watch']);
};
