import { SORT_PRODUCTS_ASC, SORT_PRODUCTS_DESC } from "../types/Type";

const initialState = {
  filters: [],
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_PRODUCTS_ASC:
      const sortedProductsAsc = [...action.payload];
      sortedProductsAsc.sort((a, b) => new Date(a.date) - new Date(b.date));

      return {
        ...state,
        filters: sortedProductsAsc,
      };

    case SORT_PRODUCTS_DESC:
      const sortedProductsDesc = [...action.payload];
      sortedProductsDesc.sort((a, b) => new Date(b.date) - new Date(a.date));

      return {
        ...state,
        filters: sortedProductsDesc,
      };

    // ... other cases

    default:
      return state;
  }
};
