import React, { useState } from 'react';
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
import AIInsightCard, { AIInsight } from './AIInsightCard';
interface InsightsSectionProps {
  deviceInsights: AIInsight[];
  marketInsights: AIInsight[];
  deviceName: string;
}
const InsightsSection: React.FC<InsightsSectionProps> = ({
  deviceInsights,
  marketInsights,
  deviceName
}) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <AIInsightCard insights={deviceInsights} title={`AI Insights: ${deviceName}`} compact={true} maxInitialInsights={2} expanded={expanded} onToggleExpand={toggleExpanded} />
      <AIInsightCard insights={marketInsights} title="Market-Wide Insights" compact={true} maxInitialInsights={2} expanded={expanded} onToggleExpand={toggleExpanded} />
    </div>;
};
export default InsightsSection;