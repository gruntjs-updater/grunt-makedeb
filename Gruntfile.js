/*
 * grunt-makedeb
 * https://github.com/AtlasIQ/grunt-makedeb
 *
 * Copyright (c) 2015 Brian Kereszturi
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: [ 'tmp' ]
        },

        // Configuration to be run (and then tested).
        makedeb: {
            options: {
                buildDir: path.join(__dirname, 'test/foo'),
                outDir: path.join(__dirname, 'tmp'),
                maintainer: 'admin@example.com'
            },
            simple: {
                options: {
                    packageName: 'simple',
                    version: '1.2.3',
                    installPath: '/opt/example/simple'
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'makedeb', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
