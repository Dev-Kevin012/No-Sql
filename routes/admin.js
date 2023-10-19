const { Router } = require("express");
const { updateProduct, deleteProduct } = require("../controllers/admin");

const router = Router();

router.route("/:id").put(updateProduct).delete(deleteProduct);

module.exports = router;
