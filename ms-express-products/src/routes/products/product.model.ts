import { Schema, model } from "mongoose";
import { IProduct } from "./products.interface";

const productSchema = new Schema<IProduct>(
  {
    category: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
  },
  {
    id: true,
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform(_doc, ret, _options) {
        ret.id = ret._id;
        delete ret._id;
        // delete ret.__v;
      },
    },
  }
);

/* productSchema.post("save", function (doc, next) {
  console.log("post action on save", doc);
  next();
}); */

export const Product = model<IProduct>("Product", productSchema);
