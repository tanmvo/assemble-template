module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// assemble config
		assemble: {
			// Add development option - produce .html files for testing 
			dev: {
				options: {
					flatten:  true,
					layout: 'templates/layouts/default.hbs',
					partials: ['templates/partials/*.hbs'],
					production: false
				},
				files: {
					'wip/': ['templates/pages/*.hbs']
				}
			},
			// Produce files for distribution 
			prod: {
				options: {
					flatten:  true,
					layout: 'templates/layouts/default.hbs',
					partials: ['templates/partials/*.hbs'],
					production: true
				},
				files: {
					'dist/': ['templates/pages/*.hbs', '!templates/pages/index.hbs']
				},
			}
		},
		// Clean directories before assemble
		clean: {
			dev: ['./wip/*'],
			prod: ['./dist/*']
		},
		// copy img/ folder into new directory
		copy: {
			dev: {
				files: [
					{
						expand: true,
						cwd: 'assets/',
						src: 'img/**',
						dest: 'wip/'
					}
				]
			},
			prod: {
				files: [
					{
						expand: true,
						cwd: 'assets/',
						src: 'img/**',
						dest: './dist/'
					}
				]
			}
		},
		// Browser-sync to view files on web browser
		browserSync: {
			bsFiles: {
				src: [
					'wip/*.html', 
					'dist/*.html',
					'img/**'
				]
			},
			options: {
				server: {
					host: 'localhost',
					baseDir: './wip/',
					index: false,
					ghostMode: {
						clicks: false,
						scroll: true,
						links: false,
						forms: false
					}
				}
			}
		}
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-browser-sync');

	// Default task
	grunt.registerTask('default', ['clean:dev', 'assemble:dev', 'copy:dev', 'browserSync']);
	grunt.registerTask('bs', ['browserSync']);
	grunt.registerTask('dist', ['clean:prod', 'assemble:prod', 'copy:prod']);

};
