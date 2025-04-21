
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold text-druk-600">DrukBazaar</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Connecting Bhutan's artisans with customers worldwide. Supporting local
              craftsmanship and traditional products from the Land of the Thunder Dragon.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Shop</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <Link to="/categories" className="hover:underline">Categories</Link>
              <Link to="/new-arrivals" className="hover:underline">New Arrivals</Link>
              <Link to="/featured" className="hover:underline">Featured</Link>
              <Link to="/best-sellers" className="hover:underline">Best Sellers</Link>
            </nav>
          </div>
          <div>
            <h3 className="font-medium">Account</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <Link to="/account" className="hover:underline">My Account</Link>
              <Link to="/orders" className="hover:underline">Orders</Link>
              <Link to="/sell" className="hover:underline">Sell Products</Link>
              <Link to="/favorites" className="hover:underline">Favorites</Link>
            </nav>
          </div>
          <div>
            <h3 className="font-medium">About</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <Link to="/about" className="hover:underline">About Us</Link>
              <Link to="/contact" className="hover:underline">Contact Us</Link>
              <Link to="/faq" className="hover:underline">FAQ</Link>
              <Link to="/shipping" className="hover:underline">Shipping</Link>
            </nav>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between border-t pt-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DrukBazaar. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link to="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:underline">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
