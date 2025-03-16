import React from 'react';
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
interface PhoneData {
  id: number;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  source: string;
  condition: string;
}
const mockPhoneData: PhoneData[] = [{
  id: 1,
  name: 'iPhone 13 Pro Max',
  price: 849,
  change: 12,
  changePercent: 1.4,
  source: 'eBay',
  condition: 'A'
}, {
  id: 2,
  name: 'Samsung S22 Ultra',
  price: 699,
  change: -15,
  changePercent: -2.1,
  source: 'Facebook',
  condition: 'B'
}, {
  id: 3,
  name: 'Google Pixel 6',
  price: 389,
  change: 5,
  changePercent: 1.3,
  source: 'Swappa',
  condition: 'A'
}, {
  id: 4,
  name: 'iPhone 12',
  price: 449,
  change: -8,
  changePercent: -1.7,
  source: 'WholeCell',
  condition: 'B'
}];
const getMarketplaceColor = (source: string) => {
  switch (source) {
    case 'eBay':
      return 'bg-blue-500';
    case 'Facebook':
      return 'bg-indigo-500';
    case 'Swappa':
      return 'bg-purple-500';
    case 'WholeCell':
      return 'bg-pink-500';
    default:
      return 'bg-gray-500';
  }
};
const LiveMarketTicker: React.FC = () => {
  return <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">
            Live Market Ticker
          </CardTitle>
          <span className="text-xs text-muted-foreground">
            Real-time updates from multiple marketplaces
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {[...mockPhoneData, ...mockPhoneData].map((phone, index) => <div key={`${phone.id}-${index}`} className="flex-none px-4 py-3 min-w-[240px]">
                <div className="rounded-lg border p-3 bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`px-2 py-0.5 rounded text-xs text-white font-medium ${getMarketplaceColor(phone.source)}`}>
                      {phone.source}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {phone.condition} Grade
                    </div>
                  </div>
                  <div className="font-medium mb-2 text-sm">{phone.name}</div>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">${phone.price}</div>
                    <div className={`flex items-center text-xs font-medium ${phone.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {phone.change >= 0 ? <TrendingUpIcon className="h-3 w-3 mr-1" /> : <TrendingDownIcon className="h-3 w-3 mr-1" />}
                      {phone.changePercent}%
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </CardContent>
    </Card>;
};
export default LiveMarketTicker;