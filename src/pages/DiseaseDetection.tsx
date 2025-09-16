import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Upload, Scan, AlertTriangle, CheckCircle } from "lucide-react";

const DiseaseDetection = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Disease Detection</h1>
          <p className="text-xl text-muted-foreground">
            AI-powered crop disease identification and treatment recommendations
          </p>
        </div>

        {/* Upload Section */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2">
              <Scan className="h-6 w-6 text-primary" />
              <span>Analyze Your Crop</span>
            </CardTitle>
            <CardDescription>
              Upload a photo of your crop for instant disease detection
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-medium mb-2">Drop your image here</p>
              <p className="text-muted-foreground mb-4">
                or click to browse from your device
              </p>
              <Button>
                Choose Image
              </Button>
            </div>
            
            <div className="flex items-center justify-center">
              <span className="text-muted-foreground">or</span>
            </div>
            
            <Button variant="outline" className="w-full" size="lg">
              <Camera className="h-5 w-5 mr-2" />
              Take Photo
            </Button>
          </CardContent>
        </Card>

        {/* Sample Results */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Recent Detections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Tomato Leaf</CardTitle>
                  <Badge variant="destructive">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    Disease Detected
                  </Badge>
                </div>
                <CardDescription>Analyzed 2 hours ago</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg h-40 flex items-center justify-center">
                  <span className="text-muted-foreground">Sample Image</span>
                </div>
                <div>
                  <h4 className="font-semibold text-destructive">Late Blight Disease</h4>
                  <p className="text-sm text-muted-foreground">
                    Confidence: 89%
                  </p>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Recommended Treatment:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Apply copper-based fungicide</li>
                    <li>• Improve air circulation</li>
                    <li>• Remove affected leaves</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Wheat Field</CardTitle>
                  <Badge variant="default" className="bg-success text-success-foreground">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Healthy
                  </Badge>
                </div>
                <CardDescription>Analyzed 1 day ago</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg h-40 flex items-center justify-center">
                  <span className="text-muted-foreground">Sample Image</span>
                </div>
                <div>
                  <h4 className="font-semibold text-success">No Disease Detected</h4>
                  <p className="text-sm text-muted-foreground">
                    Confidence: 95%
                  </p>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Recommendations:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Continue current care routine</li>
                    <li>• Monitor for early signs of disease</li>
                    <li>• Maintain proper irrigation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How it Works */}
        <Card>
          <CardHeader>
            <CardTitle>How Disease Detection Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">1. Capture</h3>
                <p className="text-muted-foreground">
                  Take a clear photo of the affected crop or leaf
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scan className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">2. Analyze</h3>
                <p className="text-muted-foreground">
                  AI processes the image and identifies potential diseases
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-success-foreground" />
                </div>
                <h3 className="font-semibold mb-2">3. Recommend</h3>
                <p className="text-muted-foreground">
                  Get treatment recommendations and preventive measures
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default DiseaseDetection;