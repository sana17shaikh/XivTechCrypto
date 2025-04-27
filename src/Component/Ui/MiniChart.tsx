import React from 'react';
import { Area, AreaChart, ResponsiveContainer, YAxis } from 'recharts';

interface MiniChartProps {
  data: number[];
  height?: number;
  className?: string;
}

const MiniChart: React.FC<MiniChartProps> = ({ 
  data, 
  height = 60,
  className
}) => {
  const isPositive = data.length >= 2 && data[data.length - 1] > data[0];
  
  const chartData = data.map((value, index) => ({ value, index }));
  
  const color = isPositive ? "#4CAF50" : "#F44336";
  
  return (
    <div className={className} style={{ height: `${height}px` }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <YAxis domain={['dataMin', 'dataMax']} hide />
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            fill={color}
            strokeWidth={1.5}
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MiniChart;