module.exports = function(app) {
	var customers = require('../controllers/customers.js');
	var orders = require('../controllers/orders.js');

// CUSTOMERS
	app.get('/customer/getAllCustomers', function(request, response){
		console.log("Server - recieved GET request for /getAllCustomers");
		customers.getAllCustomers(request, response);
	})
	app.post('/customer/addCustomer', function(request, response){
		console.log("Server- AddCustomer - Request object", request.body);
		customers.addCustomer(request, response);
	})
	app.post('/customer/destroyCustomer', function(request, response){
		console.log("in server for destroy");
		customers.destroyCustomer(request, response);
	})
	app.post('/customer/getCustomer', function(request, response){
		console.log("In server for get customer");
		customers.getCustomer(request, response);
	})
	app.post('/customer/updateCustomer', function(request, response){
		customers.updateCustomer(request, response);
	})

// ORDERS
	app.get('/getAllOrders', function(request, response){
		console.log("Server - recieved GET request for /getAllOrders");
		orders.show(request, response);
	})
	app.post('/addOrder', function(request, response){
		console.log("Server- AddOrder - Request object", request.body);
		orders.addOrder(request, response);
	});
};