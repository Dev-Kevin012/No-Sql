const Product = require("../models/product");

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

const updateProduct = async (req, res, next) => {
  const id = req.params.id;
  const { title, price, description, imageUrl } = req.body;
  try {
    const result = await Product.findByIdAndUpdate(id, {
      title,
      price,
      description,
      imageUrl,
    });
    if (result) {
      return res.status(200).json({
        success: true,
        message: "Product updated!",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

const deleteProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await Product.findByIdAndDelete(id);
    if (result) {
      return res.status(200).json({
        success: true,
        message: "Product deleted!",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Product not found or already deleted!",
      });
    }
  } catch (error) {}
};

module.exports = { updateProduct, deleteProduct, getProducts };
