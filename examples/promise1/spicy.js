(function (angular) {
    'use strict';


    var app = angular.module("myApp", []);
    app.directive("aBC", function () {
        return {
            template: "fdgfdgfd"
        }
    })
    const promise1 = new Promise((resolve, reject) => {
        resolve('Success~');
    });
    promise1.then((value) => {
        console.log(value);
    });

    // using a resolved promise, the 'then' block will be triggered instantly,
// but its handlers will be triggered asynchronously as demonstrated by the console.logs
    const resolvedProm = Promise.resolve(33);

    const thenProm = resolvedProm.then((value) => {
        console.log("this gets called after the end of the main stack. the value received and returned is: ", value);
        return value;
    });
//instantly logging the value of thenProm
    console.log(thenProm);

// // using setTimeout we can postpone the execution of a function to the moment the stack is empty
    setTimeout(() => {
        console.log(thenProm);
    },1000);

// logs, in order:
// Promise {[[PromiseStatus]]: "pending", [[PromiseResult]]: undefined}
// "this gets called after the end of the main stack. the value received and returned is: 33"
// Promise {[[PromiseStatus]]: "resolved", [[PromiseResult]]: 33}

    const p1 = new Promise((resolve, reject) => {
        //resolve('Success!');
        // or
         reject(new Error("Error!"));
    });

    p1.then(value => {
        console.log(value); // Success!
    }, reason => {
        console.error(reason); // Error!
    });

})(window.angular);


/*
Copyright 2022 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/