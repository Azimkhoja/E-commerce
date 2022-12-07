const SubCategory = require("../models/Categories");

const addSubCategory = async (req, res) => {
  try {
    const Subcategory = await SubCategory(req.body);
    await Subcategory.save();
    res.send({ status: 201, message: "Added", Subcategory });
  } catch (error) {
    console.log(error);
  }
};

const getSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Products.find({ sub_category_id: id });
    if (!products) return res.send({ status: 400, message: "Not found" });
    res.send({ status: 201, products });
  } catch (error) {
    console.log(error.message);
  }
};

const getAllSubCategory = async (req, res) => {
  try {
    const allSubCategory = await SubCategory.find();
    if (allSubCategory.length == 0)
      return res.send({ status: 400, message: "No data available" });
    res.send({ status: 201, allSubCategory });
  } catch (error) {
    console.log(error.message);
  }
};


const updateSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await SubCategory.findByIdAndUpdate({ _id: id }, req.body);
    if (!update) return res.send({ status: 400, message: "can not update" });
    res.send({ status: 201, message: "Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCat = await SubCategory.findByIdAndDelete(id);
    if (!deleteCat) return res.send({ status: 400, message: "Not found" });
    res.send({ status: 201, message: "Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addSubCategory,
  getSubCategory,
  getAllSubCategory,
  updateSubCategory,
  deleteSubCategory,
};
