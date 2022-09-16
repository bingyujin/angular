(function (angular) {
    'use strict';
    angular.module('heroApp')
        .component('heroKetail', {
            templateUrl: 'heroFetail.html',
            bindings: {
                hero1: '<'
            },
            controller: 'aaa',
        })

        .controller('aaa', function MainCtrl() {
            this.qqq = {
                name: 'qqqq'
            };
            this.sayQqq = function () {
                this.qqq.name = 'qqqqq';
            };
        });

})(window.angular);

/*
Copyright 2022 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/