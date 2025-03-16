import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UsersIcon, DollarSignIcon, BoxIcon, CalendarIcon, CheckCircleIcon, InfoIcon, ArrowLeftIcon, ArrowRightIcon, GavelIcon, PackageIcon, RefreshCwIcon, TargetIcon, PlusIcon, PercentIcon, HelpCircleIcon, AlertCircleIcon, ChevronRightIcon, ShieldIcon, BarChart2Icon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import SyndicateWorkflow from '../components/SyndicateWorkflow';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
const SyndicateCreation: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [syndicateType, setSyndicateType] = useState('');
  const [syndicateName, setSyndicateName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [minimumContribution, setMinimumContribution] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [targetAuctionId, setTargetAuctionId] = useState('');
  const [description, setDescription] = useState('');
  const [deviceAllocation, setDeviceAllocation] = useState([{
    type: 'iPhone 13 Pro',
    percentage: 40,
    value: 40000
  }, {
    type: 'iPhone 13',
    percentage: 30,
    value: 30000
  }, {
    type: 'iPhone 12 Pro',
    percentage: 20,
    value: 20000
  }, {
    type: 'iPhone 12',
    percentage: 10,
    value: 10000
  }]);
  const activeAuctions = [{
    id: 'AUC-2023-1245',
    title: 'Bulk iPhone 12 & 13 Models',
    devices: 25,
    currentBid: '$10,250',
    timeLeft: '12h 32m',
    seller: 'TechTrade Solutions'
  }, {
    id: 'AUC-2023-1244',
    title: 'Samsung Galaxy S22 Collection',
    devices: 18,
    currentBid: '$6,120',
    timeLeft: '1d 8h',
    seller: 'Mobile Source LLC'
  }, {
    id: 'AUC-2023-1243',
    title: 'Google Pixel 6 Pro Lot',
    devices: 12,
    currentBid: '$3,950',
    timeLeft: '2d 4h',
    seller: 'Wireless Wholesale Co'
  }];
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleSubmit = () => {
    // In a real app, this would submit the form data to an API
    navigate('/syndicate-detail/syn-2023-new');
  };
  const handleDeviceAllocationChange = (index, field, value) => {
    const newAllocation = [...deviceAllocation];
    newAllocation[index][field] = value;
    if (field === 'percentage') {
      // Recalculate value based on percentage
      newAllocation[index].value = (parseInt(targetAmount) || 100000) * (value / 100);
    } else if (field === 'value') {
      // Recalculate percentage based on value
      newAllocation[index].percentage = (value / (parseInt(targetAmount) || 100000) * 100).toFixed(1);
    }
    setDeviceAllocation(newAllocation);
  };
  const addDeviceAllocation = () => {
    setDeviceAllocation([...deviceAllocation, {
      type: '',
      percentage: 0,
      value: 0
    }]);
  };
  const removeDeviceAllocation = index => {
    const newAllocation = [...deviceAllocation];
    newAllocation.splice(index, 1);
    setDeviceAllocation(newAllocation);
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="mr-2" onClick={() => navigate('/syndicate-hub')}>
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Back to Hub
          </Button>
          <h1 className="text-2xl font-bold">Create New Syndicate</h1>
        </div>
      </div>
      <SyndicateWorkflow currentStep={currentStep} />
      {currentStep === 1 && <Card>
          <CardHeader>
            <CardTitle>Step 1: Syndicate Type & Basic Information</CardTitle>
            <CardDescription>
              Define the type of syndicate you want to create and provide basic
              details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className={`cursor-pointer transition-all ${syndicateType === 'auction' ? 'border-primary ring-2 ring-primary/20' : 'hover:border-primary/50'}`} onClick={() => setSyndicateType('auction')}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <GavelIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium mb-2">Auction Syndicate</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pool resources to bid on a specific auction as a group
                  </p>
                  {syndicateType === 'auction' && <Badge variant="success" className="mt-auto">
                      Selected
                    </Badge>}
                </CardContent>
              </Card>
              <Card className={`cursor-pointer transition-all ${syndicateType === 'bulk' ? 'border-primary ring-2 ring-primary/20' : 'hover:border-primary/50'}`} onClick={() => setSyndicateType('bulk')}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <PackageIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium mb-2">Bulk Purchase Syndicate</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Combine funds to make large bulk purchases from suppliers
                  </p>
                  {syndicateType === 'bulk' && <Badge variant="success" className="mt-auto">
                      Selected
                    </Badge>}
                </CardContent>
              </Card>
              <Card className={`cursor-pointer transition-all ${syndicateType === 'liquidation' ? 'border-primary ring-2 ring-primary/20' : 'hover:border-primary/50'}`} onClick={() => setSyndicateType('liquidation')}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <RefreshCwIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium mb-2">Liquidation Syndicate</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Access carrier and corporate liquidation opportunities
                    together
                  </p>
                  {syndicateType === 'liquidation' && <Badge variant="success" className="mt-auto">
                      Selected
                    </Badge>}
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="syndicate-name" className="text-sm font-medium">
                  Syndicate Name
                </label>
                <input id="syndicate-name" type="text" className="w-full p-2 rounded-md border bg-background" placeholder="e.g., Premium iPhone Collective" value={syndicateName} onChange={e => setSyndicateName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <label htmlFor="end-date" className="text-sm font-medium">
                  End Date
                </label>
                <input id="end-date" type="date" className="w-full p-2 rounded-md border bg-background" value={endDate} onChange={e => setEndDate(e.target.value)} />
                <p className="text-xs text-muted-foreground">
                  This is the deadline for contributions and when the syndicate
                  will make its purchase.
                </p>
              </div>
              <div className="space-y-2">
                <label htmlFor="target-amount" className="text-sm font-medium">
                  Target Capital
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    $
                  </span>
                  <input id="target-amount" type="number" className="w-full pl-8 p-2 rounded-md border bg-background" placeholder="100000" value={targetAmount} onChange={e => setTargetAmount(e.target.value)} />
                </div>
                <p className="text-xs text-muted-foreground">
                  The total amount of capital the syndicate aims to raise.
                </p>
              </div>
              <div className="space-y-2">
                <label htmlFor="min-contribution" className="text-sm font-medium">
                  Minimum Contribution
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    $
                  </span>
                  <input id="min-contribution" type="number" className="w-full pl-8 p-2 rounded-md border bg-background" placeholder="5000" value={minimumContribution} onChange={e => setMinimumContribution(e.target.value)} />
                </div>
                <p className="text-xs text-muted-foreground">
                  The minimum amount each participant must contribute.
                </p>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="syndicate-description" className="text-sm font-medium">
                  Description
                </label>
                <textarea id="syndicate-description" className="w-full p-2 rounded-md border bg-background min-h-[100px]" placeholder="Describe the purpose and goals of this syndicate..." value={description} onChange={e => setDescription(e.target.value)} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">
                    Syndicate Visibility
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className={`flex items-center space-x-2 cursor-pointer ${isPublic ? 'text-primary' : 'text-muted-foreground'}`} onClick={() => setIsPublic(true)}>
                      <div className={`h-4 w-4 rounded-full border ${isPublic ? 'bg-primary border-primary' : 'border-muted-foreground'}`}></div>
                      <span>Public</span>
                    </div>
                    <div className={`flex items-center space-x-2 cursor-pointer ${!isPublic ? 'text-primary' : 'text-muted-foreground'}`} onClick={() => setIsPublic(false)}>
                      <div className={`h-4 w-4 rounded-full border ${!isPublic ? 'bg-primary border-primary' : 'border-muted-foreground'}`}></div>
                      <span>Invite Only</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Public syndicates are visible to all platform users.
                  Invite-only syndicates are only visible to those you invite.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-6 flex justify-end">
            <Button onClick={handleNextStep}>
              Continue <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>}
      {currentStep === 2 && <Card>
          <CardHeader>
            <CardTitle>Step 2: Target Opportunity</CardTitle>
            <CardDescription>
              {syndicateType === 'auction' ? 'Select the auction you want to target with this syndicate' : syndicateType === 'bulk' ? 'Define the bulk purchase details' : 'Specify the liquidation opportunity details'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {syndicateType === 'auction' && <>
                <div className="bg-muted/30 p-4 rounded-md border flex items-start">
                  <InfoIcon className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">
                      Auction Syndicate Information
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Select an active auction that you want to target with this
                      syndicate. The syndicate will pool funds to place
                      competitive bids on the selected auction.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Select Target Auction</h3>
                  {activeAuctions.map(auction => <div key={auction.id} className={`p-4 border rounded-md cursor-pointer transition-all ${targetAuctionId === auction.id ? 'border-primary ring-2 ring-primary/20' : 'hover:border-primary/50'}`} onClick={() => setTargetAuctionId(auction.id)}>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">{auction.title}</h3>
                            <Badge variant="success" className="ml-2">
                              Active
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            ID: {auction.id} • Seller: {auction.seller}
                          </p>
                        </div>
                        <div className="flex items-center text-sm">
                          <ClockIcon className="h-4 w-4 mr-1 text-yellow-500" />
                          <span>{auction.timeLeft} left</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Devices
                          </p>
                          <p className="font-medium">{auction.devices}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Current Bid
                          </p>
                          <p className="font-medium text-green-600">
                            {auction.currentBid}
                          </p>
                        </div>
                        <div className="flex items-center justify-end">
                          {targetAuctionId === auction.id && <Badge variant="success">Selected</Badge>}
                        </div>
                      </div>
                    </div>)}
                  <Button variant="outline" className="w-full">
                    <GavelIcon className="mr-2 h-4 w-4" />
                    Browse More Auctions
                  </Button>
                </div>
              </>}
            {(syndicateType === 'bulk' || syndicateType === 'liquidation') && <>
                <div className="bg-muted/30 p-4 rounded-md border flex items-start">
                  <InfoIcon className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">
                      {syndicateType === 'bulk' ? 'Bulk Purchase Information' : 'Liquidation Opportunity Information'}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {syndicateType === 'bulk' ? 'Define the details of the bulk purchase you want to make. Specify the types of devices and their allocation in the total purchase.' : 'Specify the details of the liquidation opportunity. Define the expected inventory composition and allocation.'}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="supplier" className="text-sm font-medium">
                        {syndicateType === 'bulk' ? 'Supplier' : 'Liquidation Source'}
                      </label>
                      <input id="supplier" type="text" className="w-full p-2 rounded-md border bg-background" placeholder={syndicateType === 'bulk' ? 'e.g., TechTrade Solutions' : 'e.g., Verizon Wireless'} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="expected-devices" className="text-sm font-medium">
                        Expected Number of Devices
                      </label>
                      <input id="expected-devices" type="number" className="w-full p-2 rounded-md border bg-background" placeholder="e.g., 50" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="estimated-price-per-device" className="text-sm font-medium">
                        Estimated Avg. Price Per Device
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          $
                        </span>
                        <input id="estimated-price-per-device" type="number" className="w-full pl-8 p-2 rounded-md border bg-background" placeholder="e.g., 500" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="expected-roi" className="text-sm font-medium">
                        Expected ROI
                      </label>
                      <div className="relative">
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          %
                        </span>
                        <input id="expected-roi" type="number" className="w-full pr-8 p-2 rounded-md border bg-background" placeholder="e.g., 15" />
                      </div>
                    </div>
                  </div>
                </div>
              </>}
          </CardContent>
          <CardFooter className="border-t pt-6 flex justify-between">
            <Button variant="outline" onClick={handlePreviousStep}>
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button onClick={handleNextStep}>
              Continue <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>}
      {currentStep === 3 && <Card>
          <CardHeader>
            <CardTitle>Step 3: Inventory Allocation</CardTitle>
            <CardDescription>
              Define how the acquired inventory will be allocated
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/30 p-4 rounded-md border flex items-start">
              <InfoIcon className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Allocation Information</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Specify how the syndicate's capital will be allocated across
                  different device types. Each member will receive devices
                  proportional to their contribution.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Device Allocation Plan</h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm" onClick={addDeviceAllocation}>
                        <PlusIcon className="h-4 w-4 mr-1" />
                        Add Device Type
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add another device type to the allocation plan</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground px-2">
                  <div className="col-span-5">Device Type</div>
                  <div className="col-span-3">Allocation %</div>
                  <div className="col-span-3">Value ($)</div>
                  <div className="col-span-1"></div>
                </div>
                {deviceAllocation.map((device, index) => <div key={index} className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-5">
                      <input type="text" className="w-full p-2 rounded-md border bg-background" placeholder="e.g., iPhone 13 Pro" value={device.type} onChange={e => handleDeviceAllocationChange(index, 'type', e.target.value)} />
                    </div>
                    <div className="col-span-3">
                      <div className="relative">
                        <input type="number" className="w-full p-2 pr-8 rounded-md border bg-background" placeholder="40" value={device.percentage} onChange={e => handleDeviceAllocationChange(index, 'percentage', parseInt(e.target.value) || 0)} />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          %
                        </span>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          $
                        </span>
                        <input type="number" className="w-full p-2 pl-8 rounded-md border bg-background" placeholder="40000" value={device.value} onChange={e => handleDeviceAllocationChange(index, 'value', parseInt(e.target.value) || 0)} />
                      </div>
                    </div>
                    <div className="col-span-1 flex justify-end">
                      {deviceAllocation.length > 1 && <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => removeDeviceAllocation(index)}>
                          <AlertCircleIcon className="h-4 w-4 text-red-500" />
                        </Button>}
                    </div>
                  </div>)}
              </div>
              <div className="flex items-center justify-between pt-2 border-t">
                <span className="font-medium">Total</span>
                <div className="flex items-center space-x-8">
                  <span className="font-medium">
                    {deviceAllocation.reduce((acc, curr) => acc + curr.percentage, 0)}
                    %
                  </span>
                  <span className="font-medium">
                    $
                    {deviceAllocation.reduce((acc, curr) => acc + curr.value, 0).toLocaleString()}
                  </span>
                </div>
              </div>
              {deviceAllocation.reduce((acc, curr) => acc + curr.percentage, 0) !== 100 && <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-3 rounded-md text-sm flex items-center">
                  <AlertCircleIcon className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                  <span>
                    Total allocation percentage must equal 100%. Current total:{' '}
                    {deviceAllocation.reduce((acc, curr) => acc + curr.percentage, 0)}
                    %
                  </span>
                </div>}
            </div>
            <div className="pt-6 border-t">
              <h3 className="text-sm font-medium mb-4">Allocation Preview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm text-muted-foreground mb-2">
                    Distribution by Device Type
                  </h4>
                  <div className="space-y-2">
                    {deviceAllocation.map((device, index) => <div key={index} className="flex items-center">
                        <div className="w-24 text-sm truncate">
                          {device.type}
                        </div>
                        <div className="flex-1 mx-2">
                          <div className="h-2 rounded-full bg-muted overflow-hidden">
                            <div className={`h-full ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-500' : index === 2 ? 'bg-yellow-500' : 'bg-purple-500'}`} style={{
                        width: `${device.percentage}%`
                      }}></div>
                          </div>
                        </div>
                        <div className="text-sm text-right w-24">
                          {device.percentage}% (${device.value.toLocaleString()}
                          )
                        </div>
                      </div>)}
                  </div>
                </div>
                <div className="p-4 border rounded-md bg-muted/30">
                  <h4 className="text-sm font-medium mb-3">
                    Member Allocation Example
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Your contribution:
                      </span>
                      <span className="font-medium">
                        $25,000 (25% of total)
                      </span>
                    </div>
                    <div className="border-t pt-3">
                      <p className="text-sm text-muted-foreground mb-2">
                        You would receive:
                      </p>
                      <ul className="space-y-1 text-sm">
                        {deviceAllocation.map((device, index) => <li key={index} className="flex justify-between">
                            <span>{device.type}:</span>
                            <span className="font-medium">
                              {Math.round(device.value * 0.25 / (parseInt(targetAmount) || 100000) * 100) / 100}{' '}
                              units
                            </span>
                          </li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-6 flex justify-between">
            <Button variant="outline" onClick={handlePreviousStep}>
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button onClick={handleNextStep}>
              Continue <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>}
      {currentStep === 4 && <Card>
          <CardHeader>
            <CardTitle>Step 4: Review & Launch</CardTitle>
            <CardDescription>
              Review the syndicate details and launch it
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/30 p-4 rounded-md border flex items-start">
              <InfoIcon className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Syndicate Review</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Review all the details of your syndicate before launching it.
                  Once launched, some parameters cannot be changed.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Name</span>
                    <span className="font-medium">
                      {syndicateName || 'Premium iPhone Collective'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Type</span>
                    <span className="font-medium capitalize">
                      {syndicateType || 'Auction'} Syndicate
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Target Capital
                    </span>
                    <span className="font-medium">
                      ${parseInt(targetAmount).toLocaleString() || '100,000'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Min. Contribution
                    </span>
                    <span className="font-medium">
                      $
                      {parseInt(minimumContribution).toLocaleString() || '5,000'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      End Date
                    </span>
                    <span className="font-medium">
                      {endDate || '2023-08-15'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Visibility
                    </span>
                    <span className="font-medium">
                      {isPublic ? 'Public' : 'Invite Only'}
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Target Opportunity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {syndicateType === 'auction' && <>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Target Auction
                        </span>
                        <span className="font-medium">
                          {targetAuctionId || 'AUC-2023-1245'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Auction Title
                        </span>
                        <span className="font-medium">
                          {activeAuctions.find(a => a.id === targetAuctionId)?.title || 'Bulk iPhone 12 & 13 Models'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Current Bid
                        </span>
                        <span className="font-medium">
                          {activeAuctions.find(a => a.id === targetAuctionId)?.currentBid || '$10,250'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Time Left
                        </span>
                        <span className="font-medium">
                          {activeAuctions.find(a => a.id === targetAuctionId)?.timeLeft || '12h 32m'}
                        </span>
                      </div>
                    </>}
                  {(syndicateType === 'bulk' || syndicateType === 'liquidation') && <>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          {syndicateType === 'bulk' ? 'Supplier' : 'Liquidation Source'}
                        </span>
                        <span className="font-medium">TechTrade Solutions</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Expected Devices
                        </span>
                        <span className="font-medium">50 units</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Avg. Price Per Device
                        </span>
                        <span className="font-medium">$500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Expected ROI
                        </span>
                        <span className="font-medium">15%</span>
                      </div>
                    </>}
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Allocation Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                          Device Type
                        </th>
                        <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                          Allocation %
                        </th>
                        <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                          Value ($)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {deviceAllocation.map((device, index) => <tr key={index} className="border-b">
                          <td className="py-3 px-4 font-medium">
                            {device.type}
                          </td>
                          <td className="py-3 px-4 text-right">
                            {device.percentage}%
                          </td>
                          <td className="py-3 px-4 text-right">
                            ${device.value.toLocaleString()}
                          </td>
                        </tr>)}
                      <tr className="bg-muted/30">
                        <td className="py-3 px-4 font-medium">Total</td>
                        <td className="py-3 px-4 text-right font-medium">
                          {deviceAllocation.reduce((acc, curr) => acc + curr.percentage, 0)}
                          %
                        </td>
                        <td className="py-3 px-4 text-right font-medium">
                          $
                          {deviceAllocation.reduce((acc, curr) => acc + curr.value, 0).toLocaleString()}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fees & Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Platform Fee
                  </span>
                  <span className="font-medium">
                    2.5% of total capital raised
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Escrow Fee
                  </span>
                  <span className="font-medium">
                    1.0% of total capital raised
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Creator Fee
                  </span>
                  <span className="font-medium">0% (optional)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Syndicate Terms
                  </span>
                  <Button variant="link" className="h-auto p-0">
                    View Terms & Conditions
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="flex items-start p-4 border rounded-md">
              <ShieldIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Secure Escrow Protection</p>
                <p className="text-sm text-muted-foreground mt-1">
                  All funds contributed to this syndicate will be held in a
                  secure escrow account until the target opportunity is
                  acquired. If the syndicate fails to acquire the target, all
                  funds will be returned to contributors minus any applicable
                  fees.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-5 w-5 rounded border flex items-center justify-center">
                <CheckCircleIcon className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm">
                I understand and agree to the syndicate terms and conditions
              </span>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-6 flex justify-between">
            <Button variant="outline" onClick={handlePreviousStep}>
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button onClick={handleSubmit}>
              Launch Syndicate <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>}
    </div>;
};
export default SyndicateCreation;