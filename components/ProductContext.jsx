
import React, { useReducer } from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
import { countReducer, initialState } from './ProductState';

const productsContexts = createContext({});



const ProductContext = ({ children }) => {
  const [state, dispatch ] = useReducer(countReducer,initialState)
  
  return (
      <productsContexts.Provider value={{state,dispatch}}>
          {children}
    </productsContexts.Provider>
  )
}

 
export const useProduct = () => {
    return   useContext(productsContexts)

}
export default ProductContext;