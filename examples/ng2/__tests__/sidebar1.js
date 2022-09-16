var helpers = require('../../../test-helper');
var ngModule = helpers.module;
var inject = helpers.inject;

require('../spicy');

var expect = require('chai').expect;

describe('directive', function() {
  beforeEach(ngModule('scopeExample'));
  // beforeEach(inject(function ($rootScope, $controller) {
  //   $scope = $rootScope.$new();
  //   $controller('MyController', {$scope: $scope});
  // }));
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));
  it('should say hello', function() {
    // var a=[1,2,3,4,5,6,7,8,9,10,11].slice(2,6);
    // var my_object = {
    //   '0': 'zero',
    //   '1': 'one',
    //   '2': 'two',
    //   '3': 'three',
    //   '4': 'four',
    //   length: 5
    // };
    // var sliced = Array.prototype.slice.call( my_object, 0 );
    // console.log(sliced);
    var scopeMock = {};

    var $scope = {};
    var controller = $controller('MyController', { $scope: scopeMock });

    // Assert that username is pre-filled
    expect(scopeMock.username1).to.equal('World');

    // Assert that we read new username and greet
    scopeMock.username1 = 'angular';
    scopeMock.sayHello();
    expect(scopeMock.greeting).to.equal('Hello angular!');
  });
});
