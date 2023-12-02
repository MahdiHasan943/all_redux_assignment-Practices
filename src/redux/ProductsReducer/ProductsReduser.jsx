import { ADD_TO_CART, LOAD_PRODUCT, PRODUCT_LOADED, Product_Type, REMOVE_FROM_CART } from "../types/Type"

const initialState = {
    products: [],
    cart:[],
}

export const productReducers = (state = initialState, action) => {
  const selectedProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );
  switch (action.type) {
      
    case ADD_TO_CART:
    if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );

        selectedProduct.quantity = selectedProduct.quantity + 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

      case REMOVE_FROM_CART:
        if (selectedProduct.quantity > 1) {
          const newCart = state.cart.filter(
            (product) => product._id !== selectedProduct._id
          );
          selectedProduct.quantity = selectedProduct.quantity - 1;
  
          return {
            ...state,
            cart: [...newCart, selectedProduct],
          };
        }
        return {
          ...state,
          cart: state.cart.filter(
            (product) => product._id !== action.payload._id
          ),
        };      
    
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