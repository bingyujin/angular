(function (angular) {
    'use strict';
    angular.module('heroApp', [])

        .directive('mainDirective', function () {


            return function (scope,$element, $attrs) {
                console.log("compile");
                $element.addClass('error');
                console.log("link");
                $element.addClass('error--' + $attrs.type);

            }


        })
        .controller('mainController', MainController)

    function MainController() {
        this.list = [{
            message: 'Oh no, an error occurred!',
            type: 'error'
        }, {
            message: 'Make sure you fill in all the fields',
            type: 'warning'
        }, {
            message: 'This id invalid',
            type: 'invalid'
        }]
    }

})(window.angular);

/*
Copyright 2022 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/