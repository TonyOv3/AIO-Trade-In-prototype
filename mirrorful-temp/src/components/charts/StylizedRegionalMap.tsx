import React from 'react';
import { cn } from '@/lib/utils';
interface RegionData {
  region: string;
  value: number;
}
interface StylizedRegionalMapProps {
  data: RegionData[];
  minColor?: string;
  maxColor?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}
const StylizedRegionalMap: React.FC<StylizedRegionalMapProps> = ({
  data,
  minColor = 'bg-blue-200',
  maxColor = 'bg-blue-500',
  className,
  title = 'Regional Price Map',
  subtitle = 'Average prices by location'
}) => {
  if (!data || data.length === 0) return null;
  // Find min and max values for color scaling
  const minValue = Math.min(...data.map(item => item.value));
  const maxValue = Math.max(...data.map(item => item.value));
  // Get color class based on value
  const getColorClass = (value: number) => {
    if (value >= maxValue - (maxValue - minValue) * 0.25) return maxColor;
    if (value >= maxValue - (maxValue - minValue) * 0.5) return 'bg-blue-400';
    if (value >= maxValue - (maxValue - minValue) * 0.75) return 'bg-blue-300';
    return minColor;
  };
  return <div className={cn('p-4 rounded-lg border bg-white dark:bg-gray-950', className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="text-gray-500">{subtitle}</div>
      </div>
      {/* Map Grid with Points */}
      <div className="relative h-[250px] mb-6">
        {/* Map Grid Lines */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
          {Array.from({
          length: 9
        }).map((_, i) => <div key={i} className="border border-dashed border-gray-200 dark:border-gray-800"></div>)}
        </div>
        {/* Map Points - Positioned strategically to represent different regions */}
        <div className="absolute left-[15%] top-[15%] w-4 h-4 rounded-full bg-blue-500"></div>
        <div className="absolute left-[50%] top-[15%] w-4 h-4 rounded-full bg-blue-300"></div>
        <div className="absolute left-[85%] top-[15%] w-4 h-4 rounded-full bg-blue-200"></div>
        <div className="absolute left-[15%] top-[50%] w-4 h-4 rounded-full bg-blue-200"></div>
        <div className="absolute left-[50%] top-[50%] w-4 h-4 rounded-full bg-blue-400"></div>
        <div className="absolute left-[85%] top-[50%] w-4 h-4 rounded-full bg-blue-300"></div>
        <div className="absolute left-[15%] top-[85%] w-4 h-4 rounded-full bg-blue-500"></div>
        <div className="absolute left-[50%] top-[85%] w-4 h-4 rounded-full bg-blue-400"></div>
        <div className="absolute left-[85%] top-[85%] w-4 h-4 rounded-full bg-blue-200"></div>
      </div>
      {/* Legend */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-blue-200 mr-2"></div>
          <span>Lower prices (${minValue})</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
          <span>Higher prices (${maxValue})</span>
        </div>
      </div>
      {/* City Price Cards */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
        {data.map((region, index) => <div key={index} className="border rounded-lg p-2 text-center">
            <div className="font-medium">{region.region}</div>
            <div className={`mt-1 py-1 rounded-md ${getColorClass(region.value)} ${region.value >= maxValue - (maxValue - minValue) * 0.5 ? 'text-white' : ''}`}>
              ${region.value}
            </div>
          </div>)}
      </div>
    </div>;
};
export default StylizedRegionalMap;