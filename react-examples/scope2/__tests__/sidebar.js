var helpers = require('../../../test-helper');
var ngModule = helpers.module;
var inject = helpers.inject;

require('../spicy');

var expect = require('chai').expect;

describe('myController', function () {
    var $scope;

    beforeEach(ngModule('myApp'));

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('SpicyController', {$scope: $scope});
    }));

    it('should create "spices" model with 3 spices', function () {
        expect($scope.spices.length).to.equal(3);
    });

    it('should set the default value of spice', function () {
        expect($scope.spice).to.equal('habanero');
    });
});

