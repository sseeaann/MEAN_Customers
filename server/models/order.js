var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  customer: { type: String, trim: true },
  product_name: { type: String, trim: true },
  quantity: { type: Number },
  orderDate: { type: Date, default: Date.now }
});
mongoose.model('Order', OrderSchema);

// Validation
OrderSchema.path('customer').required(true, "Name field is required");