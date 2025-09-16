import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Edit, 
  MapPin, 
  Phone, 
  Mail,
  Calendar,
  Leaf,
  TrendingUp,
  Award,
  Bell,
  Shield,
  Download
} from "lucide-react";

const UserProfile = () => {
  const userInfo = {
    name: "Rajesh Kumar",
    email: "rajesh.kumar@email.com",
    phone: "+91 9876543210",
    location: "Village Rampur, District Meerut, UP",
    farmSize: "5 acres",
    mainCrops: ["Wheat", "Rice", "Sugarcane"],
    experience: "15 years",
    memberSince: "2022-03-15"
  };

  const stats = [
    {
      label: "Crops Monitored",
      value: "12",
      icon: Leaf,
      color: "text-success"
    },
    {
      label: "Disease Detections",
      value: "8",
      icon: TrendingUp,
      color: "text-warning"
    },
    {
      label: "Schemes Applied",
      value: "5",
      icon: Award,
      color: "text-primary"
    }
  ];

  const recentActivity = [
    {
      action: "Disease Detection",
      details: "Analyzed tomato leaf - Late blight detected",
      date: "2 hours ago",
      type: "detection"
    },
    {
      action: "Weather Alert",
      details: "Heavy rain warning for next 2 days",
      date: "1 day ago",
      type: "weather"
    },
    {
      action: "Scheme Application",
      details: "Applied for PM-KISAN scheme",
      date: "3 days ago",
      type: "scheme"
    },
    {
      action: "Machinery Rental",
      details: "Booked tractor for tomorrow",
      date: "5 days ago",
      type: "machinery"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">User Profile</h1>
          <p className="text-xl text-muted-foreground">
            Manage your account and farming information
          </p>
        </div>

        {/* Profile Overview */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="h-10 w-10 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl">{userInfo.name}</CardTitle>
                  <CardDescription className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{userInfo.location}</span>
                  </CardDescription>
                  <div className="flex items-center space-x-4 mt-2">
                    <Badge variant="secondary">
                      {userInfo.farmSize} Farm
                    </Badge>
                    <Badge variant="outline">
                      {userInfo.experience} Experience
                    </Badge>
                  </div>
                </div>
              </div>
              <Button variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="farming">Farming Details</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Personal Info Tab */}
          <TabsContent value="personal" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={userInfo.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={userInfo.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" value={userInfo.phone} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Farming Experience</Label>
                    <Input id="experience" value={userInfo.experience} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Farm Location</Label>
                  <Input id="location" value={userInfo.location} />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Farming Details Tab */}
          <TabsContent value="farming" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Farming Information</CardTitle>
                <CardDescription>Manage your farm and crop details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="farmSize">Farm Size</Label>
                    <Input id="farmSize" value={userInfo.farmSize} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="farmType">Farm Type</Label>
                    <Input id="farmType" placeholder="e.g., Organic, Traditional" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="crops">Main Crops</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {userInfo.mainCrops.map((crop, index) => (
                      <Badge key={index} variant="outline">
                        {crop}
                      </Badge>
                    ))}
                  </div>
                  <Input id="crops" placeholder="Add new crop" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="irrigation">Irrigation Method</Label>
                  <Input id="irrigation" placeholder="e.g., Drip, Sprinkler, Canal" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="equipment">Farm Equipment</Label>
                  <Textarea id="equipment" placeholder="List your farm equipment" />
                </div>
                <Button>Update Farming Details</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your recent actions on AgroInteract</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === "detection" ? "bg-warning" :
                        activity.type === "weather" ? "bg-sky" :
                        activity.type === "scheme" ? "bg-success" : "bg-earth"
                      }`} />
                      <div className="flex-1">
                        <div className="font-medium">{activity.action}</div>
                        <div className="text-muted-foreground text-sm">{activity.details}</div>
                      </div>
                      <div className="text-sm text-muted-foreground">{activity.date}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Notification Settings</span>
                </CardTitle>
                <CardDescription>Manage your notification preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Weather Alerts</div>
                    <div className="text-sm text-muted-foreground">Get notified about weather changes</div>
                  </div>
                  <Button variant="outline" size="sm">Enable</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Disease Alerts</div>
                    <div className="text-sm text-muted-foreground">Notifications for crop diseases in your area</div>
                  </div>
                  <Button variant="outline" size="sm">Enable</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Scheme Updates</div>
                    <div className="text-sm text-muted-foreground">New government schemes and deadlines</div>
                  </div>
                  <Button variant="outline" size="sm">Enable</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Privacy & Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Download My Data
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Change Password
                </Button>
                <Button variant="destructive" className="w-full justify-start">
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default UserProfile;