import React from 'react';
interface DataPoint {
  label: string;
  value: number;
}
interface BarChartProps {
  data: DataPoint[];
  height?: number;
  barColor?: string;
  className?: string;
}
const BarChart: React.FC<BarChartProps> = ({
  data,
  height = 200,
  barColor = 'bg-primary',
  className = ''
}) => {
  if (!data || data.length === 0) return null;
  const maxValue = Math.max(...data.map(d => d.value));
  return <div className={`w-full ${className}`}>
      <div className="flex items-end justify-between h-[200px] gap-1">
        {data.map((item, index) => {
        const barHeight = item.value / maxValue * 100;
        return <div key={index} className="flex flex-col items-center flex-1">
              <div className={`w-full ${barColor} rounded-t-sm hover:opacity-80 transition-all`} style={{
            height: `${barHeight}%`
          }} title={`${item.label}: ${item.value}`} />
              <div className="mt-2 text-xs text-center text-muted-foreground w-full truncate">
                {item.label}
              </div>
            </div>;
      })}
      </div>
    </div>;
};
export default BarChart;