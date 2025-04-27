import { describe, it, expect } from 'vitest';
import cryptoReducer, { updatePrices, toggleFavorite } from '../../Store/CryptoSlice';
import { initialCryptoData } from '../../Mocks/CryptoData';

describe('cryptoSlice', () => {
  const initialState = {
    assets: initialCryptoData,
    lastUpdated: 1234567890
  };

  it('should handle initial state', () => {
    expect(cryptoReducer(undefined, { type: 'unknown' })).toEqual({
      assets: initialCryptoData,
      lastUpdated: expect.any(Number)
    });
  });

  it('should handle toggleFavorite', () => {
    const actual = cryptoReducer(initialState, toggleFavorite('bitcoin'));
    expect(actual.assets[0].isFavorite).toBe(true);
    
    const toggled = cryptoReducer(actual, toggleFavorite('bitcoin'));
    expect(toggled.assets[0].isFavorite).toBe(false);
  });

  it('should update prices and related data', () => {
    const state = cryptoReducer(initialState, updatePrices());
    expect(state.assets[0].price).not.toEqual(initialState.assets[0].price);
    expect(state.assets[0].priceChange1h).not.toEqual(initialState.assets[0].priceChange1h);
    expect(state.assets[0].volume24h).not.toEqual(initialState.assets[0].volume24h);
    expect(state.lastUpdated).not.toEqual(initialState.lastUpdated);
  });
});