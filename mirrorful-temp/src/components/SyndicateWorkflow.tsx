import React, { Fragment } from 'react';
import { CheckCircleIcon, CircleIcon, DollarSignIcon, BoxIcon, GavelIcon, UserPlusIcon } from 'lucide-react';
interface SyndicateWorkflowProps {
  currentStep: number;
  totalSteps?: number;
  variant?: 'creation' | 'contribution' | 'distribution';
}
const SyndicateWorkflow: React.FC<SyndicateWorkflowProps> = ({
  currentStep,
  totalSteps = 4,
  variant = 'creation'
}) => {
  const getStepIcon = (step: number, variant: string) => {
    if (variant === 'creation') {
      switch (step) {
        case 1:
          return <UserPlusIcon className="h-5 w-5" />;
        case 2:
          return <GavelIcon className="h-5 w-5" />;
        case 3:
          return <BoxIcon className="h-5 w-5" />;
        case 4:
          return <CheckCircleIcon className="h-5 w-5" />;
        default:
          return <CircleIcon className="h-5 w-5" />;
      }
    } else if (variant === 'contribution') {
      switch (step) {
        case 1:
          return <DollarSignIcon className="h-5 w-5" />;
        case 2:
          return <UserPlusIcon className="h-5 w-5" />;
        case 3:
          return <CheckCircleIcon className="h-5 w-5" />;
        default:
          return <CircleIcon className="h-5 w-5" />;
      }
    } else {
      switch (step) {
        case 1:
          return <GavelIcon className="h-5 w-5" />;
        case 2:
          return <BoxIcon className="h-5 w-5" />;
        case 3:
          return <CheckCircleIcon className="h-5 w-5" />;
        default:
          return <CircleIcon className="h-5 w-5" />;
      }
    }
  };
  const getStepLabel = (step: number, variant: string) => {
    if (variant === 'creation') {
      switch (step) {
        case 1:
          return 'Basic Info';
        case 2:
          return 'Target Opportunity';
        case 3:
          return 'Allocation';
        case 4:
          return 'Review & Launch';
        default:
          return `Step ${step}`;
      }
    } else if (variant === 'contribution') {
      switch (step) {
        case 1:
          return 'Amount';
        case 2:
          return 'Payment';
        case 3:
          return 'Confirm';
        default:
          return `Step ${step}`;
      }
    } else {
      switch (step) {
        case 1:
          return 'Acquisition';
        case 2:
          return 'Distribution';
        case 3:
          return 'Delivery';
        default:
          return `Step ${step}`;
      }
    }
  };
  return <div className="w-full mb-6">
      <div className="flex items-center justify-between">
        {Array.from({
        length: totalSteps
      }).map((_, index) => <Fragment key={index}>
            {index > 0 && <div className={`flex-1 h-1 mx-2 ${index < currentStep ? 'bg-primary' : 'bg-muted'}`}></div>}
            <div className="flex flex-col items-center">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center
                  ${index + 1 < currentStep ? 'bg-primary text-white' : index + 1 === currentStep ? 'bg-primary/10 text-primary border-2 border-primary' : 'bg-muted text-muted-foreground'}`}>
                {index + 1 < currentStep ? <CheckCircleIcon className="h-5 w-5" /> : getStepIcon(index + 1, variant)}
              </div>
              <span className={`text-xs mt-2 font-medium
                  ${index + 1 === currentStep ? 'text-primary' : 'text-muted-foreground'}`}>
                {getStepLabel(index + 1, variant)}
              </span>
            </div>
          </Fragment>)}
      </div>
    </div>;
};
export default SyndicateWorkflow;