const {Schema, model} = require("mongoose");

const CategorySchema = new Schema(
  {
    category_name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: false, versionKey: false }
);

const Category = model("category", CategorySchema);
module.exports = Category