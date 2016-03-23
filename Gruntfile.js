module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") + "\\n" %>' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>; */ <%= "\\n" %>'
		},
		copy: {
			vendorjs: {
				files: [
					{
						expand: true,
						flatten: true,
						cwd: 'vendor/bower_components/',
						src: [
							'jquery/dist/jquery.min.js',
							'html5shiv/dist/html5shiv.min.js',
							'respond-minmax/dest/respond.min.js'
						],
						dest: 'public/js/vendor/'
					}
				]
			},
			fonts: {
				files: [
					{
						expand: true,
						flatten: true,
						src: 'vendor/bower_components/entypo/font/*.{svg,ttf,eot,woff}',
						dest: 'public/css/'
					}
				]
			}
		},
		concat: {
			plugins: {
				src: 'source/js/plugins/*.js',
				dest: 'source/js/_debug/plugins.js'
			},
			allscripts: {
				src: ['source/js/_debug/plugins.js','source/js/main.js'],
				dest: 'public/js/scripts.js'
			}
		},
		uglify: {
			options: {
				banner: '<%= meta.banner %>'
			},
			allscripts: {
				src:  'public/js/scripts.js',
				dest: 'public/js/scripts.min.js'
			}
		},
		less: {
			main: {
				options: {
					yuicompress: false
				},
				files: {
					'public/css/styles.css': 'source/less/_order.less'
				}
			}
		},
		cssmin: {
			options: {
				keepSpecialComments: 0
			},
			main: {
				src: 'public/css/styles.css',
				dest: 'public/css/styles.min.css'
			}
		},
		watch: {
			files: [
				'source/js/plugins/*.js',
				'source/js/*.js',
				'source/less/**/*.less',
				'grunt.js'
			],
			// Watch doesn't include imagemin or criticalcss tasks (faster)
			tasks: ['concat', 'uglify', 'less', 'cssmin']
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'source/images/',
					src: ['**/*.{png,jpg,gif,svg,ico}'],
					dest: 'public/images/'
				}]
			},
			options: {
				cache: false,
				optimizationLevel: 7,
				progressive: true
			}
		},
		criticalcss: {
			custom: {
				options: {
					url: "fullyFormedURLToRunAgainst.html",
					width: 1200,
					height: 900,
					outputfile: "public/css/critical.css",
					filename: "public/css/styles.min.css",
					buffer: 2048*2048,
					ignoreConsole: false
				}
			}
		}
	});

	/* ----------------------------------------------------------------------
	 * Load NPM Tasks
	 * ---------------------------------------------------------------------- */
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-criticalcss');

	/* ----------------------------------------------------------------------
	 * Watch task
	 * ---------------------------------------------------------------------- */
	grunt.registerTask('watcher', [], function () {
		grunt.task.run('watch');
	});

	/* ----------------------------------------------------------------------
	 * Default
	 * ---------------------------------------------------------------------- */
	grunt.registerTask('default', [], function () {
		grunt.task.run('copy', 'concat', 'uglify', 'less', 'cssmin');
	});

	/* ----------------------------------------------------------------------
	 * ImageMin - Minifies and copies images to public
	 * ---------------------------------------------------------------------- */
	grunt.registerTask('images', [], function () {
		grunt.task.run('imagemin');
	});

	/* ----------------------------------------------------------------------
	 * Critical - Generates critical CSS file
	 * ---------------------------------------------------------------------- */
	grunt.registerTask('critical', [], function () {
		grunt.task.run('less', 'cssmin', 'criticalcss');
	});
};
