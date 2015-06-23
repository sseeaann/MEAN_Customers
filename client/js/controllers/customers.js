mainModule.controller('CustomerController', function ($scope, $routeParams, $location, CustomerFactory){
	
	var getAllCustomers = function(){
		console.log("controller - getAllCustomers");
		CustomerFactory.getAllCustomers(function(customers){
			console.log("Back to controller, done with factory by a callback function");
			console.log(customers);
			$scope.customers = customers;
		});
	}
	getAllCustomers();

	$scope.addCustomer = function(newCustomer){
		console.log('working in controller');
		console.log(newCustomer);
		CustomerFactory.addCustomer(newCustomer, function(customer){
			if(customer.errors){
				$scope.errors = customer.errors;
			}
			else{
				$scope.errors = {};
				$scope.newCustomer = {};
				CustomerFactory.getAllCustomers(function(customers){
					console.log("Back to controller, done with factory by a callback function");
					$scope.customers = customers;
					$scope.newCustomer = {};
				});
			}
		});
	}

	$scope.destroyCustomer = function(customer){
		console.log("Controller - destroyCustomer");
		CustomerFactory.destroyCustomer(customer, function(){
			CustomerFactory.getAllCustomers(function(customers){
				console.log("Back to controller, done with factory by a callback function");
				$scope.customers = customers;
			});
		});
	}

	$scope.showCustomer = function(customer){
		$location.path('/oneCustomer');
		console.log("show customer", customer);
		CustomerFactory.getCustomer(customer, function(customer){
			console.log('CUSTOMER IS: ', customer);
			$scope.customer = customer;
			console.log('SCOPE, customer IS: ', $scope.customer);
		});
	}

	$scope.updateCustomer = function(customer){
		CustomerFactory.updateCustomer(customer, function(updateCustomer){
			console.log("Back to controller, done with factory by a callback function");
			console.log("updated customer: ", updateCustomer);
			CustomerFactory.getAllCustomers(function(customers){
				console.log("Back to controller, done with factory by a callback function 123", customers);
				$scope.customers = customers;
			});
		});
	}

});