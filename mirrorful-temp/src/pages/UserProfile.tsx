import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UserIcon, SettingsIcon, KeyIcon, BellIcon, CreditCardIcon, LogOutIcon, CheckCircleIcon, MailIcon, PhoneIcon, BuildingIcon, MapPinIcon, ShieldIcon, ClockIcon, FileTextIcon, BarChart2Icon, LockIcon, AlertCircleIcon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const userData = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '(415) 555-1234',
    role: 'Senior Trader',
    company: 'PhoneAI Market',
    location: 'San Francisco, CA',
    joinDate: 'March 15, 2022',
    lastLogin: 'Today, 9:32 AM',
    status: 'Active',
    avatar: 'AJ',
    verificationStatus: 'Verified',
    twoFactorEnabled: true
  };
  const recentActivity = [{
    id: 1,
    action: 'Logged in',
    timestamp: 'Today, 9:32 AM',
    device: 'Chrome on Windows',
    ipAddress: '192.168.1.1'
  }, {
    id: 2,
    action: 'Updated inventory',
    timestamp: 'Yesterday, 3:45 PM',
    device: 'Chrome on Windows',
    ipAddress: '192.168.1.1'
  }, {
    id: 3,
    action: 'Created new order',
    timestamp: 'July 19, 2023, 11:20 AM',
    device: 'Mobile App on iPhone',
    ipAddress: '192.168.0.5'
  }, {
    id: 4,
    action: 'Changed password',
    timestamp: 'July 15, 2023, 2:10 PM',
    device: 'Chrome on Windows',
    ipAddress: '192.168.1.1'
  }];
  const notificationPreferences = [{
    id: 'email_order',
    category: 'Orders',
    description: 'Order status updates',
    email: true,
    push: true
  }, {
    id: 'email_inventory',
    category: 'Inventory',
    description: 'Low stock alerts',
    email: true,
    push: true
  }, {
    id: 'email_price',
    category: 'Market Prices',
    description: 'Significant price changes',
    email: true,
    push: false
  }, {
    id: 'email_auction',
    category: 'Auctions',
    description: 'Auction alerts and outbid notifications',
    email: true,
    push: true
  }, {
    id: 'email_system',
    category: 'System',
    description: 'System maintenance and updates',
    email: false,
    push: false
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">User Profile</h1>
        <Button variant="outline">
          <LogOutIcon className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="md:col-span-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-24 w-24 rounded-full bg-primary text-primary-foreground grid place-items-center text-3xl font-medium mb-4">
                {userData.avatar}
              </div>
              <h2 className="text-xl font-bold">{userData.name}</h2>
              <p className="text-sm text-muted-foreground">{userData.role}</p>
              <div className="flex items-center mt-2">
                <Badge variant="success" className="flex items-center">
                  <CheckCircleIcon className="mr-1 h-3 w-3" />
                  {userData.verificationStatus}
                </Badge>
              </div>
              <div className="w-full mt-6 space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <UserIcon className="mr-2 h-4 w-4" />
                  View Profile
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  Account Settings
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <KeyIcon className="mr-2 h-4 w-4" />
                  Security
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BellIcon className="mr-2 h-4 w-4" />
                  Notifications
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CreditCardIcon className="mr-2 h-4 w-4" />
                  Billing
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="md:col-span-3 space-y-6">
          <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Manage your personal details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <input id="name" type="text" className="w-full p-2 rounded-md border bg-background" defaultValue={userData.name} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <input id="email" type="email" className="w-full p-2 rounded-md border bg-background" defaultValue={userData.email} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <input id="phone" type="tel" className="w-full p-2 rounded-md border bg-background" defaultValue={userData.phone} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="role" className="text-sm font-medium">
                        Job Role
                      </label>
                      <input id="role" type="text" className="w-full p-2 rounded-md border bg-background" defaultValue={userData.role} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company
                      </label>
                      <input id="company" type="text" className="w-full p-2 rounded-md border bg-background" defaultValue={userData.company} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="location" className="text-sm font-medium">
                        Location
                      </label>
                      <input id="location" type="text" className="w-full p-2 rounded-md border bg-background" defaultValue={userData.location} />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t">
                  <Button className="ml-auto">Save Changes</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>How others can reach you</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MailIcon className="h-5 w-5 text-muted-foreground mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Email Address</p>
                        <p className="text-sm text-muted-foreground">
                          {userData.email}
                        </p>
                        <p className="text-xs text-green-600 mt-1">
                          Primary contact method
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <PhoneIcon className="h-5 w-5 text-muted-foreground mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Phone Number</p>
                        <p className="text-sm text-muted-foreground">
                          {userData.phone}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <BuildingIcon className="h-5 w-5 text-muted-foreground mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Company</p>
                        <p className="text-sm text-muted-foreground">
                          {userData.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPinIcon className="h-5 w-5 text-muted-foreground mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">
                          {userData.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="security" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your account password
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="current-password" className="text-sm font-medium">
                        Current Password
                      </label>
                      <input id="current-password" type="password" className="w-full p-2 rounded-md border bg-background" placeholder="Enter current password" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="new-password" className="text-sm font-medium">
                        New Password
                      </label>
                      <input id="new-password" type="password" className="w-full p-2 rounded-md border bg-background" placeholder="Enter new password" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="confirm-password" className="text-sm font-medium">
                        Confirm New Password
                      </label>
                      <input id="confirm-password" type="password" className="w-full p-2 rounded-md border bg-background" placeholder="Confirm new password" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t">
                  <Button className="ml-auto">Update Password</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Two-Factor Authentication</CardTitle>
                  <CardDescription>
                    Secure your account with 2FA
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start p-4 border rounded-md bg-green-50 dark:bg-green-900/20">
                    <ShieldIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">
                        Two-factor authentication is enabled
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Your account is secured with authentication app
                      </p>
                      <div className="mt-2">
                        <Button variant="outline" size="sm">
                          Configure 2FA
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Login Sessions</CardTitle>
                  <CardDescription>Manage your active sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 border rounded-md flex items-start">
                      <div className="p-2 rounded-md bg-primary/10 mr-3">
                        <LockIcon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">
                            Chrome on Windows
                          </p>
                          <Badge>Current</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Last active: Just now • San Francisco, CA
                        </p>
                      </div>
                    </div>
                    <div className="p-3 border rounded-md flex items-start">
                      <div className="p-2 rounded-md bg-primary/10 mr-3">
                        <LockIcon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">
                            Mobile App on iPhone
                          </p>
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            Revoke
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Last active: 2 hours ago • San Francisco, CA
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t">
                  <Button variant="outline" className="ml-auto">
                    Logout of All Sessions
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>
                    Manage how you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {notificationPreferences.map(pref => <div key={pref.id} className="pb-5 border-b last:border-0 last:pb-0">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium">{pref.category}</p>
                            <p className="text-sm text-muted-foreground">
                              {pref.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-4 mt-3">
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id={`${pref.id}_email`} defaultChecked={pref.email} className="rounded border-gray-300" />
                            <label htmlFor={`${pref.id}_email`} className="text-sm">
                              Email
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id={`${pref.id}_push`} defaultChecked={pref.push} className="rounded border-gray-300" />
                            <label htmlFor={`${pref.id}_push`} className="text-sm">
                              Push
                            </label>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </CardContent>
                <CardFooter className="border-t">
                  <Button className="ml-auto">Save Preferences</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Email Digest</CardTitle>
                  <CardDescription>Configure summary emails</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Daily Summary</p>
                        <p className="text-sm text-muted-foreground">
                          Get a daily summary of your account activity
                        </p>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="daily_digest" defaultChecked={true} className="rounded border-gray-300" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Weekly Market Report</p>
                        <p className="text-sm text-muted-foreground">
                          Receive weekly insights on market trends
                        </p>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="weekly_report" defaultChecked={true} className="rounded border-gray-300" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="activity" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Your recent account activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map(activity => <div key={activity.id} className="flex items-start pb-4 border-b last:border-0 last:pb-0">
                        <ClockIcon className="h-5 w-5 text-muted-foreground mr-3 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">
                            {activity.action}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {activity.timestamp} • {activity.device}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            IP: {activity.ipAddress}
                          </p>
                        </div>
                      </div>)}
                  </div>
                </CardContent>
                <CardFooter className="border-t">
                  <Button variant="outline" className="ml-auto">
                    View Full Activity Log
                  </Button>
                </CardFooter>
              </Card>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Account History</CardTitle>
                    <CardDescription>Important account events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <UserIcon className="h-5 w-5 text-muted-foreground mr-3 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Account Created</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {userData.joinDate}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ShieldIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">
                            Account Verified
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            March 20, 2022
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <KeyIcon className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">
                            Two-Factor Authentication Enabled
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            April 2, 2022
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Connected Services</CardTitle>
                    <CardDescription>
                      External services linked to your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start p-3 border rounded-md">
                        <div className="p-2 rounded-md bg-primary/10 mr-3">
                          <CheckCircleIcon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">Google</p>
                            <Button variant="ghost" size="sm" className="h-8 px-2">
                              Disconnect
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            Connected on May 12, 2022
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start p-3 border rounded-md">
                        <div className="p-2 rounded-md bg-primary/10 mr-3">
                          <AlertCircleIcon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">Slack</p>
                            <Button variant="outline" size="sm" className="h-8 px-2">
                              Connect
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            Not connected
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>;
};
export default UserProfile;