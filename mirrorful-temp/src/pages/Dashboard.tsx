import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUpIcon, TrendingDownIcon, DollarSignIcon, PackageIcon, UsersIcon, PlusIcon, PhoneIcon, AreaChartIcon, CheckCircleIcon, Clock8Icon, XCircleIcon, ShieldIcon, GavelIcon } from 'lucide-react';
import LiveMarketTicker from '../components/LiveMarketTicker';
import RechartsLineChart from '../components/charts/RechartsLineChart';
import RechartsBarChart from '../components/charts/RechartsBarChart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}
const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  isPositive,
  icon
}) => {
  return <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-muted-foreground">{title}</span>
          <div className="p-2 rounded-md bg-primary/10 text-primary">
            {icon}
          </div>
        </div>
        <div className="flex items-end justify-between">
          <span className="text-2xl font-bold">{value}</span>
          <span className={`text-sm font-medium flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <TrendingUpIcon className="h-4 w-4 mr-1" /> : <TrendingDownIcon className="h-4 w-4 mr-1" />}
            {change}
          </span>
        </div>
      </CardContent>
    </Card>;
};
const revenueData = [{
  date: 'Jan',
  value: 12000
}, {
  date: 'Feb',
  value: 14000
}, {
  date: 'Mar',
  value: 11000
}, {
  date: 'Apr',
  value: 18000
}, {
  date: 'May',
  value: 16000
}, {
  date: 'Jun',
  value: 19000
}, {
  date: 'Jul',
  value: 22000
}];
const inventoryData = [{
  label: 'iPhone 13',
  value: 45
}, {
  label: 'iPhone 12',
  value: 32
}, {
  label: 'Galaxy S22',
  value: 28
}, {
  label: 'Pixel 6',
  value: 18
}, {
  label: 'iPhone 11',
  value: 24
}, {
  label: 'OnePlus 10',
  value: 15
}];
const tradeInRequests = [{
  id: 1,
  device: 'iPhone 13 Pro',
  customer: 'Alex Johnson',
  value: '$520',
  status: 'pending',
  time: '2 hours ago'
}, {
  id: 2,
  device: 'Samsung S21',
  customer: 'Maria Garcia',
  value: '$410',
  status: 'completed',
  time: '3 hours ago'
}, {
  id: 3,
  device: 'Google Pixel 6',
  customer: 'James Wilson',
  value: '$380',
  status: 'rejected',
  time: '5 hours ago'
}, {
  id: 4,
  device: 'iPhone 12',
  customer: 'Sarah Miller',
  value: '$350',
  status: 'completed',
  time: '1 day ago'
}];
const activeSyndicates = [{
  id: 'syn-2023-001',
  name: 'Premium iPhone Collective',
  targetCapital: 100000,
  raisedCapital: 90000,
  members: 5,
  endDate: '2023-07-25',
  progress: 90,
  type: 'auction'
}, {
  id: 'syn-2023-002',
  name: 'Samsung Galaxy Traders',
  targetCapital: 75000,
  raisedCapital: 75000,
  members: 3,
  endDate: '2023-06-30',
  progress: 100,
  type: 'bulk'
}];
const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button className="font-medium">
          <PlusIcon className="mr-2 h-4 w-4" />
          New Trade-In
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Market Value" value="$45,231" change="+20.1%" isPositive={true} icon={<DollarSignIcon className="h-4 w-4" />} />
        <MetricCard title="Total Inventory" value="123" change="-2.3%" isPositive={false} icon={<PackageIcon className="h-4 w-4" />} />
        <MetricCard title="Revenue" value="$12,234" change="+12.4%" isPositive={true} icon={<DollarSignIcon className="h-4 w-4" />} />
        <MetricCard title="Active Traders" value="1,234" change="+4.3%" isPositive={true} icon={<UsersIcon className="h-4 w-4" />} />
      </div>
      <LiveMarketTicker />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Revenue Trends</CardTitle>
                <CardDescription>Monthly revenue data</CardDescription>
              </div>
              <AreaChartIcon className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <RechartsLineChart data={revenueData} height={200} color="#3b82f6" yAxisFormatter={value => `$${value}`} tooltipFormatter={value => [`$${value}`, 'Revenue']} />
          </CardContent>
          <CardFooter className="border-t pt-4">
            <div className="flex justify-between w-full text-sm">
              <div className="text-muted-foreground">Total Revenue (YTD)</div>
              <div className="font-medium">$112,000</div>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Inventory Breakdown</CardTitle>
                <CardDescription>Phones in stock by model</CardDescription>
              </div>
              <PackageIcon className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <RechartsBarChart data={inventoryData} height={200} barColor="#3b82f6" yAxisFormatter={value => `${value}`} tooltipFormatter={value => [`${value}`, 'Units']} />
          </CardContent>
          <CardFooter className="border-t pt-4">
            <div className="flex justify-between w-full text-sm">
              <div className="text-muted-foreground">Total Devices</div>
              <div className="font-medium">162</div>
            </div>
          </CardFooter>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Trade-In Requests</CardTitle>
              <CardDescription>
                Latest device trade-in submissions
              </CardDescription>
            </div>
            <PhoneIcon className="h-4 w-4 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Device
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Customer
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Value
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {tradeInRequests.map(request => <tr key={request.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">{request.device}</td>
                    <td className="py-3 px-4">{request.customer}</td>
                    <td className="py-3 px-4 font-medium">{request.value}</td>
                    <td className="py-3 px-4">
                      {request.status === 'pending' && <Badge variant="warning" className="flex items-center w-fit">
                          <Clock8Icon className="mr-1 h-3 w-3" />
                          Pending
                        </Badge>}
                      {request.status === 'completed' && <Badge variant="success" className="flex items-center w-fit">
                          <CheckCircleIcon className="mr-1 h-3 w-3" />
                          Completed
                        </Badge>}
                      {request.status === 'rejected' && <Badge variant="destructive" className="flex items-center w-fit">
                          <XCircleIcon className="mr-1 h-3 w-3" />
                          Rejected
                        </Badge>}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {request.time}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </CardContent>
        <CardFooter className="border-t">
          <Button variant="outline" size="sm" className="ml-auto">
            View All Requests
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Risk Assessment Overview</CardTitle>
              <CardDescription>Recent device risk evaluations</CardDescription>
            </div>
            <ShieldIcon className="h-4 w-4 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                      Device
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                      IMEI
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                      Risk Score
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                      Highest Risk Factor
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4 font-medium">iPhone 13 Pro</td>
                    <td className="py-3 px-4">358673102468313</td>
                    <td className="py-3 px-4">
                      <Badge variant="warning" className="flex items-center w-fit">
                        47.25
                      </Badge>
                    </td>
                    <td className="py-3 px-4">Transaction Risk</td>
                    <td className="py-3 px-4">
                      <Badge variant="warning" className="flex items-center w-fit">
                        <Clock8Icon className="mr-1 h-3 w-3" />
                        Pending Verification
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm" className="h-8 px-2" onClick={() => navigate('/risk-assessment')}>
                        View Details
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4 font-medium">Samsung S22 Ultra</td>
                    <td className="py-3 px-4">354751092639745</td>
                    <td className="py-3 px-4">
                      <Badge variant="success" className="flex items-center w-fit">
                        28.40
                      </Badge>
                    </td>
                    <td className="py-3 px-4">Device Verification</td>
                    <td className="py-3 px-4">
                      <Badge variant="success" className="flex items-center w-fit">
                        <CheckCircleIcon className="mr-1 h-3 w-3" />
                        Approved
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        View Details
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4 font-medium">Google Pixel 6</td>
                    <td className="py-3 px-4">351698074512369</td>
                    <td className="py-3 px-4">
                      <Badge variant="destructive" className="flex items-center w-fit">
                        72.15
                      </Badge>
                    </td>
                    <td className="py-3 px-4">Supplier Risk</td>
                    <td className="py-3 px-4">
                      <Badge variant="destructive" className="flex items-center w-fit">
                        <XCircleIcon className="mr-1 h-3 w-3" />
                        Rejected
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        View Details
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t">
          <Button variant="outline" size="sm" className="ml-auto" onClick={() => navigate('/risk-assessment')}>
            View All Assessments
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Active Syndicates</CardTitle>
              <CardDescription>Your group buying opportunities</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={() => navigate('/syndicate-hub')}>
                <UsersIcon className="mr-2 h-4 w-4" />
                Syndicate Hub
              </Button>
              <Button size="sm" onClick={() => navigate('/syndicate-creation')}>
                <PlusIcon className="mr-2 h-4 w-4" />
                Create Syndicate
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeSyndicates.map(syndicate => <Card key={syndicate.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="p-4 md:w-2/3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-medium">{syndicate.name}</h3>
                          <Badge variant={syndicate.progress === 100 ? 'success' : 'outline'} className="ml-2">
                            {syndicate.progress === 100 ? 'Active' : 'Funding'}
                          </Badge>
                          <Badge variant="outline" className="ml-2 capitalize">
                            {syndicate.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock8Icon className="h-4 w-4 mr-1 text-yellow-500" />
                        <span>{syndicate.endDate}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">
                          Progress ({syndicate.progress}%)
                        </span>
                        <span>
                          ${syndicate.raisedCapital.toLocaleString()} of $
                          {syndicate.targetCapital.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={syndicate.progress} className="h-2" />
                    </div>
                    <div className="mt-4 flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <UsersIcon className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>{syndicate.members} members</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>Your share: 25%</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-muted/30 border-t md:border-t-0 md:border-l md:w-1/3">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Your Contribution
                        </p>
                        <p className="text-xl font-bold">$25,000</p>
                      </div>
                      <div className="space-y-2">
                        <Button className="w-full" onClick={() => navigate(`/syndicate-detail/${syndicate.id}`)}>
                          View Details
                        </Button>
                        {syndicate.progress < 100 && <Button variant="outline" className="w-full" onClick={() => navigate(`/syndicate-contribution/${syndicate.id}`)}>
                            <DollarSignIcon className="mr-2 h-4 w-4" />
                            Contribute
                          </Button>}
                        {syndicate.progress === 100 && <Button variant="outline" className="w-full" onClick={() => navigate(`/syndicate-distribution/${syndicate.id}`)}>
                            <PackageIcon className="mr-2 h-4 w-4" />
                            View Distribution
                          </Button>}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>)}
          </div>
        </CardContent>
        <CardFooter className="border-t">
          <Button variant="outline" size="sm" className="ml-auto" onClick={() => navigate('/syndicate-hub')}>
            View All Syndicates
          </Button>
        </CardFooter>
      </Card>
    </div>;
};
export default Dashboard;