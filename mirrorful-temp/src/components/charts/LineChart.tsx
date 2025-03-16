import React from 'react';
interface DataPoint {
  date: string;
  value: number;
}
interface LineChartProps {
  data: DataPoint[];
  height?: number;
  color?: string;
  showGrid?: boolean;
  className?: string;
}
const LineChart: React.FC<LineChartProps> = ({
  data,
  height = 200,
  color = 'stroke-primary',
  showGrid = true,
  className = ''
}) => {
  if (!data || data.length === 0) return null;
  const maxValue = Math.max(...data.map(d => d.value)) * 1.1;
  const minValue = Math.min(...data.map(d => d.value)) * 0.9;
  const range = maxValue - minValue;
  const getY = (value: number) => {
    return height - (value - minValue) / range * height;
  };
  const points = data.map((d, i) => {
    const x = i / (data.length - 1) * 100;
    const y = getY(d.value);
    return `${x},${y}`;
  }).join(' ');
  return <div className={`w-full ${className}`}>
      <svg width="100%" height={height} viewBox={`0 0 100 ${height}`} preserveAspectRatio="none" className="overflow-visible">
        {showGrid && <>
            <line x1="0" y1={height} x2="100" y2={height} className="stroke-gray-200 dark:stroke-gray-700" strokeWidth="0.5" />
            <line x1="0" y1="0" x2="100" y2="0" className="stroke-gray-200 dark:stroke-gray-700" strokeWidth="0.5" />
            <line x1="0" y1={height / 2} x2="100" y2={height / 2} className="stroke-gray-200 dark:stroke-gray-700" strokeWidth="0.5" strokeDasharray="2,2" />
          </>}
        <polyline fill="none" className={`${color} stroke-2`} points={points} />
        <polyline className={`${color.replace('stroke', 'fill')} opacity-10`} points={`0,${height} ${points} 100,${height}`} />
        {/* Dots for each data point */}
        {data.map((d, i) => {
        const x = i / (data.length - 1) * 100;
        const y = getY(d.value);
        return <circle key={i} cx={x} cy={y} r="1.5" className={`${color.replace('stroke', 'fill')}`} />;
      })}
      </svg>
      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
        <span>{data[0].date}</span>
        <span>{data[data.length - 1].date}</span>
      </div>
    </div>;
};
export default LineChart;