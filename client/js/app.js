var mainModule = angular.module('mainModule', ['ngRoute']);

mainModule.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		controller: 'CustomerController',
		templateUrl: 'partials/customers.html'
	})
	.when('/orders', {
		controller: 'OrderController',
		templateUrl: 'partials/orders.html'
	})
	.when('/customers', {
		controller: 'CustomerController',
		templateUrl: 'partials/customers.html'
	})
	.when('/oneCustomer', {
		controller: 'CustomerController',
		templateUrl: 'partials/oneCustomer.html'
	})
	.when('/customer/show/:id', {
		controller: 'CustomerController',
		templateUrl: 'partials/oneCustomer.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});