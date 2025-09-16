import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Search, 
  Calendar, 
  IndianRupee,
  CheckCircle,
  Clock,
  AlertCircle,
  ExternalLink,
  Download
} from "lucide-react";

const GovernmentSchemes = () => {
  const schemes = [
    {
      id: 1,
      name: "PM-KISAN Scheme",
      description: "Direct income support to farmers",
      amount: "₹6,000/year",
      category: "Income Support",
      deadline: "2024-12-31",
      status: "Open",
      eligibility: "Small and marginal farmers",
      applied: false,
      documents: ["Aadhaar Card", "Bank Details", "Land Records"]
    },
    {
      id: 2,
      name: "Pradhan Mantri Fasal Bima Yojana",
      description: "Crop insurance scheme for farmers",
      amount: "Premium subsidy up to 90%",
      category: "Insurance",
      deadline: "2024-11-15",
      status: "Open",
      eligibility: "All farmers",
      applied: true,
      documents: ["Land Records", "Bank Details", "Previous Insurance"]
    },
    {
      id: 3,
      name: "Soil Health Card Scheme",
      description: "Free soil testing and nutrient management",
      amount: "Free",
      category: "Soil Health",
      deadline: "2024-10-30",
      status: "Closing Soon",
      eligibility: "All farmers",
      applied: false,
      documents: ["Farmer ID", "Land Records"]
    },
    {
      id: 4,
      name: "National Agriculture Market (e-NAM)",
      description: "Online trading platform for agricultural commodities",
      amount: "Free Registration",
      category: "Marketing",
      deadline: "Ongoing",
      status: "Open",
      eligibility: "All farmers",
      applied: true,
      documents: ["Farmer Registration", "Bank Details"]
    }
  ];

  const myApplications = [
    {
      id: 1,
      scheme: "PM-KISAN Scheme",
      applicationId: "PMK2024001234",
      status: "Approved",
      appliedDate: "2024-01-15",
      amount: "₹2,000",
      nextPayment: "2024-12-01"
    },
    {
      id: 2,
      scheme: "Crop Insurance",
      applicationId: "PMFBY2024567",
      status: "Under Review",
      appliedDate: "2024-03-10",
      amount: "₹500 premium",
      nextPayment: "Pending"
    }
  ];

  const categories = [
    { name: "All", count: 25 },
    { name: "Income Support", count: 8 },
    { name: "Insurance", count: 6 },
    { name: "Loans", count: 5 },
    { name: "Marketing", count: 4 },
    { name: "Training", count: 2 }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Government Schemes</h1>
          <p className="text-xl text-muted-foreground">
            Discover and apply for government schemes and subsidies for farmers
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="schemes" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="schemes">Available Schemes</TabsTrigger>
            <TabsTrigger value="applications">My Applications</TabsTrigger>
          </TabsList>

          {/* Available Schemes Tab */}
          <TabsContent value="schemes" className="space-y-6">
            {/* Search Bar */}
            <Card>
              <CardContent className="p-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search schemes..." 
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

            {/* Schemes Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {schemes.map((scheme) => (
                <Card key={scheme.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{scheme.name}</CardTitle>
                        <CardDescription>{scheme.description}</CardDescription>
                      </div>
                      <Badge 
                        variant={
                          scheme.status === "Open" ? "default" : 
                          scheme.status === "Closing Soon" ? "destructive" : "secondary"
                        }
                        className={
                          scheme.status === "Open" ? "bg-success text-success-foreground" :
                          scheme.status === "Closing Soon" ? "" : ""
                        }
                      >
                        {scheme.status}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
                          <IndianRupee className="h-4 w-4" />
                          <span>Benefit</span>
                        </div>
                        <div className="font-semibold">{scheme.amount}</div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
                          <Calendar className="h-4 w-4" />
                          <span>Deadline</span>
                        </div>
                        <div className="font-semibold">{scheme.deadline}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Eligibility:</h4>
                      <p className="text-muted-foreground text-sm">{scheme.eligibility}</p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Required Documents:</h4>
                      <div className="flex flex-wrap gap-1">
                        {scheme.documents.map((doc, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {doc}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      {scheme.applied ? (
                        <Button variant="secondary" className="flex-1" disabled>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Applied
                        </Button>
                      ) : (
                        <Button className="flex-1">
                          <FileText className="h-4 w-4 mr-2" />
                          Apply Now
                        </Button>
                      )}
                      <Button variant="outline" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>

                    <Badge variant="secondary" className="w-fit">
                      {scheme.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Applications Tab */}
          <TabsContent value="applications" className="space-y-6">
            {/* Application Status Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">+2 this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Approved</CardTitle>
                  <CheckCircle className="h-4 w-4 text-success" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">62.5% approval rate</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Benefits</CardTitle>
                  <IndianRupee className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹12,500</div>
                  <p className="text-xs text-muted-foreground">This year</p>
                </CardContent>
              </Card>
            </div>

            {/* Applications List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Recent Applications</h3>
              <div className="space-y-4">
                {myApplications.map((application) => (
                  <Card key={application.id}>
                    <CardContent className="flex items-center justify-between p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          application.status === "Approved" ? "bg-success" :
                          application.status === "Under Review" ? "bg-warning" : "bg-destructive"
                        }`}>
                          {application.status === "Approved" ? (
                            <CheckCircle className="h-6 w-6 text-success-foreground" />
                          ) : application.status === "Under Review" ? (
                            <Clock className="h-6 w-6 text-warning-foreground" />
                          ) : (
                            <AlertCircle className="h-6 w-6 text-destructive-foreground" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold">{application.scheme}</h4>
                          <p className="text-muted-foreground text-sm">
                            Application ID: {application.applicationId}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            Applied: {application.appliedDate}
                          </p>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <Badge 
                          variant={
                            application.status === "Approved" ? "default" : 
                            application.status === "Under Review" ? "secondary" : "destructive"
                          }
                          className={
                            application.status === "Approved" ? "bg-success text-success-foreground" :
                            application.status === "Under Review" ? "bg-warning text-warning-foreground" : ""
                          }
                        >
                          {application.status}
                        </Badge>
                        <div className="text-sm">
                          <div className="font-semibold">{application.amount}</div>
                          <div className="text-muted-foreground">
                            Next: {application.nextPayment}
                          </div>
                        </div>
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

export default GovernmentSchemes;