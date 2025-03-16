import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { cn } from '@/lib/utils';
interface RegionData {
  region: string;
  value: number;
}
interface LeafletRegionalMapProps {
  data: RegionData[];
  className?: string;
  minColor?: string;
  maxColor?: string;
}
// Map of major US cities to their approximate latitude and longitude
const cityCoordinates: Record<string, [number, number]> = {
  NYC: [40.7128, -74.006],
  Boston: [42.3601, -71.0589],
  Chicago: [41.8781, -87.6298],
  Miami: [25.7617, -80.1918],
  Houston: [29.7604, -95.3698],
  Dallas: [32.7767, -96.797],
  Denver: [39.7392, -104.9903],
  LA: [34.0522, -118.2437],
  Seattle: [47.6062, -122.3321],
  Atlanta: [33.749, -84.388],
  SF: [37.7749, -122.4194],
  Phoenix: [33.4484, -112.074],
  Detroit: [42.3314, -83.0458],
  Minneapolis: [44.9778, -93.265],
  'St. Louis': [38.627, -90.1994],
  Portland: [45.5051, -122.675],
  'San Diego': [32.7157, -117.1611],
  Philadelphia: [39.9526, -75.1652],
  DC: [38.9072, -77.0369],
  Nashville: [36.1627, -86.7816],
  Austin: [30.2672, -97.7431],
  'New Orleans': [29.9511, -90.0715]
};
const LeafletRegionalMap: React.FC<LeafletRegionalMapProps> = ({
  data,
  className,
  minColor = '#bfdbfe',
  // blue-200
  maxColor = '#2563eb' // blue-600
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!data || data.length === 0) return null;
  // Find min and max values for color scaling
  const minValue = Math.min(...data.map(item => item.value));
  const maxValue = Math.max(...data.map(item => item.value));
  const range = maxValue - minValue;
  // Get color based on value
  const getColor = (value: number) => {
    const normalized = (value - minValue) / (maxValue - minValue);
    if (normalized >= 0.75) return maxColor;
    if (normalized >= 0.5) return '#3b82f6'; // blue-500
    if (normalized >= 0.25) return '#60a5fa'; // blue-400
    return minColor;
  };
  // Get circle radius based on value (relative to min/max)
  const getRadius = (value: number) => {
    const normalized = (value - minValue) / (maxValue - minValue);
    return 8 + normalized * 12; // Circles from 8px to 20px
  };
  // Center the map on the continental US
  const usCenter: [number, number] = [39.8283, -98.5795];
  const defaultZoom = 4;
  // Only render the map on the client side to avoid SSR issues
  if (!isMounted) {
    return <div className="w-full h-[300px] bg-gray-100 dark:bg-gray-900 rounded-lg animate-pulse"></div>;
  }
  return <div className={cn('w-full', className)}>
      <div className="w-full h-[300px] mb-6 border rounded-lg overflow-hidden">
        <MapContainer center={usCenter} zoom={defaultZoom} style={{
        height: '100%',
        width: '100%'
      }} zoomControl={true} attributionControl={false}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
          {data.map((item, index) => {
          // Find the coordinates for this city
          const coords = cityCoordinates[item.region];
          if (!coords) return null;
          const color = getColor(item.value);
          const radius = getRadius(item.value);
          return <CircleMarker key={index} center={coords} radius={radius} pathOptions={{
            fillColor: color,
            fillOpacity: 0.8,
            weight: 1,
            color: 'white',
            opacity: 0.8
          }}>
                <Tooltip permanent={false} direction="top">
                  <div className="font-medium">
                    {item.region}: ${item.value}
                  </div>
                </Tooltip>
              </CircleMarker>;
        })}
        </MapContainer>
      </div>
      {/* Legend */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full mr-2" style={{
          backgroundColor: minColor
        }}></div>
          <span className="text-sm">Lower prices (${minValue})</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full mr-2" style={{
          backgroundColor: maxColor
        }}></div>
          <span className="text-sm">Higher prices (${maxValue})</span>
        </div>
      </div>
      {/* City Price Cards */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {data.map((item, index) => <div key={index} className="border rounded-lg p-2 text-center">
            <div className="text-sm font-medium">{item.region}</div>
            <div className={`mt-1 py-1 rounded-md ${(item.value - minValue) / range > 0.5 ? 'text-white' : ''}`} style={{
          backgroundColor: getColor(item.value)
        }}>
              ${item.value}
            </div>
          </div>)}
      </div>
    </div>;
};
export default LeafletRegionalMap;