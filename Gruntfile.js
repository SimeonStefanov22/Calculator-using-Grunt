module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  var fileConfigurations = {
    sources: {
      ui: [
        'app/index.html',
        'LICENSE'
      ],
      build: [
        'app/dist/addition.min.js',
        'app/dist/multiple.min.js',
        'app/dist/subtraction.min.js',
        'app/dist/division.min.js',
        'app/dist/clearResult.min.js',
        'app/dist/clearInputFields.min.js'

      ]
    }
  };

  grunt.initConfig({
    // pkg: grunt.file.readJSON('package.json'),

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
          'app/dist/addition.min.js': 'app/src/addition.js',
          'app/dist/multiple.min.js': 'app/src/multiple.js',
          'app/dist/subtraction.min.js': 'app/src/subtraction.js',
          'app/dist/division.min.js': 'app/src/division.js',
          'app/dist/clearResult.min.js': 'app/src/clearResult.js',
          'app/dist/clearInputFields.min.js': 'app/src/clearInputFields.js'
        }
      }
    },
    copy: {
      main: {
        expand: true,
        src: 'app/src/*',
        dest: 'app/copy/',
      },
    },
    concat: {
      options: { "separator": ";" },
      build: {
        // cwd: 'app', Защо се добавя cwd???
        src: fileConfigurations.sources.build,
        dest: "app/dist/builds/app.js"
      }
    },
    cssmin: {
      target: {
        files: {
          'app/dist/main.min.css': ['app/main.css']
        }
      }
    },
    clean: {
      dist: ["app/test8.js"]
    } 
  });

  // Tell Grunt what to do when we type "grunt" into the terminal
  grunt.registerTask('default', [
    'clean', 'uglify', 'jshint', 'copy', 'concat', 'cssmin'
  ]);
};
