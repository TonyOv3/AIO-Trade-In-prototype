import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
interface RegionData {
  region: string;
  value: number;
}
interface RechartsHeatMapProps {
  data: RegionData[];
  height?: number;
  className?: string;
  minColor?: string;
  maxColor?: string;
  title?: string;
}
const RechartsHeatMap: React.FC<RechartsHeatMapProps> = ({
  data,
  height = 400,
  className = '',
  minColor = '#bfdbfe',
  maxColor = '#3b82f6',
  title
}) => {
  if (!data || data.length === 0) return null;
  // Transform data for a grid layout
  const cols = Math.ceil(Math.sqrt(data.length));
  const transformedData = data.map((item, index) => ({
    x: index % cols,
    y: Math.floor(index / cols),
    z: item.value,
    region: item.region
  }));
  // Find min and max values for color scaling
  const values = data.map(item => item.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  // Function to interpolate between min and max colors
  const getColor = (value: number) => {
    const ratio = (value - minValue) / (maxValue - minValue);
    // Simple linear interpolation between colors
    // This is a simplified version - a real implementation would parse the colors
    return minColor === maxColor ? maxColor : ratio <= 0 ? minColor : ratio >= 1 ? maxColor : `rgba(59, 130, 246, ${0.2 + ratio * 0.8})`;
  };
  return <div className={`w-full ${className}`}>
      {title && <div className="text-lg font-medium mb-4">{title}</div>}
      <div style={{
      height
    }}>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="x" name="col" hide />
            <YAxis type="number" dataKey="y" name="row" hide />
            <ZAxis type="number" dataKey="z" range={[100, 100]} />
            <Tooltip cursor={{
            strokeDasharray: '3 3'
          }} content={({
            active,
            payload
          }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload;
              return <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
                      <p className="font-medium">{data.region}</p>
                      <p className="text-gray-700">${data.z}</p>
                    </div>;
            }
            return null;
          }} />
            <Scatter name="Regions" data={transformedData} shape="square">
              {transformedData.map((entry, index) => <Cell key={`cell-${index}`} fill={getColor(entry.z)} />)}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between mt-4 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-sm bg-blue-200 mr-1"></div>
          <span className="text-gray-600">Lower prices (${minValue})</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-sm bg-blue-500 mr-1"></div>
          <span className="text-gray-600">Higher prices (${maxValue})</span>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-4">
        {data.map((item, index) => <div key={index} className="text-center p-2 border rounded-md">
            <div className="text-sm font-medium">{item.region}</div>
            <div className="text-sm mt-1 py-1 rounded-sm" style={{
          backgroundColor: getColor(item.value)
        }}>
              ${item.value}
            </div>
          </div>)}
      </div>
    </div>;
};
export default RechartsHeatMap;