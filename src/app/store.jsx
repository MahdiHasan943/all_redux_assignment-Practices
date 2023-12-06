import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import CartSlice from "../features/cart/CartSlice";
import FilterSlice from "../features/filter/FilterSlice";
import { productsApi } from "../features/api/apiSlice";

const store = configureStore({
    reducer: {
        [productsApi.reducerPath]:productsApi.reducer,
        cart: CartSlice,
        filter:FilterSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

export default store;