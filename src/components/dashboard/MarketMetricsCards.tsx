import React from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  BarChart3,
  TrendingUp,
  Activity,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  change: {
    value: string;
    isPositive: boolean;
  };
  icon: React.ReactNode;
  description?: string;
  footer?: string;
}

const MetricCard = ({
  title = "Metric",
  value = "$0",
  change = { value: "0%", isPositive: true },
  icon = <Activity className="h-4 w-4" />,
  description = "Description of this metric",
  footer = "Last updated: Today",
}: MetricCardProps) => {
  return (
    <Card className="bg-white dark:bg-gray-800 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex flex-col space-y-1">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <CardDescription className="text-xs">{description}</CardDescription>
        </div>
        <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div
          className={`flex items-center text-xs mt-1 ${change.isPositive ? "text-green-500" : "text-red-500"}`}
        >
          {change.isPositive ? (
            <ArrowUpRight className="h-3 w-3 mr-1" />
          ) : (
            <ArrowDownRight className="h-3 w-3 mr-1" />
          )}
          {change.value}
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-gray-500 dark:text-gray-400">{footer}</p>
      </CardFooter>
    </Card>
  );
};

interface MarketMetricsCardsProps {
  metrics?: MetricCardProps[];
}

const MarketMetricsCards = ({ metrics }: MarketMetricsCardsProps) => {
  const defaultMetrics: MetricCardProps[] = [
    {
      title: "Total Transactions",
      value: "1,284",
      change: { value: "12.5%", isPositive: true },
      icon: <BarChart3 className="h-4 w-4" />,
      description: "Total transactions this month",
      footer: "Updated 2 hours ago",
    },
    {
      title: "Average Price",
      value: "$342.68",
      change: { value: "4.3%", isPositive: true },
      icon: <DollarSign className="h-4 w-4" />,
      description: "Average device buyback price",
      footer: "Updated 2 hours ago",
    },
    {
      title: "Volume Trend",
      value: "8,942 units",
      change: { value: "2.1%", isPositive: false },
      icon: <TrendingUp className="h-4 w-4" />,
      description: "Monthly transaction volume",
      footer: "Updated 2 hours ago",
    },
    {
      title: "Market Health",
      value: "86/100",
      change: { value: "3.2%", isPositive: true },
      icon: <Activity className="h-4 w-4" />,
      description: "Overall market health score",
      footer: "Updated 2 hours ago",
    },
  ];

  const displayMetrics = metrics || defaultMetrics;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Market Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayMetrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default MarketMetricsCards;
