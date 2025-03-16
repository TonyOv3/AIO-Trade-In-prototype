import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UsersIcon, DollarSignIcon, BoxIcon, GavelIcon, ClockIcon, ArrowLeftIcon, ChevronRightIcon, ShieldIcon, AlertCircleIcon, CheckCircleIcon, InfoIcon, CreditCardIcon, WalletIcon, LockIcon, CalculatorIcon, PercentIcon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
const SyndicateContribution: React.FC = () => {
  const navigate = useNavigate();
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const [contributionAmount, setContributionAmount] = useState('5000');
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [currentStep, setCurrentStep] = useState(1);
  // Mock data for demonstration
  const syndicateData = {
    id: id || 'syn-2023-001',
    name: 'Premium iPhone Collective',
    totalCapital: 90000,
    targetCapital: 100000,
    minimumContribution: 5000,
    status: 'open',
    type: 'auction',
    endDate: '2023-07-25',
    allocation: [{
      type: 'iPhone 13 Pro (256GB)',
      percentage: 40
    }, {
      type: 'iPhone 13 Pro (128GB)',
      percentage: 30
    }, {
      type: 'iPhone 12 Pro Max (256GB)',
      percentage: 20
    }, {
      type: 'iPhone 12 Pro Max (128GB)',
      percentage: 10
    }]
  };
  const formatCurrency = (value: number | string) => {
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(numValue);
  };
  const handleContributionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setContributionAmount(value);
  };
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleSubmit = () => {
    // In a real app, this would submit the payment and contribution to an API
    navigate(`/syndicate-detail/${id}`);
  };
  const calculateSharePercentage = () => {
    const contribution = parseFloat(contributionAmount) || 0;
    const totalAfterContribution = syndicateData.totalCapital + contribution;
    return (contribution / totalAfterContribution * 100).toFixed(2);
  };
  const calculateAllocation = (devicePercentage: number) => {
    const contribution = parseFloat(contributionAmount) || 0;
    const share = contribution / syndicateData.targetCapital;
    return (devicePercentage * share).toFixed(2);
  };
  const calculateFees = () => {
    const contribution = parseFloat(contributionAmount) || 0;
    const platformFee = contribution * 0.025;
    const escrowFee = contribution * 0.01;
    return {
      platformFee,
      escrowFee,
      total: platformFee + escrowFee
    };
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="mr-2" onClick={() => navigate(`/syndicate-detail/${id}`)}>
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Back to Syndicate
          </Button>
          <h1 className="text-2xl font-bold">Contribute to Syndicate</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>
                {currentStep === 1 ? 'Step 1: Contribution Amount' : currentStep === 2 ? 'Step 2: Payment Method' : 'Step 3: Review & Confirm'}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 ? 'Specify how much you want to contribute to this syndicate' : currentStep === 2 ? 'Select your preferred payment method' : 'Review your contribution details and confirm'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {currentStep === 1 && <div className="space-y-6">
                  <div className="bg-muted/30 p-4 rounded-md border flex items-start">
                    <InfoIcon className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">
                        Contribution Information
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your contribution will be held in a secure escrow
                        account until the syndicate reaches its target capital
                        or the end date is reached. You will receive a share of
                        the acquired inventory proportional to your
                        contribution.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="contribution-amount" className="text-sm font-medium">
                        Contribution Amount
                      </label>
                      <div className="mt-1 relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          $
                        </span>
                        <input id="contribution-amount" type="text" className="w-full pl-8 p-3 rounded-md border bg-background text-xl font-bold" value={contributionAmount} onChange={handleContributionChange} />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Minimum contribution:{' '}
                        {formatCurrency(syndicateData.minimumContribution)}
                      </p>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <Button variant="outline" className="p-2 h-auto" onClick={() => setContributionAmount('5000')}>
                        $5,000
                      </Button>
                      <Button variant="outline" className="p-2 h-auto" onClick={() => setContributionAmount('10000')}>
                        $10,000
                      </Button>
                      <Button variant="outline" className="p-2 h-auto" onClick={() => setContributionAmount('25000')}>
                        $25,000
                      </Button>
                      <Button variant="outline" className="p-2 h-auto" onClick={() => setContributionAmount('50000')}>
                        $50,000
                      </Button>
                    </div>
                    {parseFloat(contributionAmount) < syndicateData.minimumContribution && <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-3 rounded-md text-sm flex items-center">
                        <AlertCircleIcon className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                        <span>
                          Contribution must be at least{' '}
                          {formatCurrency(syndicateData.minimumContribution)}
                        </span>
                      </div>}
                  </div>
                </div>}
              {currentStep === 2 && <div className="space-y-6">
                  <div className="bg-muted/30 p-4 rounded-md border flex items-start">
                    <LockIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Secure Payment</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        All payments are processed securely and held in escrow
                        until the syndicate reaches its target.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-sm font-medium">
                      Select Payment Method
                    </label>
                    <div className={`p-4 border rounded-md cursor-pointer transition-all ${paymentMethod === 'credit_card' ? 'border-primary ring-2 ring-primary/20' : 'hover:border-primary/50'}`} onClick={() => setPaymentMethod('credit_card')}>
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                          <CreditCardIcon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">Credit or Debit Card</p>
                          <p className="text-sm text-muted-foreground">
                            Pay with Visa, Mastercard, or American Express
                          </p>
                        </div>
                        <div className="h-5 w-5 rounded-full border flex items-center justify-center">
                          {paymentMethod === 'credit_card' && <div className="h-3 w-3 rounded-full bg-primary"></div>}
                        </div>
                      </div>
                    </div>
                    <div className={`p-4 border rounded-md cursor-pointer transition-all ${paymentMethod === 'bank_transfer' ? 'border-primary ring-2 ring-primary/20' : 'hover:border-primary/50'}`} onClick={() => setPaymentMethod('bank_transfer')}>
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                          <div className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">Bank Transfer (ACH)</p>
                          <p className="text-sm text-muted-foreground">
                            Direct transfer from your bank account
                          </p>
                        </div>
                        <div className="h-5 w-5 rounded-full border flex items-center justify-center">
                          {paymentMethod === 'bank_transfer' && <div className="h-3 w-3 rounded-full bg-primary"></div>}
                        </div>
                      </div>
                    </div>
                    <div className={`p-4 border rounded-md cursor-pointer transition-all ${paymentMethod === 'wire_transfer' ? 'border-primary ring-2 ring-primary/20' : 'hover:border-primary/50'}`} onClick={() => setPaymentMethod('wire_transfer')}>
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                          <WalletIcon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">Wire Transfer</p>
                          <p className="text-sm text-muted-foreground">
                            International wire transfer (may take 1-3 business
                            days)
                          </p>
                        </div>
                        <div className="h-5 w-5 rounded-full border flex items-center justify-center">
                          {paymentMethod === 'wire_transfer' && <div className="h-3 w-3 rounded-full bg-primary"></div>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>}
              {currentStep === 3 && <div className="space-y-6">
                  <div className="bg-muted/30 p-4 rounded-md border flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Ready to Contribute</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Please review your contribution details below and
                        confirm to complete the transaction.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">
                      Contribution Summary
                    </h3>
                    <div className="p-4 border rounded-md space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-sm text-muted-foreground">
                          Syndicate
                        </span>
                        <span className="font-medium">
                          {syndicateData.name}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-sm text-muted-foreground">
                          Contribution Amount
                        </span>
                        <span className="font-medium">
                          {formatCurrency(contributionAmount)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-sm text-muted-foreground">
                          Payment Method
                        </span>
                        <span className="font-medium">
                          {paymentMethod === 'credit_card' ? 'Credit/Debit Card' : paymentMethod === 'bank_transfer' ? 'Bank Transfer (ACH)' : 'Wire Transfer'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <div className="flex items-center">
                          <span className="text-sm text-muted-foreground">
                            Platform Fee (2.5%)
                          </span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <InfoIcon className="h-3 w-3 ml-1 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Fee for using the platform services</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <span className="font-medium">
                          {formatCurrency(calculateFees().platformFee)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <div className="flex items-center">
                          <span className="text-sm text-muted-foreground">
                            Escrow Fee (1.0%)
                          </span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <InfoIcon className="h-3 w-3 ml-1 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Fee for holding funds in secure escrow</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <span className="font-medium">
                          {formatCurrency(calculateFees().escrowFee)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="font-medium">Total Charge</span>
                        <span className="text-lg font-bold">
                          {formatCurrency(parseFloat(contributionAmount) + calculateFees().total)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-4">
                      <div className="h-5 w-5 rounded border flex items-center justify-center">
                        <CheckCircleIcon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">
                        I agree to the syndicate terms and conditions
                      </span>
                    </div>
                  </div>
                </div>}
            </CardContent>
            <CardFooter className="border-t pt-6 flex justify-between">
              {currentStep > 1 ? <Button variant="outline" onClick={handlePreviousStep}>
                  <ArrowLeftIcon className="mr-2 h-4 w-4" />
                  Back
                </Button> : <Button variant="outline" onClick={() => navigate(`/syndicate-detail/${id}`)}>
                  <ArrowLeftIcon className="mr-2 h-4 w-4" />
                  Cancel
                </Button>}
              {currentStep < 3 ? <Button onClick={handleNextStep} disabled={currentStep === 1 && parseFloat(contributionAmount) < syndicateData.minimumContribution}>
                  Continue <ChevronRightIcon className="ml-2 h-4 w-4" />
                </Button> : <Button onClick={handleSubmit}>
                  Confirm Contribution{' '}
                  <CheckCircleIcon className="ml-2 h-4 w-4" />
                </Button>}
            </CardFooter>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Syndicate Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">
                  {syndicateData.name}
                </h3>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Current Capital
                    </span>
                    <span>{formatCurrency(syndicateData.totalCapital)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Target Capital
                    </span>
                    <span>{formatCurrency(syndicateData.targetCapital)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">End Date</span>
                    <span>{syndicateData.endDate}</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Funding Progress
                </p>
                <Progress value={syndicateData.totalCapital / syndicateData.targetCapital * 100} className="h-2" />
                <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                  <span>
                    {(syndicateData.totalCapital / syndicateData.targetCapital * 100).toFixed(0)}
                    % Funded
                  </span>
                  <span>
                    {formatCurrency(syndicateData.targetCapital - syndicateData.totalCapital)}{' '}
                    Remaining
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Your Share</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-md bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium">Estimated Share</h3>
                  <div className="flex items-center">
                    <CalculatorIcon className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Calculator
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-sm text-muted-foreground">
                      Your Contribution
                    </span>
                    <span className="text-xl font-bold">
                      {formatCurrency(contributionAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-sm text-muted-foreground">
                      After This Contribution
                    </span>
                    <span className="text-lg font-medium">
                      {formatCurrency(syndicateData.totalCapital + parseFloat(contributionAmount))}
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-sm text-muted-foreground">
                      Your Share Percentage
                    </span>
                    <div className="flex items-center">
                      <PercentIcon className="h-4 w-4 mr-1 text-primary" />
                      <span className="text-xl font-bold">
                        {calculateSharePercentage()}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">
                  Estimated Allocation
                </h3>
                <div className="space-y-2">
                  {syndicateData.allocation.map((item, index) => <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.type}</span>
                      <span>{calculateAllocation(item.percentage)}%</span>
                    </div>)}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Escrow Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start">
                <ShieldIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">100% Secure Escrow</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your funds are held in a secure escrow account until the
                    syndicate reaches its target. If the syndicate fails to
                    reach its target by the end date, you will receive a full
                    refund of your contribution minus any applicable fees.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default SyndicateContribution;