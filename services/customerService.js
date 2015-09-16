(function () {

    var customerApp = angular.module('demoApp');

    function customerService() {

        var customers = [{
            id: 1,
            name: 'parimal',
            city: 'Pune',
            orderTotal: '10.78',
            joined: '1990-12-10',
            order: [{
                id: 1,
                product: 'Shoes',
                total: 10.78
                        }]
            }, {
            id: 2,
            name: 'Aditya',
            city: 'Indore',
            orderTotal: '12.99',
            joined: '2003-4-7',
            order: [{
                id: 2.1,
                product: 'Shirt',
                total: 10
                }, {
                id: 2.2,
                product: 'Shaker',
                total: 2.99
                    }]
                }, {
            id: 3,
            name: 'Ketan',
            city: 'Kolkatta',
            orderTotal: '6.787',
            joined: '2015-9-9',
            order: [{
                id: 3.1,
                product: 'Deodrant',
                total: 4.00
                    }, {
                id: 3.2,
                product: 'condom',
                total: 2.787
                        }]
                }, {
            id: 4,
            name: 'Ram',
            city: 'Amravati',
            orderTotal: '12.00',
            joined: '2003-12-1',
            order: [{
                id: 4.1,
                product: 'House',
                total: 9
                    }, {
                id: 4.2,
                product: 'car',
                total: 3
                        }]
                 }];

        
        
        this.getCustomers = function () {
            return customers;
        };
        this.getCustomer = function(customerId){
            for(var i=0,len=customers.length;i<len;i++){
                if(customers[i].id === parseInt(customerId)){
                 return customers[i];
                }
            }   
            return {};
        }
        
    };
    
    customerApp.service('customerService', customerService);
}());