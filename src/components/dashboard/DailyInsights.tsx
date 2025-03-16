import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  TrendingUpIcon,
  AlertTriangleIcon,
  PhoneIcon,
  DollarSignIcon,
  PercentIcon,
  BarChart3Icon,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface InsightCardProps {
  title: string;
  value: string;
  change: number;
  trend: "up" | "down" | "neutral";
  icon: React.ReactNode;
  description?: string;
}

const InsightCard = ({
  title = "Metric",
  value = "$0",
  change = 0,
  trend = "neutral",
  icon = <BarChart3Icon className="h-5 w-5" />,
  description = "No additional information available",
}: InsightCardProps) => {
  return (
    <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              {icon}
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {title}
              </p>
              <h3 className="text-2xl font-bold">{value}</h3>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Badge
                    variant={
                      trend === "up"
                        ? "default"
                        : trend === "down"
                          ? "destructive"
                          : "outline"
                    }
                    className="flex items-center space-x-1"
                  >
                    {trend === "up" ? (
                      <ArrowUpIcon className="h-3 w-3" />
                    ) : trend === "down" ? (
                      <ArrowDownIcon className="h-3 w-3" />
                    ) : (
                      <TrendingUpIcon className="h-3 w-3" />
                    )}
                    <span>{Math.abs(change)}%</span>
                  </Badge>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
};

interface DailyInsightsProps {
  date?: string;
  insights?: Array<{
    id: string;
    title: string;
    value: string;
    change: number;
    trend: "up" | "down" | "neutral";
    description: string;
  }>;
}

const DailyInsights = ({
  date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  insights = [
    {
      id: "1",
      title: "Average Buyback Price",
      value: "$342.18",
      change: 4.2,
      trend: "up",
      description:
        "Average buyback price has increased by 4.2% compared to yesterday",
    },
    {
      id: "2",
      title: "Total Transactions",
      value: "1,284",
      change: 2.8,
      trend: "up",
      description: "Transaction volume is up 2.8% from yesterday",
    },
    {
      id: "3",
      title: "Risk Score Average",
      value: "72/100",
      change: 3.5,
      trend: "down",
      description: "Average risk score has improved by 3.5% (lower is better)",
    },
    {
      id: "4",
      title: "Active Syndicates",
      value: "8",
      change: 0,
      trend: "neutral",
      description: "No change in the number of active syndicates",
    },
  ],
}: DailyInsightsProps) => {
  const getIconForInsight = (title: string) => {
    if (
      title.toLowerCase().includes("price") ||
      title.toLowerCase().includes("buyback")
    ) {
      return <DollarSignIcon className="h-5 w-5" />;
    } else if (title.toLowerCase().includes("transaction")) {
      return <BarChart3Icon className="h-5 w-5" />;
    } else if (title.toLowerCase().includes("risk")) {
      return <AlertTriangleIcon className="h-5 w-5" />;
    } else if (title.toLowerCase().includes("syndicate")) {
      return <PhoneIcon className="h-5 w-5" />;
    } else {
      return <PercentIcon className="h-5 w-5" />;
    }
  };

  return (
    <div className="w-full bg-background p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <CardTitle className="text-xl font-bold">Daily Insights</CardTitle>
        <Badge variant="outline" className="text-sm">
          {date}
        </Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map((insight) => (
          <InsightCard
            key={insight.id}
            title={insight.title}
            value={insight.value}
            change={insight.change}
            trend={insight.trend}
            icon={getIconForInsight(insight.title)}
            description={insight.description}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyInsights;
