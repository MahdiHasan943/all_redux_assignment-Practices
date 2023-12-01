import { LOAD_PRODUCT, PRODUCT_LOADED, Product_Type } from "../types/Type"

const initialState = {
    products: [],
    
}

export const productReducers = (state=initialState,action) => {
    switch (action.type) {

        case LOAD_PRODUCT:
            return {
              ...state,
              products: action.payload,
                  };
                  case PRODUCT_LOADED:
                    return {
                      ...state,
                      products: action.payload,
                    };
 
        
        default:
            return state;
                
            
    }
}