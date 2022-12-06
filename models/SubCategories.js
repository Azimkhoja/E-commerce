const { Schema, model, SchemaTypes } = require("mongoose");

const subCategorySchema = new Schema(
  {
    category_id: {
      type: SchemaTypes.ObjectId,
      required: true,
    },
    sub_category_name: {
      type: String,
      ref: "categories",
    },
  },
  { versionKey: false, timestamps: false }
);

const SubCategory = model("sub_categories", subCategorySchema);
module.exports = SubCategory;
