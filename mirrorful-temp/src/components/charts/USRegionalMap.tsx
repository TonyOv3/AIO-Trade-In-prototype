import React from 'react';
import { cn } from '@/lib/utils';
interface RegionData {
  region: string;
  value: number;
}
interface USRegionalMapProps {
  data: RegionData[];
  className?: string;
  minColor?: string;
  maxColor?: string;
}
// Map of major US cities to their approximate coordinates on our SVG
const cityCoordinates: Record<string, [number, number]> = {
  NYC: [78, 20],
  Boston: [82, 15],
  Chicago: [58, 22],
  Miami: [70, 65],
  Houston: [48, 60],
  Dallas: [45, 50],
  Denver: [35, 35],
  LA: [10, 40],
  Seattle: [12, 12],
  Atlanta: [65, 48],
  SF: [8, 30],
  Phoenix: [20, 45],
  Detroit: [65, 20],
  Minneapolis: [50, 15],
  'St. Louis': [55, 35],
  Portland: [10, 15],
  'San Diego': [12, 45],
  Philadelphia: [75, 25],
  DC: [72, 30],
  Nashville: [60, 40],
  Austin: [45, 55],
  'New Orleans': [55, 60]
};
const USRegionalMap: React.FC<USRegionalMapProps> = ({
  data,
  className,
  minColor = 'bg-blue-200',
  maxColor = 'bg-blue-600'
}) => {
  if (!data || data.length === 0) return null;
  // Find min and max values for color scaling
  const minValue = Math.min(...data.map(item => item.value));
  const maxValue = Math.max(...data.map(item => item.value));
  const range = maxValue - minValue;
  // Get color class based on value
  const getColorClass = (value: number) => {
    if (value >= maxValue - range * 0.25) return maxColor;
    if (value >= maxValue - range * 0.5) return 'bg-blue-500';
    if (value >= maxValue - range * 0.75) return 'bg-blue-400';
    return minColor;
  };
  // Get dot size based on value (relative to min/max)
  const getDotSize = (value: number) => {
    const normalized = (value - minValue) / (maxValue - minValue);
    return 6 + normalized * 6; // Dots from 6px to 12px
  };
  return <div className={cn('w-full', className)}>
      <div className="relative w-full h-[300px] mb-6 border rounded-lg p-4 bg-white dark:bg-gray-950">
        {/* US Map Outline (simplified) */}
        <svg viewBox="0 0 100 80" className="w-full h-full stroke-gray-300 dark:stroke-gray-700 fill-none">
          <path d="M10,20 L15,10 L90,15 L85,25 L80,60 L50,70 L20,60 L10,20 Z" strokeWidth="0.5" className="fill-gray-100 dark:fill-gray-900" />
          {/* Simplified state borders */}
          <path d="M50,15 L50,70" strokeWidth="0.2" strokeDasharray="1,1" />
          <path d="M20,40 L80,40" strokeWidth="0.2" strokeDasharray="1,1" />
          <path d="M60,15 L60,60" strokeWidth="0.2" strokeDasharray="1,1" />
          <path d="M30,20 L30,60" strokeWidth="0.2" strokeDasharray="1,1" />
          <path d="M70,15 L70,50" strokeWidth="0.2" strokeDasharray="1,1" />
          {/* Major coastlines */}
          <path d="M15,10 L10,20 L20,60" strokeWidth="0.8" className="stroke-blue-200 dark:stroke-blue-900" />
          <path d="M80,60 L50,70 L20,60" strokeWidth="0.8" className="stroke-blue-200 dark:stroke-blue-900" />
        </svg>
        {/* City Heat Spots */}
        {data.map((item, index) => {
        // Find the coordinates for this city
        const coords = cityCoordinates[item.region];
        if (!coords) return null;
        const [x, y] = coords;
        const size = getDotSize(item.value);
        const colorClass = getColorClass(item.value);
        return <div key={index} className={`absolute rounded-full ${colorClass} shadow-lg transition-all duration-300 hover:z-10 hover:scale-150 cursor-pointer`} style={{
          left: `${x}%`,
          top: `${y}%`,
          width: `${size}px`,
          height: `${size}px`,
          transform: 'translate(-50%, -50%)'
        }} title={`${item.region}: $${item.value}`} />;
      })}
      </div>
      {/* Legend */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className={`w-4 h-4 rounded-full ${minColor} mr-2`}></div>
          <span className="text-sm">Lower prices (${minValue})</span>
        </div>
        <div className="flex items-center">
          <div className={`w-4 h-4 rounded-full ${maxColor} mr-2`}></div>
          <span className="text-sm">Higher prices (${maxValue})</span>
        </div>
      </div>
      {/* City Price Cards */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {data.map((item, index) => <div key={index} className="border rounded-lg p-2 text-center">
            <div className="text-sm font-medium">{item.region}</div>
            <div className={`mt-1 py-1 rounded-md ${getColorClass(item.value)} ${item.value >= maxValue - range * 0.5 ? 'text-white' : ''}`}>
              ${item.value}
            </div>
          </div>)}
      </div>
    </div>;
};
export default USRegionalMap;