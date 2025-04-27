import { describe, it, expect } from 'vitest';
import { 
  formatCurrency, 
  formatPercentage, 
  formatLargeNumber, 
  formatSupply 
} from '../../Utils/formatters';

describe('Formatters', () => {
  describe('formatCurrency', () => {
    it('should format currency with 2 decimal places for values >= 1', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56');
      expect(formatCurrency(0.999)).toBe('$0.999000');
    });
    
    it('should format currency with up to 6 decimal places for values < 1', () => {
      expect(formatCurrency(0.123456789)).toBe('$0.123457');
    });
  });
  
  describe('formatPercentage', () => {
    it('should format percentages with sign', () => {
      expect(formatPercentage(5.67)).toBe('+5.67%');
      expect(formatPercentage(-2.34)).toBe('-2.34%');
      expect(formatPercentage(0)).toBe('0.00%');
    });
  });
  
  describe('formatLargeNumber', () => {
    it('should format large numbers with appropriate suffixes', () => {
      expect(formatLargeNumber(1234)).toBe('1,234');
      expect(formatLargeNumber(1234567)).toBe('1.23M');
      expect(formatLargeNumber(1234567890)).toBe('1.23B');
      expect(formatLargeNumber(1234567890000)).toBe('1.23T');
    });
  });
  
  describe('formatSupply', () => {
    it('should format supply with symbol', () => {
      expect(formatSupply(123456, 'BTC')).toBe('123,456 BTC');
      expect(formatSupply(123456789, 'ETH')).toBe('123.46M ETH');
    });
  });
});