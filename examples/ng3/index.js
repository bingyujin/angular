(function(angular) {
    'use strict';
    angular.module('heroApp', []).controller('MainCtrl', function MainCtrl($scope) {
        this.hero = {
            name: 'Spawn'
        };

    });
})(window.angular);

/*
Copyright 2022 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/