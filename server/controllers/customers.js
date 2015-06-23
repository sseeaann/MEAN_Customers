var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function(app) {
	return {
		getAllCustomers: function(request, response){
			Customer.find({}, function(err, data){
				if(err)
				{
					console.log("error", err);
				}
				else
				{
					console.log(data);
					response.json(data);
				}
			})
		},

		addCustomer: function(request, response){
			var newCustomer = new Customer({ name: request.body.name});
			newCustomer.save(function(err, record){
				if(err){
					response.json(err);
				}
				else{
					response.json(record);
				}
			})
		},

		destroyCustomer: function(request, response){
			console.log(request.body._id);
			Customer.remove({ _id: request.body._id}, function (err, status){
				if(err){
					console.log('ERR');
				}
				else{
					response.json({status: 'success'});
				}
			});
		},

		getCustomer: function(request, response){
			console.log(request.body);
			Customer.findOne({ _id: request.body.id}, function (err, customer){
				if(err){
					console.log('ERR');
				}
				else{
					response.json(customer);
				}
			});
		},

		updateCustomer: function(request, response){
			console.log("OBJECT BODY");
			console.log(request.body);
			Customer.findByIdAndUpdate(request.body._id, { $set: request.body }, function (err, customer){
				response.json(customer);
			});
		}
	}
})();