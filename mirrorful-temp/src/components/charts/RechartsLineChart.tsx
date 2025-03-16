import React, { useId } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
interface RechartsLineChartProps {
  data: any[];
  height?: number;
  color?: string;
  gradient?: boolean;
  yAxisFormatter?: (value: number) => string;
  tooltipFormatter?: (value: number) => [string, string];
}
const RechartsLineChart: React.FC<RechartsLineChartProps> = ({
  data,
  height = 300,
  color = '#3b82f6',
  gradient = false,
  yAxisFormatter = value => `${value}`,
  tooltipFormatter = value => [`${value}`, 'Value']
}) => {
  const id = useId();
  const gradientId = `colorGradient-${id}`;
  return <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{
      top: 5,
      right: 20,
      left: 20,
      bottom: 5
    }}>
        <defs>
          {gradient && <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.8} />
              <stop offset="95%" stopColor={color} stopOpacity={0.1} />
            </linearGradient>}
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#888" opacity={0.2} />
        <XAxis dataKey="date" tick={{
        fontSize: 12
      }} tickLine={false} axisLine={{
        stroke: '#888',
        opacity: 0.4
      }} />
        <YAxis tickFormatter={yAxisFormatter} tick={{
        fontSize: 12
      }} tickLine={false} axisLine={{
        stroke: '#888',
        opacity: 0.4
      }} width={60} />
        <Tooltip formatter={(value: any) => {
        const [formattedValue, label] = tooltipFormatter(value);
        return [formattedValue, label];
      }} contentStyle={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }} />
        <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={{
        r: 4,
        strokeWidth: 2
      }} activeDot={{
        r: 6,
        strokeWidth: 2
      }} fill={gradient ? `url(#${gradientId})` : 'none'} />
      </LineChart>
    </ResponsiveContainer>;
};
export default RechartsLineChart;