import { z } from 'zod';

export const cartItemValidationSchema = z.object({
  productId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid productId format'),
  variantSku: z.string().min(1, 'Variant SKU is required'),
  quantity: z.number().min(1, 'Quantity must be at least 1'),
});

export const cartValidationSchema = z.object({
  body: z.object({
    userId: z
      .string()
      .regex(/^[0-9a-fA-F]{24}$/, 'Invalid userId format')
      .optional(),
    guestToken: z.string().optional(),
    items: z
      .array(cartItemValidationSchema)
      .min(1, 'Cart must have at least one item'),
    promoCode: z.string().optional(),
  }),
});

export const CartValidations = {
  cartValidationSchema,
};
