import React from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, Smartphone, DollarSign, Plus } from "lucide-react";

export default function Auctions() {
  return (
    <NewDashboardLayout>
      <div className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold">Wholesale Auctions</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create Auction
          </Button>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="active">Active Auctions (4)</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming (2)</TabsTrigger>
            <TabsTrigger value="past">Past Auctions</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Auction 1 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle>iPhone 13 Pro Bulk Lot</CardTitle>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Live
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        20 devices (128GB/256GB mix)
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        Ends in 4 hours 23 minutes
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">12 bidders</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-bold">
                        Current bid: $10,450
                      </span>
                    </div>

                    <div className="h-2 w-full bg-gray-100 rounded-full">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Reserve: $9,000</span>
                      <span>Target: $12,000</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Auction</Button>
                </CardFooter>
              </Card>

              {/* Auction 2 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle>Samsung Galaxy S22 Collection</CardTitle>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Live
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">15 devices (All 256GB)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Ends in 1 day 6 hours</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">8 bidders</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-bold">
                        Current bid: $7,200
                      </span>
                    </div>

                    <div className="h-2 w-full bg-gray-100 rounded-full">
                      <div
                        className="h-full bg-amber-500 rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Reserve: $6,500</span>
                      <span>Target: $9,000</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Auction</Button>
                </CardFooter>
              </Card>

              {/* Auction 3 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle>Mixed Apple Devices</CardTitle>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Live
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        25 devices (iPhones & iPads)
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Ends in 2 days 12 hours</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">15 bidders</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-bold">
                        Current bid: $12,750
                      </span>
                    </div>

                    <div className="h-2 w-full bg-gray-100 rounded-full">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Reserve: $10,000</span>
                      <span>Target: $13,500</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Auction</Button>
                </CardFooter>
              </Card>

              {/* Auction 4 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle>Google Pixel Collection</CardTitle>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Live
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">12 devices (Pixel 6 & 7)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        Ends in 8 hours 15 minutes
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">6 bidders</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-bold">
                        Current bid: $5,400
                      </span>
                    </div>

                    <div className="h-2 w-full bg-gray-100 rounded-full">
                      <div
                        className="h-full bg-red-500 rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Reserve: $5,800</span>
                      <span>Target: $7,200</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Auction</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="upcoming">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Auctions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You have 2 upcoming auctions scheduled to start soon.
                </p>
                <Button className="mt-4">View Upcoming Auctions</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="past">
            <Card>
              <CardHeader>
                <CardTitle>Past Auctions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  View your auction history and performance metrics.
                </p>
                <Button className="mt-4">View Auction History</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </NewDashboardLayout>
  );
}
