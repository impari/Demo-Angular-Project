(function () {

    var customerApp = angular.module('demoApp', ['ngRoute']);

customerApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'customerController',
            templateUrl: 'views/customer.html'
        })
        .when('/order/:customerId', {
            controller: 'orderController',
            templateUrl: 'views/order.html'
        })
    .otherwise({
        redirectTo: '/'
    });
});

}());