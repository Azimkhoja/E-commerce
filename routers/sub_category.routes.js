const Router = require("express");
const {
  addSubCategory,
  getAllSubCategory,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
} = require("../controllers/sub_category.controller");
const router = Router();

router.post("/add", addSubCategory);
router.get("/all", getAllSubCategory);
router.get("/:id", getSubCategory);
router.put("/:id", updateSubCategory);
router.delete("/:id", deleteSubCategory);

// const Sub_CategoriesRouter = router;
module.exports = router;
