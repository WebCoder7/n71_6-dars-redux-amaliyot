import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product-reducer";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
