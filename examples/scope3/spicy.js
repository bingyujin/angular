
(function(angular) {
    'use strict';
    var myApp = angular.module('myApp',[]);

    myApp.controller('EmployeeController', ['$scope', function($scope) {
        $scope.department = 'Engineering';
        $scope.employee = {
            name: 'Joe the Manager',
            reports: [
                {name: 'John Smith'},
                {name: 'Mary Run'}
            ]
        };
    }]);

})(window.angular);


