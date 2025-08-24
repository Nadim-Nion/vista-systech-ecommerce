export type TProductVariant = {
  sku: string;
  name: string;
  price: number;
  stock: number;
}

export type TProduct = {
  name: string;
  description?: string;
  variants: TProductVariant[];
}