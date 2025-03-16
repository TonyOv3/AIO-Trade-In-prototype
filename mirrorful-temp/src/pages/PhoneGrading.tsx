import React, { useState, Fragment, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { SmartphoneIcon, CameraIcon, CheckCircleIcon, XCircleIcon, InfoIcon, UploadIcon, ArrowRightIcon, BatteryIcon, MonitorIcon, WifiIcon, BluetoothIcon, RotateCcwIcon, ShieldIcon, AlertTriangleIcon, UserIcon, RefreshCwIcon, FileTextIcon, TrendingUpIcon, TrendingDownIcon, DollarSignIcon, Clock8Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import RechartsLineChart from '../components/charts/RechartsLineChart';
const steps = [{
  id: 1,
  name: 'Device Info'
}, {
  id: 2,
  name: 'Photo Upload'
}, {
  id: 3,
  name: 'AI Analysis'
}, {
  id: 4,
  name: 'Risk Assessment'
}, {
  id: 5,
  name: 'Results'
}];
const PhoneGrading = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [deviceInfo, setDeviceInfo] = useState({
    model: '',
    capacity: '',
    carrier: '',
    imei: ''
  });
  const [photos, setPhotos] = useState<string[]>([]);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [riskAssessmentComplete, setRiskAssessmentComplete] = useState(false);
  const [riskScore, setRiskScore] = useState(47.25);
  const [riskCategory, setRiskCategory] = useState('MEDIUM');
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
  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      if (currentStep === 3) {
        setTimeout(() => {
          setAnalysisComplete(true);
        }, 2000);
      }
      if (currentStep === 4) {
        setTimeout(() => {
          setRiskAssessmentComplete(true);
        }, 2000);
      }
    }
  };
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleDeviceInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setDeviceInfo({
      ...deviceInfo,
      [e.target.name]: e.target.value
    });
  };
  const handleAddPhoto = () => {
    setPhotos([...photos, `https://source.unsplash.com/random/400x300?smartphone&sig=${Math.random()}`]);
  };
  const getRiskColor = (score, type = 'bg') => {
    if (score <= 30) return type === 'bg' ? 'bg-green-100 text-green-800' : 'text-green-600';
    if (score <= 60) return type === 'bg' ? 'bg-yellow-100 text-yellow-800' : 'text-yellow-600';
    if (score <= 85) return type === 'bg' ? 'bg-orange-100 text-orange-800' : 'text-orange-600';
    return type === 'bg' ? 'bg-red-100 text-red-800' : 'text-red-600';
  };
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
        <h1 className="text-2xl font-bold">AI Grading</h1>
        <Button variant="outline">
          <RotateCcwIcon className="mr-2 h-4 w-4" />
          Start New Grading
        </Button>
      </div>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Phone Condition Grading</CardTitle>
              <CardDescription>
                AI-powered device assessment for accurate market value
              </CardDescription>
            </div>
            <SmartphoneIcon className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => <Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step.id < currentStep ? 'bg-primary border-primary text-primary-foreground' : step.id === currentStep ? 'border-primary text-primary' : 'border-muted-foreground text-muted-foreground'}`}>
                    {step.id < currentStep ? <CheckCircleIcon className="h-5 w-5" /> : step.id}
                  </div>
                  <span className={`mt-2 text-sm ${step.id === currentStep ? 'font-medium' : 'text-muted-foreground'}`}>
                    {step.name}
                  </span>
                </div>
                {index < steps.length - 1 && <div className={`flex-1 h-0.5 ${step.id < currentStep ? 'bg-primary' : 'bg-muted'}`} />}
              </Fragment>)}
          </div>
          {currentStep === 1 && <div className="space-y-4">
              <h3 className="text-lg font-medium">Enter Device Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="model" className="text-sm font-medium">
                    Phone Model
                  </label>
                  <select id="model" name="model" className="w-full p-2 rounded-md border border-input" value={deviceInfo.model} onChange={handleDeviceInfoChange}>
                    <option value="">Select Model</option>
                    <option value="iphone13">iPhone 13</option>
                    <option value="iphone13pro">iPhone 13 Pro</option>
                    <option value="iphone13promax">iPhone 13 Pro Max</option>
                    <option value="iphone12">iPhone 12</option>
                    <option value="samsungs22">Samsung Galaxy S22</option>
                    <option value="samsungs22ultra">
                      Samsung Galaxy S22 Ultra
                    </option>
                    <option value="pixel6">Google Pixel 6</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="capacity" className="text-sm font-medium">
                    Storage Capacity
                  </label>
                  <select id="capacity" name="capacity" className="w-full p-2 rounded-md border border-input" value={deviceInfo.capacity} onChange={handleDeviceInfoChange}>
                    <option value="">Select Capacity</option>
                    <option value="64">64 GB</option>
                    <option value="128">128 GB</option>
                    <option value="256">256 GB</option>
                    <option value="512">512 GB</option>
                    <option value="1tb">1 TB</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="carrier" className="text-sm font-medium">
                    Carrier
                  </label>
                  <select id="carrier" name="carrier" className="w-full p-2 rounded-md border border-input" value={deviceInfo.carrier} onChange={handleDeviceInfoChange}>
                    <option value="">Select Carrier</option>
                    <option value="unlocked">Unlocked</option>
                    <option value="att">AT&T</option>
                    <option value="verizon">Verizon</option>
                    <option value="tmobile">T-Mobile</option>
                    <option value="sprint">Sprint</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="imei" className="text-sm font-medium">
                    IMEI Number
                  </label>
                  <input id="imei" name="imei" type="text" className="w-full p-2 rounded-md border border-input" placeholder="Enter IMEI" value={deviceInfo.imei} onChange={handleDeviceInfoChange} />
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <h3 className="text-lg font-medium mb-4">
                  Supplier Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="supplier" className="text-sm font-medium">
                      Supplier Name
                    </label>
                    <select id="supplier" name="supplier" className="w-full p-2 rounded-md border border-input" defaultValue="techTrade">
                      <option value="">Select Supplier</option>
                      <option value="techTrade">TechTrade Solutions</option>
                      <option value="phoneWholesale">
                        Phone Wholesale Inc
                      </option>
                      <option value="mobileSource">Mobile Source LLC</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="transaction_type" className="text-sm font-medium">
                      Transaction Type
                    </label>
                    <select id="transaction_type" name="transaction_type" className="w-full p-2 rounded-md border border-input" defaultValue="wholesale">
                      <option value="wholesale">Wholesale Purchase</option>
                      <option value="consignment">Consignment</option>
                      <option value="trade_in">Trade-In</option>
                      <option value="direct">Direct Purchase</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="purchase_price" className="text-sm font-medium">
                      Purchase Price
                    </label>
                    <input id="purchase_price" name="purchase_price" type="text" className="w-full p-2 rounded-md border border-input" placeholder="Enter price" defaultValue="410" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="payment_method" className="text-sm font-medium">
                      Payment Method
                    </label>
                    <select id="payment_method" name="payment_method" className="w-full p-2 rounded-md border border-input" defaultValue="credit">
                      <option value="credit">Credit (Net 30)</option>
                      <option value="wire">Wire Transfer</option>
                      <option value="check">Check</option>
                      <option value="cash">Cash</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start">
                    <InfoIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">
                        Supplier Profile: TechTrade Solutions
                      </p>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Relationship:
                          </span>
                          <span>1.8 years</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Transactions:
                          </span>
                          <span>284</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Return Rate:
                          </span>
                          <span className="flex items-center">
                            3.2%
                            <span className="text-red-500 ml-1">(+0.4%)</span>
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Avg Quality:
                          </span>
                          <span>B+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {currentStep === 2 && <div className="space-y-4">
              <h3 className="text-lg font-medium">Upload Device Photos</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Take clear photos of your device from all angles for accurate AI
                assessment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((photo, index) => <div key={index} className="relative border rounded-md overflow-hidden h-40">
                    <img src={photo} alt={`Device photo ${index + 1}`} className="w-full h-full object-cover" />
                    <button className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1">
                      <XCircleIcon className="h-4 w-4" />
                    </button>
                  </div>)}
                <button onClick={handleAddPhoto} className="border border-dashed rounded-md h-40 flex flex-col items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                  <CameraIcon className="h-8 w-8 mb-2" />
                  <span className="text-sm font-medium">Add Photo</span>
                </button>
              </div>
              <div className="bg-muted/50 p-4 rounded-md mt-4">
                <div className="flex items-start">
                  <InfoIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">Required photos:</p>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                      <li>Front screen (powered on if possible)</li>
                      <li>Back panel</li>
                      <li>All four sides</li>
                      <li>Close-ups of any damage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>}
          {currentStep === 3 && <div className="space-y-4">
              <h3 className="text-lg font-medium">AI Analysis In Progress</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our AI is analyzing your device photos to determine condition
                and market value.
              </p>
              <div className="space-y-4">
                <div className="bg-muted/30 rounded-md p-6">
                  <div className="flex flex-col items-center justify-center">
                    {!analysisComplete ? <>
                        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p className="text-sm font-medium">
                          Processing Images...
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          This may take a few moments
                        </p>
                      </> : <>
                        <CheckCircleIcon className="h-16 w-16 text-green-500 mb-4" />
                        <p className="text-sm font-medium">
                          Analysis Complete!
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Click "Next" to proceed with risk assessment
                        </p>
                      </>}
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className={`p-4 border rounded-md ${analysisComplete ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'border-muted bg-muted/30'}`}>
                    <div className="flex flex-col items-center text-center">
                      <MonitorIcon className={`h-6 w-6 mb-2 ${analysisComplete ? 'text-green-500' : 'text-muted-foreground'}`} />
                      <span className="text-sm font-medium">Screen Check</span>
                      {analysisComplete && <span className="text-xs text-green-600 dark:text-green-400 mt-1">
                          Passed
                        </span>}
                    </div>
                  </div>
                  <div className={`p-4 border rounded-md ${analysisComplete ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'border-muted bg-muted/30'}`}>
                    <div className="flex flex-col items-center text-center">
                      <BatteryIcon className={`h-6 w-6 mb-2 ${analysisComplete ? 'text-green-500' : 'text-muted-foreground'}`} />
                      <span className="text-sm font-medium">
                        Battery Health
                      </span>
                      {analysisComplete && <span className="text-xs text-green-600 dark:text-green-400 mt-1">
                          89% - Good
                        </span>}
                    </div>
                  </div>
                  <div className={`p-4 border rounded-md ${analysisComplete ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800' : 'border-muted bg-muted/30'}`}>
                    <div className="flex flex-col items-center text-center">
                      <WifiIcon className={`h-6 w-6 mb-2 ${analysisComplete ? 'text-red-500' : 'text-muted-foreground'}`} />
                      <span className="text-sm font-medium">Connectivity</span>
                      {analysisComplete && <span className="text-xs text-red-600 dark:text-red-400 mt-1">
                          Issues Detected
                        </span>}
                    </div>
                  </div>
                  <div className={`p-4 border rounded-md ${analysisComplete ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'border-muted bg-muted/30'}`}>
                    <div className="flex flex-col items-center text-center">
                      <BluetoothIcon className={`h-6 w-6 mb-2 ${analysisComplete ? 'text-green-500' : 'text-muted-foreground'}`} />
                      <span className="text-sm font-medium">Cosmetic</span>
                      {analysisComplete && <span className="text-xs text-green-600 dark:text-green-400 mt-1">
                          Minor Wear
                        </span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {currentStep === 4 && <div className="space-y-4">
              <h3 className="text-lg font-medium">Risk Assessment</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Evaluating potential risks associated with this device before
                proceeding with acquisition.
              </p>
              {!riskAssessmentComplete ? <div className="bg-muted/30 rounded-md p-6">
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-sm font-medium">
                      Analyzing Risk Factors...
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Checking supplier history, device authenticity, and market
                      conditions
                    </p>
                  </div>
                </div> : <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border rounded-md p-4">
                      <h4 className="text-sm font-medium mb-3">
                        Overall Risk Score
                      </h4>
                      <div className="flex items-center justify-center">
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center border-4 ${getRiskColor(riskData.overall_risk_score)}`}>
                          <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold">
                              {riskData.overall_risk_score}
                            </span>
                            <span className="text-xs mt-1">
                              {riskData.risk_category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 text-center">
                        <Badge variant={getRiskBadgeVariant(riskData.risk_category)}>
                          {riskData.risk_category}
                        </Badge>
                      </div>
                    </div>
                    <div className="border rounded-md p-4">
                      <h4 className="text-sm font-medium mb-3">
                        Recommended Action
                      </h4>
                      <div className={`p-3 rounded ${getActionStyle(riskData.recommendation.action)}`}>
                        <div className="text-base font-medium mb-1">
                          {riskData.recommendation.action.replace('_', ' ')}
                        </div>
                        <p className="text-xs">
                          {riskData.recommendation.details}
                        </p>
                      </div>
                      <div className="mt-3">
                        <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-800 flex items-start">
                          <AlertTriangleIcon className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-medium">
                              {riskData.recommendation.specific_actions[0].action}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-md p-4">
                      <h4 className="text-sm font-medium mb-3">
                        Financial Impact
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b">
                          <span className="text-xs text-muted-foreground">
                            Verification Cost
                          </span>
                          <span className="font-medium">
                            ${riskData.financial_impact.estimated_cost}
                          </span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b">
                          <span className="text-xs text-muted-foreground">
                            Potential Loss Prevention
                          </span>
                          <span className="font-medium text-green-600">
                            ${riskData.financial_impact.potential_loss}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">
                            ROI of Verification
                          </span>
                          <span className="font-medium text-green-600">
                            {riskData.financial_impact.roi}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-md p-4">
                    <h4 className="text-sm font-medium mb-3">
                      Risk Component Breakdown
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {Object.entries(riskData.component_scores).map(([key, value]) => {
                  const benchmark = riskData.industry_benchmarks[key];
                  return <div key={key} className="flex flex-col items-center">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 border-2 ${getRiskColor(value)}`}>
                                <div className="flex flex-col items-center">
                                  {getRiskComponentIcon(key)}
                                  <span className="text-xs font-bold mt-1">
                                    {value}
                                  </span>
                                </div>
                              </div>
                              <span className="text-xs text-center capitalize">
                                {key.replace('_', ' ')}
                              </span>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <span>Ind: {benchmark}</span>
                                {getTrendIndicator(value, benchmark)}
                              </div>
                            </div>;
                })}
                    </div>
                    <div className="mt-4">
                      <p className="text-xs font-medium mb-2">
                        Risk Score Contribution
                      </p>
                      <div className="h-4 flex rounded-md overflow-hidden">
                        {Object.entries(riskData.weighted_scores).map(([key, value]) => {
                    const score = riskData.component_scores[key];
                    return <div key={key} className={`${getRiskColor(score)}`} style={{
                      width: `${value / riskData.overall_risk_score * 100}%`
                    }} title={`${key.replace('_', ' ')}: ${value} points (${(value / riskData.overall_risk_score * 100).toFixed(1)}%)`} />;
                  })}
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-md p-4">
                    <h4 className="text-sm font-medium mb-3">
                      Risk Score History
                    </h4>
                    <div className="h-40">
                      <RechartsLineChart data={riskData.historical_trends} height={150} color="#3b82f6" yAxisFormatter={value => `${value}`} tooltipFormatter={value => [`${value}`, 'Risk Score']} />
                    </div>
                  </div>
                  <div className="border rounded-md p-4">
                    <h4 className="text-sm font-medium mb-3">
                      Specific Risk Factors
                    </h4>
                    <div className="space-y-3">
                      {riskData.recommendation.specific_actions.map((action, index) => <div key={index} className="flex items-start p-3 border rounded-md">
                            <div className="flex-shrink-0 mr-3 mt-1">
                              {action.severity === 'high' ? <AlertTriangleIcon className="h-4 w-4 text-red-500" /> : action.severity === 'medium' ? <AlertCircleIcon className="h-4 w-4 text-yellow-500" /> : <InfoIcon className="h-4 w-4 text-blue-500" />}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center mb-1">
                                <h3 className="text-sm font-medium">
                                  {action.action}
                                </h3>
                                <div className="ml-2">
                                  {getSeverityBadge(action.severity)}
                                </div>
                              </div>
                              <p className="text-xs text-muted-foreground">
                                Related to {action.component.replace('_', ' ')}{' '}
                                score of{' '}
                                {riskData.component_scores[action.component]}
                              </p>
                            </div>
                          </div>)}
                    </div>
                  </div>
                </div>}
            </div>}
          {currentStep === 5 && <div className="space-y-6">
              <h3 className="text-lg font-medium">Final Assessment Results</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="border rounded-md overflow-hidden">
                    <div className="bg-muted p-4 border-b">
                      <h4 className="font-medium">Device Assessment</h4>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-sm text-muted-foreground">
                          Overall Grade
                        </span>
                        <span className="text-lg font-bold">B Grade</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-sm text-muted-foreground">
                          Estimated Value
                        </span>
                        <span className="text-lg font-bold">$410 - $450</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-sm text-muted-foreground">
                          Functionality
                        </span>
                        <Badge variant="warning">Minor Issues</Badge>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-sm text-muted-foreground">
                          Cosmetic Condition
                        </span>
                        <Badge variant="success">Good</Badge>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-sm text-muted-foreground">
                          Market Demand
                        </span>
                        <Badge variant="success">High</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          Risk Assessment
                        </span>
                        <Badge variant={getRiskBadgeVariant(riskData.risk_category)}>
                          {riskData.risk_category} (
                          {riskData.overall_risk_score})
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="border rounded-md overflow-hidden">
                    <div className="bg-muted p-4 border-b">
                      <h4 className="font-medium">Issues & Recommendations</h4>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <XCircleIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium">
                              Wi-Fi Connectivity Issues
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Device shows intermittent Wi-Fi connection
                              problems
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <XCircleIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium">
                              Minor Screen Scratches
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Light scratches visible on screen under bright
                              light
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangleIcon className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium">
                              Transaction Risk:{' '}
                              {riskData.component_scores.transaction_risk}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {riskData.recommendation.specific_actions[0].action}
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md border border-blue-200 dark:border-blue-800">
                    <div className="flex items-start">
                      <InfoIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">
                          Acquisition Recommendation
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Based on the condition assessment and risk profile, we
                          recommend proceeding with acquisition at $410 after
                          verifying payment method and buyer history.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-md border border-yellow-200 dark:border-yellow-800 mt-4">
                <div className="flex items-start">
                  <ShieldIcon className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">
                      Additional Verification Required
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {riskData.recommendation.action.replace('_', ' ')}:{' '}
                      {riskData.recommendation.details}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-6">
                <Button variant="outline">
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
                <Button variant="outline" className="flex items-center">
                  <Clock8Icon className="mr-2 h-4 w-4" />
                  Request Approval
                </Button>
                <Button variant="destructive">
                  <XCircleIcon className="mr-2 h-4 w-4" />
                  Reject Device
                </Button>
                <Button>
                  <CheckCircleIcon className="mr-2 h-4 w-4" />
                  Proceed with Acquisition
                </Button>
              </div>
            </div>}
        </CardContent>
        <CardFooter className="border-t flex justify-between">
          <Button variant="outline" onClick={handlePreviousStep} disabled={currentStep === 1}>
            Back
          </Button>
          <Button onClick={handleNextStep} disabled={currentStep === 3 && !analysisComplete || currentStep === 4 && !riskAssessmentComplete || currentStep === steps.length}>
            {currentStep < steps.length ? <>
                Next <ArrowRightIcon className="ml-2 h-4 w-4" />
              </> : 'Finish'}
          </Button>
        </CardFooter>
      </Card>
    </div>;
};
export default PhoneGrading;