
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Product } from "@/types";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/contexts/CartContext";
import { mockService, categories } from "@/data/mockData";
import { ProductCard } from "@/components/products/ProductCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Product Detail Page
export function ProductDetailPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        if (id) {
          const fetchedProduct = await mockService.getProductById(id);
          setProduct(fetchedProduct);
          
          if (fetchedProduct) {
            const categoryProducts = await mockService.getProductsByCategory(fetchedProduct.category);
            const filtered = categoryProducts.filter(p => p.id !== fetchedProduct.id).slice(0, 4);
            setRelatedProducts(filtered);
          }
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container py-12">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-druk-600"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container py-12">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold">Product Not Found</h1>
            <p className="mt-4 text-muted-foreground">
              The product you're looking for does not exist or has been removed.
            </p>
            <Button asChild className="mt-6">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const category = categories.find(c => c.id === product.category);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.title}
                className="h-full w-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-auto py-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative h-20 w-20 cursor-pointer overflow-hidden rounded-md border ${
                      selectedImage === index ? "ring-2 ring-druk-600" : ""
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Product thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <div className="mt-2 flex items-center gap-2">
                <p className="text-sm text-muted-foreground">Listed by {product.seller.name}</p>
                <p className="text-sm text-muted-foreground">•</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(product.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            
            <p className="text-3xl font-bold">Nu. {product.price.toLocaleString()}</p>
            
            <div className="space-y-2">
              <p className="font-semibold">Category</p>
              <Link to={`/categories/${category?.id}`} className="inline-block">
                <span className="inline-flex h-8 items-center rounded-md border bg-background px-3 text-sm">
                  {category?.name || "Unknown"}
                </span>
              </Link>
            </div>
            
            <div className="space-y-2">
              <p className="font-semibold">Description</p>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            
            <div className="space-y-2">
              <p className="font-semibold">Quantity</p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </Button>
                <Input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-16 text-center"
                />
                <Button variant="outline" size="icon" onClick={incrementQuantity}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button className="sm:flex-1" onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Button variant="outline" className="sm:flex-1" asChild>
                <Link to={`/seller/${product.seller.id}`}>Contact Seller</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold">Related Products</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

// Products List Page for All or by Category
export function ProductsListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const { id } = useParams<{ id: string }>();
  const isCategory = Boolean(id);
  
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        if (id) {
          // Fetch products by category
          const categoryProducts = await mockService.getProductsByCategory(id);
          setProducts(categoryProducts);
        } else {
          // Fetch all products
          const allProducts = await mockService.getProducts();
          setProducts(allProducts);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  const filteredProducts = searchQuery
    ? products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  const category = id ? categories.find(c => c.id === id) : null;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">
              {isCategory ? `${category?.name || "Category"}` : "All Products"}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {isCategory
                ? `Browse all products in the ${category?.name} category`
                : "Explore our collection of authentic Bhutanese products"}
            </p>
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1 sm:max-w-sm">
              <Label htmlFor="search" className="sr-only">
                Search Products
              </Label>
              <Input
                id="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-48">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-druk-600"></div>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-xl font-bold">No Products Found</h2>
              <p className="mt-2 text-muted-foreground">
                {searchQuery
                  ? `No products matching "${searchQuery}"`
                  : "There are no products in this category yet."}
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Categories List Page
export function CategoriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Product Categories</h1>
            <p className="mt-2 text-muted-foreground">
              Browse our selection of authentic Bhutanese products by category
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/categories/${category.id}`}
                className="group overflow-hidden rounded-lg border"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-xl font-bold">{category.name}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
