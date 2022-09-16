(function(angular) {
    'use strict';
    angular.module('scopeExample', [])
        .controller('MyController', ['$scope', function($scope) {
            $scope.username1 = 'World';

            $scope.sayHello = function() {
                $scope.greeting = 'Hello ' + $scope.username1 + '!';
            };
        }]);


})(window.angular);


/*
Copyright 2022 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/