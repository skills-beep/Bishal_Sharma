
import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/types";
import { mockService } from "@/data/mockData";

export default function AccountPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userProducts, setUserProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    setFormData({
      ...formData,
      name: user.name,
      email: user.email,
    });

    const fetchUserProducts = async () => {
      setIsLoading(true);
      try {
        const products = await mockService.getProductsByUser(user.id);
        setUserProducts(products);
      } catch (error) {
        console.error("Error fetching user products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProducts();
  }, [user, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
    });
  };

  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.newPassword !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords do not match.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Password Updated",
      description: "Your password has been updated successfully.",
    });
    
    setFormData({
      ...formData,
      password: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">My Account</h1>
              <p className="mt-2 text-muted-foreground">
                Manage your profile, orders, and products
              </p>
            </div>
            <Button variant="outline" onClick={logout}>
              Sign Out
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center text-2xl font-bold mb-4">
                    {user.name.charAt(0)}
                  </div>
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                  <p className="mt-2 text-sm">
                    Account created{" "}
                    <time dateTime={user.createdAt.toISOString()}>
                      {new Date(user.createdAt).toLocaleDateString()}
                    </time>
                  </p>
                  <div className="mt-6 w-full">
                    <Button
                      variant="outline"
                      className="w-full"
                      asChild
                    >
                      <Link to="/account/seller">Seller Dashboard</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="md:col-span-2">
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                  <TabsTrigger value="products">My Products</TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile" className="mt-6 space-y-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold">Profile Information</h3>
                      <p className="text-sm text-muted-foreground">
                        Update your account information
                      </p>
                    </div>
                    
                    <form onSubmit={handleProfileUpdate} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <Button type="submit" className="w-full sm:w-auto">
                        Update Profile
                      </Button>
                    </form>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold">Change Password</h3>
                      <p className="text-sm text-muted-foreground">
                        Update your password
                      </p>
                    </div>
                    
                    <form onSubmit={handlePasswordUpdate} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="password">Current Password</Label>
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input
                            id="newPassword"
                            name="newPassword"
                            type="password"
                            value={formData.newPassword}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <Button type="submit" className="w-full sm:w-auto">
                        Update Password
                      </Button>
                    </form>
                  </div>
                </TabsContent>
                
                <TabsContent value="orders" className="mt-6">
                  <div className="rounded-lg border shadow-sm">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold">Your Orders</h3>
                      <p className="text-sm text-muted-foreground">
                        View your order history
                      </p>
                    </div>
                    <div className="p-12 text-center">
                      <p className="text-muted-foreground">You haven't placed any orders yet.</p>
                      <Button asChild className="mt-4">
                        <Link to="/products">Browse Products</Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="products" className="mt-6">
                  <div className="rounded-lg border shadow-sm">
                    <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold">Your Products</h3>
                        <p className="text-sm text-muted-foreground">
                          Manage your product listings
                        </p>
                      </div>
                      <Button asChild>
                        <Link to="/sell">Add New Product</Link>
                      </Button>
                    </div>
                    
                    {isLoading ? (
                      <div className="flex justify-center items-center h-48">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-druk-600"></div>
                      </div>
                    ) : userProducts.length > 0 ? (
                      <div className="overflow-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b bg-muted/50">
                              <th className="py-3 px-4 text-left">Product</th>
                              <th className="py-3 px-4 text-left">Price</th>
                              <th className="py-3 px-4 text-left">Status</th>
                              <th className="py-3 px-4 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {userProducts.map((product) => (
                              <tr key={product.id} className="border-b">
                                <td className="py-3 px-4">
                                  <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 overflow-hidden rounded">
                                      <img
                                        src={product.images[0] || "/placeholder.svg"}
                                        alt={product.title}
                                        className="h-full w-full object-cover"
                                      />
                                    </div>
                                    <span className="font-medium truncate max-w-[200px]">
                                      {product.title}
                                    </span>
                                  </div>
                                </td>
                                <td className="py-3 px-4">
                                  Nu. {product.price.toLocaleString()}
                                </td>
                                <td className="py-3 px-4">
                                  <span
                                    className={`inline-flex h-6 items-center rounded-full px-2.5 text-xs font-medium ${
                                      product.status === "approved"
                                        ? "bg-green-100 text-green-700"
                                        : product.status === "pending"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : "bg-red-100 text-red-700"
                                    }`}
                                  >
                                    {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                                  </span>
                                </td>
                                <td className="py-3 px-4 text-right">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    asChild
                                    className="mr-2"
                                  >
                                    <Link to={`/products/${product.id}`}>View</Link>
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                  >
                                    Edit
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="p-12 text-center">
                        <p className="text-muted-foreground">You haven't listed any products yet.</p>
                        <Button asChild className="mt-4">
                          <Link to="/sell">Add Your First Product</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
