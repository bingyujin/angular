'use strict';

var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { document } = (new JSDOM('')).window;
global.document = document;
var window = global.window = document.defaultView;

global.navigator = {
  userAgent: 'node.js'
};
global.Node = window.Node;

/*
 * angular-mocks
 */

window.mocha = {};
window.beforeEach = global.beforeEach;
window.afterEach = global.afterEach;


/*
 * Since angular and angular-mocks are both singletons created once with one window-object
 * and mocha doesn't reload modules from node_modules on watch mode we'll have to
 * invalidate the cached singletons manually.
 */

delete require.cache[require.resolve('angular')];
delete require.cache[require.resolve('angular/angular')];
delete require.cache[require.resolve('angular-mocks')];

require('angular/angular');
require('angular-mocks');

global.angular = window.angular;

module.exports = {
  inject: window.angular.mock.inject,
  module: window.angular.mock.module
};

