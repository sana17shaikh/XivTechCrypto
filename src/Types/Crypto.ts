export interface CryptoAsset {
    id: string;
    rank: number;
    name: string;
    symbol: string;
    logoUrl: string;
    price: number;
    priceChange1h: number;
    priceChange24h: number;
    priceChange7d: number;
    marketCap: number;
    volume24h: number;
    circulatingSupply: number;
    maxSupply: number | null;
    chartData: number[];
    isFavorite: boolean;
  }
  
  export type SortKey = keyof Omit<CryptoAsset, 'id' | 'logoUrl' | 'chartData' | 'isFavorite'>;
  
  export type SortDirection = 'asc' | 'desc';
  
  export interface SortState {
    key: SortKey;
    direction: SortDirection;
  }
  
  export interface FilterState {
    searchTerm: string;
    showFavoritesOnly: boolean;
  }