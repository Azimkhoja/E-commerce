const checkID = require('../helpers/checkID');
const Category = require('../models/Categories');
const SubCategory = require('../models/SubCategories');
const addCategory = async (req, res) => {
  try {
    const category = await Category(req.body)
    await category.save()
    res.send({status: 201, message: 'Added', category})
  } catch (error) {
    console.log(error.message);
  }
};
const getCategory = async (req, res) => {
  try {
    const {id} = req.params
    if(!checkID(id)){
      return res.send({status: 400, message: "invalid id"})
    }

    // const category = await Category.findById(id).populate("sub_categories")
    const category = await SubCategory.findById({category_id: id}).populate("category_id")
    if(category.length == 0)
      return res.send({status: 400, message: "Category not found"})
    res.send({status: 201, category})

  } catch (error) {
    console.log(error.message);
  }
};
const getAllCategory = async (req, res) => {
  try {
    const allCategory = await Category.find()
    if(allCategory.length == 0) 
      return res.send({status: 400, message: "No data available"})
    res.send({status: 201, allCategory})
  } catch (error) {
    console.log(error.message);
  }
};
const updateCategory = async (req, res) => {
  try {
    const {id} = req.params
    const update = await Category.findByIdAndUpdate({id},req.body)
    if(!update)
      return res.send({status: 400, message: "cannot update"})
    res.send({status: 201, message: "Updated"})
  } catch (error) {
    console.log(error.message);
  }
};
const deleteCategory = async (req, res) => {
  try {
    const {id} = req.params
    const deleteCat = await Category.findByIdAndDelete(id)
    console.log(!deleteCat);
    if(!deleteCat) 
      return res.send({status: 400, message: "Not found"})
    res.send({status: 201, message: "Deleted"})
  } catch (error) {
    console.log(error.message);
  }
};

module.exports =  {
  addCategory,
  getCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
};
