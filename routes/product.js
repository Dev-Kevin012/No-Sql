const { Router } = require("express");
const {
  addProduct,
  getProducts,
  getProduct,
} = require("../controllers/product");
const router = Router();

router.route("/").get(getProducts).post(addProduct);
router.route("/:id").get(getProduct);

module.exports = router;
