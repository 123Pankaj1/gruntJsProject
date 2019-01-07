module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		
		ngdocs: {
		  all: ['js/example.js']
		},		
		jsdoc : {
			dist : {
				src: ['js/*.js'],
				options: {
					destination : 'JS DOCS',
					   template : "node_modules/ink-docstrap/template",
					  configure : "node_modules/ink-docstrap/template/jsdoc.conf.json"
				}
			}
		},
		cssmin: {
		   minify: {
			 options: {
			   banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			 },
			 expand: true,
			 src: ['*.css', '!*.min.css'],
			 dest: 'dist/css/',
			 ext: '.min.css'
		   }
		 },
		 
		 htmlmin: {
		   dist: {
			 options: {
			   removeComments: true,
			   collapseWhitespace: true
			 },
			 files: {
			   'dist/view/index.html': 'index.html'
			 }
		   }
		 },
	 
        uglify: {
            options: {
                banner: '// <%= pkg.name %> - v<%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>)\n' + '// https://www.nraboy.com\n'
            },
            build: {
                src: ['js/*.js'],//'<%= pkg.name %>.js',
                dest: 'dist/js/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            all: ['js/*.js']
        },
        clean: {
            js: ['js/*.min.js']
        }
		
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-ngdocs');
	
    grunt.registerTask('default', ['clean', 'jshint', 'uglify', 'cssmin', 'htmlmin','jsdoc']);

};