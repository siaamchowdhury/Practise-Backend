const Product = require("../model/ProductModel");

const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.json({ product: product });
  } catch (error) {
    console.log(error.message);
  }
};

const getProductsByQuantity = async (req, res) => {
  try {
    const limit = parseInt(req.params.quantity);
    const product = await Product.find().limit(limit);
    res.status(200).json({ product: product });
  } catch (error) {
    console.log(error.message);
  }
};

const createNewProduct = async (req, res) => {
  const { name, company, price, colors, image, category, isFeatured } =
    req.body;
  try {
    if (
      !name &&
      !company &&
      !price &&
      !colors &&
      !image &&
      !category &&
      !isFeatured
    ) {
      throw new Error("Fields can't be empty");
    }
    await Product.create({
      name,
      company,
      price,
      colors,
      image,
      category,
      isFeatured,
    });

    res.send({ message: "entered new product" });
  } catch (error) {
    console.log(error.message);
  }
};

const updateProductByName = (req, res) => {
  res.send({ message: "replace 'old' name with 'new'" });
};

const deleteProductByName = (req, res) => {
  res.send({ message: "delete" });
};

module.exports = {
  getAllProducts,
  getProductsByQuantity,
  createNewProduct,
  updateProductByName,
  deleteProductByName,
};
