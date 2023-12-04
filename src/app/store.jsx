import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../features/cart/CartSlice";
import FilterSlice from "../features/filter/FilterSlice";

const store = configureStore({
    reducer: {
        cart: CartSlice,
        filter:FilterSlice
    }
})

export default store;