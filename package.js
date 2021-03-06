Package.describe({
  name: 'trankimcanh:env-settings',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Autoload settings (YAML, JSON) for server and client from private assets based on NODE_ENV.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/CanhTranKIm/meteor-package-env-settings',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.0.1');
  api.use('underscore');
  api.use('meteorblackbelt:underscore-deep@0.0.3');
  api.use('udondan:yml@3.2.2_1', 'server');
  api.addFiles('env-settings.js','server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('trankimcanh:env-settings');
});
