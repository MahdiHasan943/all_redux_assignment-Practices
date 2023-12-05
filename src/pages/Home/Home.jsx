import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard';
import { toggle, toggleBrands } from '../../features/filter/FilterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../features/products/ProductSlice';
// 
const Home = () => {
  const [active, setActive] = useState(false);
  // const [products, setProducts] = useState([]);
  const filters = useSelector(state => state.filter);
  const { brands, stock } = filters;
  const {products,isLoading,} = useSelector(state => state.product);

  console.log(filters);
  useEffect(() => {
    // fetch('http://localhost:5000/api/v1/products')
    //   .then(res => res.json())
    // .then(data=>setProducts(data.data))
    dispatch(getProducts())
  },[])


  let content;
  // console.log(content);
  if (isLoading) {
    content=<h1 className='py-20 px-8 text-4xl text-indigo-600 font-bold text-center'>Loading.....</h1>
  }
  
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