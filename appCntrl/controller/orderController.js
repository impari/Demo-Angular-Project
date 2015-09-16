(function(){

    var customerApp = angular.module('demoApp');
    
    function orderController($scope,$routeParams, customerFactory) {
        
        var customerId = $routeParams.customerId;
        $scope.customer = null;
        
        //loop into customer for customer Id 
        function init(){
        /* this is ("COMMENTED CODE") a synchronous call used by factories and services
            To make it asynchronous for $http to used follow below method */
            
            //$scope.customer = customerFactory.getCustomer(customerId);
            
            customerFactory.getCustomer(customerId)
                .success(function(customer) {
                    $scope.customer= customer;
            })
                .error(function(data, status, headers, config) {
                    //handle error
            });
        }

        init();
        
    }; 
    orderController.$inject = ['$scope','$routeParams','customerFactory'];
    customerApp.controller('orderController', orderController);
}());