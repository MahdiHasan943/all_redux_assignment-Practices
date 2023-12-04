import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/CartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  

    const {  image, model, price, rating } = product;
    
    if (!product) {
      return null; // Or handle the case when product is undefined
    }
  return (
      <div className='relative  capitalize '>
          <p>{model}</p>
          <img className='w-[250px] h-[180px]' src={image} alt="" />
          <p >price : <span className='text-red-500 font-semibold'>{price}</span></p>
          <p >Rating : <span className='text-red-500 font-semibold'>{rating}</span></p>
          <button onClick={()=>dispatch(addToCart(product))} className='py-2 text-white px-8 bg-indigo-600 rounded-full'>AddTocart</button>

      </div>
  )
}

export default ProductCard