mainModule.factory('OrderFactory', function($http){
	var orders = [];
	var factory = {};

	factory.getAllOrders = function(callback){
		$http.get('/getAllOrders').success(function(returned_data_from_server){
			console.log("Server responded with: ", returned_data_from_server);
			callback(returned_data_from_server);
		})
	}

	factory.addNewOrder = function(order, callback){
		//console.log("EEEEE", order);
		$http.post('/addOrder', order).success(function(returned_data_from_server){
			console.log("SUCCESSFUL - BACK TO FACTORY FROM UPDATING Customer", returned_data_from_server);
			callback(returned_data_from_server);
		});
	}

	return factory;
});