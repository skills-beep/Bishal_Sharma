import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";

// Lazy-load every other route so the portfolio (and its splash) loads instantly
const HomePage = lazy(() => import("./pages/HomePage"));
const DrukAirPage = lazy(() => import("./pages/DrukAirPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AccountPage = lazy(() => import("./pages/AccountPage"));
const AdminDashboardPage = lazy(() => import("./pages/AdminPages"));
const ProductPages = lazy(() =>
  import("./pages/ProductPages").then((m) => ({ default: m.ProductsListPage }))
);
const ProductDetailPage = lazy(() =>
  import("./pages/ProductPages").then((m) => ({ default: m.ProductDetailPage }))
);
const CategoriesPage = lazy(() =>
  import("./pages/ProductPages").then((m) => ({ default: m.CategoriesPage }))
);
const LoginPage = lazy(() =>
  import("./pages/AuthPages").then((m) => ({ default: m.LoginPage }))
);
const RegisterPage = lazy(() =>
  import("./pages/AuthPages").then((m) => ({ default: m.RegisterPage }))
);
const CartPage = lazy(() =>
  import("./pages/CartPages").then((m) => ({ default: m.CartPage }))
);
const CheckoutPage = lazy(() =>
  import("./pages/CartPages").then((m) => ({ default: m.CheckoutPage }))
);
const OrderSuccessPage = lazy(() =>
  import("./pages/CartPages").then((m) => ({ default: m.OrderSuccessPage }))
);
const CreateProductPage = lazy(() =>
  import("./pages/SellerPages").then((m) => ({ default: m.CreateProductPage }))
);
const SellerDashboardPage = lazy(() =>
  import("./pages/SellerPages").then((m) => ({ default: m.SellerDashboardPage }))
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a]" />}>
              <Routes>
                <Route path="/" element={<PortfolioPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/airline" element={<DrukAirPage />} />
                <Route path="/products" element={<ProductPages />} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/categories/:id" element={<ProductPages />} />

                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="/account" element={<AccountPage />} />
                <Route path="/account/seller" element={<SellerDashboardPage />} />

                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order-success" element={<OrderSuccessPage />} />

                <Route path="/sell" element={<CreateProductPage />} />

                <Route path="/admin" element={<AdminDashboardPage />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
