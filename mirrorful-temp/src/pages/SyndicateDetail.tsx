import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UsersIcon, DollarSignIcon, BoxIcon, GavelIcon, ClockIcon, CheckCircleIcon, XCircleIcon, AlertTriangleIcon, ArrowLeftIcon, ChevronRightIcon, UserPlusIcon, CreditCardIcon, BarChart2Icon, LayoutGridIcon, RefreshCwIcon, PackageIcon, CalendarIcon, ShieldIcon, BellIcon, CopyIcon, ShareIcon, MessageSquareIcon, FileTextIcon, LineChartIcon, PieChartIcon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import RechartsLineChart from '../components/charts/RechartsLineChart';
import RechartsPieChart from '../components/charts/RechartsPieChart';
interface Member {
  id: string;
  name: string;
  avatar: string;
  role: string;
  contribution: number;
  contributionPercentage: number;
  joinDate: string;
  status: 'active' | 'pending';
}
interface Syndicate {
  id: string;
  name: string;
  description: string;
  members: Member[];
  totalCapital: number;
  targetCapital: number;
  status: 'open' | 'closed' | 'active' | 'completed';
  type: 'auction' | 'bulk' | 'liquidation';
  createdAt: string;
  endDate: string;
  creator: string;
  allocation: {
    type: string;
    percentage: number;
    value: number;
  }[];
  recentActivity: {
    action: string;
    user: string;
    time: string;
  }[];
  inventoryDistribution?: {
    grade: string;
    percentage: number;
    quantity: number;
  }[];
  targetAuction?: {
    id: string;
    title: string;
    devices: number;
    currentBid: string;
    timeLeft: string;
  };
}
const SyndicateDetail: React.FC = () => {
  const navigate = useNavigate();
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const [activeTab, setActiveTab] = useState('overview');
  // Mock data for demonstration
  const syndicateData: Syndicate = {
    id: id || 'syn-2023-001',
    name: 'Premium iPhone Collective',
    description: 'Group buy for carrier-grade iPhone 13 Pro and 12 Pro Max devices with focus on A/B grade inventory.',
    members: [{
      id: 'usr-001',
      name: 'Alex Johnson',
      avatar: 'https://github.com/shadcn.png',
      role: 'Creator',
      contribution: 25000,
      contributionPercentage: 25,
      joinDate: '2023-07-01',
      status: 'active'
    }, {
      id: 'usr-002',
      name: 'Sarah Miller',
      avatar: 'https://github.com/shadcn.png',
      role: 'Member',
      contribution: 15000,
      contributionPercentage: 15,
      joinDate: '2023-07-02',
      status: 'active'
    }, {
      id: 'usr-003',
      name: 'James Wilson',
      avatar: 'https://github.com/shadcn.png',
      role: 'Member',
      contribution: 20000,
      contributionPercentage: 20,
      joinDate: '2023-07-03',
      status: 'active'
    }, {
      id: 'usr-004',
      name: 'Maria Garcia',
      avatar: 'https://github.com/shadcn.png',
      role: 'Member',
      contribution: 30000,
      contributionPercentage: 30,
      joinDate: '2023-07-04',
      status: 'active'
    }, {
      id: 'usr-005',
      name: 'Robert Chen',
      avatar: 'https://github.com/shadcn.png',
      role: 'Member',
      contribution: 10000,
      contributionPercentage: 10,
      joinDate: '2023-07-05',
      status: 'pending'
    }],
    totalCapital: 90000,
    targetCapital: 100000,
    status: 'open',
    type: 'auction',
    createdAt: '2023-07-01',
    endDate: '2023-07-25',
    creator: 'Alex Johnson',
    allocation: [{
      type: 'iPhone 13 Pro (256GB)',
      percentage: 40,
      value: 40000
    }, {
      type: 'iPhone 13 Pro (128GB)',
      percentage: 30,
      value: 30000
    }, {
      type: 'iPhone 12 Pro Max (256GB)',
      percentage: 20,
      value: 20000
    }, {
      type: 'iPhone 12 Pro Max (128GB)',
      percentage: 10,
      value: 10000
    }],
    recentActivity: [{
      action: 'Increased contribution by $5,000',
      user: 'Maria Garcia',
      time: '2 hours ago'
    }, {
      action: 'Joined the syndicate',
      user: 'Robert Chen',
      time: '1 day ago'
    }, {
      action: 'Updated target allocation',
      user: 'Alex Johnson',
      time: '2 days ago'
    }],
    targetAuction: {
      id: 'AUC-2023-1245',
      title: 'Bulk iPhone 12 & 13 Models',
      devices: 25,
      currentBid: '$10,250',
      timeLeft: '12h 32m'
    }
  };
  const contributionData = [{
    date: 'Jul 01',
    value: 25000
  }, {
    date: 'Jul 02',
    value: 40000
  }, {
    date: 'Jul 03',
    value: 60000
  }, {
    date: 'Jul 04',
    value: 90000
  }, {
    date: 'Jul 05',
    value: 90000
  }];
  const memberDistributionData = [{
    label: 'Alex Johnson',
    value: 25,
    color: '#3b82f6'
  }, {
    label: 'Maria Garcia',
    value: 30,
    color: '#10b981'
  }, {
    label: 'James Wilson',
    value: 20,
    color: '#f59e0b'
  }, {
    label: 'Sarah Miller',
    value: 15,
    color: '#8b5cf6'
  }, {
    label: 'Robert Chen',
    value: 10,
    color: '#ec4899'
  }];
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'outline';
      case 'active':
        return 'success';
      case 'closed':
        return 'secondary';
      case 'completed':
        return 'secondary';
      default:
        return 'default';
    }
  };
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, you would show a toast notification here
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="mr-2" onClick={() => navigate('/syndicate-hub')}>
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Back to Hub
          </Button>
          <h1 className="text-2xl font-bold">{syndicateData.name}</h1>
          <Badge variant={getStatusColor(syndicateData.status)} className="ml-2">
            {syndicateData.status.charAt(0).toUpperCase() + syndicateData.status.slice(1)}
          </Badge>
          <Badge variant="outline" className="ml-2 capitalize">
            {syndicateData.type}
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={() => copyToClipboard(syndicateData.id)}>
                  <CopyIcon className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy Syndicate ID</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <ShareIcon className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share Syndicate</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <BellIcon className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Notifications</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button onClick={() => navigate(`/syndicate-contribution/${id}`)}>
            <DollarSignIcon className="mr-2 h-4 w-4" />
            Contribute
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Capital Raised</p>
                <p className="text-2xl font-bold">
                  {formatCurrency(syndicateData.totalCapital)}
                </p>
              </div>
              <DollarSignIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
            <Progress value={syndicateData.totalCapital / syndicateData.targetCapital * 100} className="h-1 mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              {(syndicateData.totalCapital / syndicateData.targetCapital * 100).toFixed(0)}
              % of {formatCurrency(syndicateData.targetCapital)} target
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Members</p>
                <p className="text-2xl font-bold">
                  {syndicateData.members.length}
                </p>
              </div>
              <UsersIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
            <div className="flex -space-x-2 mt-2">
              {syndicateData.members.slice(0, 5).map((member, i) => <Avatar key={i} className="h-6 w-6 border-2 border-background">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>)}
              {syndicateData.members.length > 5 && <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs border-2 border-background">
                  +{syndicateData.members.length - 5}
                </div>}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Time Remaining</p>
                <p className="text-2xl font-bold">12 days</p>
              </div>
              <ClockIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              End Date: {syndicateData.endDate}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Your Share</p>
                <p className="text-2xl font-bold">25%</p>
              </div>
              <PieChartIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Your Contribution: {formatCurrency(25000)}
            </p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="allocation">Allocation</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Syndicate Overview</CardTitle>
                  <CardDescription>{syndicateData.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="space-y-1 mb-2 md:mb-0">
                      <p className="text-sm text-muted-foreground">
                        Created By
                      </p>
                      <div className="flex items-center">
                        <Avatar className="h-6 w-6 mr-2">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>AJ</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">
                          {syndicateData.creator}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1 mb-2 md:mb-0">
                      <p className="text-sm text-muted-foreground">
                        Created On
                      </p>
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{syndicateData.createdAt}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Syndicate ID
                      </p>
                      <div className="flex items-center">
                        <span className="font-mono text-sm">
                          {syndicateData.id}
                        </span>
                        <Button variant="ghost" size="icon" className="h-6 w-6 ml-1" onClick={() => copyToClipboard(syndicateData.id)}>
                          <CopyIcon className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="space-y-1 mb-4">
                      <p className="text-sm text-muted-foreground">
                        Capital Raised
                      </p>
                      <div className="flex items-end">
                        <span className="text-2xl font-bold">
                          {formatCurrency(syndicateData.totalCapital)}
                        </span>
                        <span className="text-sm text-muted-foreground ml-2">
                          of {formatCurrency(syndicateData.targetCapital)}
                        </span>
                      </div>
                    </div>
                    <Progress value={syndicateData.totalCapital / syndicateData.targetCapital * 100} className="h-2" />
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>0%</span>
                      <span>
                        Goal: {formatCurrency(syndicateData.targetCapital)}
                      </span>
                      <span>100%</span>
                    </div>
                  </div>
                  {syndicateData.type === 'auction' && syndicateData.targetAuction && <div className="mt-6 p-4 border rounded-md bg-muted/30">
                        <h3 className="text-sm font-medium mb-2">
                          Target Auction
                        </h3>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">
                              {syndicateData.targetAuction.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              ID: {syndicateData.targetAuction.id}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">
                              {syndicateData.targetAuction.currentBid}
                            </p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <ClockIcon className="h-3 w-3 mr-1" />
                              <span>
                                {syndicateData.targetAuction.timeLeft}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end mt-2">
                          <Button variant="outline" size="sm" onClick={() => navigate('/wholesale-auctions')}>
                            View Auction
                          </Button>
                        </div>
                      </div>}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Capital Growth</CardTitle>
                  <CardDescription>
                    Total capital raised over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RechartsLineChart data={contributionData} height={250} color="#3b82f6" gradient={true} yAxisFormatter={value => `$${value}`} tooltipFormatter={value => [`$${value}`, 'Capital Raised']} />
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {syndicateData.status === 'open' && <>
                      <Button className="w-full" onClick={() => navigate(`/syndicate-contribution/${id}`)}>
                        <DollarSignIcon className="mr-2 h-4 w-4" />
                        Contribute Funds
                      </Button>
                      <Button variant="outline" className="w-full">
                        <UserPlusIcon className="mr-2 h-4 w-4" />
                        Invite Members
                      </Button>
                      {syndicateData.type === 'auction' && <Button variant="outline" className="w-full">
                          <GavelIcon className="mr-2 h-4 w-4" />
                          View Target Auction
                        </Button>}
                    </>}
                  {syndicateData.status === 'active' && <>
                      <Button className="w-full">
                        <LayoutGridIcon className="mr-2 h-4 w-4" />
                        Manage Inventory
                      </Button>
                      <Button variant="outline" className="w-full">
                        <BarChart2Icon className="mr-2 h-4 w-4" />
                        View Performance
                      </Button>
                      <Button variant="outline" className="w-full">
                        <div className="mr-2 h-4 w-4" />
                        Trade Allocation
                      </Button>
                    </>}
                  {syndicateData.status === 'completed' && <>
                      <Button className="w-full">
                        <BarChart2Icon className="mr-2 h-4 w-4" />
                        View Final Report
                      </Button>
                      <Button variant="outline" className="w-full">
                        <RefreshCwIcon className="mr-2 h-4 w-4" />
                        Start New Syndicate
                      </Button>
                    </>}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {syndicateData.recentActivity.map((activity, index) => <div key={index} className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                          {index === 0 ? <DollarSignIcon className="h-4 w-4" /> : index === 1 ? <UserPlusIcon className="h-4 w-4" /> : <RefreshCwIcon className="h-4 w-4" />}
                        </div>
                        <div>
                          <p className="font-medium">{activity.action}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <span>{activity.user}</span>
                            <span className="mx-1">•</span>
                            <span>{activity.time}</span>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Financial Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-muted-foreground">
                      Your Contribution
                    </span>
                    <span className="font-medium">
                      {formatCurrency(syndicateData.members.find(m => m.name === 'Alex Johnson')?.contribution || 0)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-muted-foreground">
                      Your Share
                    </span>
                    <span className="font-medium">
                      {syndicateData.members.find(m => m.name === 'Alex Johnson')?.contributionPercentage}
                      %
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-muted-foreground">
                      Platform Fee
                    </span>
                    <span className="font-medium">2.5%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-muted-foreground">
                      Escrow Fee
                    </span>
                    <span className="font-medium">1.0%</span>
                  </div>
                  {syndicateData.status === 'completed' && <div className="flex justify-between items-center pt-2">
                      <span className="text-sm font-medium">ROI</span>
                      <span className="font-medium text-green-600">+15.8%</span>
                    </div>}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquareIcon className="mr-2 h-4 w-4" />
                    Contact Syndicate Creator
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileTextIcon className="mr-2 h-4 w-4" />
                    View Syndicate Rules
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <ShieldIcon className="mr-2 h-4 w-4" />
                    Escrow Protection Details
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="members" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Syndicate Members</CardTitle>
                  <CardDescription>
                    All participants in this syndicate
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <UserPlusIcon className="mr-2 h-4 w-4" />
                    Invite Members
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Member
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Role
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Contribution
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Share
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Join Date
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {syndicateData.members.map(member => <tr key={member.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={member.avatar} />
                              <AvatarFallback>
                                {member.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{member.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">{member.role}</td>
                        <td className="py-3 px-4">
                          {formatCurrency(member.contribution)}
                        </td>
                        <td className="py-3 px-4">
                          {member.contributionPercentage}%
                        </td>
                        <td className="py-3 px-4">{member.joinDate}</td>
                        <td className="py-3 px-4">
                          {member.status === 'active' ? <Badge variant="success">Active</Badge> : <Badge variant="warning">Pending</Badge>}
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contribution Distribution</CardTitle>
                <CardDescription>
                  Breakdown of syndicate shares by member
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <RechartsPieChart data={memberDistributionData} height={250} donut={true} innerRadius={60} outerRadius={100} tooltipFormatter={(value, name) => [`${value}%`, name]} />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Member Activity</CardTitle>
                <CardDescription>Recent member actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start p-3 border rounded-md">
                    <Avatar className="h-8 w-8 mr-3 mt-0.5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>MG</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">
                        Maria Garcia increased contribution by $5,000
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 border rounded-md">
                    <Avatar className="h-8 w-8 mr-3 mt-0.5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>RC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">
                        Robert Chen joined the syndicate
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        1 day ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 border rounded-md">
                    <Avatar className="h-8 w-8 mr-3 mt-0.5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">
                        Alex Johnson updated target allocation
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        2 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="allocation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Allocation Plan</CardTitle>
              <CardDescription>
                How the syndicate capital will be distributed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Device Type
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Allocation
                      </th>
                      <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {syndicateData.allocation.map((item, index) => <tr key={index} className="border-b">
                        <td className="py-3 px-4 font-medium">{item.type}</td>
                        <td className="py-3 px-4">{item.percentage}%</td>
                        <td className="py-3 px-4 text-right">
                          {formatCurrency(item.value)}
                        </td>
                      </tr>)}
                    <tr className="bg-muted/30">
                      <td className="py-3 px-4 font-medium">Total</td>
                      <td className="py-3 px-4 font-medium">
                        {syndicateData.allocation.reduce((acc, curr) => acc + curr.percentage, 0)}
                        %
                      </td>
                      <td className="py-3 px-4 text-right font-medium">
                        {formatCurrency(syndicateData.allocation.reduce((acc, curr) => acc + curr.value, 0))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Allocation Visualization</CardTitle>
                <CardDescription>
                  Breakdown of allocation by device type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {syndicateData.allocation.map((item, index) => <div key={index} className="flex items-center">
                      <div className="w-32 text-sm truncate">{item.type}</div>
                      <div className="flex-1 mx-2">
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div className={`h-full ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-500' : index === 2 ? 'bg-yellow-500' : 'bg-purple-500'}`} style={{
                        width: `${item.percentage}%`
                      }}></div>
                        </div>
                      </div>
                      <div className="text-sm text-right w-24">
                        {item.percentage}% ({formatCurrency(item.value)})
                      </div>
                    </div>)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Your Allocation</CardTitle>
                <CardDescription>
                  What you'll receive based on your contribution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-md bg-muted/30">
                    <div className="flex justify-between mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Your Contribution
                        </p>
                        <p className="text-xl font-bold">
                          {formatCurrency(25000)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Your Share
                        </p>
                        <p className="text-xl font-bold">25%</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">
                        Estimated Allocation:
                      </p>
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Device Type</th>
                            <th className="text-right py-2">Units</th>
                            <th className="text-right py-2">Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {syndicateData.allocation.map((item, index) => <tr key={index} className="border-b">
                              <td className="py-2">{item.type}</td>
                              <td className="py-2 text-right">
                                {(item.value * 0.25 / 750).toFixed(1)}
                              </td>
                              <td className="py-2 text-right">
                                {formatCurrency(item.value * 0.25)}
                              </td>
                            </tr>)}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button onClick={() => navigate(`/syndicate-contribution/${id}`)}>
                      <DollarSignIcon className="mr-2 h-4 w-4" />
                      Increase Contribution
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Syndicate Timeline</CardTitle>
              <CardDescription>
                Chronological history of syndicate events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative pl-6 space-y-6">
                <div className="absolute left-0 top-2 bottom-0 w-px bg-border"></div>
                <div className="relative">
                  <div className="absolute left-[-23px] top-1 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <h3 className="text-base font-medium">
                        Syndicate Created
                      </h3>
                      <Badge variant="outline" className="ml-2">
                        Current Phase
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Alex Johnson created the syndicate on{' '}
                      {syndicateData.createdAt}
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      <span>July 01, 2023 at 10:24 AM</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-[-23px] top-1 h-4 w-4 rounded-full bg-muted-foreground/30"></div>
                  <div className="space-y-1">
                    <h3 className="text-base font-medium">Funding Deadline</h3>
                    <p className="text-sm text-muted-foreground">
                      Target date to reach funding goal
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      <span>July 25, 2023 at 11:59 PM</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-[-23px] top-1 h-4 w-4 rounded-full bg-muted-foreground/30"></div>
                  <div className="space-y-1">
                    <h3 className="text-base font-medium">Auction Bidding</h3>
                    <p className="text-sm text-muted-foreground">
                      Syndicate places bids in the target auction
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      <span>Estimated: July 26-27, 2023</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-[-23px] top-1 h-4 w-4 rounded-full bg-muted-foreground/30"></div>
                  <div className="space-y-1">
                    <h3 className="text-base font-medium">
                      Inventory Distribution
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Acquired devices are distributed to syndicate members
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      <span>Estimated: August 1-5, 2023</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-[-23px] top-1 h-4 w-4 rounded-full bg-muted-foreground/30"></div>
                  <div className="space-y-1">
                    <h3 className="text-base font-medium">
                      Syndicate Completion
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Final reports and syndicate closure
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      <span>Estimated: August 10, 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest actions and updates in the syndicate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start p-4 border rounded-md">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <DollarSignIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">
                        Maria Garcia increased contribution by $5,000
                      </p>
                      <Badge variant="outline">Contribution</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      New total contribution: $30,000 (30% of syndicate)
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mt-2">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      <span>2 hours ago</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start p-4 border rounded-md">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <UserPlusIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">
                        Robert Chen joined the syndicate
                      </p>
                      <Badge variant="outline">Membership</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Initial contribution: $10,000 (10% of syndicate)
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mt-2">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      <span>1 day ago</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start p-4 border rounded-md">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <RefreshCwIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">
                        Alex Johnson updated target allocation
                      </p>
                      <Badge variant="outline">Configuration</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Adjusted allocation percentages for iPhone 13 Pro and
                      iPhone 12 Pro Max models
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mt-2">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      <span>2 days ago</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start p-4 border rounded-md">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <GavelIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">
                        Target auction price increased
                      </p>
                      <Badge variant="outline">Market Update</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Current bid on target auction increased from $9,800 to
                      $10,250
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mt-2">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      <span>3 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t">
              <Button variant="outline" size="sm" className="ml-auto">
                View All Activity
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Syndicate Documents</CardTitle>
              <CardDescription>Important files and agreements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center p-4 border rounded-md justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <FileTextIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Syndicate Agreement</p>
                      <p className="text-xs text-muted-foreground">
                        PDF • 245KB • Uploaded July 1, 2023
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="flex items-center p-4 border rounded-md justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <FileTextIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Escrow Terms & Conditions</p>
                      <p className="text-xs text-muted-foreground">
                        PDF • 187KB • Uploaded July 1, 2023
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="flex items-center p-4 border rounded-md justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <FileTextIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Allocation Guidelines</p>
                      <p className="text-xs text-muted-foreground">
                        PDF • 125KB • Uploaded July 1, 2023
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="flex items-center p-4 border rounded-md justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <FileTextIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Target Auction Details</p>
                      <p className="text-xs text-muted-foreground">
                        PDF • 320KB • Uploaded July 1, 2023
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Signatures & Approvals</CardTitle>
              <CardDescription>
                Status of member signatures on syndicate documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Member
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Syndicate Agreement
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Escrow Terms
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Signed On
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {syndicateData.members.map(member => <tr key={member.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={member.avatar} />
                              <AvatarFallback>
                                {member.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{member.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          {member.status === 'active' ? <div className="flex items-center">
                              <CheckCircleIcon className="h-4 w-4 text-green-500 mr-1" />
                              <span>Signed</span>
                            </div> : <div className="flex items-center">
                              <ClockIcon className="h-4 w-4 text-yellow-500 mr-1" />
                              <span>Pending</span>
                            </div>}
                        </td>
                        <td className="py-3 px-4">
                          {member.status === 'active' ? <div className="flex items-center">
                              <CheckCircleIcon className="h-4 w-4 text-green-500 mr-1" />
                              <span>Signed</span>
                            </div> : <div className="flex items-center">
                              <ClockIcon className="h-4 w-4 text-yellow-500 mr-1" />
                              <span>Pending</span>
                            </div>}
                        </td>
                        <td className="py-3 px-4">
                          {member.status === 'active' ? member.joinDate : '-'}
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Capital Growth</CardTitle>
                <CardDescription>
                  Total capital raised over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RechartsLineChart data={contributionData} height={250} color="#3b82f6" gradient={true} yAxisFormatter={value => `$${value}`} tooltipFormatter={value => [`$${value}`, 'Capital Raised']} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Member Distribution</CardTitle>
                <CardDescription>
                  Capital contribution by member
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <RechartsPieChart data={memberDistributionData} height={250} donut={true} innerRadius={60} outerRadius={100} tooltipFormatter={(value, name) => [`${value}%`, name]} />
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Allocation Distribution</CardTitle>
              <CardDescription>
                How capital is allocated across device types
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {syndicateData.allocation.map((item, index) => <div key={index} className="flex items-center">
                    <div className="w-32 text-sm truncate">{item.type}</div>
                    <div className="flex-1 mx-2">
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className={`h-full ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-500' : index === 2 ? 'bg-yellow-500' : 'bg-purple-500'}`} style={{
                      width: `${item.percentage}%`
                    }}></div>
                      </div>
                    </div>
                    <div className="text-sm text-right w-24">
                      {item.percentage}% ({formatCurrency(item.value)})
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Syndicate Performance Metrics</CardTitle>
              <CardDescription>Key performance indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 border rounded-md bg-muted/30">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium">Funding Progress</h3>
                    <Badge variant="outline">90%</Badge>
                  </div>
                  <Progress value={90} className="h-2 mb-2" />
                  <p className="text-xs text-muted-foreground">
                    {formatCurrency(syndicateData.totalCapital)} of{' '}
                    {formatCurrency(syndicateData.targetCapital)} target
                  </p>
                </div>
                <div className="p-4 border rounded-md bg-muted/30">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium">Time Remaining</h3>
                    <Badge variant="outline">48%</Badge>
                  </div>
                  <Progress value={48} className="h-2 mb-2" />
                  <p className="text-xs text-muted-foreground">
                    12 days left of 25 day funding period
                  </p>
                </div>
                <div className="p-4 border rounded-md bg-muted/30">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium">Avg. Contribution</h3>
                    <span className="font-medium">{formatCurrency(18000)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Range: {formatCurrency(10000)} - {formatCurrency(30000)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <div className="flex justify-between">
        <Button variant="outline" onClick={() => navigate('/syndicate-hub')}>
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to Syndicate Hub
        </Button>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => navigate(`/syndicate-contribution/${id}`)}>
            <DollarSignIcon className="mr-2 h-4 w-4" />
            Contribute
          </Button>
          <Button onClick={() => navigate(`/syndicate-distribution/${id}`)}>
            <BoxIcon className="mr-2 h-4 w-4" />
            View Distribution
          </Button>
        </div>
      </div>
    </div>;
};
export default SyndicateDetail;