import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { UsersIcon, DollarSignIcon, PlusIcon, BoxIcon, GavelIcon, SearchIcon, ShieldIcon, TrendingUpIcon, ArrowRightIcon, PercentIcon, UserPlusIcon, CreditCardIcon, BarChart2Icon, ClockIcon, CheckCircleIcon, XCircleIcon, AlertTriangleIcon, LockIcon, UnlockIcon, ChevronRightIcon, LayoutGridIcon, RefreshCwIcon, PackageIcon, CalendarIcon, InfoIcon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import RechartsLineChart from '../components/charts/RechartsLineChart';
import RechartsBarChart from '../components/charts/RechartsBarChart';
const SyndicateHub: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');
  const activeSyndicates = [{
    id: 1,
    name: 'Premium iPhone Collection',
    description: 'Bulk purchase of iPhone 13 Pro and Pro Max models',
    target: 100000,
    raised: 85000,
    members: 12,
    deadline: '2023-07-25',
    status: 'Active',
    type: 'Buying'
  }, {
    id: 2,
    name: 'Samsung S22 Ultra Bundle',
    description: 'Wholesale S22 Ultra devices, all grades',
    target: 75000,
    raised: 45000,
    members: 8,
    deadline: '2023-07-28',
    status: 'Active',
    type: 'Buying'
  }, {
    id: 3,
    name: 'Mixed Apple Inventory',
    description: 'Various iPhone models and conditions',
    target: 50000,
    raised: 42500,
    members: 6,
    deadline: '2023-07-30',
    status: 'Active',
    type: 'Selling'
  }];
  const syndicateStats = {
    activeSyndicates: 8,
    totalMembers: 45,
    totalValue: '$342,500',
    avgReturn: '15.8%'
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Syndicate Hub</h1>
          <p className="text-sm text-muted-foreground">
            Pool resources and share opportunities with other traders
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <UserPlusIcon className="mr-2 h-4 w-4" />
            Join Syndicate
          </Button>
          <Button onClick={() => navigate('/syndicate-creation')}>
            <PlusIcon className="mr-2 h-4 w-4" />
            Create Syndicate
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Active Syndicates
                </p>
                <p className="text-2xl font-bold">
                  {syndicateStats.activeSyndicates}
                </p>
              </div>
              <UsersIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Members</p>
                <p className="text-2xl font-bold">
                  {syndicateStats.totalMembers}
                </p>
              </div>
              <UserPlusIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-2xl font-bold">
                  {syndicateStats.totalValue}
                </p>
              </div>
              <DollarSignIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg. Return</p>
                <p className="text-2xl font-bold">{syndicateStats.avgReturn}</p>
              </div>
              <TrendingUpIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle>Syndicate Opportunities</CardTitle>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input type="text" placeholder="Search syndicates..." className="pl-10 pr-4 py-2 rounded-md border bg-background text-sm w-64" />
            </div>
          </div>
          <CardDescription>Browse and join active syndicates</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="my-syndicates">My Syndicates</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="space-y-4">
              {activeSyndicates.map(syndicate => <Card key={syndicate.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="p-4 md:w-2/3">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">{syndicate.name}</h3>
                            <Badge variant="success" className="ml-2">
                              {syndicate.status}
                            </Badge>
                            <Badge variant="outline" className="ml-2">
                              {syndicate.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {syndicate.description}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>
                            Progress (
                            {Math.round(syndicate.raised / syndicate.target * 100)}
                            %)
                          </span>
                          <span>
                            ${syndicate.raised} of ${syndicate.target}
                          </span>
                        </div>
                        <Progress value={syndicate.raised / syndicate.target * 100} className="h-2" />
                      </div>
                      <div className="mt-4 flex items-center space-x-4 text-sm">
                        <div className="flex items-center">
                          <UsersIcon className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>{syndicate.members} members</span>
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>Ends {syndicate.deadline}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-muted/30 border-t md:border-t-0 md:border-l md:w-1/3">
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium mb-1">
                            Minimum Investment
                          </p>
                          <p className="text-2xl font-bold">$5,000</p>
                        </div>
                        <div className="space-y-2">
                          <Button className="w-full">Join Syndicate</Button>
                          <Button variant="outline" className="w-full" onClick={() => navigate(`/syndicate-detail/${syndicate.id}`)}>
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>)}
            </TabsContent>
            <TabsContent value="my-syndicates">
              <div className="flex flex-col items-center justify-center h-40 border rounded-md bg-muted/30">
                <p className="text-muted-foreground mb-4">
                  Your syndicates will be displayed here
                </p>
                <Button onClick={() => navigate('/syndicate-creation')}>
                  <PlusIcon className="mr-2 h-4 w-4" />
                  Create Your First Syndicate
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="completed">
              <div className="flex flex-col items-center justify-center h-40 border rounded-md bg-muted/30">
                <p className="text-muted-foreground">
                  Completed syndicates will be displayed here
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="border-t">
          <Button variant="outline" size="sm" className="ml-auto" onClick={() => navigate('/syndicate-creation')}>
            <PlusIcon className="mr-2 h-4 w-4" />
            Create New Syndicate
          </Button>
        </CardFooter>
      </Card>
    </div>;
};
export default SyndicateHub;