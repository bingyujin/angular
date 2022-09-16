(function(angular) {
    'use strict';
    angular.module('docsTabsExample', [])
        .component('myTabs', {
            transclude: true,
            controller: function MyTabsController() {
                var panes = this.panes = [];
                this.select = function(pane) {
                    angular.forEach(panes, function(pane) {
                        pane.selected = false;
                    });
                    pane.selected = true;
                };
                this.addPane = function(pane) {
                    if (panes.length === 0) {
                        this.select(pane);
                    }
                    panes.push(pane);
                };
            },
            templateUrl: 'my-tabs.html'
        })
        .component('myPane', {
            transclude: true,
            require: {
                tabsCtrl: '^myTabs'
            },
            bindings: {
                title: '@'
            },
            controller: function() {
                this.$onInit = function() {
                    this.tabsCtrl.addPane(this);
                    console.log(this);
                };
            },
            templateUrl: 'my-pane.html'
        });
})(window.angular);

/*
Copyright 2022 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/