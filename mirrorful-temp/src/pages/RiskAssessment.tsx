import React, { useEffect, useState, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangleIcon, ShieldIcon, CheckCircleIcon, XCircleIcon, AlertCircleIcon, DownloadIcon, CheckIcon, BoxIcon, UserIcon, RefreshCwIcon, FileTextIcon, GlobeIcon, PackageIcon, ClipboardListIcon, TrendingUpIcon, TrendingDownIcon, DollarSignIcon, InfoIcon, BarChart2Icon, ListIcon, ArrowRightIcon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import LineChart from '../components/charts/LineChart';
import RechartsLineChart from '../components/charts/RechartsLineChart';
const RiskScoreDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Sample risk assessment data (in production would come from API)
  const [riskData, setRiskData] = useState({
    overall_risk_score: 47.25,
    risk_category: 'MEDIUM',
    threshold: {
      low: 30,
      medium: 60,
      high: 85
    },
    component_scores: {
      supplier_risk: 38.4,
      device_verification: 52.7,
      device_authenticity: 25.3,
      transaction_risk: 61.5,
      compliance_risk: 42.8
    },
    weighted_scores: {
      supplier_risk: 9.6,
      device_verification: 15.81,
      device_authenticity: 5.06,
      transaction_risk: 9.23,
      compliance_risk: 4.28
    },
    industry_benchmarks: {
      supplier_risk: 25.0,
      device_verification: 40.0,
      device_authenticity: 22.0,
      transaction_risk: 45.0,
      compliance_risk: 30.0
    },
    historical_trends: [{
      date: 'Feb',
      value: 52.8
    }, {
      date: 'Mar',
      value: 54.3
    }, {
      date: 'Apr',
      value: 51.2
    }, {
      date: 'May',
      value: 49.6
    }, {
      date: 'Jun',
      value: 48.1
    }, {
      date: 'Jul',
      value: 47.25
    }],
    recommendation: {
      action: 'ADDITIONAL_VERIFICATION',
      details: 'Proceed with additional verification of highest risk components.',
      required_approvals: ['verification_team'],
      specific_actions: [{
        component: 'transaction_risk',
        action: 'Verify payment method and buyer history',
        severity: 'high'
      }, {
        component: 'device_verification',
        action: 'Run extended diagnostics on device connectivity',
        severity: 'medium'
      }, {
        component: 'compliance_risk',
        action: 'Confirm export eligibility for destination market',
        severity: 'low'
      }]
    },
    financial_impact: {
      estimated_cost: 120,
      potential_loss: 410,
      roi: 241.7
    }
  });

  // Device information
  const deviceInfo = {
    imei: '358673102468313',
    model: 'iPhone 13 Pro',
    storage: '256GB',
    carrier: 'Verizon',
    grade: 'B+',
    supplier: 'TechTrade Solutions',
    market_value: '$450-480',
    blacklist_status: 'Clean',
    activation_lock: 'Off',
    repair_history: 'Screen replacement (OEM)'
  };

  // Supplier information
  const supplierInfo = {
    name: 'TechTrade Solutions',
    relationship_length: '1.8 years',
    transaction_count: 284,
    return_rate: '3.2%',
    average_quality: 'B+',
    payment_terms: 'Net 30',
    location: 'Miami, FL',
    verification_status: 'Verified'
  };

  // Function to determine color based on risk score
  const getRiskColor = (score, type = 'bg') => {
    if (score <= 30) return type === 'bg' ? 'bg-green-100 text-green-800' : 'text-green-600';
    if (score <= 60) return type === 'bg' ? 'bg-yellow-100 text-yellow-800' : 'text-yellow-600';
    if (score <= 85) return type === 'bg' ? 'bg-orange-100 text-orange-800' : 'text-orange-600';
    return type === 'bg' ? 'bg-red-100 text-red-800' : 'text-red-600';
  };

  // Function to determine badge variant based on risk category
  const getRiskBadgeVariant = category => {
    switch (category) {
      case 'LOW':
        return 'success';
      case 'MEDIUM':
        return 'warning';
      case 'HIGH':
        return 'destructive';
      case 'CRITICAL':
        return 'destructive';
      default:
        return 'default';
    }
  };

  // Function to determine action button style
  const getActionStyle = action => {
    switch (action) {
      case 'PROCEED':
        return 'bg-green-500 text-white';
      case 'ADDITIONAL_VERIFICATION':
        return 'bg-yellow-500 text-white';
      case 'MANUAL_REVIEW':
        return 'bg-orange-500 text-white';
      case 'REJECT':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  // Function to get icon for each risk component
  const getRiskComponentIcon = component => {
    switch (component) {
      case 'supplier_risk':
        return <UserIcon className="h-4 w-4" />;
      case 'device_verification':
        return <ShieldIcon className="h-4 w-4" />;
      case 'device_authenticity':
        return <CheckCircleIcon className="h-4 w-4" />;
      case 'transaction_risk':
        return <RefreshCwIcon className="h-4 w-4" />;
      case 'compliance_risk':
        return <FileTextIcon className="h-4 w-4" />;
      default:
        return <AlertCircleIcon className="h-4 w-4" />;
    }
  };

  // Function to get trend indicator
  const getTrendIndicator = (current, benchmark) => {
    if (current > benchmark) {
      return <span className="flex items-center text-red-500 text-xs ml-1">
          <TrendingUpIcon className="h-3 w-3 mr-1" />
          {((current - benchmark) / benchmark * 100).toFixed(1)}%
        </span>;
    } else {
      return <span className="flex items-center text-green-500 text-xs ml-1">
          <TrendingDownIcon className="h-3 w-3 mr-1" />
          {((benchmark - current) / benchmark * 100).toFixed(1)}%
        </span>;
    }
  };

  // Function to get severity badge
  const getSeverityBadge = severity => {
    switch (severity) {
      case 'high':
        return <Badge variant="destructive">High</Badge>;
      case 'medium':
        return <Badge variant="warning">Medium</Badge>;
      case 'low':
        return <Badge variant="success">Low</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Risk Assessment</h1>
          <p className="text-sm text-muted-foreground">
            Device IMEI: {deviceInfo.imei} | Model: {deviceInfo.model} |
            Supplier: {deviceInfo.supplier}
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <DownloadIcon className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Button>
            <CheckIcon className="mr-2 h-4 w-4" />
            Submit for Approval
          </Button>
        </div>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="details">Detailed Analysis</TabsTrigger>
          <TabsTrigger value="actions">Recommended Actions</TabsTrigger>
          <TabsTrigger value="history">History & Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          {/* Overall Risk Score */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Overall Risk Score</CardTitle>
                <CardDescription>
                  Weighted composite risk assessment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-32">
                  <div className={`w-32 h-32 rounded-full flex items-center justify-center border-4 ${getRiskColor(riskData.overall_risk_score)}`}>
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-bold">
                        {riskData.overall_risk_score}
                      </span>
                      <span className="text-xs mt-1">
                        Threshold: {riskData.threshold.low}-
                        {riskData.threshold.medium}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Badge variant={getRiskBadgeVariant(riskData.risk_category)}>
                    {riskData.risk_category}
                  </Badge>
                  <div className="flex items-center justify-center mt-2 text-sm text-muted-foreground">
                    <TrendingDownIcon className="h-4 w-4 mr-1 text-green-500" />
                    <span>-8.2% from 30 days ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Recommendation */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Recommended Action</CardTitle>
                <CardDescription>Based on risk assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className={`p-4 rounded ${getActionStyle(riskData.recommendation.action)}`}>
                  <div className="text-lg font-bold mb-2">
                    {riskData.recommendation.action.replace('_', ' ')}
                  </div>
                  <p className="text-sm">{riskData.recommendation.details}</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium mb-1">
                    Top Priority Action:
                  </p>
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-800 flex items-start">
                    <AlertTriangleIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">
                        {riskData.recommendation.specific_actions[0].action}
                      </p>
                      <div className="flex items-center mt-1">
                        {getSeverityBadge(riskData.recommendation.specific_actions[0].severity)}
                        <span className="text-xs text-muted-foreground ml-2">
                          Transaction Risk:{' '}
                          {riskData.component_scores.transaction_risk}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {riskData.recommendation.required_approvals.length > 0 && <div className="mt-4">
                    <p className="text-sm font-medium mb-1">
                      Required Approvals:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {riskData.recommendation.required_approvals.map(approver => <Badge key={approver} variant="outline" className="capitalize">
                            {approver.replace('_', ' ')}
                          </Badge>)}
                    </div>
                  </div>}
              </CardContent>
            </Card>
            {/* Financial Impact */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Financial Impact</CardTitle>
                <CardDescription>Cost-benefit analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-sm text-muted-foreground">
                    Verification Cost
                  </span>
                  <span className="font-medium">
                    ${riskData.financial_impact.estimated_cost}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-sm text-muted-foreground">
                    Potential Loss Prevention
                  </span>
                  <span className="font-medium text-green-600">
                    ${riskData.financial_impact.potential_loss}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    ROI of Verification
                  </span>
                  <span className="font-medium text-green-600">
                    {riskData.financial_impact.roi}%
                  </span>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start">
                    <InfoIcon className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                    <p className="text-xs">
                      Proceeding with verification steps is recommended based on
                      financial analysis.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Component Risk Scores */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Risk Component Breakdown</CardTitle>
              <CardDescription>
                Individual risk factors and their contributions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {Object.entries(riskData.component_scores).map(([key, value]) => {
                const benchmark = riskData.industry_benchmarks[key];
                return <div key={key} className="flex flex-col items-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 border-2 ${getRiskColor(value)}`}>
                          <div className="flex flex-col items-center">
                            {getRiskComponentIcon(key)}
                            <span className="text-lg font-bold mt-1">
                              {value}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs text-center capitalize">
                          {key.replace('_', ' ')}
                        </span>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>Industry: {benchmark}</span>
                          {getTrendIndicator(value, benchmark)}
                        </div>
                      </div>;
              })}
              </div>
              {/* Risk Score Visualization */}
              <div className="mt-6">
                <p className="text-sm font-medium mb-2">
                  Risk Score Contribution
                </p>
                <div className="h-6 flex rounded-md overflow-hidden">
                  {Object.entries(riskData.weighted_scores).map(([key, value]) => {
                  const score = riskData.component_scores[key];
                  return <div key={key} className={`${getRiskColor(score)}`} style={{
                    width: `${value / riskData.overall_risk_score * 100}%`
                  }} title={`${key.replace('_', ' ')}: ${value} points (${(value / riskData.overall_risk_score * 100).toFixed(1)}%)`} />;
                })}
                </div>
                <div className="flex text-xs text-muted-foreground mt-1 justify-between">
                  <span>0</span>
                  <span>25</span>
                  <span>50</span>
                  <span>75</span>
                  <span>100</span>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Next Steps */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Integration with Workflow</CardTitle>
              <CardDescription>
                Next steps based on risk assessment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center justify-center space-y-2" onClick={() => navigate('/inventory')}>
                  <PackageIcon className="h-8 w-8 mb-2 text-blue-500" />
                  <span className="font-medium">Add to Inventory</span>
                  <span className="text-xs text-muted-foreground text-center">
                    Add this device to your inventory with risk notations
                  </span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center justify-center space-y-2" onClick={() => navigate('/order-management')}>
                  <ClipboardListIcon className="h-8 w-8 mb-2 text-green-500" />
                  <span className="font-medium">Process Order</span>
                  <span className="text-xs text-muted-foreground text-center">
                    Continue with order processing workflow
                  </span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center justify-center space-y-2" onClick={() => navigate('/phone-grading')}>
                  <RefreshCwIcon className="h-8 w-8 mb-2 text-orange-500" />
                  <span className="font-medium">Return to Grading</span>
                  <span className="text-xs text-muted-foreground text-center">
                    Perform additional device verification
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="details" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Device Details */}
            <Card>
              <CardHeader>
                <CardTitle>Device Details</CardTitle>
                <CardDescription>
                  Comprehensive device information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(deviceInfo).map(([key, value]) => <div key={key} className="flex justify-between items-center pb-2 border-b">
                      <span className="text-sm text-muted-foreground capitalize">
                        {key.replace('_', ' ')}:
                      </span>
                      <span className="font-medium">{value}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>
            {/* Supplier Details */}
            <Card>
              <CardHeader>
                <CardTitle>Supplier Profile</CardTitle>
                <CardDescription>Supplier risk assessment data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(supplierInfo).map(([key, value]) => <div key={key} className="flex justify-between items-center pb-2 border-b">
                      <span className="text-sm text-muted-foreground capitalize">
                        {key.replace('_', ' ')}:
                      </span>
                      <span className="font-medium">{value}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Detailed Risk Components */}
          <Card>
            <CardHeader>
              <CardTitle>Detailed Risk Analysis</CardTitle>
              <CardDescription>
                In-depth assessment of each risk component
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Supplier Risk Details */}
              <div className="p-4 rounded-md border">
                <div className="flex items-center mb-3">
                  <UserIcon className="h-5 w-5 mr-2" />
                  <h3 className="font-medium">
                    Supplier Risk ({riskData.component_scores.supplier_risk})
                  </h3>
                  <Badge className="ml-2" variant={riskData.component_scores.supplier_risk <= 30 ? 'success' : riskData.component_scores.supplier_risk <= 60 ? 'warning' : 'destructive'}>
                    {riskData.component_scores.supplier_risk <= 30 ? 'Low' : riskData.component_scores.supplier_risk <= 60 ? 'Medium' : 'High'}
                  </Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    This supplier has completed 284 transactions with a 3.2%
                    return rate, which is slightly above the industry average of
                    2.8%.
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="p-2 bg-muted rounded-md">
                      <span className="block text-xs text-muted-foreground">
                        Return Rate
                      </span>
                      <span className="font-medium">3.2%</span>
                      <span className="text-xs text-red-500 ml-1">+0.4%</span>
                    </div>
                    <div className="p-2 bg-muted rounded-md">
                      <span className="block text-xs text-muted-foreground">
                        Avg. Quality
                      </span>
                      <span className="font-medium">B+</span>
                      <span className="text-xs text-green-500 ml-1">+0.5</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Transaction Risk Details */}
              <div className="p-4 rounded-md border">
                <div className="flex items-center mb-3">
                  <RefreshCwIcon className="h-5 w-5 mr-2" />
                  <h3 className="font-medium">
                    Transaction Risk (
                    {riskData.component_scores.transaction_risk})
                  </h3>
                  <Badge className="ml-2" variant="destructive">
                    High
                  </Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    The transaction pattern shows unusual characteristics that
                    require additional verification.
                  </p>
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-800">
                    <div className="flex items-start">
                      <AlertTriangleIcon className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">High Risk Flags</p>
                        <ul className="mt-1 space-y-1 list-disc list-inside text-xs text-muted-foreground">
                          <li>Unusual payment method for transaction size</li>
                          <li>Buyer location differs from shipping address</li>
                          <li>
                            Rapid transaction request (less than 24 hours)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Device Verification Risk Details */}
              <div className="p-4 rounded-md border">
                <div className="flex items-center mb-3">
                  <ShieldIcon className="h-5 w-5 mr-2" />
                  <h3 className="font-medium">
                    Device Verification (
                    {riskData.component_scores.device_verification})
                  </h3>
                  <Badge className="ml-2" variant="warning">
                    Medium
                  </Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    Device verification shows some potential issues that should
                    be addressed.
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-md border border-green-200 dark:border-green-800">
                      <span className="block text-xs font-medium">
                        Passed Checks
                      </span>
                      <ul className="mt-1 space-y-1 list-disc list-inside text-xs text-muted-foreground">
                        <li>IMEI validation</li>
                        <li>Activation lock</li>
                        <li>Hardware diagnostics</li>
                      </ul>
                    </div>
                    <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-md border border-red-200 dark:border-red-800">
                      <span className="block text-xs font-medium">
                        Failed Checks
                      </span>
                      <ul className="mt-1 space-y-1 list-disc list-inside text-xs text-muted-foreground">
                        <li>Wi-Fi connectivity test</li>
                        <li>Complete battery health verification</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="actions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Actions</CardTitle>
              <CardDescription>
                Steps to mitigate identified risks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {riskData.recommendation.specific_actions.map((action, index) => <div key={index} className="flex items-start p-4 border rounded-md">
                      <div className="flex-shrink-0 mr-3 mt-1">
                        {action.severity === 'high' ? <AlertTriangleIcon className="h-5 w-5 text-red-500" /> : action.severity === 'medium' ? <AlertCircleIcon className="h-5 w-5 text-yellow-500" /> : <InfoIcon className="h-5 w-5 text-blue-500" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="font-medium">{action.action}</h3>
                          <div className="ml-2">
                            {getSeverityBadge(action.severity)}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Related to {action.component.replace('_', ' ')} score
                          of {riskData.component_scores[action.component]}
                        </p>
                        <Button size="sm" className="flex items-center">
                          Take Action{' '}
                          <ArrowRightIcon className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>)}
                <div className="p-4 border rounded-md bg-blue-50 dark:bg-blue-900/20">
                  <h3 className="font-medium flex items-center mb-2">
                    <InfoIcon className="h-5 w-5 mr-2 text-blue-500" />
                    Integration with Workflow
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    This risk assessment should be integrated at the following
                    points in your workflow:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>
                        <strong>Pre-purchase verification:</strong> Validate
                        supplier and device before acquisition
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>
                        <strong>Post-grading assessment:</strong> Confirm device
                        meets compliance requirements
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>
                        <strong>Pre-sale verification:</strong> Validate buyer
                        and transaction details
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Workflow Decision Points</CardTitle>
              <CardDescription>
                Risk assessment integration in your process
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-muted"></div>
                <div className="space-y-6">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Early Acquisition Phase</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Pre-emptive risk assessment to avoid high-risk inventory
                        acquisition
                      </p>
                      <div className="mt-2 flex space-x-2">
                        <Badge variant="outline">Supplier Risk</Badge>
                        <Badge variant="outline">Transaction Risk</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">
                        Between IMEI Verification and Unlocking
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Comprehensive device verification and authenticity
                        validation
                      </p>
                      <div className="mt-2 flex space-x-2">
                        <Badge variant="outline">Device Verification</Badge>
                        <Badge variant="outline">Device Authenticity</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium">Pre-Market Selection</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Ensure devices meet compliance requirements for target
                        markets
                      </p>
                      <div className="mt-2 flex space-x-2">
                        <Badge variant="outline">Compliance Risk</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium">Transaction Security</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Transaction monitoring and fraud prevention
                      </p>
                      <div className="mt-2 flex space-x-2">
                        <Badge variant="outline">Transaction Risk</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Risk Score History</CardTitle>
              <CardDescription>6-month historical trend</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-60">
                <RechartsLineChart data={riskData.historical_trends} height={200} color="#3b82f6" yAxisFormatter={value => `${value}`} tooltipFormatter={value => [`${value}`, 'Risk Score']} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 bg-muted/30 rounded-md">
                  <p className="text-sm font-medium mb-1">
                    Risk Trend (30 days)
                  </p>
                  <div className="flex items-end">
                    <span className="text-xl font-bold text-green-600">
                      -8.2%
                    </span>
                    <span className="text-xs text-muted-foreground ml-2">
                      Decreasing risk
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-muted/30 rounded-md">
                  <p className="text-sm font-medium mb-1">
                    Highest Risk Factor
                  </p>
                  <div className="flex items-end">
                    <span className="text-xl font-bold text-orange-600">
                      Transaction Risk
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-muted/30 rounded-md">
                  <p className="text-sm font-medium mb-1">Similar Devices</p>
                  <div className="flex items-end">
                    <span className="text-xl font-bold">42.1</span>
                    <span className="text-xs text-muted-foreground ml-2">
                      Avg. risk score
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Risk Assessment Log</CardTitle>
              <CardDescription>
                Previous assessments and actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left py-2 px-4 font-medium text-muted-foreground">
                          Date
                        </th>
                        <th className="text-left py-2 px-4 font-medium text-muted-foreground">
                          Score
                        </th>
                        <th className="text-left py-2 px-4 font-medium text-muted-foreground">
                          Category
                        </th>
                        <th className="text-left py-2 px-4 font-medium text-muted-foreground">
                          Action Taken
                        </th>
                        <th className="text-left py-2 px-4 font-medium text-muted-foreground">
                          User
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="py-3 px-4">Jul 15, 2023</td>
                        <td className="py-3 px-4">47.25</td>
                        <td className="py-3 px-4">
                          <Badge variant="warning">MEDIUM</Badge>
                        </td>
                        <td className="py-3 px-4">Additional Verification</td>
                        <td className="py-3 px-4">John Doe</td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-3 px-4">Jun 10, 2023</td>
                        <td className="py-3 px-4">48.10</td>
                        <td className="py-3 px-4">
                          <Badge variant="warning">MEDIUM</Badge>
                        </td>
                        <td className="py-3 px-4">Additional Verification</td>
                        <td className="py-3 px-4">Sarah Chen</td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-3 px-4">May 22, 2023</td>
                        <td className="py-3 px-4">49.60</td>
                        <td className="py-3 px-4">
                          <Badge variant="warning">MEDIUM</Badge>
                        </td>
                        <td className="py-3 px-4">Additional Verification</td>
                        <td className="py-3 px-4">John Doe</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>;
};
export default RiskScoreDashboard;