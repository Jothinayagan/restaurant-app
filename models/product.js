// Dependencies
let mongoose = require('mongoose');

// Schema
var productSchema = new mongoose.Schema({
      title: String,
      description: String,
      buttonText: Number,
      img: String,
      cuisine: Array,
      ratings: Number
});

// Return model
module.exports = mongoose.model('Products', productSchema);
