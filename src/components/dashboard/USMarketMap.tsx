import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon, ZoomInIcon, ZoomOutIcon, RefreshCwIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MarketHotspot {
  id: string;
  state: string;
  city: string;
  lat: number;
  lng: number;
  transactionVolume: number;
  avgPrice: number;
  trend: "up" | "down" | "stable";
}

interface USMarketMapProps {
  hotspots?: MarketHotspot[];
  onRegionClick?: (state: string) => void;
  isLoading?: boolean;
}

const USMarketMap = ({
  hotspots = [
    {
      id: "1",
      state: "CA",
      city: "Los Angeles",
      lat: 34.0522,
      lng: -118.2437,
      transactionVolume: 1250,
      avgPrice: 425,
      trend: "up" as const,
    },
    {
      id: "2",
      state: "NY",
      city: "New York",
      lat: 40.7128,
      lng: -74.006,
      transactionVolume: 980,
      avgPrice: 450,
      trend: "stable" as const,
    },
    {
      id: "3",
      state: "TX",
      city: "Austin",
      lat: 30.2672,
      lng: -97.7431,
      transactionVolume: 750,
      avgPrice: 380,
      trend: "up" as const,
    },
    {
      id: "4",
      state: "IL",
      city: "Chicago",
      lat: 41.8781,
      lng: -87.6298,
      transactionVolume: 620,
      avgPrice: 390,
      trend: "down" as const,
    },
    {
      id: "5",
      state: "FL",
      city: "Miami",
      lat: 25.7617,
      lng: -80.1918,
      transactionVolume: 840,
      avgPrice: 410,
      trend: "up" as const,
    },
  ],
  onRegionClick = () => {},
  isLoading = false,
}: USMarketMapProps) => {
  const [zoom, setZoom] = useState(4);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  // Simulate map interaction
  const handleStateClick = (state: string) => {
    setSelectedState(state);
    onRegionClick(state);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 1, 8));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 1, 3));
  };

  const getTrendColor = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up":
        return "text-green-500";
      case "down":
        return "text-red-500";
      case "stable":
        return "text-amber-500";
      default:
        return "";
    }
  };

  const getTrendIcon = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up":
        return "↑";
      case "down":
        return "↓";
      case "stable":
        return "→";
      default:
        return "";
    }
  };

  return (
    <Card className="w-full h-full bg-white dark:bg-gray-800 overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold">
            US Market Activity
          </CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={handleZoomIn}>
              <ZoomInIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={handleZoomOut}>
              <ZoomOutIcon className="h-4 w-4" />
            </Button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    <InfoIcon className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Map shows transaction hotspots across the US</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="flex space-x-2 mt-1">
          <Badge variant="outline">Zoom: {zoom}x</Badge>
          {selectedState && (
            <Badge variant="secondary">Selected: {selectedState}</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center justify-center h-[300px]">
            <RefreshCwIcon className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="relative h-[300px] bg-slate-100 dark:bg-slate-900 rounded-md overflow-hidden">
            {/* This would be replaced with an actual map component like Leaflet */}
            <div className="absolute inset-0 p-4">
              <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 h-full rounded-md flex items-center justify-center">
                <p className="text-muted-foreground text-sm">
                  Interactive US Map (Leaflet) would render here
                </p>
              </div>

              {/* Simulated hotspots */}
              {hotspots.map((hotspot) => (
                <TooltipProvider key={hotspot.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className="absolute cursor-pointer"
                        style={{
                          // These positions are just for demonstration
                          left: `${((hotspot.lng + 125) / 250) * 100}%`,
                          top: `${((hotspot.lat + 50) / 100) * 100}%`,
                        }}
                        onClick={() => handleStateClick(hotspot.state)}
                      >
                        <div
                          className={`h-4 w-4 rounded-full bg-primary animate-pulse`}
                          style={{
                            opacity: 0.7,
                            transform: "translate(-50%, -50%)",
                          }}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="space-y-1">
                        <p className="font-medium">
                          {hotspot.city}, {hotspot.state}
                        </p>
                        <div className="text-xs">
                          <p>Volume: {hotspot.transactionVolume} units</p>
                          <p>Avg Price: ${hotspot.avgPrice}</p>
                          <p className={getTrendColor(hotspot.trend)}>
                            Trend: {getTrendIcon(hotspot.trend)}{" "}
                            {hotspot.trend.charAt(0).toUpperCase() +
                              hotspot.trend.slice(1)}
                          </p>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        )}
        <div className="flex justify-between items-center mt-3 text-xs text-muted-foreground">
          <div>Data updated: Today at 9:45 AM</div>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
              <span>High Volume</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-amber-500 mr-1"></div>
              <span>Medium Volume</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-red-500 mr-1"></div>
              <span>Low Volume</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default USMarketMap;
