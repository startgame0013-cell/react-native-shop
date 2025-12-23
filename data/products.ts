export type Product = {
  id: string;
  title: string;
  price: number;
};

export const PRODUCTS: Product[] = [
  { id: 'p1', title: 'Red Shirt', price: 29.99 },
  { id: 'p2', title: 'Blue Pants', price: 59.99 },
  { id: 'p3', title: 'Green Scarf', price: 19.99 },
];