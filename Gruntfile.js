module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-processhtml');

  var fileConfigurations = {
    sources: {
      ui: [
        'app/index.html',
        'LICENSE'
      ],
      build: [
        'dist/min/addition.min.js',
        'dist/min/multiple.min.js',
        'dist/min/subtraction.min.js',
        'dist/min/division.min.js',
        'dist/min/clearResult.min.js',
        'dist/min/clearInputFields.min.js'

      ]
    }
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['Gruntfile.js', 'app/src/**/*.js']
    },
    watch: {
      files: ['Gruntfile.js'],
      tasks: ['jshint']
    },
    uglify: {
      options: {
        mangle: true
      },
      my_target: {
        files: {
          'dist/min/addition.min.js': 'app/src/addition.js',
          'dist/min/multiple.min.js': 'app/src/multiple.js',
          'dist/min/subtraction.min.js': 'app/src/subtraction.js',
          'dist/min/division.min.js': 'app/src/division.js',
          'dist/min/clearResult.min.js': 'app/src/clearResult.js',
          'dist/min/clearInputFields.min.js': 'app/src/clearInputFields.js'
        }
      }
    },
    concat: {
      options: { "separator": ";" },
      dist: {
        // cwd: 'app', Защо се добавя cwd???
        src: fileConfigurations.sources.build,
        dest: "dist/build.js"
      }
    },
    cssmin: {
      target: {
        files: {
          'dist/main.min.css': ['app/main.css']
        }
      }
    },
    processhtml: {
      dist: {
        options: {
          process: true,
          data: {
            title: 'Calculator',
            message: 'This is production distribution'
          }
        },
        files: {
          'dist/min/index.min.html': ['app/index.html']
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'dist/min/index.min.html'
        }
      }
    },
    copy: {
      main: {
        expand: true,
        src: 'app/**/*',
        dest: 'copy',
      }
    },
    clean: 'dist/min'

  });

  // Tell Grunt what to do when we type "grunt" into the terminal
  grunt.registerTask('default', [
    'jshint', 'uglify', 'concat', 'cssmin', 'processhtml', 'htmlmin', 'copy', 'clean'
  ]);
};
