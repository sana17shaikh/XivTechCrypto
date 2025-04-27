export const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: value >= 1 ? 2 : 6,
      maximumFractionDigits: value >= 1 ? 2 : 6,
    }).format(value);
  };
  
  export const formatPercentage = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      signDisplay: 'exceptZero'
    }).format(value / 100);
  };
  
  export const formatLargeNumber = (value: number): string => {
    if (value === 0) return '0';
    
    const tier = Math.floor(Math.log10(Math.abs(value)) / 3);
    
    if (tier === 0) return new Intl.NumberFormat('en-US').format(value);
    
    const suffix = ['', 'K', 'M', 'B', 'T'][tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = value / scale;
    
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 2
    }).format(scaled) + suffix;
  };
  
  export const formatSupply = (value: number, symbol: string): string => {
    return `${formatLargeNumber(value)} ${symbol}`;
  };