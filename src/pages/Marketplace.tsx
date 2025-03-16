import React from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter, Grid, List } from "lucide-react";

export default function Marketplace() {
  return (
    <NewDashboardLayout>
      <div className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold">Marketplace</h1>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search marketplace..."
              className="pl-8"
            />
          </div>
          <Button variant="outline" className="sm:w-auto">
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Marketplace Item 1 */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800&q=80"
                alt="iPhone 12 Pro"
                className="object-cover w-full h-full"
              />
              <Badge className="absolute top-2 right-2 bg-green-500">
                New Listing
              </Badge>
            </div>
            <CardHeader className="p-4 pb-0">
              <CardTitle className="text-lg">iPhone 12 Pro - 256GB</CardTitle>
              <p className="text-sm text-muted-foreground">
                Pacific Blue - Unlocked
              </p>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">$549</span>
                <Badge variant="outline">A-Grade</Badge>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                <p>Posted by TechTrader • 2 hours ago</p>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>

          {/* Marketplace Item 2 */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80"
                alt="Samsung S21"
                className="object-cover w-full h-full"
              />
              <Badge className="absolute top-2 right-2 bg-blue-500">
                Verified
              </Badge>
            </div>
            <CardHeader className="p-4 pb-0">
              <CardTitle className="text-lg">Samsung Galaxy S21</CardTitle>
              <p className="text-sm text-muted-foreground">
                Phantom Black - 128GB
              </p>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">$420</span>
                <Badge variant="outline">B-Grade</Badge>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                <p>Posted by MobileDeals • 1 day ago</p>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>

          {/* Marketplace Item 3 */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800&q=80"
                alt="Google Pixel 6"
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader className="p-4 pb-0">
              <CardTitle className="text-lg">Google Pixel 6 Pro</CardTitle>
              <p className="text-sm text-muted-foreground">
                Stormy Black - 256GB
              </p>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">$480</span>
                <Badge variant="outline">A-Grade</Badge>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                <p>Posted by PixelPerfect • 3 days ago</p>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>

          {/* Marketplace Item 4 */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80"
                alt="iPhone 11"
                className="object-cover w-full h-full"
              />
              <Badge className="absolute top-2 right-2 bg-amber-500">
                Sale
              </Badge>
            </div>
            <CardHeader className="p-4 pb-0">
              <CardTitle className="text-lg">iPhone 11 - 64GB</CardTitle>
              <p className="text-sm text-muted-foreground">White - Unlocked</p>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold">$320</span>
                  <span className="text-sm text-muted-foreground line-through ml-2">
                    $380
                  </span>
                </div>
                <Badge variant="outline">B-Grade</Badge>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                <p>Posted by AppleReseller • 5 days ago</p>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-6 flex justify-center">
          <Button variant="outline">Load More</Button>
        </div>
      </div>
    </NewDashboardLayout>
  );
}
