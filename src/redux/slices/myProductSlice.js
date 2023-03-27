import { createSlice } from '@reduxjs/toolkit';

const myProductsSlice = createSlice({
  name: 'myProducts',
  initialState: [],
  reducers: {
    addProduct: {
      reducer(state, { payload }) {
        state.push(payload);
      },
    },
    deleteProduct: {
      reducer(state, { payload }) {
        const index = state.findIndex(product => product.id === payload.id);
        state.splice(index, 1);
      },
    },
    updateProduct: {
      reducer(state, { payload }) {
        for (const product of state) {
          if (product.id === payload.id) {
            product.title = payload.title;
            product.author = payload.author;
            product.year = payload.year;
            product.rating = payload.rating;
            break;
          }
        }
      },
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } =
  myProductsSlice.actions;
export const myProductReducer = myProductsSlice.reducer;
