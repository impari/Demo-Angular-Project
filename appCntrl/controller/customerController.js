// Creating a controler and giving it a name simpleController
//the parameter passed is "$scope" and it bind the value to the view
//ng-init="customers=[{joined:'1990-12-10', name:'parimal', city:'Pune', orderTotal:10.78},
//                   {joined:'2000-2-25', name:'Hansraj', city:'ohio', orderTotal:8.12},
//                   {joined:'2015-5-11', name:'aditya', city:'kent', orderTotal:99.98}]"


(function () {

    var customerApp = angular.module('demoApp');

    // It helps angular to realize what params are being passed to controller if minification has replaced the variables 
    customerController.$inject = ['$scope', 'customerFactory','appSettings'];

    function customerController($scope, customerFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;
    
        function init(){
            /* this is ("COMMENTED CODE") a synchronous call used by factories and services
               To make it asynchronous for $http to used follow below method */
            
                //$scope.customers = customerFactory.getCustomers(); 
            
            
                customerFactory.getCustomers()
                    .success(function(customers) {
                    $scope.customers = customers; // assigning customers property to $scope which we                     get ffrom data as customers
                })
                    .error(function(data, status, headers, config){
                    // handle error
                });  
        }
        
        init();
        
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
         
    };
    customerApp.controller('customerController', customerController);
}());