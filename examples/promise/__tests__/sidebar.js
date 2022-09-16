var helpers = require('../../../test-helper');
var ngModule = helpers.module;
var inject = helpers.inject;

require('../spicy');

var expect = require('chai').expect;

describe('directive', function() {
  beforeEach(ngModule('scopeExample'));
  beforeEach(inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controller('MyController', {$scope: $scope});
  }));

  it('should say hello', function() {


    // Assert that username is pre-filled
    expect($scope.username1).to.equal('World');

    // Assert that we read new username and greet
    $scope.username1 = 'angular';
    $scope.sayHello();
    expect($scope.greeting).to.equal('Hello angular!');
  });
});
