module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');

  var fileConfigurations = {
    sources: {
      ui: [
        
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

    clean: ["app/test8.js"],

    uglify: {
      options: {
        mangle: true
      },
      my_target: {
        files: {
          'app/dest/addition.min.js': 'app/src/addition.js',
          'app/dest/multiple.min.js': 'app/src/multiple.js',
          'app/dest/subtraction.min.js': 'app/src/subtraction.js',
          'app/dest/division.min.js': 'app/src/division.js',
          'app/dest/clearResult.min.js': 'app/src/clearResult.js',
          'app/dest/clearInputFields.min.js': 'app/src/clearInputFields.js'
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
      "options": { "separator": ";" },
      "build": {
        "src": [
        'app/dest/addition.min.js', 
        'app/dest/multiple.min.js', 
        'app/dest/subtraction.min.js', 
        'app/dest/division.min.js', 
        'app/dest/clearResult.min.js', 
        'app/dest/clearInputFields.min.js'
      ],
        "dest": "app/builds/app.js"
      }
    }
  });

  // Tell Grunt what to do when we type "grunt" into the terminal
  grunt.registerTask('default', [
    'clean', 'uglify', 'jshint', 'copy', 'concat'
  ]);
};
