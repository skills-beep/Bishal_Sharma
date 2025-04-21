
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  avatar?: string;
  createdAt: Date;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  seller: {
    id: string;
    name: string;
  };
  createdAt: Date;
  status: 'pending' | 'approved' | 'rejected';
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export type Category = {
  id: string;
  name: string;
  image: string;
}
