import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTocartA } from '../redux/actionType/ProductAction';

const ProductCard = ({ prodcut }) => {
    const cart = useSelector(state => state.product.cart)

    console.log(cart,'card');
    const dispatch = useDispatch();

    if (!prodcut) {
        return null; // Or handle the case when product is undefined
      }
    const { description, image, date, name, price, rating } = prodcut;
        // console.log(prodcut,'kdkd');
  return (
      <div className='relative  capitalize '>
          <p>{name}</p>
          <img className='w-[250px] h-[180px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'alt="" />
          <p className='top-0 absolute left-[150px]'>{date}</p>
          <p >price : <span className='text-red-500 font-semibold'>{price}</span></p>
          <p >Rating : <span className='text-red-500 font-semibold'>{rating}</span></p>
          <button onClick={() =>dispatch(addTocartA(prodcut))} className='py-2 text-white px-8 bg-indigo-600 rounded-full'>AddTocart</button>

      </div>
  )
}

export default ProductCard