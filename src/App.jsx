import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductContext from '../components/ProductContext';
import Div from '../components/Div';

function App() {

  return (
    <>
      <ProductContext>      
      

        <Div/>
     </ProductContext>
    </>
  )
}

export default App
