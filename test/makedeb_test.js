'use strict';

var grunt = require('grunt');

exports.makedeb = {
    setUp: function(done) {
        done();
    },

    simple: function(test) {
        test.expect(1);

        var debFile = grunt.file.read('tmp/simple-1.2.3.deb');
        test.ok(debFile);

        test.done();
    }
};
