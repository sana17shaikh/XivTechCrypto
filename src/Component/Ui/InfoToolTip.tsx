import React from 'react';
import { Info } from 'lucide-react';
import { cn } from '../../Utils/cn';

interface InfoTooltipProps {
  text: string;
  className?: string;
}

const InfoTooltip: React.FC<InfoTooltipProps> = ({ text, className }) => {
  return (
    <div className="relative inline-block group">
      <Info 
        className={cn("h-4 w-4 text-gray-400 hover:text-gray-300 cursor-help", className)} 
      />
      <div className="hidden group-hover:block absolute z-10 w-64 px-3 py-2 mt-1 text-sm text-white bg-gray-800 rounded-md shadow-lg -translate-x-1/2 left-1/2">
        {text}
      </div>
    </div>
  );
};

export default InfoTooltip;