const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true]
  },
  company: {
    type: String,
    require: [true]
  },
  price: {
    type: Number,
    require: [true]
  },
  colors: {
    type: Array,
    require: [true]
  },
  image: {
    type: String,
    require: [true]
  },
  category: {
    type: String,
    require: [true]
  },
  isFeatured: {
    type: Boolean,
    require: [true]
  },
})

module.exports = mongoose.model('products', productSchema)