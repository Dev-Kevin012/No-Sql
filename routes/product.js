const { Router } = require("express");
const Product = require("../models/product");
const router = Router();

router.route("/product").post((req, res, next) => {
  const { title, price, description, imageUrl } = req.body;
  const product = new Product(title, price, description, imageUrl);
  product
    .save()
    .then((result) => {
      return res.status(201).json({
        success: true,
        message: "Product Created!",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
