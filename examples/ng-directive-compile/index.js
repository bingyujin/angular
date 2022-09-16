(function (angular) {
    'use strict';
    angular.module('heroApp', [])

        .directive('mainDirective', function () {
            return {
                compile: function (tElement, tAttributes) {
                    console.log(tAttributes.text + " In compile");
                    return{
                        pre:function (scope,iElement,iAttributes){
                            console.log(iAttributes.text+" In Pre")
                        },
                        post: function (scope,iElement,iAttributes){
                            console.log(iAttributes.text+" In Post")
                        }
                    };

                },
                controller: function ($scope,$element,$attrs){
                    console.log($attrs.text+ " In Controller")
                }
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