
import React from 'react';
import CryptoTableHeader from './CryptoTableHeader';
import CryptoTableRow from './CryptoTableRow';
import { CryptoAsset, SortState } from '../../Types/Crypto';
import { useAppSelector } from '../../Hooks/useAppSelector';

const sortAssets = (assets: CryptoAsset[], sortState: SortState): CryptoAsset[] => {
  const { key, direction } = sortState;
  
  return [...assets].sort((a, b) => {
    const valueA = a[key];
    const valueB = b[key];
    
    const comparison = valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
    
    return direction === 'asc' ? comparison : -comparison;
  });
};

const filterAssets = (
  assets: CryptoAsset[], 
  searchTerm: string, 
  showFavoritesOnly: boolean
): CryptoAsset[] => {
  return assets.filter(asset => {
    const matchesSearch = searchTerm === '' || 
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      asset.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFavorites = !showFavoritesOnly || asset.isFavorite;
    
    return matchesSearch && matchesFavorites;
  });
};

const CryptoTable: React.FC = () => {
  const assets = useAppSelector(state => state.crypto.assets);
  const { sort, filter } = useAppSelector(state => state.ui);
  const isDarkMode = useAppSelector(state => state.ui.isDarkMode);
  
  const filteredAssets = filterAssets(assets, filter.searchTerm, filter.showFavoritesOnly);
  const sortedAssets = sortAssets(filteredAssets, sort);
  
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className={`w-full text-sm text-left ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>
        <CryptoTableHeader sortState={sort} />
        <tbody>
          {sortedAssets.length > 0 ? (
            sortedAssets.map(asset => (
              <CryptoTableRow key={asset.id} asset={asset} />
            ))
          ) : (
            <tr>
              <td colSpan={10} className={`px-4 py-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>
                No cryptocurrencies found matching your filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
