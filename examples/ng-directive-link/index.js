(function (angular) {
    'use strict';
    angular.module('heroApp', [])

        .directive('mainDirective', function ($interpolate) {
            return {
                link: {

                    pre: function (scope, iElement, iAttributes) {
                        console.log(iAttributes.text + " In Pre")
                        if (iAttributes.text === "first-3") {
                            iElement.css("border", "1px solid red")
                        }
                    },
                    post: function (scope, iElement, iAttributes) {
                        console.log(iAttributes.text + " In Post")
                        if (iAttributes.text === "first-3") {
                            iElement.css("border", "1px solid yellow")
                        }
                        iElement.on("click", scope.btnClick)
                    }
                },
                controller: function ($scope, $element, $attrs) {
                    var v = $interpolate($attrs.text)($scope);
                    console.log(v + " In Controller");
                    $scope.btnClick = function () {
                        alert(v);
                    }
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