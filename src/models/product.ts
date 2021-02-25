import { model, Schema, Document } from "mongoose";

export interface IProduct extends Document {
   password: string;
   email: string;
//   comparePassword: (password: string) => Promise<Boolean>
};

const productSchema: Schema<IProduct> = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true
  },
  ingredients: {
    type: [String],
    required: true,
    lowercase: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  price: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
});


export default model<IProduct>("products", productSchema);