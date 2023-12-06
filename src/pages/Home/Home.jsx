import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard';
import { toggle, toggleBrands } from '../../features/filter/FilterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductQuery } from '../../features/api/apiSlice';
// 
const Home = () => {
  const [active, setActive] = useState(false);
  // const [products, setProducts] = useState([]);
  const filters = useSelector(state => state.filter);
  const { brands, stock } = filters;
  console.log(filters);
  
  const { data, isError, isLoading, isSuccess } = useGetProductQuery(null);
  const products = data?.data;
  if (isLoading) {
    return <p>loading...</p>
  }
  if (isError) {
    return <p>something went wrong</p>
  }
  let content;
  // console.log(content);
  if (products?.length) {
   content = products?.map((product,index) =>( 
      <ProductCard key={index} product={product} />
    ))
  }

  if (products?.length && (stock||brands?.length)) {
    content = products
      ?.filter(product => {
        if (stock) {
          return product?.status===true
        }
        return product
      })
      .filter(product => {
        if (brands?.length) {
         return brands.includes(product?.brand)
        }
        return product
       })
      ?.map((product,index) => ( 
       <ProductCard key={index} product={product} />)
     )
   }
  const activeClass = "text-white  bg-indigo-500 border-white";

const dispatch=useDispatch()
  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
    <div className='mb-10 flex justify-end gap-5'>
      <button
        onClick={() => dispatch(toggle())}
          className={`border px-3 py-2 rounded-full font-semibold ${ stock?activeClass: null } `}
          // 

      >
        In Stock
      </button>
      <button onClick={() => dispatch(toggleBrands('amd'))}
      
        
          className={`border px-3 py-2 rounded-full font-semibold            ${ brands.includes("amd")?activeClass: null }
          `}
      >
        AMD
      </button>
      <button onClick={() => dispatch(toggleBrands('intel'))}
      
      className={`border px-3 py-2 rounded-full font-semibold       ${ brands.includes("intel")?activeClass: null }
      `}
        >
        Intel
      </button>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
      {content}
    </div>
  </div>
  )
}

export default Home