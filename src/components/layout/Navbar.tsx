
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle"; // Added import

export function Navbar() {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4 lg:gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-druk-600">DrukBazaar</span>
          </Link>
          
          <form onSubmit={handleSearch} className="hidden md:flex md:flex-1">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit" variant="secondary" className="ml-2">
              Search
            </Button>
          </form>
        </div>
        
        <div className="flex items-center gap-2">
          <ThemeToggle /> {/* Added ThemeToggle here */}
          
          <div className="hidden md:flex items-center gap-2">
            <Link to="/categories" className="text-sm font-medium">
              Categories
            </Link>
            <Link to="/sell" className="text-sm font-medium">
              Sell
            </Link>
            {user?.role === "admin" && (
              <Link to="/admin" className="text-sm font-medium">
                Admin
              </Link>
            )}
          </div>
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-druk-600 text-[10px] font-medium text-primary-foreground">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
          
          {user ? (
            <div className="hidden md:flex items-center gap-2">
              <Link to="/account">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </div>
          )}
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 py-4">
                <form onSubmit={handleSearch} className="flex gap-2">
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="flex-1"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit">Search</Button>
                </form>
                <div className="flex flex-col gap-2">
                  <Link to="/categories" className="px-4 py-2 hover:bg-accent rounded-md">
                    Categories
                  </Link>
                  <Link to="/sell" className="px-4 py-2 hover:bg-accent rounded-md">
                    Sell
                  </Link>
                  <Link to="/cart" className="px-4 py-2 hover:bg-accent rounded-md">
                    Cart {totalItems > 0 && `(${totalItems})`}
                  </Link>
                  {user?.role === "admin" && (
                    <Link to="/admin" className="px-4 py-2 hover:bg-accent rounded-md">
                      Admin
                    </Link>
                  )}
                  
                  {user ? (
                    <>
                      <Link to="/account" className="px-4 py-2 hover:bg-accent rounded-md">
                        My Account
                      </Link>
                      <Button onClick={logout} className="mt-2">
                        Logout
                      </Button>
                    </>
                  ) : (
                    <div className="flex flex-col gap-2 mt-2">
                      <Link to="/login">
                        <Button variant="outline" className="w-full">Login</Button>
                      </Link>
                      <Link to="/register">
                        <Button className="w-full">Register</Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
