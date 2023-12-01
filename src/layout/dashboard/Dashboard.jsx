import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'

const Dashboard = () => {
  const [alink, setAlink] = useState(false);

  const [active, setActice] = useState(false);

  return (
    <div>
      <div className="flex   relative">


        <div className={active ? '' : 'px-8 py-8'}>
        <div className="lg:hidden absolute top-0 left-2 z-50 bg-green-100 px-3 mx-2 my-2 flex items-center justify-center py-[8px] shadow-2xl rounded-full">
        <button onClick={()=>setActice(!active)}><svg className='' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
<path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg></button>
        
        </div>
        </div>
        <div className={active ?'block duration-300 delay-200 ease-linear min-w-[300px] relative h-[100vh] w-[450px] bg-green-100 rounded-lg shadow-lg':'hidden'}>
            
          <ul className='py-16 w-full px-4 sm:px-10'>
            <li className='pl-4 pr-20 bg-white  flex items-center justify-start'><Link onClick={() => {
              setActice(!active)
              setAlink('list')
            }} className={alink === 'list' ? "py-2 capitalize text-[22px] text-indigo-600  w-full " : "bg-[white] py-2 capitalize text-[22px] w-[200px] text-black "} to={'/dashboard/list'}>AllList</Link></li>
            <li className='pl-4 pr-20 bg-white my-8 flex items-center justify-start'><Link onClick={() => {
              setActice(!active)
              setAlink('add')
            }
            } className={alink === 'add' ? "bg-[white] py-2  capitalize text-[22px]  text-indigo-600 " : "bg-[white] py-2  capitalize text-[22px]  text-black  "} to={'/dashboard/saveProduct'}>Save Product</Link></li>

          </ul>
          <div className="absolute bottom-0 left-0 flex justify-start items-center px-4 sm:px-8 py-4">
          <Link to={'/'} className='bg-white hover:bg-indigo-600 hover:text-white duration-200 delay-200 px-8 py-4 font-semibold rounded-lg text-black'>Back To Home</Link>

         </div>

        </div>


        <div className="hidden ml-[-60px] lg:block min-w-[300px] relative h-[100vh] w-[450px] bg-green-100 rounded-lg shadow-lg">
            
          <ul className='py-8 w-full px-4 sm:px-10'>
            <li  className='px-24 bg-white  flex items-center justify-start'><Link onClick={()=>setAlink('list')} className={alink==='list'?"py-3  capitalize text-[22px] text-indigo-600 font-semibold w-full ":"bg-[white] py-3  capitalize text-[22px] w-[200px] text-black font-semibold "} to={'/dashboard/list'}>AllList</Link></li>
            <li   className='px-24 bg-white my-8 flex items-center justify-start'><Link onClick={()=>setAlink('add')} className={alink==='add'?"bg-[white] py-3  capitalize text-[22px]  text-indigo-600 font-semibold ":"bg-[white] py-3  capitalize text-[22px]  text-black font-semibold "} to={'/dashboard/saveProduct'}>Save Product</Link></li>

          </ul>
          <div className="absolute bottom-0 left-0 flex justify-start items-center px-4 sm:px-8 py-4">
          <Link to={'/'} className='bg-white hover:bg-indigo-600 hover:text-white duration-200 delay-200 px-8 py-4 font-semibold rounded-lg text-black'>Back To Home</Link>

         </div>

        </div>

      <Outlet />

      </div>

      
      <Footer />

    </div>
  )
}

export default Dashboard