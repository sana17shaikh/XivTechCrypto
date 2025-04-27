import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortState, SortKey, FilterState } from '../Types/Crypto';

interface UIState {
  sort: SortState;
  filter: FilterState;
  isDarkMode: boolean;
}

const initialState: UIState = {
  sort: {
    key: 'rank',
    direction: 'asc'
  },
  filter: {
    searchTerm: '',
    showFavoritesOnly: false
  },
  isDarkMode: true
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSortKey: (state, action: PayloadAction<SortKey>) => {
      const newKey = action.payload;
      if (state.sort.key === newKey) {
        state.sort.direction = state.sort.direction === 'asc' ? 'desc' : 'asc';
      } else {
        state.sort.key = newKey;
        state.sort.direction = newKey === 'rank' ? 'asc' : 'desc';
      }
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.filter.searchTerm = action.payload;
    },
    toggleShowFavorites: (state) => {
      state.filter.showFavoritesOnly = !state.filter.showFavoritesOnly;
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    }
  }
});

export const { 
  setSortKey, 
  setSearchTerm, 
  toggleShowFavorites,
  toggleDarkMode
} = uiSlice.actions;

export default uiSlice.reducer;