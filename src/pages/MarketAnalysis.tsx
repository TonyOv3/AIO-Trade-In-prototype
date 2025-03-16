import React from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MarketAnalysis() {
  return (
    <NewDashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Market Analysis</h1>

        <Tabs defaultValue="iphone" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="iphone">iPhone</TabsTrigger>
            <TabsTrigger value="samsung">Samsung</TabsTrigger>
            <TabsTrigger value="google">Google</TabsTrigger>
            <TabsTrigger value="other">Other Brands</TabsTrigger>
          </TabsList>

          <TabsContent value="iphone" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>iPhone 14 Pro Price Trends</CardTitle>
                  <CardDescription>Last 30 days market data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-md">
                    <p className="text-muted-foreground">
                      Price trend chart will appear here
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market Insights</CardTitle>
                  <CardDescription>AI-generated analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-md border border-blue-100">
                      <h3 className="font-medium text-blue-800 mb-1">
                        Price Trend Analysis
                      </h3>
                      <p className="text-sm text-blue-700">
                        iPhone 14 Pro prices have decreased by 8.5% over the
                        past 30 days, indicating a market adjustment ahead of
                        expected new model announcements.
                      </p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-md border border-green-100">
                      <h3 className="font-medium text-green-800 mb-1">
                        Buying Opportunity
                      </h3>
                      <p className="text-sm text-green-700">
                        Current buy-back prices are at a 3-month low, suggesting
                        a good opportunity for bulk purchases before the holiday
                        season demand increase.
                      </p>
                    </div>

                    <div className="p-4 bg-amber-50 rounded-md border border-amber-100">
                      <h3 className="font-medium text-amber-800 mb-1">
                        Market Prediction
                      </h3>
                      <p className="text-sm text-amber-700">
                        Based on historical patterns, we predict a 12-15% price
                        increase for iPhone 14 Pro models in November-December
                        timeframe.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Regional Price Comparison</CardTitle>
                  <CardDescription>
                    iPhone 14 Pro (128GB) average buyback prices by region
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-md">
                    <p className="text-muted-foreground">
                      Regional comparison chart will appear here
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="samsung" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Samsung Galaxy Models</CardTitle>
                <CardDescription>Market data loading...</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-md">
                  <p className="text-muted-foreground">
                    Samsung market data will appear here
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="google" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Google Pixel Models</CardTitle>
                <CardDescription>Market data loading...</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-md">
                  <p className="text-muted-foreground">
                    Google Pixel market data will appear here
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="other" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Other Smartphone Brands</CardTitle>
                <CardDescription>Market data loading...</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-md">
                  <p className="text-muted-foreground">
                    Other brands market data will appear here
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </NewDashboardLayout>
  );
}
