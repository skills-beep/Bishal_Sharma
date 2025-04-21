
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export function CartPage() {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container py-12">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
            <p className="mt-4 text-muted-foreground">
              Looks like you haven't added any items to your cart yet.
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

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-12">
        <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {items.map((item) => (
              <div
                key={item.productId}
                className="flex flex-col sm:flex-row border-b py-6 first:pt-0"
              >
                <div className="sm:w-1/3 mb-4 sm:mb-0">
                  <Link to={`/products/${item.productId}`}>
                    <img
                      src={item.product.images[0] || "/placeholder.svg"}
                      alt={item.product.title}
                      className="h-40 w-full object-cover rounded-lg"
                    />
                  </Link>
                </div>
                <div className="sm:w-2/3 sm:pl-6 flex flex-col">
                  <div className="flex-1">
                    <Link
                      to={`/products/${item.productId}`}
                      className="text-xl font-semibold hover:underline"
                    >
                      {item.product.title}
                    </Link>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {item.product.description}
                    </p>
                    <p className="mt-2 font-semibold">
                      Nu. {item.product.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center border rounded-md">
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        className="px-3 py-1"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-3 py-1 border-x">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="px-3 py-1"
                      >
                        +
                      </button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.productId)}
                      className="text-red-500"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-1">
            <div className="rounded-lg border p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Order Summary</h2>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between border-b pb-4">
                  <span>Subtotal</span>
                  <span>Nu. {totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b pb-4">
                  <span>Shipping</span>
                  <span>Nu. 150</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>Nu. {(totalPrice + 150).toLocaleString()}</span>
                </div>
              </div>
              <Button
                className="mt-6 w-full"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </Button>
              <Button
                variant="outline"
                className="mt-2 w-full"
                asChild
              >
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    paymentMethod: "cod",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order processing
    setTimeout(() => {
      clearCart();
      setIsSubmitting(false);
      toast({
        title: "Order Placed Successfully",
        description: "Thank you for your purchase!",
      });
      navigate("/order-success");
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container py-12">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
            <p className="mt-4 text-muted-foreground">
              You need to add items to your cart before checkout.
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

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-12">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="rounded-lg border p-6 space-y-4">
                <h2 className="text-xl font-semibold">Shipping Information</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City/Town</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="district">District</Label>
                    <Select
                      value={formData.district}
                      onValueChange={(value) => handleSelectChange("district", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select District" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="thimphu">Thimphu</SelectItem>
                        <SelectItem value="paro">Paro</SelectItem>
                        <SelectItem value="punakha">Punakha</SelectItem>
                        <SelectItem value="wangdue">Wangdue Phodrang</SelectItem>
                        <SelectItem value="bumthang">Bumthang</SelectItem>
                        <SelectItem value="trashigang">Trashigang</SelectItem>
                        <SelectItem value="mongar">Mongar</SelectItem>
                        <SelectItem value="samtse">Samtse</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-6 space-y-4">
                <h2 className="text-xl font-semibold">Payment Method</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === "cod"}
                      onChange={handleInputChange}
                      className="h-4 w-4"
                    />
                    <Label htmlFor="cod">Cash on Delivery</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="bank"
                      name="paymentMethod"
                      value="bank"
                      checked={formData.paymentMethod === "bank"}
                      onChange={handleInputChange}
                      className="h-4 w-4"
                    />
                    <Label htmlFor="bank">Bank Transfer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="mbob"
                      name="paymentMethod"
                      value="mbob"
                      checked={formData.paymentMethod === "mbob"}
                      onChange={handleInputChange}
                      className="h-4 w-4"
                    />
                    <Label htmlFor="mbob">mBOB</Label>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Place Order"}
              </Button>
            </form>
          </div>
          <div className="lg:col-span-1">
            <div className="rounded-lg border p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Order Summary</h2>
              <div className="mt-6 max-h-80 overflow-auto space-y-4">
                {items.map((item) => (
                  <div key={item.productId} className="flex gap-4 pb-4 border-b">
                    <div className="w-20 h-20 overflow-hidden rounded">
                      <img
                        src={item.product.images[0] || "/placeholder.svg"}
                        alt={item.product.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{item.product.title}</p>
                      <p className="text-sm text-muted-foreground">
                        Qty: {item.quantity}
                      </p>
                      <p className="text-sm font-semibold">
                        Nu. {(item.product.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between border-b pb-4">
                  <span>Subtotal</span>
                  <span>Nu. {totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b pb-4">
                  <span>Shipping</span>
                  <span>Nu. 150</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>Nu. {(totalPrice + 150).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function OrderSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="mx-auto max-w-md text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-green-100 p-3">
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
                className="h-8 w-8 text-green-600"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold">Order Placed Successfully!</h1>
          <p className="mt-4 text-muted-foreground">
            Thank you for your purchase. Your order has been placed and will be processed soon.
          </p>
          <p className="mt-2 text-muted-foreground">
            An email with order details has been sent to your email address.
          </p>
          <div className="mt-8 space-y-4">
            <Button asChild className="w-full">
              <Link to="/account">View Your Orders</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
