import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  Thermometer, 
  Droplets, 
  Wind, 
  Eye,
  Gauge,
  Calendar
} from "lucide-react";

const Weather = () => {
  const currentWeather = {
    location: "Your Farm Location",
    temperature: 28,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    pressure: 1013,
    visibility: 10,
    uvIndex: 6
  };

  const forecast = [
    { day: "Today", high: 30, low: 22, condition: "Partly Cloudy", icon: Cloud, rain: 10 },
    { day: "Tomorrow", high: 32, low: 24, condition: "Sunny", icon: Sun, rain: 0 },
    { day: "Wednesday", high: 28, low: 20, condition: "Rainy", icon: CloudRain, rain: 80 },
    { day: "Thursday", high: 26, low: 18, condition: "Cloudy", icon: Cloud, rain: 30 },
    { day: "Friday", high: 29, low: 21, condition: "Sunny", icon: Sun, rain: 5 },
  ];

  const alerts = [
    {
      type: "warning",
      title: "Heavy Rain Expected",
      description: "Prepare for irrigation adjustments",
      date: "Tomorrow"
    },
    {
      type: "info", 
      title: "Optimal Spraying Conditions",
      description: "Low wind speed perfect for pesticide application",
      date: "Today Evening"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Weather Dashboard</h1>
          <p className="text-xl text-muted-foreground">
            Real-time weather insights for smart farming decisions
          </p>
        </div>

        {/* Current Weather */}
        <Card className="bg-gradient-sky text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Cloud className="h-6 w-6" />
              <span>Current Weather</span>
            </CardTitle>
            <CardDescription className="text-sky-foreground/80">
              {currentWeather.location}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center md:text-left">
                <div className="text-6xl font-bold mb-2">
                  {currentWeather.temperature}°C
                </div>
                <div className="text-xl">
                  {currentWeather.condition}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <Droplets className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-lg font-semibold">{currentWeather.humidity}%</div>
                  <div className="text-sm opacity-80">Humidity</div>
                </div>
                <div className="text-center">
                  <Wind className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-lg font-semibold">{currentWeather.windSpeed} km/h</div>
                  <div className="text-sm opacity-80">Wind</div>
                </div>
                <div className="text-center">
                  <Gauge className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-lg font-semibold">{currentWeather.pressure} mb</div>
                  <div className="text-sm opacity-80">Pressure</div>
                </div>
                <div className="text-center">
                  <Eye className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-lg font-semibold">{currentWeather.visibility} km</div>
                  <div className="text-sm opacity-80">Visibility</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weather Alerts */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Weather Alerts</h2>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <Card key={index} className={alert.type === "warning" ? "border-warning" : "border-sky"}>
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-semibold">{alert.title}</h3>
                    <p className="text-muted-foreground">{alert.description}</p>
                  </div>
                  <Badge variant={alert.type === "warning" ? "destructive" : "default"}>
                    {alert.date}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">5-Day Forecast</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {forecast.map((day, index) => {
              const Icon = day.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{day.day}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Icon className="h-8 w-8 mx-auto text-primary" />
                    <div>
                      <div className="text-2xl font-bold">{day.high}°</div>
                      <div className="text-muted-foreground">{day.low}°</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {day.condition}
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <Droplets className="h-4 w-4 text-sky" />
                      <span className="text-sm">{day.rain}%</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Farming Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-primary" />
              <span>Farming Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-success">Recommended Activities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Apply fertilizer before tomorrow's rain</li>
                  <li>• Harvest ready crops today</li>
                  <li>• Plan irrigation for Friday</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-warning">Precautions</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Cover sensitive crops from heavy rain</li>
                  <li>• Delay pesticide spraying until Thursday</li>
                  <li>• Check drainage systems</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Weather;