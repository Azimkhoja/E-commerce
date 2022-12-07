const Router = require("express");
const {
  addProduct,
  getAllProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const router = Router();

router.post("/add", addProduct);
router.get("/all", getAllProduct);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

// const ProductsRouter = router;
module.exports = router;
