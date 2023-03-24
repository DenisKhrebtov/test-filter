import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './operation';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getProducts.pending](state, action) {
      state.isLoading = true;
    },
    [getProducts.fulfilled](state, { payload }) {
      state.items = payload;
      state.error = null;
      state.isLoading = false;
    },
    [getProducts.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const productsReducer = productsSlice.reducer;
