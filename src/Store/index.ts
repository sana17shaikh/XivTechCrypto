import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './CryptoSlice';
import uiReducer from './UiSlice';

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    ui: uiReducer
  }
});

export const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem('cryptoTracker');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    return undefined;
  }
};

export const saveState = (state: RootState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cryptoTracker', serializedState);
  } catch (err) {
    console.error('Error saving state to localStorage:', err);
  }
};

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;