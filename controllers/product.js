const Product = require("../models/product");
const mongoose = require("mongoose");

const addProduct = async (req, res, next) => {
  const { title, price, description, imageUrl } = req.body;
  try {
    Product.create({
      title,
      price,
      description,
      imageUrl,
    });
    return res.status(201).json({
      success: true,
      message: "Product Created!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

const getProduct = async (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ObjectId format",
    });
  }

  try {
    const product = await Product.findById(id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

module.exports = {
  addProduct,
  getProducts,
  getProduct,
};
