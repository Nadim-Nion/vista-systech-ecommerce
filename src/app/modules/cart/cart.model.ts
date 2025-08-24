import { Schema, model } from 'mongoose';
import { TCart, TCartItem } from './cart.interface';

const cartItemSchema = new Schema<TCartItem>(
  {
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    variantSku: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
  },
  { _id: false },
);

const cartSchema = new Schema<TCart>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    guestToken: {
      type: String,
    },
    items: {
      type: [cartItemSchema],
      required: [true, 'Cart must have items'],
      default: [],
    },
    promoCode: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const Cart = model<TCart>('Cart', cartSchema);
