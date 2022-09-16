(function (angular) {
    'use strict';
    angular.module('heroApp', [])

        .directive('mainDirective', function () {
            return {
                template: "{{msg}}"
            };
        })
        .controller('mainController', ['$scope', function ($scope) {
            $scope.msg = "hello world";
        }])

})(window.angular);

/*
Copyright 2022 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/