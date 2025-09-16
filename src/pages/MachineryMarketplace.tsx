import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Truck, 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  Star,
  Phone,
  MessageCircle
} from "lucide-react";

const MachineryMarketplace = () => {
  const machinery = [
    {
      id: 1,
      name: "John Deere Tractor 5310",
      type: "Tractor",
      price: "₹1,200/day",
      location: "10 km away",
      rating: 4.5,
      reviews: 24,
      available: true,
      owner: "Rajesh Sharma",
      image: "tractor.jpg",
      features: ["75 HP", "4WD", "Power Steering"]
    },
    {
      id: 2,
      name: "Combine Harvester",
      type: "Harvester",
      price: "₹3,500/day",
      location: "15 km away",
      rating: 4.8,
      reviews: 12,
      available: true,
      owner: "Suresh Kumar",
      image: "harvester.jpg",
      features: ["Self-Propelled", "Grain Tank", "GPS"]
    },
    {
      id: 3,
      name: "Rotary Tiller",
      type: "Tillage",
      price: "₹800/day",
      location: "5 km away",
      rating: 4.2,
      reviews: 18,
      available: false,
      owner: "Amit Patel",
      image: "tiller.jpg",
      features: ["6 ft Width", "Heavy Duty", "Quick Hitch"]
    },
    {
      id: 4,
      name: "Seed Drill Machine",
      type: "Seeding",
      price: "₹600/day",
      location: "8 km away",
      rating: 4.6,
      reviews: 15,
      available: true,
      owner: "Prakash Singh",
      image: "seeder.jpg",
      features: ["Multi-Crop", "Precise Spacing", "Fertilizer Box"]
    }
  ];

  const categories = [
    { name: "All Categories", value: "all" },
    { name: "Tractors", value: "tractor" },
    { name: "Harvesters", value: "harvester" },
    { name: "Tillage", value: "tillage" },
    { name: "Seeding", value: "seeding" },
    { name: "Sprayers", value: "sprayer" }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Machinery Marketplace</h1>
          <p className="text-xl text-muted-foreground">
            Rent farm equipment from nearby farmers and service providers
          </p>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search machinery..." 
                    className="pl-10"
                  />
                </div>
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Machinery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {machinery.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="bg-muted h-48 flex items-center justify-center">
                  <Truck className="h-16 w-16 text-muted-foreground" />
                </div>
                <Badge 
                  className={`absolute top-3 right-3 ${
                    item.available 
                      ? "bg-success text-success-foreground" 
                      : "bg-destructive text-destructive-foreground"
                  }`}
                >
                  {item.available ? "Available" : "Rented"}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription className="flex items-center space-x-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">{item.price}</div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current text-accent" />
                      <span className="text-sm">{item.rating}</span>
                      <span className="text-sm text-muted-foreground">({item.reviews})</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {item.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Owner: {item.owner}</span>
                  <Badge variant="secondary">{item.type}</Badge>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    className="flex-1" 
                    disabled={!item.available}
                    variant={item.available ? "default" : "secondary"}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.available ? "Book Now" : "Unavailable"}
                  </Button>
                  <Button variant="outline" size="icon">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* List Your Machinery */}
        <Card className="bg-gradient-primary text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">List Your Machinery</CardTitle>
            <CardDescription className="text-primary-foreground/90">
              Earn extra income by renting out your farm equipment
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">₹2,000+</div>
                  <div className="text-primary-foreground/80">Average Daily Earnings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-primary-foreground/80">Active Renters</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-primary-foreground/80">Support Available</div>
                </div>
              </div>
              <Button size="lg" variant="secondary">
                List Your Equipment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MachineryMarketplace;