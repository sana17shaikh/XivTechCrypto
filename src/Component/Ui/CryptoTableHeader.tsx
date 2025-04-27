import React from 'react';
import InfoTooltip from './InfoToolTip';
import SortButton from './SortButton';
import { SortKey, SortState } from '../../Types/Crypto';
import { useAppDispatch } from '../../Hooks/useAppDispatch';
import { setSortKey } from '../../Store/UiSlice';

interface CryptoTableHeaderProps {
  sortState: SortState;
}

const CryptoTableHeader: React.FC<CryptoTableHeaderProps> = ({ sortState }) => {
  const dispatch = useAppDispatch();
  
  const handleSort = (key: SortKey) => {
    dispatch(setSortKey(key));
  };
  
  return (
    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-800">
      <tr>
        <th className="px-4 py-3">#</th>
        <th className="px-4 py-3 text-left">Name</th>
        <th className="px-4 py-3 text-right">
          Price
          <SortButton 
            isActive={sortState.key === 'price'}
            direction={sortState.key === 'price' ? sortState.direction : null}
            onClick={() => handleSort('price')}
          />
        </th>
        <th className="px-4 py-3 text-right">
          1h %
          <SortButton 
            isActive={sortState.key === 'priceChange1h'}
            direction={sortState.key === 'priceChange1h' ? sortState.direction : null}
            onClick={() => handleSort('priceChange1h')}
          />
        </th>
        <th className="px-4 py-3 text-right">
          24h %
          <SortButton 
            isActive={sortState.key === 'priceChange24h'}
            direction={sortState.key === 'priceChange24h' ? sortState.direction : null}
            onClick={() => handleSort('priceChange24h')}
          />
        </th>
        <th className="px-4 py-3 text-right">
          7d %
          <SortButton 
            isActive={sortState.key === 'priceChange7d'}
            direction={sortState.key === 'priceChange7d' ? sortState.direction : null}
            onClick={() => handleSort('priceChange7d')}
          />
        </th>
        <th className="px-4 py-3 text-right">
          Market Cap
          <InfoTooltip text="The total market value of a cryptocurrency's circulating supply." />
          <SortButton 
            isActive={sortState.key === 'marketCap'}
            direction={sortState.key === 'marketCap' ? sortState.direction : null}
            onClick={() => handleSort('marketCap')}
          />
        </th>
        <th className="px-4 py-3 text-right">
          Volume(24h)
          <InfoTooltip text="A measure of how much of a cryptocurrency was traded in the last 24 hours." />
          <SortButton 
            isActive={sortState.key === 'volume24h'}
            direction={sortState.key === 'volume24h' ? sortState.direction : null}
            onClick={() => handleSort('volume24h')}
          />
        </th>
        <th className="px-4 py-3 text-right">
          Circulating Supply
          <InfoTooltip text="The amount of coins that are circulating in the market and are tradeable by the public." />
          <SortButton 
            isActive={sortState.key === 'circulatingSupply'}
            direction={sortState.key === 'circulatingSupply' ? sortState.direction : null}
            onClick={() => handleSort('circulatingSupply')}
          />
        </th>
        <th className="px-4 py-3 text-right">Last 7 Days</th>
      </tr>
    </thead>
  );
};

export default CryptoTableHeader;