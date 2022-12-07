const Router = require("express");
const {
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductWithQuery,
} = require("../controllers/product.controller");
const router = Router();

router.post("/add", addProduct);
router.get("/", getProductWithQuery);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

// const ProductsRouter = router;
module.exports = router;
