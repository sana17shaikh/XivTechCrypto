import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '../../Utils/cn';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: () => void;
  className?: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  onClick,
  className
}) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={cn("focus:outline-none", className)}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <Star
        className={cn(
          "w-5 h-5 transition-colors",
          isFavorite ? "fill-yellow-400 text-yellow-400" : "text-gray-400 hover:text-gray-300"
        )}
      />
    </button>
  );
};

export default FavoriteButton;