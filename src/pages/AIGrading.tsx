import React from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, Check, AlertTriangle, Info } from "lucide-react";

export default function AIGrading() {
  return (
    <NewDashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">AI Device Grading</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Device Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-24 w-24 bg-gray-100 rounded-md flex items-center justify-center">
                  <Smartphone className="h-12 w-12 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">iPhone 13 Pro</h3>
                  <p className="text-sm text-muted-foreground">
                    128GB - Graphite
                  </p>
                  <div className="flex space-x-2 mt-1">
                    <Badge variant="outline">A1234</Badge>
                    <Badge variant="outline">IMEI: 123456789012345</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Screen Condition</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    <Check className="h-3 w-3 mr-1" /> Excellent
                  </Badge>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Battery Health</span>
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                    <Info className="h-3 w-3 mr-1" /> 87%
                  </Badge>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">
                    Cosmetic Condition
                  </span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    <Check className="h-3 w-3 mr-1" /> Minor Wear
                  </Badge>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Functionality</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    <Check className="h-3 w-3 mr-1" /> Fully Functional
                  </Badge>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Activation Lock</span>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                    <AlertTriangle className="h-3 w-3 mr-1" /> Verification
                    Needed
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Grading Result</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center p-6 text-center">
                <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-blue-700">A-</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Grade: A-</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Excellent condition with minor cosmetic wear
                </p>

                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>

                <div className="grid grid-cols-3 w-full text-center gap-2 mb-6">
                  <div>
                    <div className="text-xs text-muted-foreground">Poor</div>
                    <div className="text-xs">C</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Good</div>
                    <div className="text-xs">B</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      Excellent
                    </div>
                    <div className="text-xs">A</div>
                  </div>
                </div>

                <div className="space-y-2 w-full text-left">
                  <div className="flex justify-between">
                    <span className="text-sm">Estimated Market Value:</span>
                    <span className="text-sm font-bold">$649</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Recommended Buyback Price:</span>
                    <span className="text-sm font-bold">$520</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Detailed Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-md">
                <h3 className="font-medium mb-2">Screen Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  The screen shows no visible scratches or damage. All touch
                  functionality is working properly. Display brightness and
                  color accuracy are within normal parameters.
                </p>
              </div>

              <div className="p-4 border rounded-md">
                <h3 className="font-medium mb-2">Battery Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Battery health is at 87%, which is good for a device of this
                  age. Expected battery life is approximately 8-10 hours of
                  normal usage. Charging functionality works as expected.
                </p>
              </div>

              <div className="p-4 border rounded-md">
                <h3 className="font-medium mb-2">Cosmetic Inspection</h3>
                <p className="text-sm text-muted-foreground">
                  Minor scratches on the back glass and aluminum frame. No dents
                  or major cosmetic damage. Overall appearance is very good with
                  normal signs of use.
                </p>
              </div>

              <div className="p-4 border rounded-md">
                <h3 className="font-medium mb-2">Functional Testing</h3>
                <p className="text-sm text-muted-foreground">
                  All buttons, speakers, microphones, and cameras are fully
                  functional. Wireless connectivity (WiFi, Bluetooth, Cellular)
                  all working properly. No issues detected with sensors.
                </p>
              </div>

              <div className="p-4 border rounded-md bg-red-50">
                <h3 className="font-medium mb-2 text-red-800">
                  Activation Lock Warning
                </h3>
                <p className="text-sm text-red-700">
                  Device appears to have activation lock enabled. Verification
                  with the current owner is required before completing the
                  transaction.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <Button variant="outline">Request Manual Review</Button>
              <Button>Accept Grading</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </NewDashboardLayout>
  );
}
