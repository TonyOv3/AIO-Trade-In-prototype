import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MarketInsightProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
}

const MarketInsight = ({
  title = "Daily Market Insight",
  message = "iPhone 13 prices have stabilized after 3 weeks of decline. Good time to restock inventory.",
  icon = <Activity className="h-5 w-5 text-blue-500" />,
}: MarketInsightProps) => {
  return (
    <Card className="w-full bg-blue-50 border-blue-100">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white rounded-full">{icon}</div>
            <div>
              <h3 className="font-medium text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600">{message}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-blue-600">
            View Details <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketInsight;
