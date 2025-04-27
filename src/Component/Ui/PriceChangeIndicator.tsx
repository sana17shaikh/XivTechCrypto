import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { formatPercentage } from '../../Utils/formatters';
import { cn } from '../../Utils/cn';

interface PriceChangeIndicatorProps {
  value: number;
  className?: string;
  showIcon?: boolean;
}

const PriceChangeIndicator: React.FC<PriceChangeIndicatorProps> = ({ 
  value, 
  className,
  showIcon = true
}) => {
  let color = 'text-gray-500';
  let Icon = Minus;
  
  if (value > 0) {
    color = 'text-green-500';
    Icon = ArrowUpRight;
  } else if (value < 0) {
    color = 'text-red-500';
    Icon = ArrowDownRight;
  }
  
  return (
    <div className={cn("flex items-center gap-1", color, className)}>
      {showIcon && <Icon className="h-4 w-4" />}
      <span>{formatPercentage(value)}</span>
    </div>
  );
};

export default PriceChangeIndicator;