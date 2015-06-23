mainModule.factory('CustomerFactory', function($http){
	var customers = [];
	var factory = {};
	
	factory.getAllCustomers = function(callback){
		$http.get('/customer/getAllCustomers').success(function(returned_data_from_server){
			console.log("Server responded with: ", returned_data_from_server);
			callback(returned_data_from_server);
		});
	}

	factory.addCustomer = function(newCustomer, callback){
		$http.post('/customer/addCustomer', newCustomer).success(function(returned_data_from_server){
			console.log("SUCCESSFUL - BACK TO FACTORY", returned_data_from_server);
			callback(returned_data_from_server);
		});
		console.log("addCustomer in Factory, user is : ", newCustomer);
	}

	factory.destroyCustomer = function(customer, callback){
		$http.post('/customer/destroyCustomer', customer).success(function(returned_data_from_server){
			console.log("SUCCESSFUL - BACK TO FACTORY FROM DELETING CUSTOMER", returned_data_from_server);
			callback(returned_data_from_server);
		});
	}

	factory.getCustomer = function(customer, callback){
		console.log("!!!!!, ", customer);
		$http.post('/customer/getCustomer', {id:customer}).success(function(returned_data_from_server){
			console.log("SUCCESSFUL - BACK TO FACTORY FROM GETTING Customer", returned_data_from_server);
			callback(returned_data_from_server);
		});
	}

	factory.updateCustomer = function(customer, callback){
		$http.post('/customer/updateCustomer', customer).success(function(returned_data_from_server){
			console.log("SUCCESSFUL - BACK TO FACTORY FROM UPDATING Customer", returned_data_from_server);
			callback(returned_data_from_server);
		});
	}

	return factory;
});