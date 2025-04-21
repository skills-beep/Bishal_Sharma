
import { Product, Category, User } from "@/types";

// Mock Categories
export const categories: Category[] = [
  {
    id: "1",
    name: "Bhutanese Textiles",
    image: "/images/categories/textiles.jpg"
  },
  {
    id: "2",
    name: "Handicrafts",
    image: "/images/categories/handicrafts.jpg"
  },
  {
    id: "3",
    name: "Traditional Food",
    image: "/images/categories/food.jpg"
  },
  {
    id: "4",
    name: "Art & Paintings",
    image: "/images/categories/art.jpg"
  },
  {
    id: "5",
    name: "Jewelry",
    image: "/images/categories/jewelry.jpg"
  },
  {
    id: "6",
    name: "Prayer Items",
    image: "/images/categories/prayer.jpg"
  }
];

// Mock Products
export const products: Product[] = [
  {
    id: "1",
    title: "Traditional Kira Textile",
    description: "Hand-woven traditional Bhutanese Kira made with 100% natural cotton and traditional patterns.",
    price: 8500,
    category: "1",
    images: ["/images/products/kira1.jpg", "/images/products/kira2.jpg"],
    seller: {
      id: "1",
      name: "Dorji Wangmo"
    },
    createdAt: new Date("2023-01-15"),
    status: "approved"
  },
  {
    id: "2",
    title: "Handcrafted Wooden Phallus",
    description: "Traditional wooden phallus carving, believed to ward off evil spirits. Hand-carved by local artisans.",
    price: 1200,
    category: "2",
    images: ["/images/products/phallus1.jpg"],
    seller: {
      id: "2",
      name: "Tshering Dorji"
    },
    createdAt: new Date("2023-02-10"),
    status: "approved"
  },
  {
    id: "3",
    title: "Premium Bhutanese Red Rice",
    description: "Organic red rice grown in the high-altitude fields of Paro Valley. Rich in nutrients and distinct in flavor.",
    price: 350,
    category: "3",
    images: ["/images/products/rice1.jpg", "/images/products/rice2.jpg"],
    seller: {
      id: "3",
      name: "Karma Yangzom"
    },
    createdAt: new Date("2023-03-05"),
    status: "approved"
  },
  {
    id: "4",
    title: "Thangka Painting of Buddha",
    description: "Hand-painted Thangka depicting Buddha Shakyamuni, created using traditional techniques and natural pigments.",
    price: 15000,
    category: "4",
    images: ["/images/products/thangka1.jpg"],
    seller: {
      id: "4",
      name: "Jigme Wangchuk"
    },
    createdAt: new Date("2023-01-25"),
    status: "approved"
  },
  {
    id: "5",
    title: "Silver Koma (ritual box)",
    description: "Handcrafted silver ritual box with traditional Bhutanese designs, used for carrying precious items.",
    price: 4500,
    category: "5",
    images: ["/images/products/koma1.jpg"],
    seller: {
      id: "5",
      name: "Pema Tshomo"
    },
    createdAt: new Date("2023-02-18"),
    status: "approved"
  },
  {
    id: "6",
    title: "Prayer Flags Set",
    description: "Set of five traditional prayer flags in different colors, printed with sacred mantras.",
    price: 600,
    category: "6",
    images: ["/images/products/prayer1.jpg"],
    seller: {
      id: "1",
      name: "Dorji Wangmo"
    },
    createdAt: new Date("2023-03-12"),
    status: "approved"
  },
  {
    id: "7",
    title: "Traditional Gho",
    description: "Hand-woven men's traditional dress (Gho) made with premium fabric and featuring classic patterns.",
    price: 7800,
    category: "1",
    images: ["/images/products/gho1.jpg"],
    seller: {
      id: "2",
      name: "Tshering Dorji"
    },
    createdAt: new Date("2023-01-30"),
    status: "approved"
  },
  {
    id: "8",
    title: "Bamboo Basket",
    description: "Handwoven bamboo basket, perfect for storage or as a decorative piece.",
    price: 850,
    category: "2",
    images: ["/images/products/basket1.jpg"],
    seller: {
      id: "3",
      name: "Karma Yangzom"
    },
    createdAt: new Date("2023-02-25"),
    status: "approved"
  }
];

// Mock users for testing
export const users: User[] = [
  {
    id: "1",
    name: "Dorji Wangmo",
    email: "dorji@example.com",
    role: "user",
    createdAt: new Date("2022-12-10")
  },
  {
    id: "2",
    name: "Tshering Dorji",
    email: "tshering@example.com",
    role: "user",
    createdAt: new Date("2023-01-05")
  },
  {
    id: "3",
    name: "Karma Yangzom",
    email: "karma@example.com",
    role: "user",
    createdAt: new Date("2022-11-20")
  },
  {
    id: "4",
    name: "Jigme Wangchuk",
    email: "jigme@example.com",
    role: "user",
    createdAt: new Date("2023-02-01")
  },
  {
    id: "5",
    name: "Pema Tshomo",
    email: "pema@example.com",
    role: "user",
    createdAt: new Date("2022-10-15")
  },
  {
    id: "999",
    name: "Admin User",
    email: "admin@drukbazaar.bt",
    role: "admin",
    createdAt: new Date("2022-01-01")
  }
];

// Mock Service Functions
export const mockService = {
  // Product related functions
  getProducts: () => Promise.resolve(products),
  
  getProductById: (id: string) => 
    Promise.resolve(products.find(product => product.id === id) || null),
  
  getProductsByCategory: (categoryId: string) => 
    Promise.resolve(products.filter(product => product.category === categoryId)),
  
  getProductsByUser: (userId: string) => 
    Promise.resolve(products.filter(product => product.seller.id === userId)),
  
  searchProducts: (query: string) => 
    Promise.resolve(products.filter(
      product => product.title.toLowerCase().includes(query.toLowerCase()) || 
                product.description.toLowerCase().includes(query.toLowerCase())
    )),
  
  createProduct: (product: Omit<Product, 'id' | 'createdAt' | 'status'>) => {
    const newProduct: Product = {
      ...product,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date(),
      status: 'pending'
    };
    return Promise.resolve(newProduct);
  },
  
  // Category related functions
  getCategories: () => Promise.resolve(categories),
  
  getCategoryById: (id: string) => 
    Promise.resolve(categories.find(category => category.id === id) || null),
  
  // User related functions
  getUserById: (id: string) => 
    Promise.resolve(users.find(user => user.id === id) || null)
};
