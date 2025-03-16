import React from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Plus } from "lucide-react";

export default function Inventory() {
  return (
    <NewDashboardLayout>
      <div className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold">Inventory Management</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Device
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search inventory..."
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
                    Device
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Model
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Storage
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Condition
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Purchase Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cost
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
                {/* Sample inventory items */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">iPhone 14 Pro</td>
                  <td className="px-6 py-4 whitespace-nowrap">A2650</td>
                  <td className="px-6 py-4 whitespace-nowrap">256GB</td>
                  <td className="px-6 py-4 whitespace-nowrap">A-Grade</td>
                  <td className="px-6 py-4 whitespace-nowrap">2023-10-15</td>
                  <td className="px-6 py-4 whitespace-nowrap">$650</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      In Stock
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Samsung S23</td>
                  <td className="px-6 py-4 whitespace-nowrap">SM-S911U</td>
                  <td className="px-6 py-4 whitespace-nowrap">128GB</td>
                  <td className="px-6 py-4 whitespace-nowrap">B-Grade</td>
                  <td className="px-6 py-4 whitespace-nowrap">2023-10-12</td>
                  <td className="px-6 py-4 whitespace-nowrap">$480</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      In Stock
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">iPhone 13</td>
                  <td className="px-6 py-4 whitespace-nowrap">A2482</td>
                  <td className="px-6 py-4 whitespace-nowrap">128GB</td>
                  <td className="px-6 py-4 whitespace-nowrap">A-Grade</td>
                  <td className="px-6 py-4 whitespace-nowrap">2023-10-10</td>
                  <td className="px-6 py-4 whitespace-nowrap">$420</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      Reserved
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Google Pixel 7
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">GVU6C</td>
                  <td className="px-6 py-4 whitespace-nowrap">256GB</td>
                  <td className="px-6 py-4 whitespace-nowrap">C-Grade</td>
                  <td className="px-6 py-4 whitespace-nowrap">2023-10-08</td>
                  <td className="px-6 py-4 whitespace-nowrap">$320</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Sold
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">iPhone 14</td>
                  <td className="px-6 py-4 whitespace-nowrap">A2649</td>
                  <td className="px-6 py-4 whitespace-nowrap">128GB</td>
                  <td className="px-6 py-4 whitespace-nowrap">B-Grade</td>
                  <td className="px-6 py-4 whitespace-nowrap">2023-10-05</td>
                  <td className="px-6 py-4 whitespace-nowrap">$520</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      In Stock
                    </span>
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
              <span className="font-medium">162</span> results
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
