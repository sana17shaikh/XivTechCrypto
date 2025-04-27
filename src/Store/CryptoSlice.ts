import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialCryptoData } from '../Mocks/CryptoData';
import { CryptoAsset } from '../Types/Crypto';

interface CryptoState {
  assets: CryptoAsset[];
  lastUpdated: number;
}

const initialState: CryptoState = {
  assets: initialCryptoData,
  lastUpdated: Date.now()
};

const getRandomPriceChange = (isStablecoin: boolean): number => {
  if (isStablecoin) {
    return (Math.random() * 0.02 - 0.01) * 0.1; // Very small changes for stablecoins
  }
  return (Math.random() * 3 - 1.5); // Larger changes for other cryptos
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrices: (state) => {
      state.assets = state.assets.map(asset => {
        const isStablecoin = asset.symbol === 'USDT';
        
        
        const priceChangePercent = getRandomPriceChange(isStablecoin);
        const newPrice = asset.price * (1 + priceChangePercent / 100);
        
        
        const newPriceChange1h = asset.priceChange1h + getRandomPriceChange(isStablecoin) * 0.2;
        const newPriceChange24h = asset.priceChange24h + getRandomPriceChange(isStablecoin) * 0.3;
        const newPriceChange7d = asset.priceChange7d + getRandomPriceChange(isStablecoin) * 0.1;
        

        const volumeChangePercent = (Math.random() * 5 - 2.5) / 100;
        const newVolume = asset.volume24h * (1 + volumeChangePercent);
        
    
        const newChartData = [...asset.chartData.slice(1), newPrice];
        
        return {
          ...asset,
          price: newPrice,
          priceChange1h: newPriceChange1h,
          priceChange24h: newPriceChange24h,
          priceChange7d: newPriceChange7d,
          volume24h: newVolume,
          chartData: newChartData
        };
      });
      
      state.lastUpdated = Date.now();
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const assetId = action.payload;
      const asset = state.assets.find(a => a.id === assetId);
      if (asset) {
        asset.isFavorite = !asset.isFavorite;
      }
    }
  }
});

export const { updatePrices, toggleFavorite } = cryptoSlice.actions;

export default cryptoSlice.reducer;