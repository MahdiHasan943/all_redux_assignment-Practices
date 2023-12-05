import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import CartSlice from "../features/cart/CartSlice";
import FilterSlice from "../features/filter/FilterSlice";
import logger from "redux-logger";
import ProductSlice from "../features/products/ProductSlice";

const store = configureStore({
    reducer: {
        cart: CartSlice,
        filter: FilterSlice,
        product:ProductSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

})

export default store;