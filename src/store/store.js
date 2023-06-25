import ProductSlice from "@/feature/Product/ProductSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    product: ProductSlice,
  },
});
