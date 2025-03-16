import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";

interface InventoryChartProps {
  data?: Array<{ name: string; value: number }>;
  title?: string;
  subtitle?: string;
}

const InventoryChart = ({
  data = [
    { name: "iPhone 13", value: 42 },
    { name: "iPhone 12", value: 32 },
    { name: "Pixel 6", value: 28 },
    { name: "S22", value: 18 },
    { name: "Pixel 7", value: 22 },
    { name: "iPhone SE", value: 15 },
  ],
  title = "Inventory Breakdown",
  subtitle = "Phones in stock by model",
}: InventoryChartProps) => {
  return (
    <Card className="w-full h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
          <button className="inline-flex items-center justify-center rounded-md border border-input bg-background p-2 hover:bg-accent hover:text-accent-foreground">
            <BarChart4 className="h-4 w-4" />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                domain={[0, "dataMax + 10"]}
              />
              <RechartsTooltip
                formatter={(value) => [`${value} units`, "Inventory"]}
                labelFormatter={(label) => `${label}`}
              />
              <Bar
                dataKey="value"
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
                barSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default InventoryChart;

function BarChart4({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 3v18h18" />
      <path d="M7 16v-3" />
      <path d="M11 16v-8" />
      <path d="M15 16v-5" />
      <path d="M19 16v-2" />
    </svg>
  );
}
