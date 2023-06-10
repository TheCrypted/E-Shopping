import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./features/cartSlice.js";
import productReducer from "./features/productSlice.js";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer
    }
})