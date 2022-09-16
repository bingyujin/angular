(function(angular) {
    'use strict';




    var app = angular.module("myApp",[]);
    app.factory("hello1",function($window){
        return {
            hello:function(text){
                $window.alert(text);
            }
        }
    });
    var injector = angular.injector(['ng','myApp']);

    var hello2 = injector.get('hello1');


    app.controller('MyController', ['$scope', function($scope) {
        $scope.sayHello = function() {
            hello2.hello('Hello World');
        };
        }]);








})(window.angular);


/*
Copyright 2022 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/