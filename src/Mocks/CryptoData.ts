import { CryptoAsset } from '../Types/Crypto';


const generateChartData = (isStablecoin = false): number[] => {
  const data = [];
  let baseValue = Math.random() * 100;
  
  for (let i = 0; i < 24; i++) {
    if (isStablecoin) {
      baseValue = 100 + (Math.random() * 0.2 - 0.1);
    } else {
      // For other coins, create more volatility
      baseValue = baseValue * (1 + (Math.random() * 0.06 - 0.03));
    }
    data.push(baseValue);
  }
  
  return data;
};

export const initialCryptoData: CryptoAsset[] = [
  {
    id: 'bitcoin',
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    logoUrl: '/assets/bitcoin-btc-logo.png',
    price: 93759.48,
    priceChange1h: 0.43,
    priceChange24h: 0.93,
    priceChange7d: 11.11,
    marketCap: 1861618902186,
    volume24h: 43874950947,
    circulatingSupply: 19.85e6,
    maxSupply: 21e6,
    chartData: generateChartData(),
    isFavorite: false
  },
  {
    id: 'ethereum',
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    logoUrl: '/assets/ethereum-eth-logo.png',
    price: 1802.46,
    priceChange1h: 0.60,
    priceChange24h: 3.21,
    priceChange7d: 13.68,
    marketCap: 217581279327,
    volume24h: 23547469307,
    circulatingSupply: 120.71e6,
    maxSupply: null,
    chartData: generateChartData(),
    isFavorite: false
  },
  {
    id: 'tether',
    rank: 3,
    name: 'Tether',
    symbol: 'USDT',
    logoUrl: '/assets/tether-usdt-logo.png',
    price: 1.00,
    priceChange1h: 0.00,
    priceChange24h: 0.00,
    priceChange7d: 0.04,
    marketCap: 145320022085,
    volume24h: 92288882007,
    circulatingSupply: 145.27e9,
    maxSupply: null,
    chartData: generateChartData(true),
    isFavorite: false
  },
  {
    id: 'xrp',
    rank: 4,
    name: 'XRP',
    symbol: 'XRP',
    logoUrl: '/assets/xrp-xrp-logo.png',
    price: 2.22,
    priceChange1h: 0.46,
    priceChange24h: 0.54,
    priceChange7d: 6.18,
    marketCap: 130073814966,
    volume24h: 5131481491,
    circulatingSupply: 58.39e9,
    maxSupply: 100e9,
    chartData: generateChartData(),
    isFavorite: false
  },
  {
    id: 'bnb',
    rank: 5,
    name: 'BNB',
    symbol: 'BNB',
    logoUrl: '/assets/bnb-bnb-logo.png',
    price: 606.65,
    priceChange1h: 0.09,
    priceChange24h: -1.20,
    priceChange7d: 3.73,
    marketCap: 85471956947,
    volume24h: 1874281784,
    circulatingSupply: 140.89e6,
    maxSupply: 200e6,
    chartData: generateChartData(),
    isFavorite: false
  },
  {
    id: 'solana',
    rank: 6,
    name: 'Solana',
    symbol: 'SOL',
    logoUrl: '/assets/solana-sol-logo.png',
    price: 151.51,
    priceChange1h: 0.53,
    priceChange24h: 1.26,
    priceChange7d: 14.74,
    marketCap: 78381958631,
    volume24h: 4881674486,
    circulatingSupply: 517.31e6,
    maxSupply: null,
    chartData: generateChartData(),
    isFavorite: false
  }
];