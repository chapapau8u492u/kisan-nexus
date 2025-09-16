import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Cloud, 
  Truck, 
  ShoppingBag, 
  FileText, 
  Brain,
  Thermometer,
  Droplets,
  Wind,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const quickActions = [
    {
      title: "Disease Detection",
      description: "AI-powered crop disease identification",
      icon: Leaf,
      href: "/disease-detection",
      color: "bg-success"
    },
    {
      title: "Weather Forecast",
      description: "Real-time weather insights",
      icon: Cloud,
      href: "/weather",
      color: "bg-sky"
    },
    {
      title: "Machinery Rental",
      description: "Find and rent farm equipment",
      icon: Truck,
      href: "/machinery",
      color: "bg-earth"
    },
    {
      title: "Kisan Bazaar",
      description: "Buy and sell agricultural products",
      icon: ShoppingBag,
      href: "/bazaar",
      color: "bg-accent"
    }
  ];

  const weatherData = {
    temperature: "28°C",
    humidity: "65%",
    windSpeed: "12 km/h",
    condition: "Partly Cloudy"
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <section className="text-center py-12 bg-gradient-primary rounded-2xl text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to AgroInteract
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Your smart farming companion powered by AI
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/disease-detection" className="flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Card key={action.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-full ${action.color} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={action.href}>
                        Access Now
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Weather Widget */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Cloud className="h-6 w-6 text-sky" />
                <span>Today's Weather</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <Thermometer className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p className="text-2xl font-bold">{weatherData.temperature}</p>
                  <p className="text-muted-foreground">Temperature</p>
                </div>
                <div className="text-center">
                  <Droplets className="h-8 w-8 text-sky mx-auto mb-2" />
                  <p className="text-2xl font-bold">{weatherData.humidity}</p>
                  <p className="text-muted-foreground">Humidity</p>
                </div>
                <div className="text-center">
                  <Wind className="h-8 w-8 text-earth mx-auto mb-2" />
                  <p className="text-2xl font-bold">{weatherData.windSpeed}</p>
                  <p className="text-muted-foreground">Wind Speed</p>
                </div>
                <div className="text-center">
                  <Cloud className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-lg font-semibold">{weatherData.condition}</p>
                  <p className="text-muted-foreground">Condition</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* AI Insights */}
        <section>
          <Card className="bg-gradient-sky text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-6 w-6" />
                <span>AI Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Crop Health Status</span>
                  <Badge variant="secondary" className="bg-success text-success-foreground">
                    Excellent
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Recommended Action</span>
                  <span>Monitor for pests</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Next Irrigation</span>
                  <span>In 2 days</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Government Schemes */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-foreground">Government Schemes</h2>
            <Button variant="outline" asChild>
              <Link to="/schemes">
                View All
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>PM-KISAN Scheme</span>
                </CardTitle>
                <CardDescription>
                  Direct financial support to farmers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get ₹6,000 per year in three installments directly to your bank account.
                </p>
                <Button variant="outline" size="sm">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Crop Insurance</span>
                </CardTitle>
                <CardDescription>
                  Protect your crops from natural disasters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive coverage for crop losses due to weather and pests.
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;