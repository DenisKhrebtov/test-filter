import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    getFilteredProducts: {
      reducer(state, { payload }) {
        return (state = payload);
      },
    },
  },
});
export const { getFilteredProducts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
