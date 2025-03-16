import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Users,
  TrendingUp,
  Clock,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

interface SyndicateProps {
  syndicates?: {
    id: string;
    name: string;
    status: "active" | "pending" | "completed" | "at-risk";
    progress: number;
    target: number;
    current: number;
    contributors: number;
    deadline: string;
    deviceType: string;
  }[];
}

const SyndicatePreview = ({
  syndicates = [
    {
      id: "syn-1",
      name: "iPhone 13 Pro Bulk Buy",
      status: "active",
      progress: 68,
      target: 50000,
      current: 34000,
      contributors: 12,
      deadline: "2023-12-15",
      deviceType: "iPhone 13 Pro",
    },
    {
      id: "syn-2",
      name: "Samsung S22 Collection",
      status: "at-risk",
      progress: 42,
      target: 35000,
      current: 14700,
      contributors: 8,
      deadline: "2023-12-10",
      deviceType: "Samsung S22",
    },
    {
      id: "syn-3",
      name: "Pixel 6 Pro Wholesale",
      status: "pending",
      progress: 12,
      target: 25000,
      current: 3000,
      contributors: 4,
      deadline: "2023-12-30",
      deviceType: "Pixel 6 Pro",
    },
  ],
}: SyndicateProps) => {
  // Function to get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "pending":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "completed":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "at-risk":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <Card className="w-full h-full bg-white dark:bg-gray-950 shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-semibold">
            Active Syndicates
          </CardTitle>
          <Button variant="ghost" size="sm" className="text-sm">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <CardDescription>
          Group buying opportunities and progress
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {syndicates.slice(0, 3).map((syndicate) => (
            <div
              key={syndicate.id}
              className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-sm">{syndicate.name}</h3>
                  <div className="flex items-center mt-1 space-x-2">
                    <Badge className={getStatusColor(syndicate.status)}>
                      {syndicate.status.charAt(0).toUpperCase() +
                        syndicate.status.slice(1)}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {syndicate.deviceType}
                    </span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-xs h-8">
                  Contribute
                </Button>
              </div>

              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>${syndicate.current.toLocaleString()}</span>
                  <span>${syndicate.target.toLocaleString()}</span>
                </div>
                <Progress value={syndicate.progress} className="h-2" />
              </div>

              <div className="grid grid-cols-3 gap-2 mt-3 text-xs text-gray-500">
                <div className="flex items-center">
                  <Users className="h-3 w-3 mr-1" />
                  <span>{syndicate.contributors} Contributors</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>{syndicate.progress}% Complete</span>
                </div>
                <div className="flex items-center">
                  {syndicate.status === "at-risk" ? (
                    <>
                      <AlertCircle className="h-3 w-3 mr-1 text-red-500" />
                      <span className="text-red-500">At Risk</span>
                    </>
                  ) : (
                    <>
                      <Clock className="h-3 w-3 mr-1" />
                      <span>
                        Ends {new Date(syndicate.deadline).toLocaleDateString()}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SyndicatePreview;
