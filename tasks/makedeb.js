var makedeb = require('makedeb');

module.exports = function(grunt) {

    grunt.registerMultiTask('makedeb', 'Grunt task to run makedeb.', function() {
        var done = this.async();

        makedeb(this.options())
        .then(function(debFilePath) {
            grunt.log.writeln('Created DEB package at '+ debFilePath);
        })
        .catch(function(error) {
            grunt.log.error(error.message);
        })
        .then(function() {
            done();
        });
    });

};

