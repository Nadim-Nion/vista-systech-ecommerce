import { z } from 'zod';

// Zod schema for product variant
const productVariantValidationSchema = z.object({
  body: z.object({
    sku: z.string({ error: 'SKU is required' }).min(1, 'SKU cannot be empty'),
    name: z
      .string({ error: 'Name is required' })
      .min(1, 'Name cannot be empty'),
    price: z
      .number({ error: 'Price is required' })
      .nonnegative('Price must be a positive number'),
    stock: z
      .number({ error: 'Stock is required' })
      .nonnegative('Stock cannot be negative')
      .optional()
      .default(0),
  }),
});

// Zod schema for product
const createProductValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ error: 'Product name is required' })
      .min(1, 'Product name cannot be empty'),
    description: z.string().optional(),
    variants: z
      .array(productVariantValidationSchema, { error: 'Variants are required' })
      .min(1, 'At least one variant is required'),
  }),
});

export const ProductValidations = {
  createProductValidationSchema,
};
