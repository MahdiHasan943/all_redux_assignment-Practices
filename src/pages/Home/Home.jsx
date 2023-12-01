import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector}from 'react-redux'
import { loadProductData } from '../../redux/thunk/fetchProduct'
import ProductCard from '../../components/ProductCard'
import { sortProductsAsc, sortProductsDesc } from '../../redux/actionType/ProductAction'
const Home = () => {
  const [active, setActive] = useState(false);
  const products = useSelector(state => state.product.products)
  const filters = useSelector(state => state.filter.filters);
  
  const dispatch = useDispatch()
console.log(products);
  
  useEffect(() => {
    dispatch(loadProductData())
  }, [])
  let content;

  if (filters.length === 0 ) {
    content = products?.map(c => (
      <ProductCard prodcut={c} key={c._id}/>

    ))
    
  }
  else {
   

    content = filters?.map(c => (
      <ProductCard prodcut={c} key={c._id}/>))
  }

     
      

console.log(filters,'24');



  return (
    <div className='px-4 sm:px-8'>
      <div className="w-full flex justify-end items-center gap-4">
      <button
          onClick={() => {
            dispatch(sortProductsAsc(products))
            setActive('last')
          }}
  className={`${
    active === "last" ? 'text-white bg-indigo-600 ' : 'border border-black'
  } py-3 duration-300 delay-50 ease-linear px-4 hover:bg-indigo-600 hover:text-white`}
>
  LastUpdated
        </button>
        <button
          onClick={() => {
            dispatch(sortProductsDesc(products))
            setActive('first')
          }}
  className={`${
    active === "first" ? 'text-white bg-indigo-600 ' : 'border border-black'
  } py-3 duration-300 delay-50 ease-linear px-4 hover:bg-indigo-600 hover:text-white`}
  >
  FirstUpdated
</button>

      </div>
      <div className="grid mx-auto grid-cols-3 gap-5 py-4">
        {
          content
        }
      </div>
    </div>
  )
}

export default Home