var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
mongoose.model('Customer', CustomerSchema);

// Validation
CustomerSchema.path('name').required(true, "Name field is required");