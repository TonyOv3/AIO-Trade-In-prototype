import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface MarketItem {
  marketplace: string;
  grade: string;
  device: string;
  price: number;
  change: number;
}

interface LiveMarketTickerProps {
  items?: MarketItem[];
  title?: string;
  subtitle?: string;
}

const LiveMarketTicker = ({
  items = [
    {
      marketplace: "Swappa",
      grade: "A Grade",
      device: "Google Pixel 6",
      price: 389,
      change: 1.3,
    },
    {
      marketplace: "WholeCell",
      grade: "B Grade",
      device: "iPhone 12",
      price: 449,
      change: -1.7,
    },
    {
      marketplace: "eBay",
      grade: "A Grade",
      device: "iPhone 13 Pro Max",
      price: 849,
      change: 1.4,
    },
    {
      marketplace: "Facebook",
      grade: "B Grade",
      device: "Samsung S22 Ultra",
      price: 699,
      change: -2.1,
    },
    {
      marketplace: "Swappa",
      grade: "B Grade",
      device: "Google Pixel 6",
      price: 389,
      change: 0.8,
    },
    {
      marketplace: "eBay",
      grade: "A Grade",
      device: "iPhone 14",
      price: 899,
      change: 2.0,
    },
    {
      marketplace: "Swappa",
      grade: "A Grade",
      device: "Pixel 7 Pro",
      price: 599,
      change: 1.7,
    },
    {
      marketplace: "Facebook",
      grade: "B Grade",
      device: "Galaxy Z Fold",
      price: 1099,
      change: -1.8,
    },
    {
      marketplace: "WholeCell",
      grade: "C Grade",
      device: "iPhone SE",
      price: 299,
      change: -1.6,
    },
  ],
  title = "Live Market Ticker",
  subtitle = "Real-time updates from multiple marketplaces",
}: LiveMarketTickerProps) => {
  const getMarketplaceBadgeColor = (marketplace: string) => {
    switch (marketplace.toLowerCase()) {
      case "swappa":
        return "bg-purple-500 text-white";
      case "wholecell":
        return "bg-pink-500 text-white";
      case "ebay":
        return "bg-blue-500 text-white";
      case "facebook":
        return "bg-blue-600 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  // Create a duplicate set of items for continuous scrolling
  const duplicatedItems = [...items, ...items];

  return (
    <div className="w-full bg-background rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="inline-flex animate-ticker">
          {duplicatedItems.map((item, index) => (
            <Card
              key={index}
              className="p-4 border shadow-sm min-w-[240px] mx-2"
            >
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <Badge
                    className={`${getMarketplaceBadgeColor(item.marketplace)}`}
                  >
                    {item.marketplace}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {item.grade}
                  </span>
                </div>
                <div className="mt-1">
                  <p className="text-sm font-medium truncate">{item.device}</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-lg font-bold">${item.price}</span>
                    <span
                      className={`text-sm ${item.change >= 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      {item.change >= 0 ? "+" : ""}
                      {item.change}%
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveMarketTicker;
