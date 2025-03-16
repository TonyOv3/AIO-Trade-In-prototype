import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { SparklesIcon, LightbulbIcon, TrendingUpIcon, TrendingDownIcon, AlertCircleIcon, CheckCircleIcon, ChevronDownIcon, ChevronUpIcon, PlusIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
export interface AIInsight {
  title: string;
  content: string;
  type: 'opportunity' | 'warning' | 'neutral' | 'action';
  confidence?: number;
}
interface AIInsightCardProps {
  insights: AIInsight[];
  className?: string;
  title?: string;
  compact?: boolean;
  maxInitialInsights?: number;
  expanded?: boolean;
  onToggleExpand?: () => void;
}
const AIInsightCard: React.FC<AIInsightCardProps> = ({
  insights,
  className = '',
  title = 'AI Market Insights',
  compact = false,
  maxInitialInsights = 3,
  expanded: controlledExpanded,
  onToggleExpand
}) => {
  const [internalExpanded, setInternalExpanded] = useState(!compact);
  const [showAllInsights, setShowAllInsights] = useState(false);
  const expanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;
  const handleToggleExpand = () => {
    if (onToggleExpand) {
      onToggleExpand();
    } else {
      setInternalExpanded(!internalExpanded);
    }
  };
  if (!insights || insights.length === 0) return null;
  const displayedInsights = showAllInsights ? insights : insights.slice(0, maxInitialInsights);
  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'opportunity':
        return <TrendingUpIcon className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertCircleIcon className="h-4 w-4 text-amber-500" />;
      case 'neutral':
        return <LightbulbIcon className="h-4 w-4 text-blue-500" />;
      case 'action':
        return <CheckCircleIcon className="h-4 w-4 text-purple-500" />;
      default:
        return <LightbulbIcon className="h-4 w-4 text-blue-500" />;
    }
  };
  const getInsightBadge = (type: string) => {
    switch (type) {
      case 'opportunity':
        return <Badge variant="success">Opportunity</Badge>;
      case 'warning':
        return <Badge variant="warning">Warning</Badge>;
      case 'neutral':
        return <Badge variant="secondary">Insight</Badge>;
      case 'action':
        return <Badge variant="default">Action Item</Badge>;
      default:
        return <Badge variant="secondary">Insight</Badge>;
    }
  };
  return <Card className={`${className} border-blue-200 dark:border-blue-800 w-full`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <SparklesIcon className="h-5 w-5 text-blue-500 mr-2" />
            <h3 className="font-medium text-base">{title}</h3>
          </div>
          {compact && <button onClick={handleToggleExpand} className="text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-muted">
              {expanded ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}
            </button>}
        </div>
        {expanded && <div className="space-y-3">
            {displayedInsights.map((insight, index) => <div key={index} className="p-3 bg-blue-50/50 dark:bg-blue-900/20 rounded-md border border-blue-100 dark:border-blue-800">
                <div className="flex justify-between items-start">
                  <div className="flex items-start">
                    {getInsightIcon(insight.type)}
                    <div className="ml-2">
                      <div className="font-medium text-sm">{insight.title}</div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {insight.content}
                      </p>
                    </div>
                  </div>
                  <div>
                    {getInsightBadge(insight.type)}
                    {insight.confidence && <div className="text-xs text-muted-foreground mt-1 text-right">
                        {insight.confidence}% confidence
                      </div>}
                  </div>
                </div>
              </div>)}
            {insights.length > maxInitialInsights && <button onClick={() => setShowAllInsights(!showAllInsights)} className="text-sm text-blue-500 hover:text-blue-700 flex items-center justify-center w-full py-1 mt-1">
                {showAllInsights ? <>Show less</> : <>
                    <PlusIcon className="h-3 w-3 mr-1" />
                    Show {insights.length - maxInitialInsights} more insights
                  </>}
              </button>}
          </div>}
        {!expanded && <div className="text-sm text-muted-foreground">
            {insights.length} AI-generated insights available. Click to expand.
          </div>}
      </CardContent>
    </Card>;
};
export default AIInsightCard;