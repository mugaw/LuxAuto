import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { brands, featuredModels } from '../data/carData';
import type { CarModel, Brand } from '../data/carData';

interface CarState {
  brands: Brand[];
  featuredModels: typeof featuredModels;
  selectedBrand: Brand | null;
  selectedModel: CarModel | null;
  filterCategory: string;
  searchQuery: string;
}

const initialState: CarState = {
  brands,
  featuredModels,
  selectedBrand: null,
  selectedModel: null,
  filterCategory: 'all',
  searchQuery: '',
};

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setSelectedBrand: (state, action: PayloadAction<Brand | null>) => {
      state.selectedBrand = action.payload;
    },
    setSelectedModel: (state, action: PayloadAction<CarModel | null>) => {
      state.selectedModel = action.payload;
    },
    setFilterCategory: (state, action: PayloadAction<string>) => {
      state.filterCategory = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    clearFilters: (state) => {
      state.filterCategory = 'all';
      state.searchQuery = '';
    },
  },
});

export const {
  setSelectedBrand,
  setSelectedModel,
  setFilterCategory,
  setSearchQuery,
  clearFilters,
} = carSlice.actions;

export default carSlice.reducer;
