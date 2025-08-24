import { Types } from 'mongoose';

export type TCartItem = {
  productId: Types.ObjectId;
  variantSku: string;
  quantity: number;
};

export type TCart = {
  userId?: Types.ObjectId; // Optional: registered user
  guestToken?: string; // For guest carts
  items: TCartItem[];
  promoCode?: string; 
};
