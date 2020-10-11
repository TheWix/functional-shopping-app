export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export type ShoppingCart = {
  id: number;
  products: Product[];
  promoCode: string;
  total: number;
};
