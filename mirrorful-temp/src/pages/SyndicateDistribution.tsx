import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UsersIcon, DollarSignIcon, BoxIcon, ClockIcon, CheckCircleIcon, XCircleIcon, AlertTriangleIcon, ArrowLeftIcon, ChevronRightIcon, ShieldIcon, InfoIcon, TruckIcon, MapPinIcon, QrCodeIcon, FileTextIcon, SearchIcon, FilterIcon, CheckIcon, PackageIcon, CalendarIcon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
interface DeviceAllocation {
  id: string;
  deviceType: string;
  serialNumber: string;
  condition: string;
  grade: 'A' | 'B' | 'C';
  status: 'pending' | 'shipped' | 'delivered' | 'issue';
  estimatedValue: number;
  assignedTo: string;
  shippingInfo?: {
    carrier: string;
    trackingNumber: string;
    estimatedDelivery: string;
  };
}
const SyndicateDistribution: React.FC = () => {
  const navigate = useNavigate();
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const [activeTab, setActiveTab] = useState('my-allocation');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  // Mock data for demonstration
  const syndicateData = {
    id: id || 'syn-2023-001',
    name: 'Premium iPhone Collective',
    totalCapital: 100000,
    status: 'active',
    type: 'auction',
    distributionStatus: 'in_progress',
    // 'pending', 'in_progress', 'completed'
    distributionProgress: 65,
    memberContribution: 25000,
    memberShare: 25
  };
  const myDevices: DeviceAllocation[] = [{
    id: 'DEV-001',
    deviceType: 'iPhone 13 Pro (256GB)',
    serialNumber: 'IMEI: 354895/12/839401/2',
    condition: 'Excellent - Minor scratches on frame',
    grade: 'A',
    status: 'shipped',
    estimatedValue: 750,
    assignedTo: 'Alex Johnson',
    shippingInfo: {
      carrier: 'FedEx',
      trackingNumber: '7891234567',
      estimatedDelivery: '2023-08-05'
    }
  }, {
    id: 'DEV-002',
    deviceType: 'iPhone 13 Pro (128GB)',
    serialNumber: 'IMEI: 354895/12/839402/3',
    condition: 'Good - Minor scratches on screen',
    grade: 'B',
    status: 'pending',
    estimatedValue: 680,
    assignedTo: 'Alex Johnson'
  }, {
    id: 'DEV-003',
    deviceType: 'iPhone 12 Pro Max (256GB)',
    serialNumber: 'IMEI: 354895/12/839403/4',
    condition: 'Excellent - Like new',
    grade: 'A',
    status: 'delivered',
    estimatedValue: 620,
    assignedTo: 'Alex Johnson',
    shippingInfo: {
      carrier: 'UPS',
      trackingNumber: '1ZA5678901',
      estimatedDelivery: '2023-07-28'
    }
  }, {
    id: 'DEV-004',
    deviceType: 'iPhone 12 Pro Max (128GB)',
    serialNumber: 'IMEI: 354895/12/839404/5',
    condition: 'Fair - Scratches on back glass',
    grade: 'C',
    status: 'issue',
    estimatedValue: 550,
    assignedTo: 'Alex Johnson'
  }];
  const allDevices: DeviceAllocation[] = [...myDevices, {
    id: 'DEV-005',
    deviceType: 'iPhone 13 Pro (256GB)',
    serialNumber: 'IMEI: 354895/12/839405/6',
    condition: 'Excellent - Minor scratches on frame',
    grade: 'A',
    status: 'shipped',
    estimatedValue: 750,
    assignedTo: 'Maria Garcia'
  }, {
    id: 'DEV-006',
    deviceType: 'iPhone 13 Pro (128GB)',
    serialNumber: 'IMEI: 354895/12/839406/7',
    condition: 'Good - Minor scratches on screen',
    grade: 'B',
    status: 'pending',
    estimatedValue: 680,
    assignedTo: 'James Wilson'
  }, {
    id: 'DEV-007',
    deviceType: 'iPhone 12 Pro Max (256GB)',
    serialNumber: 'IMEI: 354895/12/839407/8',
    condition: 'Excellent - Like new',
    grade: 'A',
    status: 'delivered',
    estimatedValue: 620,
    assignedTo: 'Sarah Miller'
  }, {
    id: 'DEV-008',
    deviceType: 'iPhone 12 Pro Max (128GB)',
    serialNumber: 'IMEI: 354895/12/839408/9',
    condition: 'Fair - Scratches on back glass',
    grade: 'C',
    status: 'issue',
    estimatedValue: 550,
    assignedTo: 'Robert Chen'
  }];
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="warning">Pending</Badge>;
      case 'shipped':
        return <Badge variant="default">Shipped</Badge>;
      case 'delivered':
        return <Badge variant="success">Delivered</Badge>;
      case 'issue':
        return <Badge variant="destructive">Issue</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };
  const getGradeBadge = (grade: string) => {
    switch (grade) {
      case 'A':
        return <Badge variant="success">A Grade</Badge>;
      case 'B':
        return <Badge variant="warning">B Grade</Badge>;
      case 'C':
        return <Badge variant="default">C Grade</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };
  const filteredDevices = (activeTab === 'my-allocation' ? myDevices : allDevices).filter(device => {
    // Apply search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return device.deviceType.toLowerCase().includes(query) || device.serialNumber.toLowerCase().includes(query) || device.assignedTo.toLowerCase().includes(query);
    }
    return true;
  }).filter(device => {
    // Apply status filter
    if (statusFilter !== 'all') {
      return device.status === statusFilter;
    }
    return true;
  });
  const calculateTotalValue = (devices: DeviceAllocation[]) => {
    return devices.reduce((total, device) => total + device.estimatedValue, 0);
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="mr-2" onClick={() => navigate(`/syndicate-detail/${id}`)}>
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Back to Syndicate
          </Button>
          <h1 className="text-2xl font-bold">Inventory Distribution</h1>
          <Badge variant="outline" className="ml-2">
            {syndicateData.name}
          </Badge>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Distribution Status
                </p>
                <p className="text-2xl font-bold">In Progress</p>
              </div>
              <BoxIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
            <Progress value={syndicateData.distributionProgress} className="h-1 mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              {syndicateData.distributionProgress}% Complete
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Your Devices</p>
                <p className="text-2xl font-bold">{myDevices.length}</p>
              </div>
              <PackageIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-xs text-muted-foreground">
                Total Value:
              </span>
              <span className="text-xs font-medium">
                {formatCurrency(calculateTotalValue(myDevices))}
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Shipping Status</p>
                <p className="text-2xl font-bold">2 of 4</p>
              </div>
              <TruckIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-xs text-muted-foreground">
                Next Delivery:
              </span>
              <span className="text-xs font-medium">Aug 5, 2023</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Your Share</p>
                <p className="text-2xl font-bold">
                  {syndicateData.memberShare}%
                </p>
              </div>
              <DollarSignIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-xs text-muted-foreground">
                Contribution:
              </span>
              <span className="text-xs font-medium">
                {formatCurrency(syndicateData.memberContribution)}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Device Allocation</CardTitle>
              <CardDescription>
                View and manage your allocated devices
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input type="text" placeholder="Search devices..." className="pl-10 pr-4 py-2 rounded-md border bg-background text-sm w-56" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              </div>
              <select className="py-2 px-3 rounded-md border bg-background text-sm" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="issue">Issues</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="my-allocation" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="my-allocation">My Allocation</TabsTrigger>
              <TabsTrigger value="all-devices">
                All Syndicate Devices
              </TabsTrigger>
              <TabsTrigger value="shipping-info">
                Shipping Information
              </TabsTrigger>
            </TabsList>
            <TabsContent value="my-allocation">
              {filteredDevices.length > 0 ? <div className="space-y-4">
                  {filteredDevices.map(device => <Card key={device.id} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="p-4 md:w-2/3">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center">
                                <h3 className="font-medium">
                                  {device.deviceType}
                                </h3>
                                {getGradeBadge(device.grade)}
                                <Badge variant="outline" className="ml-2">
                                  ID: {device.id}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">
                                {device.serialNumber}
                              </p>
                              <p className="text-sm mt-2">{device.condition}</p>
                            </div>
                            <div>{getStatusBadge(device.status)}</div>
                          </div>
                          {device.status === 'shipped' && device.shippingInfo && <div className="mt-4 p-3 bg-muted/30 rounded-md border">
                                <div className="flex items-center">
                                  <TruckIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                                  <span className="text-sm font-medium">
                                    Shipping Information
                                  </span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                                  <div>
                                    <span className="text-muted-foreground">
                                      Carrier:
                                    </span>
                                    <span className="ml-1 font-medium">
                                      {device.shippingInfo.carrier}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">
                                      Tracking:
                                    </span>
                                    <span className="ml-1 font-medium">
                                      {device.shippingInfo.trackingNumber}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">
                                      Estimated Delivery:
                                    </span>
                                    <span className="ml-1 font-medium">
                                      {device.shippingInfo.estimatedDelivery}
                                    </span>
                                  </div>
                                </div>
                              </div>}
                          {device.status === 'issue' && <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-md border border-red-200 dark:border-red-800">
                              <div className="flex items-center">
                                <AlertTriangleIcon className="h-4 w-4 mr-2 text-red-500" />
                                <span className="text-sm font-medium">
                                  Issue Reported
                                </span>
                              </div>
                              <p className="text-sm mt-1">
                                There is an issue with this device. Our team is
                                investigating and will contact you shortly.
                              </p>
                            </div>}
                        </div>
                        <div className="p-4 bg-muted/30 border-t md:border-t-0 md:border-l md:w-1/3">
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Estimated Value
                              </p>
                              <p className="text-xl font-bold">
                                {formatCurrency(device.estimatedValue)}
                              </p>
                            </div>
                            <div className="space-y-2">
                              {device.status === 'pending' && <Button className="w-full">
                                  <TruckIcon className="mr-2 h-4 w-4" />
                                  Track Shipment
                                </Button>}
                              {device.status === 'shipped' && <Button className="w-full">
                                  <TruckIcon className="mr-2 h-4 w-4" />
                                  Track Shipment
                                </Button>}
                              {device.status === 'delivered' && <Button className="w-full" variant="outline">
                                  <CheckCircleIcon className="mr-2 h-4 w-4" />
                                  Confirm Receipt
                                </Button>}
                              {device.status === 'issue' && <Button className="w-full">
                                  <AlertTriangleIcon className="mr-2 h-4 w-4" />
                                  View Issue Details
                                </Button>}
                              <Button variant="outline" className="w-full">
                                <FileTextIcon className="mr-2 h-4 w-4" />
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>)}
                </div> : <div className="flex flex-col items-center justify-center p-8 border rounded-md bg-muted/30">
                  <BoxIcon className="h-12 w-12 text-muted-foreground/50 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No Devices Found</h3>
                  <p className="text-sm text-muted-foreground text-center max-w-md">
                    {searchQuery || statusFilter !== 'all' ? 'No devices match your current filters. Try adjusting your search criteria.' : "You don't have any devices allocated yet. Devices will appear here once the distribution process begins."}
                  </p>
                  {(searchQuery || statusFilter !== 'all') && <Button variant="outline" className="mt-4" onClick={() => {
                setSearchQuery('');
                setStatusFilter('all');
              }}>
                      Clear Filters
                    </Button>}
                </div>}
            </TabsContent>
            <TabsContent value="all-devices">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Device
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        ID
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Grade
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Assigned To
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Status
                      </th>
                      <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDevices.map(device => <tr key={device.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4 font-medium">
                          {device.deviceType}
                        </td>
                        <td className="py-3 px-4">{device.id}</td>
                        <td className="py-3 px-4">
                          {getGradeBadge(device.grade)}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>
                                {device.assignedTo.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span>{device.assignedTo}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          {getStatusBadge(device.status)}
                        </td>
                        <td className="py-3 px-4 text-right">
                          {formatCurrency(device.estimatedValue)}
                        </td>
                      </tr>)}
                  </tbody>
                  <tfoot className="bg-muted/30">
                    <tr>
                      <td colSpan={5} className="py-3 px-4 font-medium">
                        Total
                      </td>
                      <td className="py-3 px-4 text-right font-medium">
                        {formatCurrency(calculateTotalValue(filteredDevices))}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="shipping-info">
              <div className="space-y-6">
                <div className="bg-muted/30 p-4 rounded-md border flex items-start">
                  <InfoIcon className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Shipping Information</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      All devices will be shipped to your registered address.
                      Please ensure your shipping address is up to date in your
                      profile.
                    </p>
                  </div>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Your Shipping Address</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start">
                      <MapPinIcon className="h-5 w-5 text-muted-foreground mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Alex Johnson</p>
                        <p className="text-sm">123 Market Street</p>
                        <p className="text-sm">Apt 4B</p>
                        <p className="text-sm">San Francisco, CA 94105</p>
                        <p className="text-sm">United States</p>
                        <p className="text-sm mt-2">Phone: (415) 555-1234</p>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <Button variant="outline">Update Address</Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Shipment Tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {myDevices.filter(device => device.status === 'shipped' && device.shippingInfo).map(device => <div key={device.id} className="p-4 border rounded-md">
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="flex items-center">
                                  <h3 className="font-medium">
                                    {device.deviceType}
                                  </h3>
                                  <Badge variant="outline" className="ml-2">
                                    ID: {device.id}
                                  </Badge>
                                </div>
                                <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                                  <div>
                                    <span className="text-muted-foreground">
                                      Carrier:
                                    </span>
                                    <span className="ml-1 font-medium">
                                      {device.shippingInfo?.carrier}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">
                                      Tracking:
                                    </span>
                                    <span className="ml-1 font-medium">
                                      {device.shippingInfo?.trackingNumber}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">
                                      Estimated Delivery:
                                    </span>
                                    <span className="ml-1 font-medium">
                                      {device.shippingInfo?.estimatedDelivery}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">
                                Track Package
                              </Button>
                            </div>
                          </div>)}
                      {myDevices.filter(device => device.status === 'shipped' && device.shippingInfo).length === 0 && <div className="flex flex-col items-center justify-center p-8 border rounded-md bg-muted/30">
                          <TruckIcon className="h-12 w-12 text-muted-foreground/50 mb-4" />
                          <h3 className="text-lg font-medium mb-2">
                            No Active Shipments
                          </h3>
                          <p className="text-sm text-muted-foreground text-center max-w-md">
                            You don't have any devices currently being shipped.
                            Shipment information will appear here once your
                            devices are dispatched.
                          </p>
                        </div>}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative pl-6 space-y-6">
                      <div className="absolute left-0 top-2 bottom-0 w-px bg-border"></div>
                      <div className="relative">
                        <div className="absolute left-[-23px] top-1 h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                          <CheckIcon className="h-2.5 w-2.5 text-white" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-base font-medium">
                            Distribution Started
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Inventory allocation process began
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <CalendarIcon className="h-3 w-3 mr-1" />
                            <span>July 28, 2023</span>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute left-[-23px] top-1 h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                          <CheckIcon className="h-2.5 w-2.5 text-white" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-base font-medium">
                            First Batch Shipped
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            First devices shipped to members
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <CalendarIcon className="h-3 w-3 mr-1" />
                            <span>July 30, 2023</span>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute left-[-23px] top-1 h-4 w-4 rounded-full bg-primary"></div>
                        <div className="space-y-1">
                          <h3 className="text-base font-medium">
                            Second Batch Shipping
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Remaining devices being prepared for shipment
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <CalendarIcon className="h-3 w-3 mr-1" />
                            <span>August 3, 2023</span>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute left-[-23px] top-1 h-4 w-4 rounded-full bg-muted-foreground/30"></div>
                        <div className="space-y-1">
                          <h3 className="text-base font-medium">
                            Distribution Complete
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            All devices delivered to syndicate members
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <CalendarIcon className="h-3 w-3 mr-1" />
                            <span>Estimated: August 10, 2023</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <div className="flex justify-between">
        <Button variant="outline" onClick={() => navigate(`/syndicate-detail/${id}`)}>
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to Syndicate Details
        </Button>
        <Button>
          <ShieldIcon className="mr-2 h-4 w-4" />
          Report an Issue
        </Button>
      </div>
    </div>;
};
export default SyndicateDistribution;