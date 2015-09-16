(function () {

    var app = angular.module('demoApp', []);

    function customerController() {
        this.sortBy = 'name';
        this.reverse = false;

        this.customers = [{
                name: 'parimal',
                city: 'Pune',
                orderTotal: '10.78',
                joined: '1990-12-10'
        },
            {
                name: 'Aditya',
                city: 'Indore',
                orderTotal: '12.99',
                joined: '2003-4-7'
        },
            {
                name: 'Ketan',
                city: 'Kolkatta',
                orderTotal: '6.787',
                joined: '2015-9-9'
        },
            {
                name: 'Ram',
                city: 'Amravati',
                orderTotal: '12.00',
                joined: '2003-12-1'
        }];
        this.doSort = function (propName) {
            this.sortBy = propName;
            this.reverse = !this.reverse;
        };

    }
    app.controller('customerController', customerController);
}());