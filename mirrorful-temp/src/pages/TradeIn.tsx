import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SmartphoneIcon, PlusIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, ClockIcon, SearchIcon, RefreshCwIcon, DollarSignIcon, TrendingUpIcon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
const TradeIn = () => {
  const [activeTab, setActiveTab] = useState('active');
  const tradeInRequests = [{
    id: 1,
    customer: 'Alex Johnson',
    device: 'iPhone 13 Pro',
    condition: 'B',
    estimatedValue: '$520',
    status: 'Pending',
    date: '2023-07-20'
  }, {
    id: 2,
    customer: 'Maria Garcia',
    device: 'Samsung Galaxy S22',
    condition: 'A',
    estimatedValue: '$480',
    status: 'Approved',
    date: '2023-07-19'
  }, {
    id: 3,
    customer: 'James Wilson',
    device: 'Google Pixel 6',
    condition: 'C',
    estimatedValue: '$320',
    status: 'Rejected',
    date: '2023-07-18'
  }, {
    id: 4,
    customer: 'Sarah Miller',
    device: 'iPhone 12',
    condition: 'B',
    estimatedValue: '$350',
    status: 'Completed',
    date: '2023-07-15'
  }];
  const tradeInStats = {
    totalRequests: 48,
    pendingApproval: 12,
    approved: 8,
    completed: 24,
    averageValue: '$415'
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Trade-In Management</h1>
          <p className="text-sm text-muted-foreground">
            Process device trade-ins, evaluate conditions, and manage customer
            offers
          </p>
        </div>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          New Trade-In
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Requests</p>
                <p className="text-2xl font-bold">
                  {tradeInStats.totalRequests}
                </p>
              </div>
              <RefreshCwIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Pending Approval
                </p>
                <p className="text-2xl font-bold">
                  {tradeInStats.pendingApproval}
                </p>
              </div>
              <ClockIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold">{tradeInStats.completed}</p>
              </div>
              <CheckCircleIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Value</p>
                <p className="text-2xl font-bold">
                  {tradeInStats.averageValue}
                </p>
              </div>
              <DollarSignIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle>Trade-In Requests</CardTitle>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input type="text" placeholder="Search requests..." className="pl-10 pr-4 py-2 rounded-md border bg-background text-sm w-64" />
            </div>
          </div>
          <CardDescription>
            Manage and process incoming trade-in requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="active">Active Requests</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Customer
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Device
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Condition
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Est. Value
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
                    {tradeInRequests.filter(req => ['Pending', 'Approved'].includes(req.status)).map(request => <tr key={request.id} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-medium">
                            {request.customer}
                          </td>
                          <td className="py-3 px-4">{request.device}</td>
                          <td className="py-3 px-4">
                            <Badge variant={request.condition === 'A' ? 'success' : request.condition === 'B' ? 'warning' : 'default'}>
                              {request.condition}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 font-medium">
                            {request.estimatedValue}
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant={request.status === 'Approved' ? 'success' : request.status === 'Pending' ? 'warning' : request.status === 'Rejected' ? 'destructive' : 'secondary'}>
                              {request.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-sm">{request.date}</td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                View
                              </Button>
                              <Button variant="outline" size="sm">
                                Process
                              </Button>
                            </div>
                          </td>
                        </tr>)}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="completed">
              <div className="flex items-center justify-center h-40 border rounded-md bg-muted/30">
                <p className="text-muted-foreground">
                  Completed trade-ins will be displayed here
                </p>
              </div>
            </TabsContent>
            <TabsContent value="rejected">
              <div className="flex items-center justify-center h-40 border rounded-md bg-muted/30">
                <p className="text-muted-foreground">
                  Rejected trade-ins will be displayed here
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Quick Trade-In Estimator</CardTitle>
          <CardDescription>
            Get an instant estimate for any device
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label htmlFor="device-model" className="text-sm font-medium">
                Device Model
              </label>
              <select id="device-model" className="w-full p-2 rounded-md border bg-background">
                <option value="">Select Model</option>
                <option value="iphone13">iPhone 13</option>
                <option value="iphone13pro">iPhone 13 Pro</option>
                <option value="iphone12">iPhone 12</option>
                <option value="samsungs22">Samsung Galaxy S22</option>
                <option value="pixel6">Google Pixel 6</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="device-condition" className="text-sm font-medium">
                Condition
              </label>
              <select id="device-condition" className="w-full p-2 rounded-md border bg-background">
                <option value="">Select Condition</option>
                <option value="a">A Grade (Excellent)</option>
                <option value="b">B Grade (Good)</option>
                <option value="c">C Grade (Fair)</option>
                <option value="d">D Grade (Poor)</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button className="w-full">
                Get Estimate <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default TradeIn;