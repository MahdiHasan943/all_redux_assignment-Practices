import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

//   const [scroll, setScroll] = useState(false);
  
//  useEffect(() => {
//    window.addEventListener("scroll", () => {
//      setScroll(window.scrollY >0);
//    });
//  }, []);
  const [show, setShow] = useState(false);
const [isActive, setIsActive] = useState(false);

const handleClick = event => {
  // 👇️ toggle isActive state on click
  setIsActive(current => !current);
};
  
  return (
    <>
      <div className="px-8 h-[200vh] w-auto flex justify-center items-center">
           
        <button onClick={()=>setShow(true)} className='text-white bg-green-500'>Drawer</button>
        {show? <h1 className="text-5xl py-8  box1  uppercase bg-[red]  font-bold text-center" >Box Left To Right</h1>
            
          :''
         }
      
        <div className="">
          
         </div>
      </div>
    </>
  )
}

export default App
