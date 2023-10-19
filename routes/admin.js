const { Router } = require("express");
const {
  updateProduct,
  deleteProduct,
  getProducts,
} = require("../controllers/admin");

const router = Router();

router.route("/").get(getProducts);
router.route("/:id").put(updateProduct).delete(deleteProduct);

module.exports = router;
