import React from 'react';
interface ComparisonItem {
  category: string;
  values: {
    label: string;
    value: number;
    color: string;
  }[];
}
interface ComparisonChartProps {
  data: ComparisonItem[];
  height?: number;
  className?: string;
}
const ComparisonChart: React.FC<ComparisonChartProps> = ({
  data,
  height = 300,
  className = ''
}) => {
  if (!data || data.length === 0) return null;
  // Find the maximum value across all categories and items
  const maxValue = Math.max(...data.flatMap(item => item.values.map(v => v.value)));
  // Calculate bar height based on the value
  const getBarHeight = (value: number) => {
    return value / maxValue * 100;
  };
  return <div className={`w-full ${className}`}>
      <div className="flex flex-col space-y-6">
        {data.map((item, index) => <div key={index} className="space-y-2">
            <div className="text-sm font-medium">{item.category}</div>
            <div className="flex items-end space-x-2 h-[150px]">
              {item.values.map((value, vIndex) => <div key={vIndex} className="flex flex-col items-center flex-1">
                  <div className="w-full rounded-t-sm transition-all hover:opacity-90" style={{
              height: `${getBarHeight(value.value)}%`,
              backgroundColor: value.color
            }} title={`${value.label}: ${value.value}`}></div>
                  <div className="mt-2 text-xs text-center">
                    <div>{value.label}</div>
                    <div className="font-medium">${value.value}</div>
                  </div>
                </div>)}
            </div>
          </div>)}
      </div>
    </div>;
};
export default ComparisonChart;