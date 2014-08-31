/**
 * Created by Rahul on 8/31/2014.
 */
module.exports = function (grunt) {

    //Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                reporter: require('path').join(__dirname, 'error-reporter.js')
            },
            target1: ['Gruntfile.js', 'dir/**/*.js']
        }
    });

    //Load plugin specified above
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //Default Task(s).
    grunt.registerTask('default', ['jshint']);
};