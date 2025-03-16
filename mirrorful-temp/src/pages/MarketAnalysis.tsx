import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { BarChart3Icon, TrendingUpIcon, TrendingDownIcon, GlobeIcon, ShoppingBagIcon, ArrowRightIcon, PhoneIcon, FilterIcon, DownloadIcon, MapPinIcon, DollarSignIcon, PieChartIcon, ChevronDownIcon, SearchIcon, SparklesIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import HeatMap from '../components/charts/HeatMap';
import PieChart from '../components/charts/PieChart';
import ComparisonChart from '../components/charts/ComparisonChart';
import RechartsLineChart from '../components/charts/RechartsLineChart';
import RechartsBarChart from '../components/charts/RechartsBarChart';
import RechartsHeatMap from '../components/charts/RechartsHeatMap';
import RechartsPieChart from '../components/charts/RechartsPieChart';
import RechartsComposedChart from '../components/charts/RechartsComposedChart';
import StylizedRegionalMap from '../components/charts/StylizedRegionalMap';
import USRegionalMap from '../components/charts/USRegionalMap';
import LeafletRegionalMap from '../components/charts/LeafletRegionalMap';
import AIInsightCard, { AIInsight } from '../components/AIInsightCard';
import InsightsSection from '../components/InsightsSection';
interface DeviceData {
  name: string;
  currentPrice: number;
  priceTrend: number;
  demand: 'High' | 'Medium' | 'Low';
  priceHistory: {
    date: string;
    value: number;
  }[];
  marketplaceData: {
    label: string;
    value: number;
  }[];
  conditionPriceData: {
    label: string;
    value: number;
  }[];
  regionalData: {
    region: string;
    value: number;
  }[];
  marketShare: {
    label: string;
    value: number;
    color: string;
  }[];
  conditionComparison: {
    category: string;
    values: {
      label: string;
      value: number;
      color: string;
    }[];
  }[];
}
const deviceDataMap: Record<string, DeviceData> = {
  iphone13: {
    name: 'iPhone 13',
    currentPrice: 450,
    priceTrend: -5.3,
    demand: 'High',
    priceHistory: [{
      date: 'Jan',
      value: 550
    }, {
      date: 'Feb',
      value: 540
    }, {
      date: 'Mar',
      value: 530
    }, {
      date: 'Apr',
      value: 510
    }, {
      date: 'May',
      value: 490
    }, {
      date: 'Jun',
      value: 480
    }, {
      date: 'Jul',
      value: 450
    }],
    marketplaceData: [{
      label: 'eBay',
      value: 450
    }, {
      label: 'Amazon',
      value: 480
    }, {
      label: 'Swappa',
      value: 420
    }, {
      label: 'Facebook',
      value: 400
    }, {
      label: 'WholeCell',
      value: 470
    }],
    conditionPriceData: [{
      label: 'New',
      value: 550
    }, {
      label: 'A-Grade',
      value: 480
    }, {
      label: 'B-Grade',
      value: 400
    }, {
      label: 'C-Grade',
      value: 320
    }, {
      label: 'Parts',
      value: 200
    }],
    regionalData: [{
      region: 'NYC',
      value: 490
    }, {
      region: 'LA',
      value: 480
    }, {
      region: 'Chicago',
      value: 450
    }, {
      region: 'Houston',
      value: 430
    }, {
      region: 'Miami',
      value: 470
    }, {
      region: 'Seattle',
      value: 460
    }, {
      region: 'Boston',
      value: 485
    }, {
      region: 'Denver',
      value: 440
    }, {
      region: 'Atlanta',
      value: 445
    }],
    marketShare: [{
      label: 'eBay',
      value: 35,
      color: '#3b82f6'
    }, {
      label: 'Amazon',
      value: 25,
      color: '#f97316'
    }, {
      label: 'Swappa',
      value: 20,
      color: '#8b5cf6'
    }, {
      label: 'Facebook',
      value: 15,
      color: '#06b6d4'
    }, {
      label: 'WholeCell',
      value: 5,
      color: '#ec4899'
    }],
    conditionComparison: [{
      category: 'Trade-In Value',
      values: [{
        label: 'A-Grade',
        value: 400,
        color: '#22c55e'
      }, {
        label: 'B-Grade',
        value: 320,
        color: '#eab308'
      }, {
        label: 'C-Grade',
        value: 240,
        color: '#ef4444'
      }]
    }, {
      category: 'Resale Value',
      values: [{
        label: 'A-Grade',
        value: 480,
        color: '#22c55e'
      }, {
        label: 'B-Grade',
        value: 400,
        color: '#eab308'
      }, {
        label: 'C-Grade',
        value: 320,
        color: '#ef4444'
      }]
    }]
  },
  samsungs22: {
    name: 'Samsung S22',
    currentPrice: 420,
    priceTrend: -7.8,
    demand: 'Medium',
    priceHistory: [{
      date: 'Jan',
      value: 520
    }, {
      date: 'Feb',
      value: 510
    }, {
      date: 'Mar',
      value: 495
    }, {
      date: 'Apr',
      value: 480
    }, {
      date: 'May',
      value: 460
    }, {
      date: 'Jun',
      value: 440
    }, {
      date: 'Jul',
      value: 420
    }],
    marketplaceData: [{
      label: 'eBay',
      value: 430
    }, {
      label: 'Amazon',
      value: 440
    }, {
      label: 'Swappa',
      value: 410
    }, {
      label: 'Facebook',
      value: 380
    }, {
      label: 'WholeCell',
      value: 450
    }],
    conditionPriceData: [{
      label: 'New',
      value: 520
    }, {
      label: 'A-Grade',
      value: 460
    }, {
      label: 'B-Grade',
      value: 380
    }, {
      label: 'C-Grade',
      value: 300
    }, {
      label: 'Parts',
      value: 180
    }],
    regionalData: [{
      region: 'NYC',
      value: 430
    }, {
      region: 'LA',
      value: 440
    }, {
      region: 'Chicago',
      value: 410
    }, {
      region: 'Houston',
      value: 400
    }, {
      region: 'Miami',
      value: 420
    }, {
      region: 'Seattle',
      value: 430
    }, {
      region: 'Boston',
      value: 425
    }, {
      region: 'Denver',
      value: 415
    }, {
      region: 'Atlanta',
      value: 405
    }],
    marketShare: [{
      label: 'eBay',
      value: 30,
      color: '#3b82f6'
    }, {
      label: 'Amazon',
      value: 20,
      color: '#f97316'
    }, {
      label: 'Swappa',
      value: 15,
      color: '#8b5cf6'
    }, {
      label: 'Facebook',
      value: 25,
      color: '#06b6d4'
    }, {
      label: 'WholeCell',
      value: 10,
      color: '#ec4899'
    }],
    conditionComparison: [{
      category: 'Trade-In Value',
      values: [{
        label: 'A-Grade',
        value: 380,
        color: '#22c55e'
      }, {
        label: 'B-Grade',
        value: 300,
        color: '#eab308'
      }, {
        label: 'C-Grade',
        value: 220,
        color: '#ef4444'
      }]
    }, {
      category: 'Resale Value',
      values: [{
        label: 'A-Grade',
        value: 460,
        color: '#22c55e'
      }, {
        label: 'B-Grade',
        value: 380,
        color: '#eab308'
      }, {
        label: 'C-Grade',
        value: 300,
        color: '#ef4444'
      }]
    }]
  },
  pixel6: {
    name: 'Google Pixel 6',
    currentPrice: 320,
    priceTrend: -3.2,
    demand: 'Medium',
    priceHistory: [{
      date: 'Jan',
      value: 400
    }, {
      date: 'Feb',
      value: 390
    }, {
      date: 'Mar',
      value: 380
    }, {
      date: 'Apr',
      value: 360
    }, {
      date: 'May',
      value: 350
    }, {
      date: 'Jun',
      value: 330
    }, {
      date: 'Jul',
      value: 320
    }],
    marketplaceData: [{
      label: 'eBay',
      value: 330
    }, {
      label: 'Amazon',
      value: 340
    }, {
      label: 'Swappa',
      value: 320
    }, {
      label: 'Facebook',
      value: 300
    }, {
      label: 'WholeCell',
      value: 350
    }],
    conditionPriceData: [{
      label: 'New',
      value: 400
    }, {
      label: 'A-Grade',
      value: 350
    }, {
      label: 'B-Grade',
      value: 300
    }, {
      label: 'C-Grade',
      value: 250
    }, {
      label: 'Parts',
      value: 150
    }],
    regionalData: [{
      region: 'NYC',
      value: 330
    }, {
      region: 'LA',
      value: 340
    }, {
      region: 'Chicago',
      value: 320
    }, {
      region: 'Houston',
      value: 310
    }, {
      region: 'Miami',
      value: 325
    }, {
      region: 'Seattle',
      value: 345
    }, {
      region: 'Boston',
      value: 335
    }, {
      region: 'Denver',
      value: 330
    }, {
      region: 'Atlanta',
      value: 315
    }],
    marketShare: [{
      label: 'eBay',
      value: 25,
      color: '#3b82f6'
    }, {
      label: 'Amazon',
      value: 30,
      color: '#f97316'
    }, {
      label: 'Swappa',
      value: 25,
      color: '#8b5cf6'
    }, {
      label: 'Facebook',
      value: 15,
      color: '#06b6d4'
    }, {
      label: 'WholeCell',
      value: 5,
      color: '#ec4899'
    }],
    conditionComparison: [{
      category: 'Trade-In Value',
      values: [{
        label: 'A-Grade',
        value: 300,
        color: '#22c55e'
      }, {
        label: 'B-Grade',
        value: 250,
        color: '#eab308'
      }, {
        label: 'C-Grade',
        value: 200,
        color: '#ef4444'
      }]
    }, {
      category: 'Resale Value',
      values: [{
        label: 'A-Grade',
        value: 350,
        color: '#22c55e'
      }, {
        label: 'B-Grade',
        value: 300,
        color: '#eab308'
      }, {
        label: 'C-Grade',
        value: 250,
        color: '#ef4444'
      }]
    }]
  },
  iphone12: {
    name: 'iPhone 12',
    currentPrice: 380,
    priceTrend: -6.5,
    demand: 'High',
    priceHistory: [{
      date: 'Jan',
      value: 450
    }, {
      date: 'Feb',
      value: 440
    }, {
      date: 'Mar',
      value: 430
    }, {
      date: 'Apr',
      value: 420
    }, {
      date: 'May',
      value: 410
    }, {
      date: 'Jun',
      value: 390
    }, {
      date: 'Jul',
      value: 380
    }],
    marketplaceData: [{
      label: 'eBay',
      value: 390
    }, {
      label: 'Amazon',
      value: 400
    }, {
      label: 'Swappa',
      value: 380
    }, {
      label: 'Facebook',
      value: 360
    }, {
      label: 'WholeCell',
      value: 410
    }],
    conditionPriceData: [{
      label: 'New',
      value: 450
    }, {
      label: 'A-Grade',
      value: 400
    }, {
      label: 'B-Grade',
      value: 350
    }, {
      label: 'C-Grade',
      value: 280
    }, {
      label: 'Parts',
      value: 180
    }],
    regionalData: [{
      region: 'NYC',
      value: 330
    }, {
      region: 'LA',
      value: 340
    }, {
      region: 'Chicago',
      value: 320
    }, {
      region: 'Houston',
      value: 310
    }, {
      region: 'Miami',
      value: 325
    }, {
      region: 'Seattle',
      value: 345
    }, {
      region: 'Boston',
      value: 335
    }, {
      region: 'Denver',
      value: 330
    }, {
      region: 'Atlanta',
      value: 315
    }],
    marketShare: [{
      label: 'eBay',
      value: 40,
      color: '#3b82f6'
    }, {
      label: 'Amazon',
      value: 20,
      color: '#f97316'
    }, {
      label: 'Swappa',
      value: 15,
      color: '#8b5cf6'
    }, {
      label: 'Facebook',
      value: 20,
      color: '#06b6d4'
    }, {
      label: 'WholeCell',
      value: 5,
      color: '#ec4899'
    }],
    conditionComparison: [{
      category: 'Trade-In Value',
      values: [{
        label: 'A-Grade',
        value: 350,
        color: '#22c55e'
      }, {
        label: 'B-Grade',
        value: 300,
        color: '#eab308'
      }, {
        label: 'C-Grade',
        value: 230,
        color: '#ef4444'
      }]
    }, {
      category: 'Resale Value',
      values: [{
        label: 'A-Grade',
        value: 400,
        color: '#22c55e'
      }, {
        label: 'B-Grade',
        value: 350,
        color: '#eab308'
      }, {
        label: 'C-Grade',
        value: 280,
        color: '#ef4444'
      }]
    }]
  }
};
const topTrendingPhones = [{
  id: 1,
  name: 'iPhone 13 Pro Max',
  avgPrice: '$849',
  trend: '+2.3%',
  isPositive: true,
  demand: 'High'
}, {
  id: 2,
  name: 'Samsung S22 Ultra',
  avgPrice: '$699',
  trend: '-1.5%',
  isPositive: false,
  demand: 'Medium'
}, {
  id: 3,
  name: 'Google Pixel 6',
  avgPrice: '$389',
  trend: '+3.1%',
  isPositive: true,
  demand: 'High'
}, {
  id: 4,
  name: 'iPhone 12',
  avgPrice: '$449',
  trend: '-0.7%',
  isPositive: false,
  demand: 'Medium'
}, {
  id: 5,
  name: 'OnePlus 10 Pro',
  avgPrice: '$529',
  trend: '+1.2%',
  isPositive: true,
  demand: 'Low'
}];
const MarketAnalysis = () => {
  const [selectedDevice, setSelectedDevice] = useState<string>('iphone13');
  const [timeRange, setTimeRange] = useState<string>('6m');
  const deviceData = deviceDataMap[selectedDevice];
  const getDeviceInsights = (deviceId: string, deviceData: DeviceData): AIInsight[] => {
    switch (deviceId) {
      case 'iphone13':
        return [{
          title: 'Optimal Selling Window Closing',
          content: 'iPhone 13 prices have dropped 5.3% in the last 30 days, indicating an accelerating depreciation. Consider selling inventory within the next 4-6 weeks to maximize returns.',
          type: 'warning',
          confidence: 92
        }, {
          title: 'Regional Arbitrage Opportunity',
          content: 'NYC and Boston markets are paying premium prices ($490 and $485) compared to Denver ($440). Consider sourcing from lower-priced regions and selling to higher-priced regions for a 10-12% margin opportunity.',
          type: 'opportunity',
          confidence: 87
        }, {
          title: 'Condition Grade Sweet Spot',
          content: "B-Grade units offer the best ROI currently. They're selling at only 17% less than A-Grade but cost 27% less to acquire. Focus acquisition efforts on good B-Grade units.",
          type: 'action',
          confidence: 89
        }];
      case 'samsungs22':
        return [{
          title: 'Rapid Value Decline',
          content: 'S22 is experiencing a faster-than-average price decline (-7.8%) as the market anticipates the S23 launch. Consider reducing inventory or offering bundle promotions to maintain margins.',
          type: 'warning',
          confidence: 94
        }, {
          title: 'Facebook Marketplace Opportunity',
          content: 'Facebook Marketplace has 25% market share but prices are 13% below average. This platform may offer better acquisition opportunities than resale channels.',
          type: 'opportunity',
          confidence: 85
        }, {
          title: 'LA Market Premium',
          content: 'LA shows highest regional pricing at $440, which is 10% above the national average. Prioritize inventory allocation to this region.',
          type: 'action',
          confidence: 88
        }];
      case 'pixel6':
        return [{
          title: 'Stable Value Retention',
          content: 'Pixel 6 is showing the slowest depreciation rate (-3.2%) among comparable devices, suggesting strong brand loyalty and market demand. Good long-term inventory investment.',
          type: 'opportunity',
          confidence: 83
        }, {
          title: 'Amazon Pricing Anomaly',
          content: 'Amazon prices are 6.3% higher than market average, but volume is also higher. This indicates a trusted seller advantage that may be worth pursuing.',
          type: 'neutral',
          confidence: 79
        }, {
          title: 'Seattle Market Specialization',
          content: "Seattle shows a 7.8% price premium for Pixel devices, likely due to Google's presence in the area. Consider targeted marketing in this region.",
          type: 'action',
          confidence: 86
        }];
      case 'iphone12':
        return [{
          title: 'Approaching Value Floor',
          content: "iPhone 12 price decline (-6.5%) is slowing compared to previous months (-8.2%), suggesting it's approaching its value floor. Good time to acquire inventory that will maintain stable value.",
          type: 'opportunity',
          confidence: 90
        }, {
          title: 'eBay Dominance',
          content: 'eBay commands 40% market share for iPhone 12 trades, significantly higher than other devices. Optimize listings on this platform for maximum visibility.',
          type: 'action',
          confidence: 91
        }, {
          title: 'A-Grade Price Premium',
          content: 'A-Grade units command a 14.3% premium over B-Grade, higher than the typical 10% spread. Focus on quality when acquiring iPhone 12 units.',
          type: 'neutral',
          confidence: 84
        }];
      default:
        return [{
          title: 'Market Trend Analysis',
          content: 'This device is showing typical depreciation patterns. Consider standard inventory management practices.',
          type: 'neutral',
          confidence: 75
        }];
    }
  };
  const deviceInsights = getDeviceInsights(selectedDevice, deviceData);
  const marketInsights: AIInsight[] = [{
    title: 'iPhone Dominates High-Demand Segment',
    content: 'iPhones represent 65% of the "High" demand category devices, suggesting better liquidity and faster turnover than Android alternatives.',
    type: 'neutral',
    confidence: 93
  }, {
    title: 'Trade-In Value Gap Widening',
    content: 'The gap between trade-in and resale values is widening across all devices, averaging 22% for A-grade units. This indicates improving margin opportunities.',
    type: 'opportunity',
    confidence: 88
  }, {
    title: 'Market Volatility Alert',
    content: 'Recent supply chain disruptions and upcoming product launches are creating higher-than-normal price volatility. Consider shorter holding periods for inventory.',
    type: 'warning',
    confidence: 86
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Market Analysis</h1>
        <div className="flex space-x-2">
          <Button variant="outline">
            <FilterIcon className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button variant="outline">
            <DownloadIcon className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:items-center">
          <div className="relative w-full sm:w-64">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input type="text" placeholder="Search devices..." className="w-full pl-10 pr-4 py-2 rounded-md border bg-background text-sm" />
          </div>
          <Tabs defaultValue="iphone13" value={selectedDevice} onValueChange={setSelectedDevice} className="w-full sm:w-auto">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full sm:w-auto">
              <TabsTrigger value="iphone13">iPhone 13</TabsTrigger>
              <TabsTrigger value="samsungs22">S22</TabsTrigger>
              <TabsTrigger value="pixel6">Pixel 6</TabsTrigger>
              <TabsTrigger value="iphone12">iPhone 12</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Time Range:</span>
            <select className="border rounded-md bg-background p-1 text-sm" value={timeRange} onChange={e => setTimeRange(e.target.value)}>
              <option value="1m">1 Month</option>
              <option value="3m">3 Months</option>
              <option value="6m">6 Months</option>
              <option value="1y">1 Year</option>
            </select>
          </div>
        </div>
      </Card>
      <InsightsSection deviceInsights={deviceInsights} marketInsights={marketInsights} deviceName={deviceData.name} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Current Avg. Price</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold">
                ${deviceData.currentPrice}
              </span>
              <span className={`text-sm font-medium flex items-center ${deviceData.priceTrend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {deviceData.priceTrend >= 0 ? <TrendingUpIcon className="h-4 w-4 mr-1" /> : <TrendingDownIcon className="h-4 w-4 mr-1" />}
                {deviceData.priceTrend >= 0 ? '+' : ''}
                {deviceData.priceTrend}% (30d)
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Market Demand</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold">{deviceData.demand}</span>
              <span className="text-sm font-medium flex items-center text-green-500">
                <TrendingUpIcon className="h-4 w-4 mr-1" />
                +12% (30d)
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Trade Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold">1,234</span>
              <span className="text-sm font-medium flex items-center text-green-500">
                <TrendingUpIcon className="h-4 w-4 mr-1" />
                +8.7% (30d)
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Price History</CardTitle>
                <CardDescription>Last 6 months trend</CardDescription>
              </div>
              <BarChart3Icon className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <RechartsLineChart data={deviceData.priceHistory} height={250} color="#3b82f6" gradient={true} showGrid={true} yAxisFormatter={value => `$${value}`} tooltipFormatter={value => [`$${value}`, 'Price']} dataKey="value" />
            <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
              <div>
                <span className="font-medium">6-month change: </span>
                <span className={deviceData.priceTrend >= 0 ? 'text-green-500' : 'text-red-500'}>
                  {deviceData.priceTrend >= 0 ? '+' : ''}
                  {deviceData.priceTrend}%
                </span>
              </div>
              <div>
                <span className="font-medium">Highest: </span>$
                {Math.max(...deviceData.priceHistory.map(item => item.value))}
              </div>
              <div>
                <span className="font-medium">Lowest: </span>$
                {Math.min(...deviceData.priceHistory.map(item => item.value))}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Marketplace Comparison</CardTitle>
                <CardDescription>Average price by marketplace</CardDescription>
              </div>
              <ShoppingBagIcon className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <RechartsBarChart data={deviceData.marketplaceData} height={250} barColor="#8b5cf6" yAxisFormatter={value => `$${value}`} tooltipFormatter={value => [`$${value}`, 'Price']} />
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-end">
        <AIInsightCard insights={marketInsights} title="Market-Wide Insights" compact={true} maxInitialInsights={2} className="ml-auto" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Regional Price Map</CardTitle>
                <CardDescription>Average prices by location</CardDescription>
              </div>
              <MapPinIcon className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <LeafletRegionalMap data={deviceData.regionalData} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Marketplace Distribution</CardTitle>
                <CardDescription>Market share by platform</CardDescription>
              </div>
              <PieChartIcon className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="flex justify-center">
            <RechartsPieChart data={deviceData.marketShare} height={250} donut={true} innerRadius={60} outerRadius={100} tooltipFormatter={(value, name) => [`${value}%`, name]} />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Condition vs. Value Analysis</CardTitle>
              <CardDescription>
                How device condition affects trade-in and resale values
              </CardDescription>
            </div>
            <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <RechartsComposedChart data={deviceData.conditionComparison} height={250} />
        </CardContent>
        <CardFooter className="border-t">
          <div className="text-sm text-muted-foreground">
            Data sourced from 5,000+ recent transactions across major
            marketplaces
          </div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Top Trending Devices</CardTitle>
              <CardDescription>
                Phones with significant market movements
              </CardDescription>
            </div>
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
                    Avg. Price
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    30-Day Trend
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Demand
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {topTrendingPhones.map(phone => <tr key={phone.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4 font-medium">{phone.name}</td>
                    <td className="py-3 px-4">{phone.avgPrice}</td>
                    <td className="py-3 px-4">
                      <span className={`flex items-center ${phone.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                        {phone.isPositive ? <TrendingUpIcon className="mr-1 h-4 w-4" /> : <TrendingDownIcon className="mr-1 h-4 w-4" />}
                        {phone.trend}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={phone.demand === 'High' ? 'success' : phone.demand === 'Medium' ? 'warning' : 'default'}>
                        {phone.demand}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        View Details <ArrowRightIcon className="ml-1 h-3 w-3" />
                      </Button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default MarketAnalysis;