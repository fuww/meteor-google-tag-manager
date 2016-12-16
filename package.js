/* eslint-disable prefer-arrow-callback */

Package.describe({
  name: 'fuww:google-tag-manager',
  version: '0.0.1',
  summary: 'A lightweight package to add google tag manager easily to meteor',
  git: 'https://github.com/fuww/meteor-google-tag-manager.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    'meteor',
    'ecmascript@0.4.0',
    'webapp@1.2.0'
  ], 'server');

  api.mainModule('server/main.js', 'server');

  api.export([
    'addGoogleTagManager'
  ], 'server');
});
