import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard';

const Top = () => {

  const [active, setActive] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/v1/products')
      .then(res => res.json())
    .then(data=>setProducts(data.data))
  },[])
  let content;
  const filter=products.sort((a,b)=>a.rating -b.rating)

  content = filter?.map(product => (
    <ProductCard prodcut={product} key={product._id}/>
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