import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingBag, 
  Search, 
  MapPin, 
  Star,
  TrendingUp,
  Package,
  Users,
  Plus
} from "lucide-react";

const KisanBazaar = () => {
  const products = [
    {
      id: 1,
      name: "Fresh Tomatoes",
      category: "Vegetables",
      price: "₹40/kg",
      seller: "Ramesh Farm",
      location: "5 km away",
      rating: 4.5,
      inStock: true,
      image: "tomatoes.jpg",
      description: "Organic, fresh tomatoes directly from farm"
    },
    {
      id: 2,
      name: "Wheat Flour",
      category: "Grains",
      price: "₹35/kg",
      seller: "Sharma Mills",
      location: "8 km away",
      rating: 4.8,
      inStock: true,
      image: "wheat.jpg",
      description: "Stone ground whole wheat flour"
    },
    {
      id: 3,
      name: "Organic Fertilizer",
      category: "Inputs",
      price: "₹150/bag",
      seller: "Green Supply Co.",
      location: "12 km away",
      rating: 4.3,
      inStock: false,
      image: "fertilizer.jpg",
      description: "100% organic compost fertilizer"
    },
    {
      id: 4,
      name: "Quality Seeds",
      category: "Seeds",
      price: "₹200/kg",
      seller: "Seed Bank",
      location: "3 km away",
      rating: 4.7,
      inStock: true,
      image: "seeds.jpg",
      description: "High yield vegetable seeds"
    }
  ];

  const myListings = [
    {
      id: 1,
      name: "Fresh Milk",
      price: "₹50/liter",
      status: "Active",
      orders: 12,
      revenue: "₹2,400"
    },
    {
      id: 2,
      name: "Organic Potatoes",
      price: "₹30/kg",
      status: "Sold Out",
      orders: 8,
      revenue: "₹1,200"
    }
  ];

  const categories = [
    { name: "All", count: 156 },
    { name: "Vegetables", count: 45 },
    { name: "Fruits", count: 32 },
    { name: "Grains", count: 28 },
    { name: "Seeds", count: 24 },
    { name: "Inputs", count: 27 }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Kisan Bazaar</h1>
          <p className="text-xl text-muted-foreground">
            Direct marketplace connecting farmers with buyers
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="browse" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="browse">Browse Products</TabsTrigger>
            <TabsTrigger value="sell">My Listings</TabsTrigger>
          </TabsList>

          {/* Browse Products Tab */}
          <TabsContent value="browse" className="space-y-6">
            {/* Search Bar */}
            <Card>
              <CardContent className="p-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search products..." 
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge key={category.name} variant="outline" className="px-3 py-1 cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  {category.name} ({category.count})
                </Badge>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="bg-muted h-48 flex items-center justify-center">
                      <Package className="h-16 w-16 text-muted-foreground" />
                    </div>
                    <Badge 
                      className={`absolute top-3 right-3 ${
                        product.inStock 
                          ? "bg-success text-success-foreground" 
                          : "bg-destructive text-destructive-foreground"
                      }`}
                    >
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{product.price}</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{product.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current text-accent" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-muted-foreground">Seller: </span>
                        <span className="font-medium">{product.seller}</span>
                      </div>
                      <Badge variant="secondary">{product.category}</Badge>
                    </div>

                    <div className="flex space-x-2">
                      <Button 
                        className="flex-1" 
                        disabled={!product.inStock}
                        variant={product.inStock ? "default" : "secondary"}
                      >
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        {product.inStock ? "Buy Now" : "Out of Stock"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Listings Tab */}
          <TabsContent value="sell" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45</div>
                  <p className="text-xs text-muted-foreground">+12 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹15,240</div>
                  <p className="text-xs text-muted-foreground">+20% from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Add New Product Button */}
            <Card className="bg-gradient-primary text-white">
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">List a New Product</h3>
                  <p className="text-primary-foreground/90">Start selling your produce to local buyers</p>
                </div>
                <Button size="lg" variant="secondary">
                  <Plus className="h-5 w-5 mr-2" />
                  Add Product
                </Button>
              </CardContent>
            </Card>

            {/* My Products */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">My Products</h3>
              <div className="space-y-4">
                {myListings.map((listing) => (
                  <Card key={listing.id}>
                    <CardContent className="flex items-center justify-between p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                          <Package className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{listing.name}</h4>
                          <p className="text-muted-foreground">{listing.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="text-lg font-semibold">{listing.orders}</div>
                          <div className="text-sm text-muted-foreground">Orders</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold">{listing.revenue}</div>
                          <div className="text-sm text-muted-foreground">Revenue</div>
                        </div>
                        <Badge 
                          variant={listing.status === "Active" ? "default" : "secondary"}
                          className={listing.status === "Active" ? "bg-success text-success-foreground" : ""}
                        >
                          {listing.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default KisanBazaar;