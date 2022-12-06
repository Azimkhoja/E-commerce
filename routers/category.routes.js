const Router = require("express");
const {
  addCategory,
  getCategory,
  getAllCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/category.controller");
const router = Router();

router.post("/add", addCategory);
router.get("/all", getAllCategory);
router.get("/:id", getCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

// const CategoriesRouter = router;
module.exports = router;
