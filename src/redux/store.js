import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/productsSlice';
import { filterReducer } from './slices/filterSlice';
import { myProductReducer } from './slices/myProductSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filter: filterReducer,
    myProductList: myProductReducer,
  },
});
