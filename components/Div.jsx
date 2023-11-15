import React from 'react'
import { useProduct } from './ProductContext'

const Div = () => {
    const { state: { count }, dispatch } = useProduct();
    console.log(count,'from r');
    
  return (
      <div>
          
          <div className="bg-slate-400 my-20 w-[200px] h-[200px] mx-auto shadow-lg py-4 px-8 flex items-center justify-center gap-6 rounded-md">
              
              <button onClick={()=>dispatch({ type: 'Increamend' })} className='py-2 h-[40px] px-4 bg-sky-400 text-white rounded-md'>+</button>
              <p className='text-white'>{count}</p>
              <button className='py-2 h-[40px] px-4 bg-sky-400 text-white rounded-md'>-</button>

          </div>
    </div>
  )
}

export default Div