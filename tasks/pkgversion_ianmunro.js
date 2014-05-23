/*
 * grunt-pkgversion-ianmunro
 * https://github.com/Mudhoax/grunt-pkgversion-ianmunro
 *
 * Copyright (c) 2014 Ian Munro
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('version', 'Add build number to the package.json', function() {
        var pkg = JSON.parse(grunt.file.read('./package.json'));
        pkg.version = this.options().buildNumber;

        grunt.file.write('./dist/package.json', JSON.stringify(pkg, null, 2));
    });
};
