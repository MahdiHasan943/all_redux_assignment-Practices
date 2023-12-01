import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Main = () => {
  return (
      <div>
<Header/>
      <div className="px-4 sm:px-16">
      <Outlet></Outlet>
        </div>
          
          <Footer/>
    </div>
  )
}

export default Main