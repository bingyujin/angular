(function(angular) {
    'use strict';
    angular.module('myApp', [])
        .controller('myCtrl', function ($scope) {
            this.demo1 = function () {
                console.log(this);
            };
            $scope.demo2 = function () {
                console.log(this);
            };
            $scope.demo3 = function () {
                console.log(this === $scope);
            };
        });
    //我的名字是{{vm.userName}} userName binds to user-name, user-name=name, so vm.userName=name


})(window.angular);

/*
Copyright 2022 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/