import React from 'react';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUpIcon } from 'lucide-react';
interface ComparisonItem {
  category: string;
  values: {
    label: string;
    value: number;
    color: string;
  }[];
}
interface RechartsComposedChartProps {
  data: ComparisonItem[];
  height?: number;
  className?: string;
}
const RechartsComposedChart: React.FC<RechartsComposedChartProps> = ({
  data,
  height = 400,
  className = ''
}) => {
  if (!data || data.length === 0) return null;
  const transformedData = [];
  const barKeys = new Set<string>();
  data.forEach(item => {
    item.values.forEach(value => {
      barKeys.add(value.label);
    });
  });
  data.forEach(item => {
    const dataPoint: any = {
      category: item.category
    };
    Array.from(barKeys).forEach(key => {
      dataPoint[key] = null;
    });
    item.values.forEach(value => {
      dataPoint[value.label] = value.value;
    });
    transformedData.push(dataPoint);
  });
  const colorMap: Record<string, string> = {};
  data.forEach(item => {
    item.values.forEach(value => {
      colorMap[value.label] = value.color;
    });
  });
  return <div className={`w-full ${className}`} style={{
    height
  }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={transformedData} margin={{
        top: 20,
        right: 20,
        left: 20,
        bottom: 20
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" axisLine={false} tickLine={false} tick={{
          fontSize: 12
        }} />
          <YAxis axisLine={false} tickLine={false} tick={{
          fontSize: 12
        }} tickFormatter={value => `$${value}`} />
          <Tooltip formatter={value => [`$${value}`, '']} contentStyle={{
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0'
        }} />
          <Legend />
          {Array.from(barKeys).map(key => <Bar key={key} dataKey={key} fill={colorMap[key]} radius={[4, 4, 0, 0]} barSize={40} />)}
        </ComposedChart>
      </ResponsiveContainer>
    </div>;
};
export default RechartsComposedChart;