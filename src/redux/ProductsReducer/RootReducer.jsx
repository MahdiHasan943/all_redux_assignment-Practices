import { combineReducers  } from 'redux';
import { productReducers } from './ProductsReduser';
import { filterReducer } from './Filter';

// 

export const rootReducer = combineReducers ({
  product: productReducers,
  filter:filterReducer
});
