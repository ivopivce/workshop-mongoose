import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  title: {
    type: String,
    required: [true, "Tittle is required"],
    minLength: 2,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minLength: 10,
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    minLength: 2,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
    },

    rating: {
        type: Number,
        min:0,
        max:10, 
}});