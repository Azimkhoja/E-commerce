const Product = require("../models/Products");
const checkId = require('../helpers/checkID');
const SubCategory = require("../models/SubCategories");

const addProduct = async (req, res) => {
  try {
    const { sub_category_id, model, product_name, color, price } = req.body;
    if(!checkId(sub_category_id))
        return res.send({status: 400, message: "Invalid id subcategoryid entered"})
    const subcat = await SubCategory.findOne({_id: sub_category_id})
    if(!subcat)
        return res.send({status: 400, message: "Non relevant subcategory id entered"})
    const Product = await Product(req.body);
    await Product.save();
    res.send({ status: 201, message: "Added", Product });
  } catch (error) {
    console.log(error.message);
  }
};
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const Product = await Product.findById(id);
    if (!Product)
      return res.send({ status: 400, message: "Product not found" });
    res.send({ status: 201, Product });
  } catch (error) {
    console.log(error.message);
  }
};
const getAllProduct = async (req, res) => {
  try {
    const allProduct = await Product.find();
    if (allProduct.length == 0)
      return res.send({ status: 400, message: "No data available" });
    res.send({ status: 201, allProduct });
  } catch (error) {
    console.log(error.message);
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await Product.findByIdAndUpdate({ id }, req.body);
    if (!update) return res.send({ status: 400, message: "cannot update" });
    res.send({ status: 201, message: "Updated" });
  } catch (error) {
    console.log(error.message);
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCat = await Product.findByIdAndDelete(id);
    console.log(!deleteCat);
    if (!deleteCat) return res.send({ status: 400, message: "Not found" });
    res.send({ status: 201, message: "Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addProduct,
  getProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
};
