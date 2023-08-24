const express = require("express");
const route = express.Router();
const {
  getAllProducts,
  getProductsByQuantity,
  createNewProduct,
  updateProductByName,
  deleteProductByName,
} = require('../controllers/ProductControllers')



route.route("/").get(getAllProducts);


route.route("/:quantity").get(getProductsByQuantity);


route.route('/').post(createNewProduct)


route.route("/:old/:new").put(updateProductByName);


route.route('/:name').delete(deleteProductByName)


module.exports = route;
