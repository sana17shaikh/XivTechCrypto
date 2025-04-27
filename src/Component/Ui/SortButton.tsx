import React from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '../../Utils/cn';
import { SortDirection } from '../../Types/Crypto';

interface SortButtonProps {
  isActive: boolean;
  direction: SortDirection | null;
  onClick: () => void;
  className?: string;
}

const SortButton: React.FC<SortButtonProps> = ({
  isActive,
  direction,
  onClick,
  className
}) => {
  let Icon = ArrowUpDown;
  
  if (isActive) {
    Icon = direction === 'asc' ? ArrowUp : ArrowDown;
  }
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center ml-1 focus:outline-none",
        isActive ? "text-blue-500" : "text-gray-400 hover:text-gray-300",
        className
      )}
      aria-label="Sort"
    >
      <Icon className="w-4 h-4" />
    </button>
  );
};

export default SortButton;