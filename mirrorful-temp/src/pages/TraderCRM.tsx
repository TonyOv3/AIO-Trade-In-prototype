import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquareIcon, UserIcon, PlusIcon, SearchIcon, PhoneIcon, MailIcon, TagIcon, CalendarIcon, CheckCircleIcon, AlertCircleIcon, ClipboardIcon, RefreshCwIcon, FilterIcon, StarIcon, UserPlusIcon, InfoIcon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
const TraderCRM: React.FC = () => {
  const [activeTab, setActiveTab] = useState('contacts');
  const traderContacts = [{
    id: 1,
    name: 'Robert Chen',
    company: 'TechTrade Solutions',
    email: 'robert@techtrade.com',
    phone: '(415) 555-1234',
    type: 'Supplier',
    status: 'Active',
    lastContact: '2023-07-19',
    rating: 4
  }, {
    id: 2,
    name: 'Lisa Williams',
    company: 'Mobile Resellers Inc',
    email: 'lisa@mobileresellers.com',
    phone: '(312) 555-6789',
    type: 'Buyer',
    status: 'Active',
    lastContact: '2023-07-18',
    rating: 5
  }, {
    id: 3,
    name: 'Miguel Rodriguez',
    company: 'Global Phone Exchange',
    email: 'miguel@gpexchange.com',
    phone: '(213) 555-4321',
    type: 'Both',
    status: 'Inactive',
    lastContact: '2023-07-10',
    rating: 3
  }, {
    id: 4,
    name: 'Sarah Johnson',
    company: 'Wireless Wholesale Co',
    email: 'sarah@wirelesswholesale.com',
    phone: '(646) 555-8765',
    type: 'Supplier',
    status: 'Active',
    lastContact: '2023-07-15',
    rating: 4
  }];
  const recentActivities = [{
    id: 1,
    type: 'Call',
    contact: 'Robert Chen',
    description: 'Discussed upcoming iPhone 13 inventory',
    date: '2023-07-19',
    outcome: 'Positive'
  }, {
    id: 2,
    type: 'Email',
    contact: 'Lisa Williams',
    description: 'Sent price list for Samsung devices',
    date: '2023-07-18',
    outcome: 'Pending'
  }, {
    id: 3,
    type: 'Meeting',
    contact: 'Sarah Johnson',
    description: 'Quarterly review meeting',
    date: '2023-07-15',
    outcome: 'Positive'
  }];
  const upcomingDeals = [{
    id: 1,
    title: 'iPhone 13 Pro Bulk Purchase',
    contact: 'Lisa Williams',
    company: 'Mobile Resellers Inc',
    value: '$24,500',
    stage: 'Negotiation',
    probability: '75%',
    closeDate: '2023-07-30'
  }, {
    id: 2,
    title: 'Samsung S22 Trade-In Program',
    contact: 'Miguel Rodriguez',
    company: 'Global Phone Exchange',
    value: '$18,750',
    stage: 'Proposal',
    probability: '50%',
    closeDate: '2023-08-15'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Trader CRM</h1>
          <p className="text-sm text-muted-foreground">
            Manage your buyer and supplier relationships and track
            communications
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <MessageSquareIcon className="mr-2 h-4 w-4" />
            Log Activity
          </Button>
          <Button>
            <UserPlusIcon className="mr-2 h-4 w-4" />
            Add Contact
          </Button>
        </div>
      </div>
      <Tabs defaultValue="contacts" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="deals">Deals</TabsTrigger>
        </TabsList>
        <TabsContent value="contacts" className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>Trader Directory</CardTitle>
                <div className="flex space-x-2">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input type="text" placeholder="Search contacts..." className="pl-10 pr-4 py-2 rounded-md border bg-background text-sm w-64" />
                  </div>
                  <Button variant="outline" size="icon">
                    <FilterIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardDescription>
                Your network of buyers and suppliers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Name
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Company
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Type
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Rating
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Last Contact
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {traderContacts.map(contact => <tr key={contact.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-primary/10 text-primary grid place-items-center mr-2">
                              <span className="text-xs font-medium">
                                {contact.name.substring(0, 2)}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium">{contact.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {contact.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">{contact.company}</td>
                        <td className="py-3 px-4">
                          <Badge variant={contact.type === 'Supplier' ? 'success' : contact.type === 'Buyer' ? 'warning' : 'default'}>
                            {contact.type}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge variant={contact.status === 'Active' ? 'success' : 'secondary'}>
                            {contact.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-4 w-4 ${i < contact.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`} />)}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm">
                          {contact.lastContact}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon">
                              <PhoneIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <MailIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </div>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter className="border-t">
              <div className="text-sm text-muted-foreground">
                Showing 4 of 48 contacts
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Breakdown</CardTitle>
                <CardDescription>Distribution by type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-sm bg-green-500 mr-2"></div>
                      <span className="text-sm">Suppliers</span>
                    </div>
                    <span className="font-medium">24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-sm bg-yellow-500 mr-2"></div>
                      <span className="text-sm">Buyers</span>
                    </div>
                    <span className="font-medium">18</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-sm bg-blue-500 mr-2"></div>
                      <span className="text-sm">Both</span>
                    </div>
                    <span className="font-medium">6</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Suppliers</CardTitle>
                <CardDescription>By transaction volume</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary/10 text-primary grid place-items-center mr-2">
                        <span className="text-xs font-medium">RC</span>
                      </div>
                      <div>
                        <p className="font-medium">Robert Chen</p>
                        <p className="text-xs text-muted-foreground">
                          TechTrade Solutions
                        </p>
                      </div>
                    </div>
                    <Badge>284 Trades</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary/10 text-primary grid place-items-center mr-2">
                        <span className="text-xs font-medium">SJ</span>
                      </div>
                      <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-xs text-muted-foreground">
                          Wireless Wholesale Co
                        </p>
                      </div>
                    </div>
                    <Badge>156 Trades</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Buyers</CardTitle>
                <CardDescription>By purchase volume</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary/10 text-primary grid place-items-center mr-2">
                        <span className="text-xs font-medium">LW</span>
                      </div>
                      <div>
                        <p className="font-medium">Lisa Williams</p>
                        <p className="text-xs text-muted-foreground">
                          Mobile Resellers Inc
                        </p>
                      </div>
                    </div>
                    <Badge>$124,500</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary/10 text-primary grid place-items-center mr-2">
                        <span className="text-xs font-medium">MR</span>
                      </div>
                      <div>
                        <p className="font-medium">Miguel Rodriguez</p>
                        <p className="text-xs text-muted-foreground">
                          Global Phone Exchange
                        </p>
                      </div>
                    </div>
                    <Badge>$98,750</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="activities" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>
                Your latest interactions with traders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map(activity => <div key={activity.id} className="flex items-start p-3 border rounded-md">
                    <div className="flex-shrink-0 mr-3">
                      {activity.type === 'Call' ? <PhoneIcon className="h-5 w-5 text-blue-500" /> : activity.type === 'Email' ? <MailIcon className="h-5 w-5 text-green-500" /> : <CalendarIcon className="h-5 w-5 text-purple-500" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <p className="font-medium">
                          {activity.type} with {activity.contact}
                        </p>
                        <Badge className="ml-2" variant={activity.outcome === 'Positive' ? 'success' : activity.outcome === 'Negative' ? 'destructive' : 'secondary'}>
                          {activity.outcome}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {activity.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.date}
                      </p>
                    </div>
                  </div>)}
              </div>
            </CardContent>
            <CardFooter className="border-t">
              <Button variant="outline" size="sm" className="ml-auto">
                View All Activities
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Log New Activity</CardTitle>
              <CardDescription>
                Record your interactions with traders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label htmlFor="activity-type" className="text-sm font-medium">
                    Activity Type
                  </label>
                  <select id="activity-type" className="w-full p-2 rounded-md border bg-background">
                    <option value="">Select Type</option>
                    <option value="call">Call</option>
                    <option value="email">Email</option>
                    <option value="meeting">Meeting</option>
                    <option value="note">Note</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact" className="text-sm font-medium">
                    Contact
                  </label>
                  <select id="contact" className="w-full p-2 rounded-md border bg-background">
                    <option value="">Select Contact</option>
                    {traderContacts.map(contact => <option key={contact.id} value={contact.id}>
                        {contact.name} ({contact.company})
                      </option>)}
                  </select>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <textarea id="description" className="w-full p-2 rounded-md border bg-background min-h-[100px]" placeholder="Enter details about the interaction..."></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="outcome" className="text-sm font-medium">
                    Outcome
                  </label>
                  <select id="outcome" className="w-full p-2 rounded-md border bg-background">
                    <option value="">Select Outcome</option>
                    <option value="positive">Positive</option>
                    <option value="neutral">Neutral</option>
                    <option value="negative">Negative</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="follow-up" className="text-sm font-medium">
                    Follow-up Date
                  </label>
                  <input id="follow-up" type="date" className="w-full p-2 rounded-md border bg-background" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t">
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button size="sm" className="ml-2">
                Save Activity
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="deals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Deals</CardTitle>
              <CardDescription>Manage your sales pipeline</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingDeals.map(deal => <div key={deal.id} className="p-4 border rounded-md">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-medium">{deal.title}</h3>
                          <Badge className="ml-2">{deal.stage}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {deal.contact} • {deal.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{deal.value}</p>
                        <p className="text-sm text-muted-foreground">
                          {deal.probability} probability
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Close date: {deal.closeDate}
                      </span>
                      <Button variant="outline" size="sm">
                        Update
                      </Button>
                    </div>
                  </div>)}
              </div>
            </CardContent>
            <CardFooter className="border-t">
              <Button variant="outline" size="sm" className="ml-auto">
                View All Deals
              </Button>
            </CardFooter>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Deal Pipeline</CardTitle>
                <CardDescription>Current deals by stage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-sm bg-blue-500 mr-2"></div>
                      <span className="text-sm">Prospecting</span>
                    </div>
                    <span className="font-medium">$38,500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-sm bg-green-500 mr-2"></div>
                      <span className="text-sm">Proposal</span>
                    </div>
                    <span className="font-medium">$72,250</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-sm bg-yellow-500 mr-2"></div>
                      <span className="text-sm">Negotiation</span>
                    </div>
                    <span className="font-medium">$124,500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-sm bg-purple-500 mr-2"></div>
                      <span className="text-sm">Closing</span>
                    </div>
                    <span className="font-medium">$58,750</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Deal Forecast</CardTitle>
                <CardDescription>30-day projection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center h-40">
                  <p className="text-3xl font-bold">$152,750</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Expected to close in next 30 days
                  </p>
                  <div className="flex items-center mt-2 text-green-500">
                    <InfoIcon className="h-4 w-4 mr-1" />
                    <span className="text-sm">+12.4% vs last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common deal activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Create New Deal
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <ClipboardIcon className="mr-2 h-4 w-4" />
                    Generate Quote
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <RefreshCwIcon className="mr-2 h-4 w-4" />
                    Update Pipeline
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>;
};
export default TraderCRM;