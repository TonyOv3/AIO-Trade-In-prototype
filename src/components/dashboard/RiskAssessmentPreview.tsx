import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  CheckCircle,
  Info,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShieldQuestion,
  Smartphone,
  User,
  FileCheck,
  DollarSign,
} from "lucide-react";

interface RiskScoreProps {
  label: string;
  score: number;
  icon: React.ReactNode;
}

const RiskScore = ({
  label,
  score,
  icon = <ShieldQuestion className="h-4 w-4" />,
}: RiskScoreProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 80)
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
          <CheckCircle className="h-3 w-3 mr-1" /> Low Risk
        </Badge>
      );
    if (score >= 60)
      return (
        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
          <Info className="h-3 w-3 mr-1" /> Medium Risk
        </Badge>
      );
    return (
      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
        <AlertTriangle className="h-3 w-3 mr-1" /> High Risk
      </Badge>
    );
  };

  return (
    <div className="flex flex-col space-y-1">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {icon}
          <span className="text-sm font-medium">{label}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-bold">{score}</span>
          {getScoreBadge(score)}
        </div>
      </div>
      <Progress value={score} className={`h-2 ${getScoreColor(score)}`} />
    </div>
  );
};

interface RiskAssessmentPreviewProps {
  overallScore?: number;
  supplierScore?: number;
  deviceScore?: number;
  authenticityScore?: number;
  transactionScore?: number;
  complianceScore?: number;
  recentAlerts?: number;
}

const RiskAssessmentPreview = ({
  overallScore = 72,
  supplierScore = 85,
  deviceScore = 78,
  authenticityScore = 65,
  transactionScore = 60,
  complianceScore = 90,
  recentAlerts = 3,
}: RiskAssessmentPreviewProps) => {
  const getOverallRiskLevel = (score: number) => {
    if (score >= 80) return "Low";
    if (score >= 60) return "Medium";
    return "High";
  };

  const getOverallRiskIcon = (score: number) => {
    if (score >= 80) return <ShieldCheck className="h-6 w-6 text-green-500" />;
    if (score >= 60) return <Shield className="h-6 w-6 text-yellow-500" />;
    return <ShieldAlert className="h-6 w-6 text-red-500" />;
  };

  return (
    <Card className="w-full h-full bg-white shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg font-bold">Risk Assessment</CardTitle>
            <CardDescription>Current risk profile overview</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            {getOverallRiskIcon(overallScore)}
            <div className="text-right">
              <div className="text-2xl font-bold">{overallScore}</div>
              <div className="text-xs text-muted-foreground">
                {getOverallRiskLevel(overallScore)} Risk
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <RiskScore
          label="Supplier Risk"
          score={supplierScore}
          icon={<User className="h-4 w-4 text-blue-500" />}
        />
        <RiskScore
          label="Device Verification"
          score={deviceScore}
          icon={<Smartphone className="h-4 w-4 text-purple-500" />}
        />
        <RiskScore
          label="Authenticity"
          score={authenticityScore}
          icon={<FileCheck className="h-4 w-4 text-indigo-500" />}
        />
        <RiskScore
          label="Transaction Risk"
          score={transactionScore}
          icon={<DollarSign className="h-4 w-4 text-orange-500" />}
        />
        <RiskScore
          label="Compliance"
          score={complianceScore}
          icon={<Shield className="h-4 w-4 text-green-500" />}
        />
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <div>
          {recentAlerts > 0 && (
            <Badge variant="destructive" className="mr-2">
              {recentAlerts} New Alerts
            </Badge>
          )}
        </div>
        <Button variant="outline" size="sm">
          View Full Assessment
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RiskAssessmentPreview;
