import React from 'react';
interface RegionData {
  region: string;
  value: number;
}
interface HeatMapProps {
  data: RegionData[];
  height?: number;
  className?: string;
  minColor?: string;
  maxColor?: string;
  title?: string;
}
const HeatMap: React.FC<HeatMapProps> = ({
  data,
  height = 300,
  className = '',
  minColor = 'bg-blue-100',
  maxColor = 'bg-blue-500',
  title
}) => {
  if (!data || data.length === 0) return null;
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue;
  // Calculate the number of columns based on data length
  const columns = Math.ceil(Math.sqrt(data.length));
  const rows = Math.ceil(data.length / columns);
  const getColorIntensity = (value: number) => {
    const normalizedValue = (value - minValue) / range;
    return normalizedValue;
  };
  return <div className={`w-full ${className}`}>
      {title && <div className="text-sm font-medium mb-2">{title}</div>}
      <div className="grid gap-2" style={{
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      height: height
    }}>
        {data.map((item, index) => {
        const intensity = getColorIntensity(item.value);
        return <div key={index} className="flex flex-col rounded-md overflow-hidden border" title={`${item.region}: $${item.value}`}>
              <div className="flex-1 flex items-center justify-center p-2 text-center transition-colors hover:opacity-90" style={{
            background: `linear-gradient(to right, var(--tw-gradient-stops))`,
            '--tw-gradient-from': minColor.replace('bg-', 'rgb(var(--))'),
            '--tw-gradient-to': maxColor.replace('bg-', 'rgb(var(--))'),
            '--tw-gradient-stops': `var(--tw-gradient-from) ${intensity * 100}%, var(--tw-gradient-to)`,
            opacity: 0.5 + intensity * 0.5
          }}>
                <div className="text-xs font-medium">{item.region}</div>
              </div>
              <div className="bg-background px-2 py-1 text-xs text-center font-medium">
                ${item.value}
              </div>
            </div>;
      })}
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex items-center text-xs">
          <div className={`w-3 h-3 rounded-sm ${minColor} mr-1`}></div>
          <span className="text-muted-foreground">Lower prices</span>
        </div>
        <div className="flex items-center text-xs">
          <div className={`w-3 h-3 rounded-sm ${maxColor} mr-1`}></div>
          <span className="text-muted-foreground">Higher prices</span>
        </div>
      </div>
    </div>;
};
export default HeatMap;