import React from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertTriangle,
  CheckCircle,
  Info,
  Shield,
  User,
  FileText,
  CreditCard,
  Building,
} from "lucide-react";

export default function RiskAssessment() {
  return (
    <NewDashboardLayout>
      <div className="p-6 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Risk Assessment Engine</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Supplier Risk</h2>
            <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-600">85% - Low Risk</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Device Verification</h2>
            <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-500 rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-600">65% - Medium Risk</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Authenticity</h2>
            <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-600">90% - Low Risk</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Transaction Risk</h2>
            <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-500 rounded-full"
                style={{ width: "40%" }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-600">40% - High Risk</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Compliance</h2>
            <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full"
                style={{ width: "95%" }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-600">95% - Low Risk</p>
          </div>
        </div>

        <div className="mt-8 p-4 border rounded-lg bg-gray-50">
          <h2 className="text-lg font-semibold mb-2">Recommendations</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Request additional verification for transaction details</li>
            <li>Verify device IMEI with manufacturer database</li>
            <li>Consider escrow payment for this transaction</li>
          </ul>
        </div>
      </div>
    </NewDashboardLayout>
  );
}
