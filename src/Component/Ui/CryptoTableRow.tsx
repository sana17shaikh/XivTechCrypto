import React, { memo } from 'react';
import { formatCurrency, formatLargeNumber, formatSupply } from '../../Utils/formatters';
import PriceChangeIndicator from '../../Component/Ui/PriceChangeIndicator';
import MiniChart from '../../Component/Ui/MiniChart';
import FavoriteButton from './FavoriteButton';
import { CryptoAsset } from '../../Types/Crypto';
import { useAppDispatch } from '../../Hooks/useAppDispatch';
import { toggleFavorite } from '../../Store/CryptoSlice';
import { useAppSelector } from '../../Hooks/useAppSelector';

interface CryptoTableRowProps {
  asset: CryptoAsset;
}

const CryptoTableRow: React.FC<CryptoTableRowProps> = ({ asset }) => {
  const dispatch = useAppDispatch();
  
  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(asset.id));
  };

   const isDarkMode = useAppSelector(state => state.ui.isDarkMode);
  
  return (
    <tr className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <FavoriteButton
            isFavorite={asset.isFavorite}
            onClick={handleFavoriteToggle}
            className="mr-2"
          />
          <span>{asset.rank}</span>
        </div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <img 
            src={asset.logoUrl} 
            alt={`${asset.name} logo`} 
            className="w-8 h-8 mr-3"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div>
            <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{asset.name}</div>
            <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>{asset.symbol}</div>
          </div>
        </div>
      </td>
      <td className={`px-4 py-3 text-right whitespace-nowrap ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        {formatCurrency(asset.price)}
      </td>
      <td className="px-4 py-3 text-right whitespace-nowrap">
        <PriceChangeIndicator value={asset.priceChange1h} />
      </td>
      <td className="px-4 py-3 text-right whitespace-nowrap">
        <PriceChangeIndicator value={asset.priceChange24h} />
      </td>
      <td className="px-4 py-3 text-right whitespace-nowrap">
        <PriceChangeIndicator value={asset.priceChange7d} />
      </td>
      <td className={`px-4 py-3 text-right whitespace-nowrap ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        ${formatLargeNumber(asset.marketCap)}
      </td>
      <td className={`px-4 py-3 text-right whitespace-nowrap ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        ${formatLargeNumber(asset.volume24h)}
      </td>
      <td className={`px-4 py-3 text-right whitespace-nowrap ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        {formatSupply(asset.circulatingSupply, asset.symbol)}
      </td>
      <td className="px-4 py-3">
        <MiniChart data={asset.chartData} />
      </td>
    </tr>
  );
};

export default memo(CryptoTableRow);
