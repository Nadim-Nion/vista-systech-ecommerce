import { model, Schema } from 'mongoose';
import { TProduct, TProductVariant } from './product.interface';

const productVariantSchema = new Schema<TProductVariant>(
  {
    sku: {
      type: String,
      required: [true, 'SKU is required'],
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be a positive number'],
    },
    stock: {
      type: Number,
      required: [true, 'Stock is required'],
      default: 0,
    },
  },
  { _id: false },
);

const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
    },
    description: {
      type: String,
    },
    variants: {
      type: [productVariantSchema],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Product = model<TProduct>('Product', productSchema);
