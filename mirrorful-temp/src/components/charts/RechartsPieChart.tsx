import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
interface RechartsPieChartProps {
  data: {
    label: string;
    value: number;
    color: string;
  }[];
  height?: number;
  donut?: boolean;
  innerRadius?: number;
  outerRadius?: number;
  tooltipFormatter?: (value: number, name: string) => [string, string];
}
const RechartsPieChart: React.FC<RechartsPieChartProps> = ({
  data,
  height = 300,
  donut = false,
  innerRadius = 0,
  outerRadius = 100,
  tooltipFormatter = (value, name) => [`${value}`, name]
}) => {
  return <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" labelLine={false} innerRadius={donut ? innerRadius : 0} outerRadius={outerRadius} fill="#8884d8" dataKey="value" nameKey="label">
          {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
        </Pie>
        <Tooltip formatter={(value: any, name: string) => {
        const [formattedValue, formattedName] = tooltipFormatter(value, name);
        return [formattedValue, formattedName];
      }} contentStyle={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }} />
        <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{
        paddingTop: '20px'
      }} />
      </PieChart>
    </ResponsiveContainer>;
};
export default RechartsPieChart;