import React from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Camera, Battery, Shield, DollarSign } from "lucide-react";

export default function TradeIn() {
  return (
    <NewDashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Trade-In Processing</h1>

        <Tabs defaultValue="new" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="new">New Trade-In</TabsTrigger>
            <TabsTrigger value="pending">Pending (12)</TabsTrigger>
          </TabsList>

          <TabsContent value="new" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Device Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="device-type">Device Type</Label>
                      <Select defaultValue="iphone">
                        <SelectTrigger>
                          <SelectValue placeholder="Select device type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="iphone">iPhone</SelectItem>
                          <SelectItem value="samsung">Samsung</SelectItem>
                          <SelectItem value="google">Google Pixel</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="model">Model</Label>
                      <Select defaultValue="iphone13pro">
                        <SelectTrigger>
                          <SelectValue placeholder="Select model" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="iphone13pro">
                            iPhone 13 Pro
                          </SelectItem>
                          <SelectItem value="iphone13">iPhone 13</SelectItem>
                          <SelectItem value="iphone12pro">
                            iPhone 12 Pro
                          </SelectItem>
                          <SelectItem value="iphone12">iPhone 12</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="storage">Storage</Label>
                      <Select defaultValue="128">
                        <SelectTrigger>
                          <SelectValue placeholder="Select storage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="64">64GB</SelectItem>
                          <SelectItem value="128">128GB</SelectItem>
                          <SelectItem value="256">256GB</SelectItem>
                          <SelectItem value="512">512GB</SelectItem>
                          <SelectItem value="1tb">1TB</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="color">Color</Label>
                      <Select defaultValue="graphite">
                        <SelectTrigger>
                          <SelectValue placeholder="Select color" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="graphite">Graphite</SelectItem>
                          <SelectItem value="gold">Gold</SelectItem>
                          <SelectItem value="silver">Silver</SelectItem>
                          <SelectItem value="blue">Sierra Blue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="imei">IMEI Number</Label>
                      <Input id="imei" placeholder="Enter IMEI number" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="condition">Overall Condition</Label>
                      <Select defaultValue="good">
                        <SelectTrigger>
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">
                            Excellent (Like New)
                          </SelectItem>
                          <SelectItem value="good">
                            Good (Minor Wear)
                          </SelectItem>
                          <SelectItem value="fair">
                            Fair (Visible Wear)
                          </SelectItem>
                          <SelectItem value="poor">
                            Poor (Significant Damage)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="carrier">Carrier</Label>
                      <Select defaultValue="unlocked">
                        <SelectTrigger>
                          <SelectValue placeholder="Select carrier" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="unlocked">Unlocked</SelectItem>
                          <SelectItem value="att">AT&T</SelectItem>
                          <SelectItem value="verizon">Verizon</SelectItem>
                          <SelectItem value="tmobile">T-Mobile</SelectItem>
                          <SelectItem value="sprint">Sprint</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="accessories">Included Accessories</Label>
                      <Select defaultValue="none">
                        <SelectTrigger>
                          <SelectValue placeholder="Select accessories" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">
                            Original Box & Accessories
                          </SelectItem>
                          <SelectItem value="charger">Charger Only</SelectItem>
                          <SelectItem value="none">No Accessories</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Condition Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 border rounded-md">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <Smartphone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Screen Condition</h3>
                        <Select defaultValue="perfect">
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select screen condition" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="perfect">
                              Perfect (No Scratches)
                            </SelectItem>
                            <SelectItem value="minor">
                              Minor Scratches (Not Visible When On)
                            </SelectItem>
                            <SelectItem value="visible">
                              Visible Scratches
                            </SelectItem>
                            <SelectItem value="cracked">Cracked</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 border rounded-md">
                      <div className="p-2 bg-green-100 rounded-full">
                        <Battery className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Battery Health</h3>
                        <Select defaultValue="good">
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select battery health" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="excellent">
                              Excellent (90%+)
                            </SelectItem>
                            <SelectItem value="good">Good (80-89%)</SelectItem>
                            <SelectItem value="fair">Fair (70-79%)</SelectItem>
                            <SelectItem value="poor">
                              Poor (Below 70%)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 border rounded-md">
                      <div className="p-2 bg-purple-100 rounded-full">
                        <Camera className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Functionality</h3>
                        <Select defaultValue="full">
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select functionality" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full">
                              Fully Functional
                            </SelectItem>
                            <SelectItem value="minor">Minor Issues</SelectItem>
                            <SelectItem value="major">Major Issues</SelectItem>
                            <SelectItem value="not">Not Working</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 border rounded-md">
                      <div className="p-2 bg-red-100 rounded-full">
                        <Shield className="h-5 w-5 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Activation Lock</h3>
                        <Select defaultValue="disabled">
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select activation status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="disabled">
                              Disabled/Removed
                            </SelectItem>
                            <SelectItem value="enabled">
                              Still Enabled
                            </SelectItem>
                            <SelectItem value="unknown">Unknown</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trade-In Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <DollarSign className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">$520</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Estimated trade-in value based on device condition
                  </p>

                  <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    <Button variant="outline">Save as Draft</Button>
                    <Button>Process Trade-In</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Pending Trade-Ins</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    You have 12 pending trade-ins that require attention.
                  </p>
                  <Button>View Pending Trade-Ins</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </NewDashboardLayout>
  );
}
