
import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Product, User } from "@/types";
import { products, users } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminDashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [pendingProducts, setPendingProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is admin
    if (!user || user.role !== "admin") {
      toast({
        title: "Access Denied",
        description: "You do not have permission to access this page.",
        variant: "destructive",
      });
      navigate("/");
      return;
    }

    // Fetch data
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Mock fetching data
        setPendingProducts(products.filter(p => p.status === "pending"));
        setAllProducts(products);
        setAllUsers(users);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user, navigate, toast]);

  const approveProduct = (id: string) => {
    setPendingProducts(prev => prev.filter(p => p.id !== id));
    setAllProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, status: "approved" } : p))
    );
    toast({
      title: "Product Approved",
      description: "The product has been approved and is now visible to customers.",
    });
  };

  const rejectProduct = (id: string) => {
    setPendingProducts(prev => prev.filter(p => p.id !== id));
    setAllProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, status: "rejected" } : p))
    );
    toast({
      title: "Product Rejected",
      description: "The product has been rejected and will not be visible to customers.",
    });
  };

  const removeProduct = (id: string) => {
    setAllProducts(prev => prev.filter(p => p.id !== id));
    setPendingProducts(prev => prev.filter(p => p.id !== id));
    toast({
      title: "Product Removed",
      description: "The product has been permanently removed from DrukBazaar.",
    });
  };

  const filteredProducts = searchQuery
    ? allProducts.filter(
        p =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.seller.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allProducts;

  const filteredUsers = searchQuery
    ? allUsers.filter(
        u =>
          u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          u.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allUsers;

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

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="mt-2 text-muted-foreground">
              Manage products, users, and content on DrukBazaar
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Products</p>
                  <h3 className="text-3xl font-bold">{allProducts.length}</h3>
                </div>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
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
                    className="h-6 w-6"
                  >
                    <path d="M20.5 7.278 12 2 3.5 7.278v9.444L12 22l8.5-5.278V7.278Z" />
                    <path d="M12 12 3.5 7.278" />
                    <path d="m12 12 8.5-4.722" />
                    <path d="M12 12v10" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                  <h3 className="text-3xl font-bold">{allUsers.length}</h3>
                </div>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
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
                    className="h-6 w-6"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Approvals</p>
                  <h3 className="text-3xl font-bold">{pendingProducts.length}</h3>
                </div>
                <div className="rounded-full bg-yellow-500/10 p-3 text-yellow-500">
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
                    className="h-6 w-6"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="approvals" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="approvals">Product Approvals</TabsTrigger>
              <TabsTrigger value="products">All Products</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
            </TabsList>
            
            <TabsContent value="approvals" className="mt-6">
              <div className="rounded-lg border shadow-sm">
                <div className="p-6">
                  <h2 className="text-xl font-semibold">Pending Product Approvals</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Review and approve products submitted by sellers
                  </p>
                </div>
                {pendingProducts.length > 0 ? (
                  <div className="overflow-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="py-3 px-4 text-left">Product</th>
                          <th className="py-3 px-4 text-left">Seller</th>
                          <th className="py-3 px-4 text-left">Price</th>
                          <th className="py-3 px-4 text-left">Date Submitted</th>
                          <th className="py-3 px-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pendingProducts.map((product) => (
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
                              {product.seller.name}
                            </td>
                            <td className="py-3 px-4">
                              Nu. {product.price.toLocaleString()}
                            </td>
                            <td className="py-3 px-4 text-muted-foreground">
                              {new Date(product.createdAt).toLocaleDateString()}
                            </td>
                            <td className="py-3 px-4 text-right">
                              <Button
                                variant="outline"
                                size="sm"
                                className="mr-2"
                                onClick={() => approveProduct(product.id)}
                              >
                                Approve
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-red-500 border-red-200 hover:bg-red-50"
                                onClick={() => rejectProduct(product.id)}
                              >
                                Reject
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <p className="text-muted-foreground">No products pending approval.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="products" className="mt-6">
              <div className="rounded-lg border shadow-sm">
                <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">All Products</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Manage all products on DrukBazaar
                    </p>
                  </div>
                  <div className="w-full sm:w-auto">
                    <Input
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="max-w-sm"
                    />
                  </div>
                </div>
                <div className="overflow-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="py-3 px-4 text-left">Product</th>
                        <th className="py-3 px-4 text-left">Seller</th>
                        <th className="py-3 px-4 text-left">Price</th>
                        <th className="py-3 px-4 text-left">Status</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts.map((product) => (
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
                            {product.seller.name}
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
                              className="mr-2"
                              onClick={() => navigate(`/products/${product.id}`)}
                            >
                              View
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-red-500 border-red-200 hover:bg-red-50"
                              onClick={() => removeProduct(product.id)}
                            >
                              Remove
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="users" className="mt-6">
              <div className="rounded-lg border shadow-sm">
                <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">All Users</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Manage users on DrukBazaar
                    </p>
                  </div>
                  <div className="w-full sm:w-auto">
                    <Input
                      placeholder="Search users..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="max-w-sm"
                    />
                  </div>
                </div>
                <div className="overflow-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="py-3 px-4 text-left">Name</th>
                        <th className="py-3 px-4 text-left">Email</th>
                        <th className="py-3 px-4 text-left">Role</th>
                        <th className="py-3 px-4 text-left">Joined</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.map((user) => (
                        <tr key={user.id} className="border-b">
                          <td className="py-3 px-4 font-medium">{user.name}</td>
                          <td className="py-3 px-4">{user.email}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`inline-flex h-6 items-center rounded-full px-2.5 text-xs font-medium ${
                                user.role === "admin"
                                  ? "bg-purple-100 text-purple-700"
                                  : "bg-blue-100 text-blue-700"
                              }`}
                            >
                              {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">
                            {new Date(user.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Button
                              variant="outline"
                              size="sm"
                              className="mr-2"
                            >
                              View Profile
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className={user.id !== "999" ? "text-red-500 border-red-200 hover:bg-red-50" : "opacity-50 cursor-not-allowed"}
                              disabled={user.id === "999"}
                            >
                              Disable
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
