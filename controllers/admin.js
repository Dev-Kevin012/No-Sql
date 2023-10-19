const Product = require("../models/product");

const updateProduct = (req, res, next) => {
  const id = req.params.id;
  const { title, price, description, imageUrl } = req.body;
  const product = new Product(title, price, description, imageUrl, id);
  product
    .save()
    .then(() => {
      return res.status(200).json({
        success: true,
        message: "Product Updated!",
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

const deleteProduct = (req, res, next) => {
  const id = req.params.id;
  Product.deleteById(id)
    .then(() => {
      return res.status(200).json({
        success: true,
        message: "Product Deleted!",
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

module.exports = { updateProduct, deleteProduct };
