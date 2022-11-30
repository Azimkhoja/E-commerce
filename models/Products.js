import { Schema, model, SchemaTypes } from "mongoose";

const ProductSchema = new Schema(
  {
    sub_category_id: {
      type: SchemaTypes.ObjectId,
      required: true,
      ref: "sub_categories",
    },
    model: {
      type: String,
      required: true,
    },
    product_name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: false }
);

const Products = model("products", ProductSchema);
export { Products };
