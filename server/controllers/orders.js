var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function() {
	return {
		show: function(request, response){
			Order.find({}, function(err, data){
				if(err)
				{
					console.log("error", err);
				}
				else
				{
					console.log(data);
					response.json(data);
				}
			});
		},

		addOrder: function(request, response){
			var newOrder = new Order({ customer: request.body.customer, product_name: request.body.product_name, quantity: request.body.quantity });
			newOrder.save(function(err, record){
				if(err){
					response.json(err);
				}
				else{
					response.json(record);
				}
			})
		},
	}
})();