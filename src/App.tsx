import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ProductDetailPage, ProductsListPage, CategoriesPage } from "./pages/ProductPages";
import { LoginPage, RegisterPage } from "./pages/AuthPages";
import { CartPage, CheckoutPage, OrderSuccessPage } from "./pages/CartPages";
import { CreateProductPage, SellerDashboardPage } from "./pages/SellerPages";
import AccountPage from "./pages/AccountPage";
import AdminDashboardPage from "./pages/AdminPages";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Main pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsListPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/categories/:id" element={<ProductsListPage />} />
              
              {/* Auth pages */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              
              {/* User account pages */}
              <Route path="/account" element={<AccountPage />} />
              <Route path="/account/seller" element={<SellerDashboardPage />} />
              
              {/* Shopping cart and checkout */}
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-success" element={<OrderSuccessPage />} />
              
              {/* Seller pages */}
              <Route path="/sell" element={<CreateProductPage />} />
              
              {/* Admin pages */}
              <Route path="/admin" element={<AdminDashboardPage />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
