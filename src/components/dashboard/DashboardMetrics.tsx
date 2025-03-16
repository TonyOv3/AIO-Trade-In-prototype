import React from "react";
import { Card } from "@/components/ui/card";
import {
  ArrowUpRight,
  ArrowDownRight,
  Package,
  Users,
  DollarSign,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: {
    value: string;
    isPositive: boolean;
  };
  icon: React.ReactNode;
}

interface DashboardMetricsProps {
  metrics?: MetricCardProps[];
}

const DashboardMetrics = ({ metrics }: DashboardMetricsProps) => {
  const defaultMetrics: MetricCardProps[] = [
    {
      title: "Market Value",
      value: "$45,231",
      change: { value: "+20.1%", isPositive: true },
      icon: <DollarSign className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Total Inventory",
      value: "123",
      change: { value: "-2.3%", isPositive: false },
      icon: <Package className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Revenue",
      value: "$12,234",
      change: { value: "+12.4%", isPositive: true },
      icon: <DollarSign className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Active Traders",
      value: "1,234",
      change: { value: "+4.3%", isPositive: true },
      icon: <Users className="h-5 w-5 text-blue-500" />,
    },
  ];

  const displayMetrics = metrics || defaultMetrics;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {displayMetrics.map((metric, index) => (
        <Card key={index} className="p-4 border shadow-sm">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-sm text-muted-foreground">{metric.title}</h3>
              <div className="p-2 bg-blue-50 rounded-full">{metric.icon}</div>
            </div>
            <div className="mt-2">
              <p className="text-2xl font-bold">{metric.value}</p>
              <div
                className={`flex items-center text-sm mt-1 ${metric.change.isPositive ? "text-green-500" : "text-red-500"}`}
              >
                {metric.change.isPositive ? (
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                )}
                {metric.change.value}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default DashboardMetrics;
