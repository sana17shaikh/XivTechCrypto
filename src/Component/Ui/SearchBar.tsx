import React from 'react';
import { Search, StarIcon } from 'lucide-react';
import { useAppDispatch } from '../../Hooks/useAppDispatch';
import { setSearchTerm, toggleShowFavorites } from '../../Store/UiSlice';
import { cn } from '../../Utils/cn';

interface SearchBarProps {
  searchTerm: string;
  showFavoritesOnly: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, showFavoritesOnly }) => {
  const dispatch = useAppDispatch();
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };
  
  const handleToggleFavorites = () => {
    dispatch(toggleShowFavorites());
  };
  
  return (
    <div className="flex items-center mb-6 gap-2">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="block w-full p-2.5 pl-10 text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search by name or symbol..."
        />
      </div>
      
      <button
        onClick={handleToggleFavorites}
        className={cn(
          "p-2.5 rounded-lg border focus:outline-none flex items-center justify-center",
          showFavoritesOnly 
            ? "bg-blue-600 border-blue-700 text-white" 
            : "bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600"
        )}
        aria-label="Show favorites only"
      >
        <StarIcon className={cn(
          "w-5 h-5",
          showFavoritesOnly ? "fill-current" : ""
        )} />
      </button>
    </div>
  );
};

export default SearchBar;