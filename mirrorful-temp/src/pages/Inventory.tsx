import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PackageIcon, PlusIcon, FilterIcon, SearchIcon, DownloadIcon, BoxIcon, CheckCircleIcon, ShoppingBagIcon, TruckIcon, TagIcon, BarChart2Icon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
const Inventory = () => {
  const [activeTab, setActiveTab] = useState('all');
  const inventoryItems = [{
    id: 1,
    name: 'iPhone 13 Pro',
    sku: 'IP13P-256-GR-A',
    grade: 'A',
    storage: '256GB',
    color: 'Graphite',
    price: 649.99,
    status: 'In Stock',
    location: 'Warehouse A',
    dateAdded: '2023-07-15'
  }, {
    id: 2,
    name: 'Samsung Galaxy S22',
    sku: 'SGS22-128-BK-B',
    grade: 'B',
    storage: '128GB',
    color: 'Black',
    price: 429.99,
    status: 'In Stock',
    location: 'Warehouse B',
    dateAdded: '2023-07-12'
  }, {
    id: 3,
    name: 'Google Pixel 6',
    sku: 'GP6-128-BL-A',
    grade: 'A',
    storage: '128GB',
    color: 'Blue',
    price: 399.99,
    status: 'Reserved',
    location: 'Warehouse A',
    dateAdded: '2023-07-10'
  }, {
    id: 4,
    name: 'iPhone 12',
    sku: 'IP12-64-WH-B',
    grade: 'B',
    storage: '64GB',
    color: 'White',
    price: 379.99,
    status: 'In Stock',
    location: 'Warehouse C',
    dateAdded: '2023-07-08'
  }, {
    id: 5,
    name: 'OnePlus 10 Pro',
    sku: 'OP10P-256-GR-C',
    grade: 'C',
    storage: '256GB',
    color: 'Green',
    price: 349.99,
    status: 'Sold',
    location: 'Warehouse B',
    dateAdded: '2023-07-05'
  }];
  const inventoryStats = {
    totalDevices: 162,
    totalValue: '$67,890',
    inStock: 128,
    reserved: 22,
    sold: 12,
    pendingShipment: 8
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Inventory Management</h1>
          <p className="text-sm text-muted-foreground">
            Manage your device inventory, track stock levels, and monitor status
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <DownloadIcon className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Device
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Devices</p>
                <p className="text-2xl font-bold">
                  {inventoryStats.totalDevices}
                </p>
              </div>
              <BoxIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-2xl font-bold">
                  {inventoryStats.totalValue}
                </p>
              </div>
              <TagIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">In Stock</p>
                <p className="text-2xl font-bold">{inventoryStats.inStock}</p>
              </div>
              <CheckCircleIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Pending Shipment
                </p>
                <p className="text-2xl font-bold">
                  {inventoryStats.pendingShipment}
                </p>
              </div>
              <TruckIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle>Inventory List</CardTitle>
            <div className="flex space-x-2">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input type="text" placeholder="Search devices..." className="pl-10 pr-4 py-2 rounded-md border bg-background text-sm w-64" />
              </div>
              <Button variant="outline" size="icon">
                <FilterIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <CardDescription>
            View and manage your current inventory
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Devices</TabsTrigger>
              <TabsTrigger value="instock">In Stock</TabsTrigger>
              <TabsTrigger value="reserved">Reserved</TabsTrigger>
              <TabsTrigger value="sold">Sold</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Device
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        SKU
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Grade
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Price
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Location
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventoryItems.map(item => <tr key={item.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {item.storage} • {item.color}
                            </p>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm">{item.sku}</td>
                        <td className="py-3 px-4">
                          <Badge variant={item.grade === 'A' ? 'success' : item.grade === 'B' ? 'warning' : 'default'}>
                            {item.grade}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 font-medium">${item.price}</td>
                        <td className="py-3 px-4">
                          <Badge variant={item.status === 'In Stock' ? 'success' : item.status === 'Reserved' ? 'warning' : 'secondary'}>
                            {item.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-sm">{item.location}</td>
                        <td className="py-3 px-4">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="instock">
              <div className="flex items-center justify-center h-40 border rounded-md bg-muted/30">
                <p className="text-muted-foreground">
                  In Stock devices will be displayed here
                </p>
              </div>
            </TabsContent>
            <TabsContent value="reserved">
              <div className="flex items-center justify-center h-40 border rounded-md bg-muted/30">
                <p className="text-muted-foreground">
                  Reserved devices will be displayed here
                </p>
              </div>
            </TabsContent>
            <TabsContent value="sold">
              <div className="flex items-center justify-center h-40 border rounded-md bg-muted/30">
                <p className="text-muted-foreground">
                  Sold devices will be displayed here
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="border-t">
          <div className="text-sm text-muted-foreground">
            Showing 5 of {inventoryStats.totalDevices} devices
          </div>
          <div className="ml-auto flex space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>;
};
export default Inventory;