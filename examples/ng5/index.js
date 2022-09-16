(function(angular) {
    'use strict';
    angular.module('myApp', [])
        .controller('myCtrl', function ($scope) {
            $scope.name = "听风是风";
        })
        .component('myName', {
            transclude: true,
            template: '我是组件：<input ng-model="vm.userName">',
            controllerAs: 'vm',
            bindings:{
                userName:'<',
            }
        })
    //我的名字是{{vm.userName}} userName binds to user-name, user-name=name, so vm.userName=name


})(window.angular);

/*
Copyright 2022 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/