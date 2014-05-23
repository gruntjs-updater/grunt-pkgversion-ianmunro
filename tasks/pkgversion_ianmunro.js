/*
 * grunt-pkgversion-ianmunro
 * https://github.com/Mudhoax/grunt-pkgversion-ianmunro
 *
 * Copyright (c) 2014 Ian Munro
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('pkgversion_ianmunro', 'Grunt task to automate build numbers', function() {
      grunt.registerMultiTask('version', 'Add build number to the package.json', function() {
          var pkg = JSON.parse(grunt.file.read('./package.json'));
          var version = pkg.version.split('.');
          version[2] = this.data.buildNumber;

          pkg.version = version.join('.');

          grunt.file.write('./dist/package.json', JSON.stringify(pkg, null, 2));
      });
  });
};
