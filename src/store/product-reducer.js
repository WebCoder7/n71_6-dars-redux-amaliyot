import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
  name: "products",
  initialState: {
    productList: [],
    total_price: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const el = state.productList.find(
        (item) => item.id === action.payload.id
      );
      if (!el) {
        return {
          ...state,
          productList: [
            ...state.productList,
            { ...action.payload, usePrice: action.payload.price, userCount: 1 },
          ],
        };
      }
      return state;
    },
    toggleEmount: (state, action) => {
      const product = state.productList.find(
        (item) => item.id === action.payload.id
      );
      if (action.payload.type === "inc") {
        product.userCount += 1;
        product.usePrice = product.price * product.userCount;
      } else if (product.userCount > 1) {
        product.userCount -= 1;
        product.usePrice = product.price * product.userCount;
      }
    },
    deleteProduct: (state, action) => {
      return {
        ...state,
        productList: state.productList.filter(
          (item) => item.id !== action.payload
        ),
      };
    },
  },
});

export default productReducer.reducer;

export const { addProduct, toggleEmount, deleteProduct } =
  productReducer.actions;
