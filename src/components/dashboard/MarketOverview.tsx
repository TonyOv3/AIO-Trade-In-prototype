import React from "react";
import MarketMetricsCards from "./MarketMetricsCards";
import USMarketMap from "./USMarketMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, RefreshCw } from "lucide-react";

interface MarketOverviewProps {
  isLoading?: boolean;
  lastUpdated?: string;
  onRefresh?: () => void;
  onExport?: () => void;
}

const MarketOverview = ({
  isLoading = false,
  lastUpdated = "Today at 10:45 AM",
  onRefresh = () => {},
  onExport = () => {},
}: MarketOverviewProps) => {
  return (
    <Card className="w-full bg-white dark:bg-gray-800">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <CardTitle className="text-xl font-bold">Market Overview</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Real-time market data and transaction hotspots
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onRefresh}
              disabled={isLoading}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              {isLoading ? "Refreshing..." : "Refresh"}
            </Button>
            <Button variant="outline" size="sm" onClick={onExport}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="map" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="map">Map View</TabsTrigger>
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
            <TabsTrigger value="combined">Combined</TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="mt-0">
            <div className="w-full h-[400px]">
              <USMarketMap isLoading={isLoading} />
            </div>
          </TabsContent>

          <TabsContent value="metrics" className="mt-0">
            <div className="w-full">
              <MarketMetricsCards />
            </div>
          </TabsContent>

          <TabsContent value="combined" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="h-[400px]">
                <USMarketMap isLoading={isLoading} />
              </div>
              <div>
                <MarketMetricsCards />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-xs text-muted-foreground mt-4 text-right">
          Last updated: {lastUpdated}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketOverview;
