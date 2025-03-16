import React from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SyndicateHub() {
  return (
    <NewDashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Syndicate Hub</h1>
          <Button>Create New Syndicate</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Active Syndicates */}
          <Card>
            <CardHeader>
              <CardTitle>iPhone 14 Pro Bulk Buy</CardTitle>
              <CardDescription>
                Created by Alex Johnson • 3 days ago
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Target Units:</span>
                  <span className="font-medium">50 devices</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">
                    Current Contributions:
                  </span>
                  <span className="font-medium">32 devices (64%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Members:</span>
                  <span className="font-medium">8 traders</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full mt-2">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: "64%" }}
                  ></div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Samsung S23 Ultra Lot</CardTitle>
              <CardDescription>
                Created by Maria Chen • 5 days ago
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Target Units:</span>
                  <span className="font-medium">25 devices</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">
                    Current Contributions:
                  </span>
                  <span className="font-medium">25 devices (100%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Members:</span>
                  <span className="font-medium">5 traders</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full mt-2">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Distribution
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>iPad Pro 12.9" Collection</CardTitle>
              <CardDescription>Created by You • 1 day ago</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Target Units:</span>
                  <span className="font-medium">15 devices</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">
                    Current Contributions:
                  </span>
                  <span className="font-medium">3 devices (20%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Members:</span>
                  <span className="font-medium">2 traders</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full mt-2">
                  <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" className="flex-1">
                Edit
              </Button>
              <Button className="flex-1">Invite</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </NewDashboardLayout>
  );
}
