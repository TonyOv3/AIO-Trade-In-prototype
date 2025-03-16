import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BoxIcon, GavelIcon, SearchIcon, FilterIcon, ClockIcon, CalendarIcon, DollarSignIcon, TrendingUpIcon, TruckIcon, TagIcon, PlusIcon, UsersIcon, BarChart2Icon, ArrowRightIcon, CheckCircleIcon, TimerIcon, ShieldIcon, UserPlusIcon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
const WholesaleAuctions = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');
  const auctions = [{
    id: 'AUC-2023-1245',
    title: 'Bulk iPhone 12 & 13 Models',
    devices: 25,
    startingBid: '$8,750',
    currentBid: '$10,250',
    bids: 8,
    status: 'Active',
    timeLeft: '12h 32m',
    endDate: '2023-07-21',
    seller: 'TechTrade Solutions',
    syndicateBuying: true,
    syndicateInfo: {
      name: 'Premium iPhone Collective',
      members: 5,
      capitalRaised: '$90,000',
      targetCapital: '$100,000',
      progress: 90
    }
  }, {
    id: 'AUC-2023-1244',
    title: 'Samsung Galaxy S22 Collection',
    devices: 18,
    startingBid: '$5,400',
    currentBid: '$6,120',
    bids: 5,
    status: 'Active',
    timeLeft: '1d 8h',
    endDate: '2023-07-22',
    seller: 'Mobile Source LLC',
    syndicateBuying: false
  }, {
    id: 'AUC-2023-1243',
    title: 'Google Pixel 6 Pro Lot',
    devices: 12,
    startingBid: '$3,600',
    currentBid: '$3,950',
    bids: 3,
    status: 'Active',
    timeLeft: '2d 4h',
    endDate: '2023-07-23',
    seller: 'Wireless Wholesale Co',
    syndicateBuying: true,
    syndicateInfo: {
      name: 'Pixel Traders Group',
      members: 3,
      capitalRaised: '$4,000',
      targetCapital: '$5,000',
      progress: 80
    }
  }, {
    id: 'AUC-2023-1242',
    title: 'Mixed Apple Devices (Refurbished)',
    devices: 30,
    startingBid: '$9,000',
    currentBid: '$10,500',
    bids: 12,
    status: 'Ended',
    timeLeft: 'Ended',
    endDate: '2023-07-19',
    seller: 'TechTrade Solutions',
    syndicateBuying: false
  }];
  const auctionStats = {
    activeAuctions: 12,
    upcomingAuctions: 5,
    completedThisMonth: 24,
    totalBids: 156,
    averagePriceIncrease: '18.4%'
  };
  const recentBids = [{
    id: 1,
    auction: 'AUC-2023-1245',
    bidder: 'Mobile Resellers Inc',
    amount: '$10,250',
    time: '1 hour ago'
  }, {
    id: 2,
    auction: 'AUC-2023-1245',
    bidder: 'Phone Wholesale Inc',
    amount: '$10,100',
    time: '2 hours ago'
  }, {
    id: 3,
    auction: 'AUC-2023-1245',
    bidder: 'Global Phone Exchange',
    amount: '$9,800',
    time: '3 hours ago'
  }, {
    id: 4,
    auction: 'AUC-2023-1244',
    bidder: 'Mobile Resellers Inc',
    amount: '$6,120',
    time: '5 hours ago'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Wholesale Auctions</h1>
          <p className="text-sm text-muted-foreground">
            Buy and sell devices in bulk through competitive auctions
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => navigate('/syndicate-hub')}>
            <UsersIcon className="mr-2 h-4 w-4" />
            Syndicate Hub
          </Button>
          <Button variant="outline">
            <FilterIcon className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Create Auction
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Auctions</p>
                <p className="text-2xl font-bold">
                  {auctionStats.activeAuctions}
                </p>
              </div>
              <GavelIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Upcoming Auctions
                </p>
                <p className="text-2xl font-bold">
                  {auctionStats.upcomingAuctions}
                </p>
              </div>
              <CalendarIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Bids</p>
                <p className="text-2xl font-bold">{auctionStats.totalBids}</p>
              </div>
              <TagIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Avg. Price Increase
                </p>
                <p className="text-2xl font-bold">
                  {auctionStats.averagePriceIncrease}
                </p>
              </div>
              <TrendingUpIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle>Auction Listings</CardTitle>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input type="text" placeholder="Search auctions..." className="pl-10 pr-4 py-2 rounded-md border bg-background text-sm w-64" />
            </div>
          </div>
          <CardDescription>
            Browse current and upcoming wholesale auctions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="ended">Ended</TabsTrigger>
              <TabsTrigger value="my-bids">My Bids</TabsTrigger>
              <TabsTrigger value="syndicate">Syndicate Auctions</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="space-y-4">
              {auctions.filter(auction => auction.status === 'Active').map(auction => <Card key={auction.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="p-4 md:w-2/3">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-medium">{auction.title}</h3>
                              <Badge variant="success" className="ml-2">
                                Active
                              </Badge>
                              {auction.syndicateBuying && <Badge variant="outline" className="ml-2">
                                  <UsersIcon className="h-3 w-3 mr-1" />
                                  Syndicate Interest
                                </Badge>}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              ID: {auction.id} • Seller: {auction.seller}
                            </p>
                          </div>
                          <div className="flex items-center text-sm">
                            <ClockIcon className="h-4 w-4 mr-1 text-yellow-500" />
                            <span>{auction.timeLeft} left</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Devices
                            </p>
                            <p className="font-medium">{auction.devices}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Starting Bid
                            </p>
                            <p className="font-medium">{auction.startingBid}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Current Bid
                            </p>
                            <p className="font-medium text-green-600">
                              {auction.currentBid}
                            </p>
                          </div>
                        </div>
                        {auction.syndicateBuying && auction.syndicateInfo && <div className="mt-4 p-3 bg-primary/5 border rounded-md">
                            <div className="flex justify-between items-center mb-2">
                              <div className="flex items-center">
                                <UsersIcon className="h-4 w-4 mr-2 text-primary" />
                                <span className="font-medium text-sm">
                                  {auction.syndicateInfo.name}
                                </span>
                              </div>
                              <span className="text-xs text-muted-foreground">
                                {auction.syndicateInfo.members} members
                              </span>
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs text-muted-foreground">
                                <span>
                                  Capital Raised:{' '}
                                  {auction.syndicateInfo.capitalRaised}
                                </span>
                                <span>
                                  Target: {auction.syndicateInfo.targetCapital}
                                </span>
                              </div>
                              <Progress value={auction.syndicateInfo.progress} className="h-1.5" />
                              <div className="flex justify-end">
                                <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => navigate('/syndicate-hub')}>
                                  Join Syndicate
                                </Button>
                              </div>
                            </div>
                          </div>}
                      </div>
                      <div className="p-4 bg-muted/30 border-t md:border-t-0 md:border-l md:w-1/3 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">
                              Current Bid
                            </span>
                            <span className="font-bold text-lg">
                              {auction.currentBid}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              Total Bids
                            </span>
                            <span>{auction.bids}</span>
                          </div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <Button className="w-full">Place Bid</Button>
                          <Button variant="outline" className="w-full">
                            View Details
                          </Button>
                          {!auction.syndicateBuying && <Button variant="outline" className="w-full" onClick={() => navigate('/syndicate-hub')}>
                              <UsersIcon className="mr-2 h-4 w-4" />
                              Create Buying Syndicate
                            </Button>}
                        </div>
                      </div>
                    </div>
                  </Card>)}
            </TabsContent>
            <TabsContent value="upcoming">
              <div className="flex items-center justify-center h-40 border rounded-md bg-muted/30">
                <p className="text-muted-foreground">
                  Upcoming auctions will be displayed here
                </p>
              </div>
            </TabsContent>
            <TabsContent value="ended">
              <div className="flex items-center justify-center h-40 border rounded-md bg-muted/30">
                <p className="text-muted-foreground">
                  Ended auctions will be displayed here
                </p>
              </div>
            </TabsContent>
            <TabsContent value="my-bids">
              <div className="flex items-center justify-center h-40 border rounded-md bg-muted/30">
                <p className="text-muted-foreground">
                  Your bids will be displayed here
                </p>
              </div>
            </TabsContent>
            <TabsContent value="syndicate" className="space-y-4">
              <Card className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-2/3 space-y-4">
                    <div className="flex items-center">
                      <div className="h-5 w-5 mr-2 text-primary" />
                      <h3 className="text-lg font-medium">
                        Group Buying Power
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Pool resources with other traders to access larger
                      inventory lots at better prices. Syndicates reduce
                      individual risk while increasing buying power and
                      negotiation leverage.
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-3 bg-primary/5 rounded-md text-center">
                        <p className="text-2xl font-bold">15-20%</p>
                        <p className="text-xs text-muted-foreground">
                          Better Rates
                        </p>
                      </div>
                      <div className="p-3 bg-primary/5 rounded-md text-center">
                        <p className="text-2xl font-bold">10x</p>
                        <p className="text-xs text-muted-foreground">
                          Buying Power
                        </p>
                      </div>
                      <div className="p-3 bg-primary/5 rounded-md text-center">
                        <p className="text-2xl font-bold">75%</p>
                        <p className="text-xs text-muted-foreground">
                          Risk Reduction
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 flex flex-col space-y-3">
                    <Button size="lg" className="w-full" onClick={() => navigate('/syndicate-hub')}>
                      <UsersIcon className="mr-2 h-4 w-4" />
                      Create a Syndicate
                    </Button>
                    <Button variant="outline" size="lg" className="w-full" onClick={() => navigate('/syndicate-hub')}>
                      <UserPlusIcon className="mr-2 h-4 w-4" />
                      Join Existing Syndicate
                    </Button>
                    <Button variant="ghost" size="lg" className="w-full" onClick={() => navigate('/syndicate-hub')}>
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
              {auctions.filter(auction => auction.syndicateBuying).map(auction => <Card key={auction.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="p-4 md:w-2/3">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-medium">{auction.title}</h3>
                              <Badge variant="success" className="ml-2">
                                Active
                              </Badge>
                              <Badge variant="outline" className="ml-2">
                                <UsersIcon className="h-3 w-3 mr-1" />
                                Syndicate
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              ID: {auction.id} • Seller: {auction.seller}
                            </p>
                          </div>
                          <div className="flex items-center text-sm">
                            <ClockIcon className="h-4 w-4 mr-1 text-yellow-500" />
                            <span>{auction.timeLeft} left</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Devices
                            </p>
                            <p className="font-medium">{auction.devices}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Starting Bid
                            </p>
                            <p className="font-medium">{auction.startingBid}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Current Bid
                            </p>
                            <p className="font-medium text-green-600">
                              {auction.currentBid}
                            </p>
                          </div>
                        </div>
                        {auction.syndicateInfo && <div className="mt-4 p-3 bg-primary/5 border rounded-md">
                            <div className="flex justify-between items-center mb-2">
                              <div className="flex items-center">
                                <UsersIcon className="h-4 w-4 mr-2 text-primary" />
                                <span className="font-medium text-sm">
                                  {auction.syndicateInfo.name}
                                </span>
                              </div>
                              <span className="text-xs text-muted-foreground">
                                {auction.syndicateInfo.members} members
                              </span>
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs text-muted-foreground">
                                <span>
                                  Capital Raised:{' '}
                                  {auction.syndicateInfo.capitalRaised}
                                </span>
                                <span>
                                  Target: {auction.syndicateInfo.targetCapital}
                                </span>
                              </div>
                              <Progress value={auction.syndicateInfo.progress} className="h-1.5" />
                            </div>
                          </div>}
                      </div>
                      <div className="p-4 bg-muted/30 border-t md:border-t-0 md:border-l md:w-1/3 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">
                              Min. Contribution
                            </span>
                            <span className="font-bold text-lg">$5,000</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mb-1">
                            <ShieldIcon className="h-4 w-4 mr-1" />
                            <span>Escrow protected funds</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <UsersIcon className="h-4 w-4 mr-1" />
                            <span>
                              Join with {auction.syndicateInfo?.members} other
                              traders
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <Button className="w-full" onClick={() => navigate('/syndicate-hub')}>
                            Join Syndicate
                          </Button>
                          <Button variant="outline" className="w-full" onClick={() => navigate('/syndicate-hub')}>
                            View Syndicate Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>)}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Bids</CardTitle>
            <CardDescription>
              Latest activity across all auctions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBids.map(bid => <div key={bid.id} className="flex items-start p-3 border rounded-md">
                  <TagIcon className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{bid.bidder}</p>
                      <p className="font-bold text-green-600">{bid.amount}</p>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm text-muted-foreground">
                        {bid.auction}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {bid.time}
                      </p>
                    </div>
                  </div>
                </div>)}
            </div>
          </CardContent>
          <CardFooter className="border-t">
            <Button variant="outline" size="sm" className="ml-auto">
              View All Bids
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Group Buying Power</CardTitle>
            <CardDescription>Pool resources with other traders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-md bg-primary/5">
                <div className="flex items-start">
                  <UsersIcon className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">
                      Syndicate Buying Model
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Pool capital with other traders to access larger inventory
                      opportunities and reduce individual risk
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Button className="w-full" onClick={() => navigate('/syndicate-hub')}>
                  <UsersIcon className="mr-2 h-4 w-4" />
                  Visit Syndicate Hub
                </Button>
                <Button variant="outline" className="w-full" onClick={() => navigate('/syndicate-hub')}>
                  <div className="mr-2 h-4 w-4" />
                  Join Active Syndicates
                </Button>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Benefits</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span className="text-muted-foreground">
                      Access larger inventory lots
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span className="text-muted-foreground">
                      Reduce individual risk exposure
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span className="text-muted-foreground">
                      Negotiate better wholesale rates
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span className="text-muted-foreground">
                      Secure escrow protection for funds
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Featured Auction</CardTitle>
          <CardDescription>
            Special highlight with premium visibility
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <h3 className="text-xl font-bold">Premium iPhone Collection</h3>
                <Badge variant="success" className="ml-2">
                  Featured
                </Badge>
                <Badge variant="outline" className="ml-2">
                  <UsersIcon className="h-3 w-3 mr-1" />
                  Syndicate Ready
                </Badge>
              </div>
              <p className="text-muted-foreground">
                A curated collection of 40 premium iPhones including iPhone 13
                Pro, iPhone 13, and iPhone 12 Pro models. All devices are A/B
                grade with full functionality and minimal cosmetic wear.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Starting Bid</p>
                  <p className="text-2xl font-bold">$15,000</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Reserve Price</p>
                  <p className="text-2xl font-bold">$18,500</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <UsersIcon className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-sm">12 watchers</span>
                </div>
                <div className="flex items-center">
                  <TimerIcon className="h-4 w-4 mr-1 text-yellow-500" />
                  <span className="text-sm">Ends in 2 days</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button className="flex-1">Place Bid</Button>
                <Button variant="outline" className="flex-1">
                  View Details
                </Button>
                <Button variant="outline" className="flex-1" onClick={() => navigate('/syndicate-hub')}>
                  <UsersIcon className="mr-2 h-4 w-4" />
                  Join Syndicate
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-md border">
              <div className="text-center">
                <BoxIcon className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground">
                  Preview image would appear here
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default WholesaleAuctions;