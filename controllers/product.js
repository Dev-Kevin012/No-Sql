const Product = require("../models/product");

const addProduct = (req, res, next) => {
  const { title, price, description, imageUrl } = req.body;
  const product = new Product(title, price, description, imageUrl);
  product
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        message: "Product Created!",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Internal Server Error!",
      });
    });
};

const getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      return res.status(200).json(products);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Internal Server Error!",
      });
    });
};
const getProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.fetchbyId(id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({
        success: false,
        message: "Product not found",
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
