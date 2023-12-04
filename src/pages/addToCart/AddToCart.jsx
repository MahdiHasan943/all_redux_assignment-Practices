import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../features/cart/CartSlice';

const AddToCart = () => {

  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  return (
    <div className='py-4 px-4 sm:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>

      {
        cart?.map((product)=>(
          <div key={product?._id} className='relative  capitalize '>
            <p>{product?.quantity}{product?.model}</p>
            <img className='w-[250px] h-[180px]' src={product?.image} alt="" />
          <p >price : <span className='text-red-500 font-semibold'>{product?.price}</span></p>
          <p >Rating : <span className='text-red-500 font-semibold'>{product?.rating}</span></p>
         <button className='py-2 text-white px-8 bg-indigo-600 rounded-full' onClick={()=>dispatch(removeFromCart(product))}>Delete</button>
      </div>
        ))
      }


    </div>
  )
}

export default AddToCart