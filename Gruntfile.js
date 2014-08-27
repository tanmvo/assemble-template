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
		        helpers: 'src/templates/helpers/*.js',
		        partials: 'src/templates/includes/*.hbs',
		        layoutdir: 'src/templates/layouts',
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
		copy: {
			bootstrap: {
				expand: true,
					cwd: 'bower_components/bootstrap/dist/js/',
					src: 'bootstrap.min.js',
					dest: 'dist/assets/js/',
					flatten: true,
			},
			js: {
				expand: true,
					cwd: 'src/js/',
					src: '*.js',
					dest: 'dist/assets/js/',
					flatten: true,
			},
			img: {
				expand: true,
					cwd: 'src/img/',
					src: ['*'],
					dest: 'dist/assets/img/',
					flatten: true,
			}
		},
		less: {
			development: {
				options: {
					paths: ["assets/css"]
				},
					files: {
					"dist/assets/css/main.css": "src/less/main.less"
				},
			},
		},
		replace: {},
		watch: {
			options: {
					livereload: true,
				},
			hbs: {
				files: ['001/*.hbs', 'src/templates/**/*.hbs'],
				tasks: ['assemble'],
			},
			less: {
				files: ['src/less/*.less'],
				tasks: ['less'],
			},
			js: {
				files: ['src/js/*.js'],
				tasks: ['copy'],
			},
		},
	});
	// Load npm plugins to provide necessary tasks.
  	grunt.loadNpmTasks('assemble');
  	grunt.loadNpmTasks('grunt-contrib-clean');
  	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-text-replace');
  	grunt.loadNpmTasks('grunt-contrib-watch');
  	// Default task to be run.
  	grunt.registerTask('default', ['clean', 'copy', 'less', 'assemble']);
  	grunt.registerTask('serve', ['clean', 'copy', 'less', 'assemble', 'connect', 'watch']);
};
