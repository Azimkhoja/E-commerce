import { Schema, model } from "mongoose";

const CategoryScheam = new Schema({
    category_name: {
        type: String,
        unique: true,
        required: true,
    }  
},{timestamps: false, versionKey: false})

const  Category = model("category", CategoryScheam)
export  {Category}