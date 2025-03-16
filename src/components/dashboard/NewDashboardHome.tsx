import React from "react";
import { Button } from "@/components/ui/button";
import DashboardMetrics from "./DashboardMetrics";
import MarketInsight from "./MarketInsight";
import LiveMarketTicker from "./LiveMarketTicker";
import RevenueChart from "./RevenueChart";
import InventoryChart from "./InventoryChart";
import { PlusIcon } from "lucide-react";

export default function NewDashboardHome() {
  return (
    <div className="space-y-6 p-6 pb-16">
      {/* Market Insight Banner */}
      <MarketInsight />

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <PlusIcon className="h-4 w-4 mr-2" /> New Trade-In
        </Button>
      </div>

      {/* Dashboard Metrics */}
      <DashboardMetrics />

      {/* Live Market Ticker */}
      <LiveMarketTicker />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <InventoryChart />
      </div>
    </div>
  );
}
