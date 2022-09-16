(function(angular) {
    'use strict';




    var app = angular.module("myApp",[]);
    app.factory("hello1",function(){
        return {
            hello:function(){
                console.log("hello1 service");
            }
        }
    });
    app.factory("hello2",function(){
        return {
            hello:function(){
                console.log("hello2 service");
            }
        }
    });

    var $injector = angular.injector(['myApp']);
    console.log(angular.equals($injector.get('$injector'),$injector));//true
    var myCtrl2 = function($scope,hello1,hello2){
        $scope.hello = function(){
            hello1.hello();
            hello2.hello();
        }
    }
    myCtrl2.$injector = ['hello1','hello2'];
    app.controller("myCtrl2", myCtrl2);
    console.log($injector.annotate(myCtrl2));//["$scope","hello1","hello2"]





})(window.angular);


/*
Copyright 2022 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/