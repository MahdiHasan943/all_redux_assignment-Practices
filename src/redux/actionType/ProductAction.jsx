import { LOAD_PRODUCT, PRODUCT_LOADED, Product_Type, REMOVE_PRODUCT, SORT_PRODUCTS_ASC, SORT_PRODUCTS_DESC, UPDATE_PRODUCT } from "../types/Type"

export const Product_Action = (product) => {
    return {
        type: Product_Type,
        payload:product
   } 
}


export const loadProduct = (data) => {
    return {
      type: LOAD_PRODUCT,
      payload: data,
    };
};
export const loaded = (products) => {
    return {
      type: PRODUCT_LOADED,
      payload: products,
    };
  };
 
  export const removeProducct = (id) => {
    return {
      type: REMOVE_PRODUCT,
      payload: id,
    };
  };
 
  export const updateProductA = (id,product) => {
    return {
      type: UPDATE_PRODUCT,
      payload:id,product,
    }
}
  


export const sortProductsAsc = (product) => {
  return {
    type: SORT_PRODUCTS_ASC,
    payload: product
  }
}

export const sortProductsDesc = (product) => {
  return {
    type: SORT_PRODUCTS_DESC,
    payload: product
  }
}