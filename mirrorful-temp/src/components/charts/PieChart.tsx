import React from 'react';
interface DataPoint {
  label: string;
  value: number;
  color: string;
}
interface PieChartProps {
  data: DataPoint[];
  size?: number;
  className?: string;
  donut?: boolean;
  donutWidth?: number;
}
const PieChart: React.FC<PieChartProps> = ({
  data,
  size = 200,
  className = '',
  donut = false,
  donutWidth = 40
}) => {
  if (!data || data.length === 0) return null;
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const halfSize = size / 2;
  const radius = halfSize - 5;
  const innerRadius = donut ? radius - donutWidth : 0;
  // Calculate the circumference of the circle
  const circumference = 2 * Math.PI * radius;
  // Create the segments
  let startAngle = 0;
  const segments = data.map((item, index) => {
    const percentage = item.value / total;
    const angle = percentage * 360;
    const endAngle = startAngle + angle;
    // Calculate the SVG arc path
    const x1 = halfSize + radius * Math.cos(startAngle * Math.PI / 180);
    const y1 = halfSize + radius * Math.sin(startAngle * Math.PI / 180);
    const x2 = halfSize + radius * Math.cos(endAngle * Math.PI / 180);
    const y2 = halfSize + radius * Math.sin(endAngle * Math.PI / 180);
    // Determine if the arc should be a large arc (> 180 degrees)
    const largeArcFlag = angle > 180 ? 1 : 0;
    // SVG path for the segment
    let path;
    if (donut) {
      const innerX1 = halfSize + innerRadius * Math.cos(startAngle * Math.PI / 180);
      const innerY1 = halfSize + innerRadius * Math.sin(startAngle * Math.PI / 180);
      const innerX2 = halfSize + innerRadius * Math.cos(endAngle * Math.PI / 180);
      const innerY2 = halfSize + innerRadius * Math.sin(endAngle * Math.PI / 180);
      path = `
        M ${x1} ${y1}
        A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
        L ${innerX2} ${innerY2}
        A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerX1} ${innerY1}
        Z
      `;
    } else {
      path = `
        M ${halfSize} ${halfSize}
        L ${x1} ${y1}
        A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
        Z
      `;
    }
    const result = {
      path,
      color: item.color,
      label: item.label,
      value: item.value,
      percentage,
      startAngle,
      endAngle,
      midAngle: startAngle + angle / 2
    };
    startAngle = endAngle;
    return result;
  });
  return <div className={`relative ${className}`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {segments.map((segment, index) => <path key={index} d={segment.path} fill={segment.color} stroke="#fff" strokeWidth="1" className="transition-opacity hover:opacity-80" />)}
      </svg>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {data.map((item, index) => <div key={index} className="flex items-center text-sm">
            <div className="w-3 h-3 rounded-sm mr-2 flex-shrink-0" style={{
          backgroundColor: item.color
        }}></div>
            <div className="flex justify-between w-full">
              <span className="truncate">{item.label}</span>
              <span className="ml-2 font-medium">
                {Math.round(item.value / total * 100)}%
              </span>
            </div>
          </div>)}
      </div>
    </div>;
};
export default PieChart;