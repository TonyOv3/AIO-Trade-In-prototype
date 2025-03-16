import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ClipboardListIcon, TruckIcon, PackageIcon, DollarSignIcon, UserIcon, SearchIcon, FilterIcon, CalendarIcon, CheckCircleIcon, XCircleIcon, Clock8Icon, ShoppingBagIcon, AlertCircleIcon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
const OrderManagement = () => {
  const [activeTab, setActiveTab] = useState('all');
  const orders = [{
    id: 'ORD-2023-7845',
    customer: 'John Smith',
    items: 3,
    total: '$1,249.97',
    status: 'Processing',
    date: '2023-07-20',
    paymentStatus: 'Paid',
    shippingMethod: 'Express'
  }, {
    id: 'ORD-2023-7844',
    customer: 'Emma Johnson',
    items: 1,
    total: '$449.99',
    status: 'Shipped',
    date: '2023-07-19',
    paymentStatus: 'Paid',
    shippingMethod: 'Standard'
  }, {
    id: 'ORD-2023-7843',
    customer: 'Michael Brown',
    items: 2,
    total: '$899.98',
    status: 'Delivered',
    date: '2023-07-18',
    paymentStatus: 'Paid',
    shippingMethod: 'Express'
  }, {
    id: 'ORD-2023-7842',
    customer: 'Sophia Martinez',
    items: 1,
    total: '$379.99',
    status: 'Cancelled',
    date: '2023-07-17',
    paymentStatus: 'Refunded',
    shippingMethod: 'Standard'
  }, {
    id: 'ORD-2023-7841',
    customer: 'William Davis',
    items: 4,
    total: '$1,599.96',
    status: 'Processing',
    date: '2023-07-16',
    paymentStatus: 'Paid',
    shippingMethod: 'Express'
  }];
  const orderStats = {
    totalOrders: 124,
    processing: 18,
    shipped: 42,
    delivered: 58,
    cancelled: 6,
    totalRevenue: '$52,845.75'
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Order Management</h1>
          <p className="text-sm text-muted-foreground">
            Track and manage customer orders, shipments, and returns
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <FilterIcon className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <ShoppingBagIcon className="mr-2 h-4 w-4" />
            New Order
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Orders</p>
                <p className="text-2xl font-bold">{orderStats.totalOrders}</p>
              </div>
              <ClipboardListIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Processing</p>
                <p className="text-2xl font-bold">{orderStats.processing}</p>
              </div>
              <Clock8Icon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Shipped</p>
                <p className="text-2xl font-bold">{orderStats.shipped}</p>
              </div>
              <TruckIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold">{orderStats.totalRevenue}</p>
              </div>
              <DollarSignIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle>Order List</CardTitle>
            <div className="flex space-x-2">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input type="text" placeholder="Search orders..." className="pl-10 pr-4 py-2 rounded-md border bg-background text-sm w-64" />
              </div>
              <Button variant="outline" size="icon">
                <CalendarIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <CardDescription>View and manage all customer orders</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="processing">Processing</TabsTrigger>
              <TabsTrigger value="shipped">Shipped</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Order ID
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Customer
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Items
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Total
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Date
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(order => <tr key={order.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4 font-medium">{order.id}</td>
                        <td className="py-3 px-4">{order.customer}</td>
                        <td className="py-3 px-4 text-center">{order.items}</td>
                        <td className="py-3 px-4 font-medium">{order.total}</td>
                        <td className="py-3 px-4">
                          <Badge variant={order.status === 'Delivered' ? 'success' : order.status === 'Shipped' ? 'default' : order.status === 'Processing' ? 'warning' : 'destructive'}>
                            {order.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-sm">{order.date}</td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              Update
                            </Button>
                          </div>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="processing">
              <div className="flex items-center justify-center h-40 border rounded-md bg-muted/30">
                <p className="text-muted-foreground">
                  Processing orders will be displayed here
                </p>
              </div>
            </TabsContent>
            <TabsContent value="shipped">
              <div className="flex items-center justify-center h-40 border rounded-md bg-muted/30">
                <p className="text-muted-foreground">
                  Shipped orders will be displayed here
                </p>
              </div>
            </TabsContent>
            <TabsContent value="delivered">
              <div className="flex items-center justify-center h-40 border rounded-md bg-muted/30">
                <p className="text-muted-foreground">
                  Delivered orders will be displayed here
                </p>
              </div>
            </TabsContent>
            <TabsContent value="cancelled">
              <div className="flex items-center justify-center h-40 border rounded-md bg-muted/30">
                <p className="text-muted-foreground">
                  Cancelled orders will be displayed here
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="border-t">
          <div className="text-sm text-muted-foreground">
            Showing 5 of {orderStats.totalOrders} orders
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Shipments</CardTitle>
            <CardDescription>
              Track the latest shipments and deliveries
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start p-3 border rounded-md">
                <TruckIcon className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                <div>
                  <div className="flex items-center">
                    <p className="font-medium">Order #ORD-2023-7844</p>
                    <Badge className="ml-2" variant="outline">
                      In Transit
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Estimated delivery: July 22, 2023
                  </p>
                </div>
              </div>
              <div className="flex items-start p-3 border rounded-md">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <div>
                  <div className="flex items-center">
                    <p className="font-medium">Order #ORD-2023-7843</p>
                    <Badge className="ml-2" variant="outline">
                      Delivered
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Delivered on: July 19, 2023
                  </p>
                </div>
              </div>
              <div className="flex items-start p-3 border rounded-md">
                <AlertCircleIcon className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                <div>
                  <div className="flex items-center">
                    <p className="font-medium">Order #ORD-2023-7841</p>
                    <Badge className="ml-2" variant="outline">
                      Processing
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Awaiting shipment
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Order Issues</CardTitle>
            <CardDescription>
              Manage problems with recent orders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start p-3 border rounded-md bg-red-50 dark:bg-red-900/20">
                <XCircleIcon className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <div>
                  <div className="flex items-center">
                    <p className="font-medium">Order #ORD-2023-7842</p>
                    <Badge className="ml-2" variant="destructive">
                      Cancelled
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Customer requested cancellation
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Process Refund
                  </Button>
                </div>
              </div>
              <div className="flex items-start p-3 border rounded-md bg-yellow-50 dark:bg-yellow-900/20">
                <AlertCircleIcon className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                <div>
                  <div className="flex items-center">
                    <p className="font-medium">Order #ORD-2023-7840</p>
                    <Badge className="ml-2" variant="warning">
                      Payment Issue
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Payment authorization failed
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Contact Customer
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default OrderManagement;