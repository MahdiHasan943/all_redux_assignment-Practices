import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadProductData } from '../../redux/thunk/fetchProduct';
import ProductCard from '../../components/ProductCard';

const Top = () => {
  const products=useSelector(state=>state.product.products)
  const dispatch = useDispatch()
console.log(products);
  
  useEffect(() => {
    dispatch(loadProductData())
  }, [])
  let content;
  const sortedProducts = products?.filter(p => p.rating).sort((a, b) => b.rating - a.rating);
 
  content = sortedProducts?.map(c => (
    <ProductCard prodcut={c} key={c._id}/>
  ))
  return (
    <div className='px-4 sm:px-8'>
      <div className="grid grid-cols-3 gap-5 py-4">
        {
          content
        }
      </div>
    </div>
  )
}

export default Top