(function(angular) {
    'use strict';
    angular.module('myApp', [])
        .controller('myCtrl', function ($scope) {
            $scope.name = "听风是风";
            $scope.sayName = function () {
                console.log($scope.name);
            };
        })
        .component('myName', {
            transclude: true,
            template: '<div >我的名字是{{vm.userName}}。</div><button ng-click="vm.sayName()">点我</button>',
            controllerAs: 'vm',
            bindings:{
                userName:'=',
                sayName:'='
            }
        });
    //我的名字是{{vm.userName}} userName binds to user-name, user-name=name, so vm.userName=name


})(window.angular);

/*
Copyright 2022 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/