var app7 = angular.module('app7', []);

app7.controller('mainCtrl', function() {


    var $ctrl=this;

    $ctrl.name="sad";

   console.log($ctrl.name);



});
// app7.component('outerCamp', {
//
//     bindings: {
//         username: '@'
//     },
//     controller: [function () {
//         var $ctrl1 = this;
//         $ctrl1.$onInit = function () {
//             $ctrl1.username = $ctrl1.username || 'NA';
//         };
//
//         $ctrl1.addName1=function (name){
//             $ctrl1.username=name;
//         }
//     }],
//     template: `
//     <h2>hello, from the outer component!</h2>
//     <p>Username is: {{$ctrl.username}}</p>
//     <inner-camp add-name2="$ctrl.addName1(aaa)"></inner-camp>
//
//     `
//
// });
//
// app7.component('innerCamp', {
//
//     bindings: {
//         addName2:'&'
//     },
//     controller: [function () {
//         var $ctrl2 = this;
//
//         $ctrl2.addAName=function (){
//             $ctrl2.addName2({aaa:$ctrl2.newName});
//             $ctrl2.newName='vv';
//         }
//     }],
//     template: `
//     <h3>hello, from the inner component!</h3>
//     <p>New Name: <input ng-model="$ctrl.newName"></p>
//     <p><button ng-click="$ctrl.addAName()">Add Name</button></p>
//     `
//
// });

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

