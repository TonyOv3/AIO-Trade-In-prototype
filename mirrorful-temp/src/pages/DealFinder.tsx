import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBagIcon, SearchIcon, FilterIcon, ArrowUpDownIcon, CheckCircleIcon, XCircleIcon, AlertTriangleIcon, TagIcon, TrendingUpIcon, TrendingDownIcon, StarIcon, DollarSignIcon, PhoneIcon, BarChart2Icon, ArrowRightIcon, RefreshCwIcon, HeartIcon, BookmarkIcon, ShieldIcon, CheckIcon, ChevronDownIcon, ExternalLinkIcon, ListFilterIcon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
const marketplaceListings = [{
  id: 'listing-001',
  title: 'iPhone 13 Pro Max - 256GB',
  description: 'Excellent condition, minor scratches on frame. Includes original box and accessories.',
  price: 749.99,
  originalPrice: 899.99,
  discount: 17,
  condition: 'A Grade',
  source: 'eBay',
  seller: {
    name: 'TechTrade Pro',
    rating: 4.8,
    verified: true,
    transactions: 1243
  },
  location: 'San Francisco, CA',
  postedDate: '2 hours ago',
  quantity: 5,
  image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80',
  tags: ['Trending', 'Deal'],
  priceHistory: [{
    date: '1 week ago',
    price: 799.99
  }, {
    date: '2 weeks ago',
    price: 849.99
  }, {
    date: '1 month ago',
    price: 899.99
  }],
  specifications: {
    storage: '256GB',
    color: 'Graphite',
    carrier: 'Unlocked',
    battery: '92%'
  },
  trending: 'up'
}, {
  id: 'listing-002',
  title: 'Samsung Galaxy S22 Ultra - 128GB',
  description: 'Like new condition, screen protector applied since day one. Comes with fast charger.',
  price: 649.99,
  originalPrice: 799.99,
  discount: 19,
  condition: 'A Grade',
  source: 'Swappa',
  seller: {
    name: 'Mobile Resellers Inc',
    rating: 4.9,
    verified: true,
    transactions: 856
  },
  location: 'Austin, TX',
  postedDate: '5 hours ago',
  quantity: 3,
  image: 'https://images.unsplash.com/photo-1644501635454-a0a4f9eee0ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
  tags: ['Hot Deal'],
  priceHistory: [{
    date: '1 week ago',
    price: 699.99
  }, {
    date: '2 weeks ago',
    price: 749.99
  }, {
    date: '1 month ago',
    price: 799.99
  }],
  specifications: {
    storage: '128GB',
    color: 'Phantom Black',
    carrier: 'Unlocked',
    battery: '95%'
  },
  trending: 'up'
}, {
  id: 'listing-003',
  title: 'Google Pixel 6 Pro - 256GB',
  description: 'Good condition with minor wear. Screen has been replaced with genuine parts. All functions working perfectly.',
  price: 399.99,
  originalPrice: 499.99,
  discount: 20,
  condition: 'B Grade',
  source: 'Facebook',
  seller: {
    name: 'Pixel Perfect',
    rating: 4.5,
    verified: false,
    transactions: 127
  },
  location: 'Seattle, WA',
  postedDate: '1 day ago',
  quantity: 2,
  image: 'https://images.unsplash.com/photo-1635870723802-e88d76ae3189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80',
  tags: [],
  priceHistory: [{
    date: '1 week ago',
    price: 429.99
  }, {
    date: '2 weeks ago',
    price: 459.99
  }, {
    date: '1 month ago',
    price: 499.99
  }],
  specifications: {
    storage: '256GB',
    color: 'Stormy Black',
    carrier: 'Unlocked',
    battery: '89%'
  },
  trending: 'down'
}, {
  id: 'listing-004',
  title: 'iPhone 12 - 128GB',
  description: 'Fair condition with visible scratches on back glass. Battery health at 85%. No Face ID issues.',
  price: 379.99,
  originalPrice: 429.99,
  discount: 12,
  condition: 'C Grade',
  source: 'WholeCell',
  seller: {
    name: 'Wholesale Phones Direct',
    rating: 4.7,
    verified: true,
    transactions: 3452
  },
  location: 'Miami, FL',
  postedDate: '3 days ago',
  quantity: 8,
  image: 'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
  tags: ['Bulk Available'],
  priceHistory: [{
    date: '1 week ago',
    price: 399.99
  }, {
    date: '2 weeks ago',
    price: 419.99
  }, {
    date: '1 month ago',
    price: 429.99
  }],
  specifications: {
    storage: '128GB',
    color: 'Blue',
    carrier: 'Unlocked',
    battery: '85%'
  },
  trending: 'stable'
}, {
  id: 'listing-005',
  title: 'OnePlus 10 Pro - 256GB',
  description: 'Excellent condition with original packaging. Includes screen protector and case.',
  price: 499.99,
  originalPrice: 599.99,
  discount: 17,
  condition: 'A Grade',
  source: 'eBay',
  seller: {
    name: 'Premium Devices',
    rating: 4.6,
    verified: true,
    transactions: 782
  },
  location: 'Chicago, IL',
  postedDate: '4 days ago',
  quantity: 1,
  image: 'https://images.unsplash.com/photo-1551355738-1875c6f742dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80',
  tags: ['Limited Stock'],
  priceHistory: [{
    date: '1 week ago',
    price: 529.99
  }, {
    date: '2 weeks ago',
    price: 559.99
  }, {
    date: '1 month ago',
    price: 599.99
  }],
  specifications: {
    storage: '256GB',
    color: 'Emerald Forest',
    carrier: 'Unlocked',
    battery: '97%'
  },
  trending: 'up'
}, {
  id: 'listing-006',
  title: 'iPhone SE (2022) - 64GB',
  description: 'New open box. Never used, just opened to verify contents. Full warranty.',
  price: 329.99,
  originalPrice: 429.99,
  discount: 23,
  condition: 'New',
  source: 'Amazon',
  seller: {
    name: 'Apple Certified Reseller',
    rating: 4.9,
    verified: true,
    transactions: 5241
  },
  location: 'New York, NY',
  postedDate: '6 hours ago',
  quantity: 10,
  image: 'https://images.unsplash.com/photo-1592813630413-9c8a7e54ad5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
  tags: ['Best Value'],
  priceHistory: [{
    date: '1 week ago',
    price: 369.99
  }, {
    date: '2 weeks ago',
    price: 399.99
  }, {
    date: '1 month ago',
    price: 429.99
  }],
  specifications: {
    storage: '64GB',
    color: 'Midnight',
    carrier: 'Unlocked',
    battery: '100%'
  },
  trending: 'down'
}];
const marketplaceStats = {
  totalListings: 1245,
  newToday: 87,
  averageDiscount: '18.2%',
  topPlatform: 'eBay (42%)',
  mostSearched: 'iPhone 13 Pro'
};
const recentDeals = [{
  id: 'deal-001',
  device: 'iPhone 13 Pro Max',
  price: '$749.99',
  discount: '17% off',
  source: 'eBay',
  time: '2 hours ago'
}, {
  id: 'deal-002',
  device: 'Samsung S22 Ultra',
  price: '$649.99',
  discount: '19% off',
  source: 'Swappa',
  time: '5 hours ago'
}, {
  id: 'deal-003',
  device: 'iPhone SE 2022',
  price: '$329.99',
  discount: '23% off',
  source: 'Amazon',
  time: '6 hours ago'
}];
const DealFinder = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('relevance');
  const [selectedFilters, setSelectedFilters] = useState({
    condition: [],
    source: [],
    price: [0, 1000],
    verified: false
  });
  const getSourceColor = source => {
    switch (source) {
      case 'eBay':
        return 'bg-blue-500';
      case 'Swappa':
        return 'bg-purple-500';
      case 'Facebook':
        return 'bg-indigo-500';
      case 'WholeCell':
        return 'bg-pink-500';
      case 'Amazon':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };
  const getConditionBadge = condition => {
    switch (condition) {
      case 'New':
        return <Badge variant="success">New</Badge>;
      case 'A Grade':
        return <Badge variant="success">A Grade</Badge>;
      case 'B Grade':
        return <Badge variant="warning">B Grade</Badge>;
      case 'C Grade':
        return <Badge variant="default">C Grade</Badge>;
      default:
        return <Badge variant="outline">{condition}</Badge>;
    }
  };
  const filteredListings = marketplaceListings.filter(listing => {
    if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (activeTab === 'iphone' && !listing.title.toLowerCase().includes('iphone')) {
      return false;
    }
    if (activeTab === 'samsung' && !listing.title.toLowerCase().includes('samsung')) {
      return false;
    }
    if (activeTab === 'google' && !listing.title.toLowerCase().includes('google')) {
      return false;
    }
    if (activeTab === 'other' && (listing.title.toLowerCase().includes('iphone') || listing.title.toLowerCase().includes('samsung') || listing.title.toLowerCase().includes('google'))) {
      return false;
    }
    return true;
  });
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Marketplace</h1>
          <p className="text-sm text-muted-foreground">
            Find the best deals across multiple platforms
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <FilterIcon className="mr-2 h-4 w-4" />
            Advanced Filters
          </Button>
          <Button variant="outline">
            <BookmarkIcon className="mr-2 h-4 w-4" />
            Saved Searches
          </Button>
          <Button>
            <RefreshCwIcon className="mr-2 h-4 w-4" />
            Refresh Listings
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Listings</p>
                <p className="text-2xl font-bold">
                  {marketplaceStats.totalListings}
                </p>
              </div>
              <ShoppingBagIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">New Today</p>
                <p className="text-2xl font-bold">
                  {marketplaceStats.newToday}
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
                <p className="text-sm text-muted-foreground">Avg. Discount</p>
                <p className="text-2xl font-bold">
                  {marketplaceStats.averageDiscount}
                </p>
              </div>
              <BarChart2Icon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Top Platform</p>
                <p className="text-2xl font-bold">
                  {marketplaceStats.topPlatform}
                </p>
              </div>
              <TrendingUpIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Most Searched</p>
                <p className="text-2xl font-bold">
                  {marketplaceStats.mostSearched}
                </p>
              </div>
              <SearchIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader className="pb-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <CardTitle>Aggregator Marketplace</CardTitle>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input type="text" placeholder="Search devices..." className="pl-10 pr-4 py-2 rounded-md border bg-background text-sm w-full sm:w-64" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            </div>
          </div>
          <CardDescription>
            Find the best deals across multiple platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">All Devices</TabsTrigger>
                <TabsTrigger value="iphone">iPhone</TabsTrigger>
                <TabsTrigger value="samsung">Samsung</TabsTrigger>
                <TabsTrigger value="google">Google</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="border rounded-md bg-background p-1 text-sm" value={sortOption} onChange={e => setSortOption(e.target.value)}>
                  <option value="relevance">Relevance</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="discount">Biggest Discount</option>
                </select>
              </div>
              <Button variant="outline" size="sm">
                <ListFilterIcon className="h-4 w-4 mr-1" />
                Filters
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredListings.map(listing => <Card key={listing.id} className="overflow-hidden">
                <div className="aspect-video w-full relative overflow-hidden">
                  <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 flex flex-col space-y-1">
                    {listing.discount > 0 && <Badge variant="destructive">
                        {listing.discount}% OFF
                      </Badge>}
                    <div className={`px-2 py-0.5 rounded text-xs text-white font-medium ${getSourceColor(listing.source)}`}>
                      {listing.source}
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-background/80 text-foreground">
                      <HeartIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-medium line-clamp-1">
                      {listing.title}
                    </h3>
                    {getConditionBadge(listing.condition)}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 h-10 mb-2">
                    {listing.description}
                  </p>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="flex items-center">
                        <span className="text-xl font-bold">
                          ${listing.price}
                        </span>
                        {listing.originalPrice > listing.price && <span className="text-sm text-muted-foreground line-through ml-2">
                            ${listing.originalPrice}
                          </span>}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <span>{listing.quantity} available</span>
                        <span className="mx-1">•</span>
                        <span>{listing.postedDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {listing.trending === 'up' && <TrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />}
                      {listing.trending === 'down' && <TrendingDownIcon className="h-4 w-4 text-red-500 mr-1" />}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <div className="flex items-center text-sm">
                    <Avatar className="h-6 w-6 mr-1">
                      <AvatarFallback>
                        {listing.seller.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium line-clamp-1 max-w-[120px]">
                      {listing.seller.name}
                    </span>
                    {listing.seller.verified && <CheckCircleIcon className="h-3 w-3 text-blue-500 ml-1" />}
                  </div>
                  <Button size="sm">
                    View Details <ArrowRightIcon className="ml-1 h-3 w-3" />
                  </Button>
                </CardFooter>
              </Card>)}
          </div>
          {filteredListings.length === 0 && <div className="flex flex-col items-center justify-center h-60 border rounded-md bg-muted/30">
              <SearchIcon className="h-12 w-12 text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-medium mb-2">No results found</h3>
              <p className="text-sm text-muted-foreground text-center max-w-md">
                We couldn't find any listings matching your search criteria. Try
                adjusting your filters or search terms.
              </p>
              {searchQuery && <Button variant="outline" className="mt-4" onClick={() => setSearchQuery('')}>
                  Clear Search
                </Button>}
            </div>}
        </CardContent>
        <CardFooter className="border-t flex justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {filteredListings.length} of {marketplaceListings.length}{' '}
            listings
          </div>
          <Button variant="outline" size="sm">
            Load More
          </Button>
        </CardFooter>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Hot Deals</CardTitle>
            <CardDescription>
              Latest discounts and special offers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDeals.map(deal => <div key={deal.id} className="flex items-start p-3 border rounded-md">
                  <TagIcon className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{deal.device}</p>
                      <p className="font-bold text-green-600">{deal.price}</p>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center">
                        <span className={`px-2 py-0.5 rounded text-xs text-white font-medium ${getSourceColor(deal.source)}`}>
                          {deal.source}
                        </span>
                        <span className="text-xs text-green-600 ml-2">
                          {deal.discount}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {deal.time}
                      </p>
                    </div>
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
        <Card>
          <CardHeader>
            <CardTitle>Market Insights</CardTitle>
            <CardDescription>Price trends and analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-md bg-muted/30">
                <h3 className="text-sm font-medium mb-2">
                  Price Trend Analysis
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">iPhone 13 Pro</span>
                    <div className="flex items-center text-green-600">
                      <TrendingDownIcon className="h-4 w-4 mr-1" />
                      <span className="text-xs">-5.3% (30d)</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Samsung S22</span>
                    <div className="flex items-center text-red-600">
                      <TrendingDownIcon className="h-4 w-4 mr-1" />
                      <span className="text-xs">-7.8% (30d)</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Google Pixel 6</span>
                    <div className="flex items-center text-green-600">
                      <TrendingDownIcon className="h-4 w-4 mr-1" />
                      <span className="text-xs">-3.2% (30d)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="text-sm font-medium mb-2">Best Time to Buy</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex items-start">
                    <CheckIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span className="text-muted-foreground">
                      iPhone prices dropping as new model approaches
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span className="text-muted-foreground">
                      Samsung S22 reaching price floor
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span className="text-muted-foreground">
                      Best deals typically appear on weekends
                    </span>
                  </div>
                </div>
              </div>
              <Button className="w-full">
                <BarChart2Icon className="mr-2 h-4 w-4" />
                View Full Market Analysis
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Buying Tips</CardTitle>
          <CardDescription>
            Maximize your marketplace experience
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-md">
              <div className="flex items-center mb-2">
                <ShieldIcon className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="font-medium">Verify Sellers</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Always check seller ratings and transaction history before
                purchasing. Look for verified badges and consistent positive
                feedback.
              </p>
            </div>
            <div className="p-4 border rounded-md">
              <div className="flex items-center mb-2">
                <PhoneIcon className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="font-medium">Check IMEI/ESN</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Request IMEI or ESN numbers and verify they\'re clean before
                purchasing. Our risk assessment tool can help identify potential
                issues.
              </p>
            </div>
            <div className="p-4 border rounded-md">
              <div className="flex items-center mb-2">
                <DollarSignIcon className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="font-medium">Compare Across Platforms</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Prices can vary significantly between marketplaces. Our
                aggregator shows you the best deals across all platforms in one
                place.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default DealFinder;