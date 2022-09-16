(function (angular) {
    'use strict';
    var app = angular.module("myApp", ["ngRoute"]);
    app.component('home', {
        template: '<h1>Home</h1><p>Hello, {{ $ctrl.user.name }} !</p>',
        controller: function() {
            this.user = {name: 'world'};
        }
    });
    app.config(function($routeProvider) {
        $routeProvider
            .when("/banana", {
                template : "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
            })
            .when("/", {
                template: '<home></home><p>......</p>'
            })

            .when("/tomato", {
                template : "<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>"
            });
    });


})(window.angular);

/*
Copyright 2022 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/