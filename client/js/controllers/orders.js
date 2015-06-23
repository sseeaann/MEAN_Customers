mainModule.controller('OrderController', function($scope, $routeParams, OrderFactory, CustomerFactory){


	var getAllCustomers = function(){
		CustomerFactory.getAllCustomers(function(customers){
			$scope.customers = customers;
		});
	}

	var getAllOrders = function(){
		OrderFactory.getAllOrders(function(orders){
			$scope.orders = orders;
		});
	}

	$scope.addOrder = function(new_order){
		// console.log("OOOOOOOH", new_order);
		OrderFactory.addNewOrder(new_order, function(order){
			if(order.errors){
				$scope.errors = customer.errors;
			}
			else {
				$scope.errors = {};
				$scope.new_order = {};
				OrderFactory.getAllOrders(function(orders){
					$scope.orders = orders;
				});
			}
		});
	}

	getAllCustomers();
	getAllOrders();
});