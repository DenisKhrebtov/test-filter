import { createSlice } from '@reduxjs/toolkit';

const myProductsSlice = createSlice({
  name: 'myProducts',
  initialState: '',
  reducers: {
    addProduct: {
      reducer(state, { payload }) {
        console.log(state);
        return state.push(payload);
      },
    },
  },
});

export const { addProduct } = myProductsSlice.actions;
export const myProductReducer = myProductsSlice.reducer;
