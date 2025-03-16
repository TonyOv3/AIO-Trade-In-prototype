import React from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Download } from "lucide-react";

export default function Orders() {
  return (
    <NewDashboardLayout>
      <div className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold">Orders</h1>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" /> Export
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search orders..."
              className="pl-8"
            />
          </div>
          <Button variant="outline" className="sm:w-auto">
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Items
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    #ORD-2023-1001
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">2023-10-15</td>
                  <td className="px-6 py-4 whitespace-nowrap">John Smith</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    iPhone 13 Pro (2)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">$1,698</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Completed
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    #ORD-2023-1002
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">2023-10-14</td>
                  <td className="px-6 py-4 whitespace-nowrap">Sarah Johnson</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Samsung S22 (1)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">$699</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                      Processing
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    #ORD-2023-1003
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">2023-10-12</td>
                  <td className="px-6 py-4 whitespace-nowrap">Michael Brown</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Google Pixel 6 (1), Accessories (2)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">$589</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                      Shipped
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    #ORD-2023-1004
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">2023-10-10</td>
                  <td className="px-6 py-4 whitespace-nowrap">Emily Davis</td>
                  <td className="px-6 py-4 whitespace-nowrap">iPhone 12 (1)</td>
                  <td className="px-6 py-4 whitespace-nowrap">$549</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                      Cancelled
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    #ORD-2023-1005
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">2023-10-08</td>
                  <td className="px-6 py-4 whitespace-nowrap">Robert Wilson</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Samsung S21 (1), Cases (3)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">$649</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Completed
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">5</span> of{" "}
              <span className="font-medium">42</span> results
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </NewDashboardLayout>
  );
}
