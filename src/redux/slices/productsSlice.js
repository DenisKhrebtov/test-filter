import { createSlice } from '@reduxjs/toolkit';
import { getProducts, addProduct } from '../operation';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getProducts.pending](state) {
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
    // [addProduct.pending](state) {
    //   state.isLoading = true;
    // },
    // [addProduct.fulfilled](state, { payload }) {
    //   console.log(payload);
    //   state.items.push(payload);
    //   state.error = null;
    //   state.isLoading = false;
    // },
    // [addProduct.rejected](state) {
    //   state.isRefreshing = false;
    // },
  },
});

export const productsReducer = productsSlice.reducer;
