import React, { useEffect, useState } from 'react'


const AllPList = () => {
  const [products, setProducts] = useState([]);
  
//   const products=useSelector(state=>state.product.products)
//   const dispatch = useDispatch()
// console.log(products);
  
//   useEffect(() => {
//     dispatch(loadProductData())
//   }, [products])

//   const [activeProductId, setActiveProductId] = useState(null);

//   const handleEditClick = (productId) => {
//     setActiveProductId(productId);
//   };


  return (
    <div className='relative py-4 px-4 sm:px-16  lg:w-[65%]'>

      <table className='w-full'>
        <thead className=''>
          <tr className='py-4 bg-red-50 px-4 rounded-md w-full grid grid-cols-5 gap-8'><td>Name</td>
          <td>image</td>
      <td>Price</td>
        <td>Delete</td>
          <td>Edit</td></tr>

        </thead>
        <tbody>
          {
            products.map(({ des, image, price, name, _id }) => (
              <tr className='py-4 bg-red-50 px-4 rounded-md w-full grid grid-cols-5 gap-8'><td>{name}</td> <td><img className='w-[80px] h-[80px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="" /></td>
                <td>{price}</td> <td>
                  <button onClick={() => dispatch(removeProducts(_id))}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                </svg>
                  </button>
                  </td>
                <td> <button onClick={() => handleEditClick(_id)}>Edit</button>
                {activeProductId === _id && (
                  <div className='absolute flex justify-center items-center h-[100vh] w-full shadow-2xl bg-slate-50 top-0 left-0'>
                    <p
                      onClick={() => setActiveProductId(null)}
                      className='absolute top-4 right-4 text-right text-4xl font-bold text-indigo-600'
                    >
                      x
                    </p>
                    <Update  _id={_id}  />
                  </div>
                )}
                </td>
              </tr>
            ))
          }
  
        </tbody>
      </table>
    </div>
  )
}

export default AllPList