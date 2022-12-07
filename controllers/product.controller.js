const checkId = require("../helpers/checkID");
const SubCategory = require("../models/SubCategories");
const Products = require("../models/Products");

const addProduct = async (req, res) => {
  try {
    const { sub_category_id, model, product_name, color, price } = req.body;
    if (!checkId(sub_category_id))
      return res.send({
        status: 400,
        message: "Invalid id subcategoryid entered",
      });
    const subcat = await SubCategory.findOne({ _id: sub_category_id });
    if (!subcat)
      return res.send({
        status: 400,
        message: "Non relevant subcategory id entered",
      });
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
    const Product = await Products.findById(id);
    if (!Product)
      return res.send({ status: 400, message: "Product not found" });
    res.send({ status: 201, Product });
  } catch (error) {
    console.log(error.message);
  }
};

const getProductWithQuery = async (req, res) => {
  try {
    if(Object.entries(req.query).length == 0){
      return res.send({status: 201, data: []})
    }
    const { sub_category_id, model, product_name, color, price } = req.query;
    const data = await Products.find({$or: [{sub_category_id:sub_category_id}, {model:model}, {product_name:product_name}, {color:color}, {price:price}]})
    if(data.length == 0)
      return res.send({status: 400, message: "Product not found"})
    res.send({status: 200, data})
  } catch (error) {
    console.log(error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await Products.findByIdAndUpdate({ id }, req.body);
    if (!update) return res.send({ status: 400, message: "can not update" });
    res.send({ status: 201, message: "Updated" });
  } catch (error) {
    console.log(error.message);
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCat = await Products.findByIdAndDelete(id);
    if (!deleteCat) return res.send({ status: 400, message: "Not found" });
    res.send({ status: 201, message: "Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addProduct,
  getProduct,
  getProductWithQuery,
  updateProduct,
  deleteProduct,
};
