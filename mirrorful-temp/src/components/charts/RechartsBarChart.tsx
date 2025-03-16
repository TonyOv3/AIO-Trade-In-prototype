import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
interface RechartsBarChartProps {
  data: any[];
  height?: number;
  color?: string;
  dataKey?: string;
  xAxisKey?: string;
  yAxisFormatter?: (value: number) => string;
  tooltipFormatter?: (value: number) => [string, string];
}
const RechartsBarChart: React.FC<RechartsBarChartProps> = ({
  data,
  height = 300,
  color = '#3b82f6',
  dataKey = 'value',
  xAxisKey = 'name',
  yAxisFormatter = value => `${value}`,
  tooltipFormatter = value => [`${value}`, dataKey]
}) => {
  return <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{
      top: 5,
      right: 20,
      left: 20,
      bottom: 5
    }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#888" opacity={0.2} />
        <XAxis dataKey={xAxisKey} tick={{
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
        <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>;
};
export default RechartsBarChart;